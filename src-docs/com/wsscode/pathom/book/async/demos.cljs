(ns com.wsscode.pathom.book.async.demos
  (:require [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.fulcro.network :as network]
            [com.wsscode.common.async-cljs :refer [go-catch <? <!p]]
            [goog.object :as gobj]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.primitives :as fp]
            [fulcro.client.alpha.localized-dom :as dom]
            [com.wsscode.pathom.book.async.intro :as d.intro]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(def indexes (atom {}))
(defmulti resolver-con pc/resolver-dispatch)

(def defresolver (pc/resolver-factory resolver-con indexes))

(defn fetch-json [url]
  (go-catch
    (-> (js/fetch url) <!p
        (.json) <!p
        (js->clj :keywordize-keys true))))

(defresolver `random-dog
  {::pc/output [:random-dog-url]
   ::pc/cache? false}
  (fn [_ _]
    (go-catch
      {:random-dog-url
       (-> (fetch-json "https://dog.ceo/api/breeds/image/random") <?
           :message)})))

(defn namespace-keys [x ns]
  (into {} (map (fn [[k v]] [(keyword ns (name k)) v])) x))

(defn adapt-schedule [schedule]
  (namespace-keys schedule "tvmaze.schedule"))

(defn adapt-externals [externals]
  (into {} (map (fn [[k v]] [(keyword (name k) "id") v])) externals))

(defn adapt-show [{:keys [externals] :as show}]
  (-> show
      (dissoc :externals :_links)
      (update :schedule adapt-schedule)
      (namespace-keys "tvmaze.show")
      (merge (adapt-externals externals))))

(defresolver `tvmaze-show-by-id
  {::pc/input  #{:tvmaze.show/id}
   ::pc/output [:tvmaze.show/url
                {:tvmaze.show/schedule [:tvmaze.schedule/time :tvmaze.schedule/days]}
                :thetvdb/id
                :tvrage/id
                :tvmaze.show/weight
                :tvmaze.show/type
                :tvmaze.show/name
                :tvmaze.show/id
                {:tvmaze.show/webChannel [:id :name :country]}
                :tvmaze.show/status
                :tvmaze.show/language
                {:tvmaze.show/image [:medium :original]}
                :tvmaze.show/runtime
                :tvmaze.show/updated
                :imdb/id
                {:tvmaze.show/network [:id :name {:country [:name :code :timezone]}]}
                :tvmaze.show/officialSite
                :tvmaze.show/summary
                {:tvmaze.show/rating [:average]}
                :tvmaze.show/premiered
                :tvmaze.show/genres]}
  (fn [_ {:keys [tvmaze.show/id]}]
    (go-catch
      (-> (fetch-json (str "http://api.tvmaze.com/shows/" id)) <?
          adapt-show))))

(defn adapt-episode [episode]
  (-> episode
      (dissoc :_links)
      (namespace-keys "tvmaze.episode")))

(defresolver `tvmaze-show-episodes
  {::pc/input  #{:tvmaze.show/id}
   ::pc/output [{:tvmaze.show/episodes [:tvmaze.episode/runtime
                                        :tvmaze.episode/season
                                        :tvmaze.episode/url
                                        :tvmaze.episode/id
                                        {:tvmaze.episode/image [:medium :original]}
                                        :tvmaze.episode/airstamp
                                        :tvmaze.episode/airtime
                                        :tvmaze.episode/summary
                                        :tvmaze.episode/name
                                        :tvmaze.episode/number
                                        :tvmaze.episode/airdate]}]}
  (fn [_ {:keys [tvmaze.show/id]}]
    (go-catch
      (->> (fetch-json (str "http://api.tvmaze.com/shows/" id "/episodes")) <?
           (mapv adapt-episode)
           (hash-map :tvmaze.show/episodes)))))

(comment
  (go-catch
    (let [data (<? (fetch-json "http://api.tvmaze.com/shows/563/episodes"))]
      (def res data)))

  (->> res (take 4))
  (-> (map adapt-episode res) (->> (hash-map :tvmaze.show/episodes)) pc/data->shape))

(def parser (p/async-parser {::p/plugins
                             [(p/env-plugin {::p/reader             [p/map-reader
                                                                     pc/all-async-readers
                                                                     p/ident-join-reader
                                                                     (p/placeholder-reader)]
                                             ::pc/resolver-dispatch resolver-con
                                             ::pc/indexes           @indexes})
                              p/request-cache-plugin
                              p/error-handler-plugin]}))

(comment
  (go-catch
    (try
      (-> (parser {} [{[:tvmaze.show/id 563] [:tvmaze.show/name
                                              '*]}
                      {:>/b [:random-dog-url]}]) <? js/console.log)
      (catch :default e (js/console.error e)))))

(fp/defsc AsyncParserDemo
  [this {:keys [random-dog-url] :as props}]
  {:ident (fn [] [::id "singleton"])
   :query [::id :random-dog-url [df/marker-table ::dog-load]]}
  (let [marker (get props [df/marker-table ::dog-load])]
    (dom/div
      (dom/div
        (if (df/loading? marker)
          (dom/button {:disabled true} "Loading...")
          (dom/button {:onClick #(df/load-field this :random-dog-url {:marker ::dog-load})}
            "Load")))
      (if random-dog-url
        (dom/div (dom/img {:src random-dog-url}))))))

(def async-parser-demo (fp/factory AsyncParserDemo))

(app-types/register-app "async-parser"
  (fn [_]
    {::app-types/app  (fulcro/new-fulcro-client
                        :networking {:remote (network/local-network parser)})
     ::app-types/root (app-types/make-root AsyncParserDemo "async-demo")}))

(fp/defsc AsyncIntroDemo [_ _]
  {:query []}
  (dom/div
    (dom/button {:onClick #(d.intro/trigger)} "Call trigger")))

(app-types/register-app "async-intro"
  (fn [_]
    {::app-types/root (app-types/make-root AsyncIntroDemo "async-intro-demo")}))
