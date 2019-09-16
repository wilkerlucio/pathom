(ns com.wsscode.pathom.connect.datomic-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.datomic :as pcd]
            [com.wsscode.pathom.core :as p]
            [datomic.api :as d]))

(def uri "datomic:free://localhost:4334/mbrainz-1968-1973")
(def conn (d/connect uri))

(def db (d/db conn))

(def db-schema-output
  {:release/script
   {:db/id          97,
    :db/ident       :release/script,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc         "The script used in the release"},
   :label/type
   {:db/id          86,
    :db/ident       :label/type,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Enum, one of :label.type/distributor, :label.type/holding,\n  :label.type/production, :label.type/originalProduction,\n  :label.type/bootlegProduction, :label.type/reissueProduction, or\n  :label.type/publisher."},
   :artist/sortName
   {:db/id          68,
    :db/ident       :artist/sortName,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc
                    "The artist's name for use in alphabetical sorting, e.g. Beatles, The"},
   :abstractRelease/artists
   {:db/id          81,
    :db/ident       :abstractRelease/artists,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc         "The set of artists contributing to the abstract release"},
   :db/excise
   {:db/id          15,
    :db/ident       :db/excise,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35}},
   :release/packaging
   {:db/id          102,
    :db/ident       :release/packaging,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "The type of packaging used in the release, an enum, one\n  of: :release.packaging/jewelCase, :release.packaging/slimJewelCase, :release.packaging/digipak, :release.packaging/other\n  , :release.packaging/keepCase, :release.packaging/none,\n  or :release.packaging/cardboardPaperSleeve"},
   :abstractRelease/type
   {:db/id          80,
    :db/ident       :abstractRelease/type,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Enum, one\n  of: :release.type/album, :release.type/single, :release.type/ep, :release.type/audiobook,\n  or :release.type/other"},
   :release/name
   {:db/id          100,
    :db/ident       :release/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/fulltext    true,
    :db/doc         "The name of the release"},
   :db/fn
   {:db/id          52,
    :db/ident       :db/fn,
    :db/valueType   {:db/id 26},
    :db/cardinality {:db/id 35},
    :db/doc
                    "A function-valued attribute for direct use by transactions and queries."},
   :release/artists
   {:db/id          107,
    :db/ident       :release/artists,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc         "The set of artists contributing to the release"},
   :artist/name
   {:db/id          67,
    :db/ident       :artist/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/fulltext    true,
    :db/doc         "The artist's name"},
   :db/index
   {:db/id          44,
    :db/ident       :db/index,
    :db/valueType   {:db/id 24},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of an attribute. If true, create an AVET index for the attribute. Defaults to false."},
   :label/endYear
   {:db/id          91,
    :db/ident       :label/endYear,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The year the label stopped business"},
   :medium/position
   {:db/id          112,
    :db/ident       :medium/position,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc
                    "The position of this medium in the release relative to the other media, i.e. disc 1"},
   :artist/type
   {:db/id          69,
    :db/ident       :artist/type,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Enum, one of :artist.type/person, :artist.type/other, :artist.type/group."},
   :db/unique
   {:db/id          42,
    :db/ident       :db/unique,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of an attribute. If value is :db.unique/value, then attribute value is unique to each entity. Attempts to insert a duplicate value for a temporary entity id will fail. If value is :db.unique/identity, then attribute value is unique, and upsert is enabled. Attempting to insert a duplicate value for a temporary entity id will cause all attributes associated with that temporary id to be merged with the entity already in the database. Defaults to nil."},
   :abstractRelease/name
   {:db/id          79,
    :db/ident       :abstractRelease/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc         "The name of the abstract release"},
   :label/startMonth
   {:db/id          89,
    :db/ident       :label/startMonth,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The month the label started business"},
   :db.excise/beforeT
   {:db/id          17,
    :db/ident       :db.excise/beforeT,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35}},
   :script/name
   {:db/id          65,
    :db/ident       :script/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 37},
    :db/doc
                    "Name of written character set, e.g. Hebrew, Latin, Cyrillic"},
   :abstractRelease/gid
   {:db/id          78,
    :db/ident       :abstractRelease/gid,
    :db/valueType   {:db/id 56},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 38},
    :db/doc
                    "The globally unique MusicBrainz ID for the abstract release"},
   :track/name
   {:db/id          118,
    :db/ident       :track/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/fulltext    true,
    :db/doc         "The track name"},
   :track/artists
   {:db/id          115,
    :db/ident       :track/artists,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc         "The artists who contributed to the track"},
   :release/country
   {:db/id          95,
    :db/ident       :release/country,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc         "The country where the recording was released"},
   :artist/country
   {:db/id          71,
    :db/ident       :artist/country,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc         "The artist's country of origin"},
   :artist/gid
   {:db/id          66,
    :db/ident       :artist/gid,
    :db/valueType   {:db/id 56},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 38},
    :db/doc         "The globally unique MusicBrainz ID for an artist"},
   :db.sys/reId
   {:db/id          9,
    :db/ident       :db.sys/reId,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "System-assigned attribute for an id e in the log that has been changed to id v in the index"},
   :db/valueType
   {:db/id          40,
    :db/ident       :db/valueType,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of an attribute that specifies the attribute's value type. Built-in value types include, :db.type/keyword, :db.type/string, :db.type/ref, :db.type/instant, :db.type/long, :db.type/bigdec, :db.type/boolean, :db.type/float, :db.type/uuid, :db.type/double, :db.type/bigint,  :db.type/uri."},
   :artist/startDay
   {:db/id          74,
    :db/ident       :artist/startDay,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The day the artist started actively recording"},
   :release/gid
   {:db/id          94,
    :db/ident       :release/gid,
    :db/valueType   {:db/id 56},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 38},
    :db/doc         "The globally unique MusicBrainz ID for the release"},
   :artist/endDay
   {:db/id          77,
    :db/ident       :artist/endDay,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The day the artist stopped actively recording"},
   :label/country
   {:db/id          87,
    :db/ident       :label/country,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc         "The country where the record label is located"},
   :db/txInstant
   {:db/id          50,
    :db/ident       :db/txInstant,
    :db/valueType   {:db/id 25},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc
                    "Attribute whose value is a :db.type/instant. A :db/txInstant is recorded automatically with every transaction."},
   :artist/startYear
   {:db/id          72,
    :db/ident       :artist/startYear,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc         "The year the artist started actively recording"},
   :release/labels
   {:db/id          96,
    :db/ident       :release/labels,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc         "The label on which the recording was released"},
   :artist/endMonth
   {:db/id          76,
    :db/ident       :artist/endMonth,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The month the artist stopped actively recording"},
   :release/language
   {:db/id          98,
    :db/ident       :release/language,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc         "The language used in the release"},
   :medium/format
   {:db/id          111,
    :db/ident       :medium/format,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "The format of the medium. An enum with lots of possible values"},
   :release/day
   {:db/id          105,
    :db/ident       :release/day,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The day of the release"},
   :db/noHistory
   {:db/id          45,
    :db/ident       :db/noHistory,
    :db/valueType   {:db/id 24},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of an attribute. If true, past values of the attribute are not retained after indexing. Defaults to false."},
   :release/status
   {:db/id          109,
    :db/ident       :release/status,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc         "The status of the release"},
   :label/sortName
   {:db/id          85,
    :db/ident       :label/sortName,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc
                    "The name of the record label for use in alphabetical sorting"},
   :db/isComponent
   {:db/id          43,
    :db/ident       :db/isComponent,
    :db/valueType   {:db/id 24},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of attribute whose vtype is :db.type/ref. If true, then the attribute is a component of the entity referencing it. When you query for an entire entity, components are fetched automatically. Defaults to nil."},
   :db/lang
   {:db/id          46,
    :db/ident       :db/lang,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Attribute of a data function. Value is a keyword naming the implementation language of the function. Legal values are :db.lang/java and :db.lang/clojure"},
   :db/fulltext
   {:db/id          51,
    :db/ident       :db/fulltext,
    :db/valueType   {:db/id 24},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of an attribute. If true, create a fulltext search index for the attribute. Defaults to false."},
   :language/name
   {:db/id          64,
    :db/ident       :language/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 37},
    :db/doc         "The name of the written and spoken language"},
   :artist/endYear
   {:db/id          75,
    :db/ident       :artist/endYear,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The year the artist stopped actively recording"},
   :release/month
   {:db/id          104,
    :db/ident       :release/month,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The month of the release"},
   :release/artistCredit
   {:db/id          106,
    :db/ident       :release/artistCredit,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/fulltext    true,
    :db/doc
                    "The string represenation of the artist(s) to be credited on the release"},
   :label/gid
   {:db/id          83,
    :db/ident       :label/gid,
    :db/valueType   {:db/id 56},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 38},
    :db/doc         "The globally unique MusicBrainz ID for the record label"},
   :country/name
   {:db/id          63,
    :db/ident       :country/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 37},
    :db/doc         "The name of the country"},
   :medium/name
   {:db/id          113,
    :db/ident       :medium/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/fulltext    true,
    :db/doc
                    "The name of the medium itself, distinct from the name of the release"},
   :abstractRelease/artistCredit
   {:db/id          82,
    :db/ident       :abstractRelease/artistCredit,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/fulltext    true,
    :db/doc
                    "The string represenation of the artist(s) to be credited on the abstract release"},
   :release/abstractRelease
   {:db/id          108,
    :db/ident       :release/abstractRelease,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "This release is the physical manifestation of the\n  associated abstract release, e.g. the the 1984 US vinyl release of\n  \"The Wall\" by Columbia, as opposed to the 2000 US CD release of\n  \"The Wall\" by Capitol Records."},
   :label/startDay
   {:db/id          90,
    :db/ident       :label/startDay,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The day the label started business"},
   :db/cardinality
   {:db/id          41,
    :db/ident       :db/cardinality,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Property of an attribute. Two possible values: :db.cardinality/one for single-valued attributes, and :db.cardinality/many for many-valued attributes. Defaults to :db.cardinality/one."},
   :db/doc
   {:db/id          62,
    :db/ident       :db/doc,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/fulltext    true,
    :db/doc         "Documentation string for an entity."},
   :db.excise/before
   {:db/id          18,
    :db/ident       :db.excise/before,
    :db/valueType   {:db/id 25},
    :db/cardinality {:db/id 35}},
   :artist/startMonth
   {:db/id          73,
    :db/ident       :artist/startMonth,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The month the artist started actively recording"},
   :track/duration
   {:db/id          119,
    :db/ident       :track/duration,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc         "The duration of the track in msecs"},
   :db/ident
   {:db/id          10,
    :db/ident       :db/ident,
    :db/valueType   {:db/id 21},
    :db/cardinality {:db/id 35},
    :db/unique      {:db/id 38},
    :db/doc         "Attribute used to uniquely name an entity."},
   :db/code
   {:db/id          47,
    :db/ident       :db/code,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/fulltext    true,
    :db/doc
                    "String-valued attribute of a data function that contains the function's source code."},
   :artist/gender
   {:db/id          70,
    :db/ident       :artist/gender,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 35},
    :db/doc
                    "Enum, one of :artist.gender/male, :artist.gender/female, or :artist.gender/other."},
   :track/position
   {:db/id          117,
    :db/ident       :track/position,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc
                    "The position of the track relative to the other tracks on the medium"},
   :medium/trackCount
   {:db/id          114,
    :db/ident       :medium/trackCount,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The total number of tracks on the medium"},
   :release/year
   {:db/id          103,
    :db/ident       :release/year,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc         "The year of the release"},
   :db.install/valueType
   {:db/id          12,
    :db/ident       :db.install/valueType,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc
                    "System attribute with type :db.type/ref. Asserting this attribute on :db.part/db with value v will install v as a value type."},
   :label/endMonth
   {:db/id          92,
    :db/ident       :label/endMonth,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The month the label stopped business"},
   :db.alter/attribute
   {:db/id          19,
    :db/ident       :db.alter/attribute,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc
                    "System attribute with type :db.type/ref. Asserting this attribute on :db.part/db with value v will alter the definition of existing attribute v."},
   :db.install/function
   {:db/id          14,
    :db/ident       :db.install/function,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc
                    "System attribute with type :db.type/ref. Asserting this attribute on :db.part/db with value v will install v as a data function."},
   :release/media
   {:db/id          101,
    :db/ident       :release/media,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/isComponent true,
    :db/doc
                    "The various media (CDs, vinyl records, cassette tapes, etc.) included in the release."},
   :label/endDay
   {:db/id          93,
    :db/ident       :label/endDay,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/doc         "The day the label stopped business"},
   :db.install/partition
   {:db/id          11,
    :db/ident       :db.install/partition,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc
                    "System attribute with type :db.type/ref. Asserting this attribute on :db.part/db with value v will install v as a partition."},
   :label/startYear
   {:db/id          88,
    :db/ident       :label/startYear,
    :db/valueType   {:db/id 22},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc         "The year the label started business"},
   :label/name
   {:db/id          84,
    :db/ident       :label/name,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/fulltext    true,
    :db/doc         "The name of the record label"},
   :db.install/attribute
   {:db/id          13,
    :db/ident       :db.install/attribute,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/doc
                    "System attribute with type :db.type/ref. Asserting this attribute on :db.part/db with value v will install v as an attribute."},
   :db.excise/attrs
   {:db/id          16,
    :db/ident       :db.excise/attrs,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36}},
   :medium/tracks
   {:db/id          110,
    :db/ident       :medium/tracks,
    :db/valueType   {:db/id 20},
    :db/cardinality {:db/id 36},
    :db/isComponent true,
    :db/doc         "The set of tracks found on this medium"},
   :fressian/tag
   {:db/id          39,
    :db/ident       :fressian/tag,
    :db/valueType   {:db/id 21},
    :db/cardinality {:db/id 35},
    :db/index       true,
    :db/doc
                    "Keyword-valued attribute of a value type that specifies the underlying fressian type used for serialization."},
   :release/barcode
   {:db/id          99,
    :db/ident       :release/barcode,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/doc         "The barcode on the release packaging"},
   :db.sys/partiallyIndexed
   {:db/id          8,
    :db/ident       :db.sys/partiallyIndexed,
    :db/valueType   {:db/id 24},
    :db/cardinality {:db/id 35},
    :db/doc
                    "System-assigned attribute set to true for transactions not fully incorporated into the index"},
   :track/artistCredit
   {:db/id          116,
    :db/ident       :track/artistCredit,
    :db/valueType   {:db/id 23},
    :db/cardinality {:db/id 35},
    :db/fulltext    true,
    :db/doc         "The artists who contributed to the track"}})

(deftest test-db->schema
  (is (= (pcd/db->schema db)
         db-schema-output)))

(deftest test-schema->uniques
  (is (= (pcd/schema->uniques db-schema-output)
         #{:script/name
           :abstractRelease/gid
           :artist/gid
           :release/gid
           :language/name
           :label/gid
           :country/name
           :db/ident})))

(deftest test-filter-subquery
  (is (= (pcd/filter-subquery {::p/parent-query  [:foo :bar :baz]
                               ::pcd/schema-keys #{:foo :baz}})
         [:foo :baz]))

  (is (= (pcd/filter-subquery {::p/parent-query  [:foo :bar :baz]
                               ::pcd/schema-keys #{:foo :baz}})
         [:foo :baz])))

(deftest test-pick-ident-key
  (let [config (pcd/config-parser {::pcd/conn conn} [::pcd/schema-uniques])]
    (testing "nothing available"
      (is (= (pcd/pick-ident-key config
               {})
             nil))
      (is (= (pcd/pick-ident-key config
               {:id  123
                :foo "bar"})
             nil)))
    (testing "pick from :db/id"
      (is (= (pcd/pick-ident-key config
               {:db/id 123})
             123)))
    (testing "picking from schema unique"
      (is (= (pcd/pick-ident-key config
               {:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"})
             [:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"])))
    (testing "prefer :db/id"
      (is (= (pcd/pick-ident-key config
               {:db/id      123
                :artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"})
             123)))))

(def index-schema-output
  `{:release/script               {#{:db/id} #{pcd/datomic-resolver}},
    :label/type                   {#{:db/id} #{pcd/datomic-resolver}},
    :artist/sortName              {#{:db/id} #{pcd/datomic-resolver}},
    :abstractRelease/artists      {#{:db/id} #{pcd/datomic-resolver}},
    :db/excise                    {#{:db/id} #{pcd/datomic-resolver}},
    :release/packaging            {#{:db/id} #{pcd/datomic-resolver}},
    :abstractRelease/type         {#{:db/id} #{pcd/datomic-resolver}},
    :release/name                 {#{:db/id} #{pcd/datomic-resolver}},
    :db/fn                        {#{:db/id} #{pcd/datomic-resolver}},
    :release/artists              {#{:db/id} #{pcd/datomic-resolver}},
    :artist/name                  {#{:db/id} #{pcd/datomic-resolver}},
    :db/index                     {#{:db/id} #{pcd/datomic-resolver}},
    :label/endYear                {#{:db/id} #{pcd/datomic-resolver}},
    :medium/position              {#{:db/id} #{pcd/datomic-resolver}},
    :artist/type                  {#{:db/id} #{pcd/datomic-resolver}},
    :db/unique                    {#{:db/id} #{pcd/datomic-resolver}},
    :abstractRelease/name         {#{:db/id} #{pcd/datomic-resolver}},
    :label/startMonth             {#{:db/id} #{pcd/datomic-resolver}},
    :db.excise/beforeT            {#{:db/id} #{pcd/datomic-resolver}},
    :script/name                  {#{:db/id} #{pcd/datomic-resolver}},
    :abstractRelease/gid          {#{:db/id} #{pcd/datomic-resolver}},
    :track/name                   {#{:db/id} #{pcd/datomic-resolver}},
    :track/artists                {#{:db/id} #{pcd/datomic-resolver}},
    :release/country              {#{:db/id} #{pcd/datomic-resolver}},
    :artist/country               {#{:db/id} #{pcd/datomic-resolver}},
    :artist/gid                   {#{:db/id} #{pcd/datomic-resolver}},
    :db.sys/reId                  {#{:db/id} #{pcd/datomic-resolver}},
    :db/valueType                 {#{:db/id} #{pcd/datomic-resolver}},
    :artist/startDay              {#{:db/id} #{pcd/datomic-resolver}},
    :release/gid                  {#{:db/id} #{pcd/datomic-resolver}},
    :artist/endDay                {#{:db/id} #{pcd/datomic-resolver}},
    :label/country                {#{:db/id} #{pcd/datomic-resolver}},
    :db/txInstant                 {#{:db/id} #{pcd/datomic-resolver}},
    :artist/startYear             {#{:db/id} #{pcd/datomic-resolver}},
    :release/labels               {#{:db/id} #{pcd/datomic-resolver}},
    :artist/endMonth              {#{:db/id} #{pcd/datomic-resolver}},
    :release/language             {#{:db/id} #{pcd/datomic-resolver}},
    :medium/format                {#{:db/id} #{pcd/datomic-resolver}},
    :release/day                  {#{:db/id} #{pcd/datomic-resolver}},
    :db/noHistory                 {#{:db/id} #{pcd/datomic-resolver}},
    :release/status               {#{:db/id} #{pcd/datomic-resolver}},
    :label/sortName               {#{:db/id} #{pcd/datomic-resolver}},
    :db/isComponent               {#{:db/id} #{pcd/datomic-resolver}},
    :db/lang                      {#{:db/id} #{pcd/datomic-resolver}},
    :db/fulltext                  {#{:db/id} #{pcd/datomic-resolver}},
    :language/name                {#{:db/id} #{pcd/datomic-resolver}},
    :artist/endYear               {#{:db/id} #{pcd/datomic-resolver}},
    :release/month                {#{:db/id} #{pcd/datomic-resolver}},
    :release/artistCredit         {#{:db/id} #{pcd/datomic-resolver}},
    :label/gid                    {#{:db/id} #{pcd/datomic-resolver}},
    :country/name                 {#{:db/id} #{pcd/datomic-resolver}},
    :medium/name                  {#{:db/id} #{pcd/datomic-resolver}},
    :abstractRelease/artistCredit {#{:db/id} #{pcd/datomic-resolver}},
    :release/abstractRelease      {#{:db/id} #{pcd/datomic-resolver}},
    :label/startDay               {#{:db/id} #{pcd/datomic-resolver}},
    :db/cardinality               {#{:db/id} #{pcd/datomic-resolver}},
    :db/doc                       {#{:db/id} #{pcd/datomic-resolver}},
    :db/id                        {#{:script/name}         #{pcd/datomic-resolver},
                                   #{:abstractRelease/gid} #{pcd/datomic-resolver},
                                   #{:artist/gid}          #{pcd/datomic-resolver},
                                   #{:release/gid}         #{pcd/datomic-resolver},
                                   #{:language/name}       #{pcd/datomic-resolver},
                                   #{:label/gid}           #{pcd/datomic-resolver},
                                   #{:country/name}        #{pcd/datomic-resolver},
                                   #{:db/ident}            #{pcd/datomic-resolver}},
    :db.excise/before             {#{:db/id} #{pcd/datomic-resolver}},
    :artist/startMonth            {#{:db/id} #{pcd/datomic-resolver}},
    :track/duration               {#{:db/id} #{pcd/datomic-resolver}},
    :db/ident                     {#{:db/id} #{pcd/datomic-resolver}},
    :db/code                      {#{:db/id} #{pcd/datomic-resolver}},
    :artist/gender                {#{:db/id} #{pcd/datomic-resolver}},
    :track/position               {#{:db/id} #{pcd/datomic-resolver}},
    :medium/trackCount            {#{:db/id} #{pcd/datomic-resolver}},
    :release/year                 {#{:db/id} #{pcd/datomic-resolver}},
    :db.install/valueType         {#{:db/id} #{pcd/datomic-resolver}},
    :label/endMonth               {#{:db/id} #{pcd/datomic-resolver}},
    :db.alter/attribute           {#{:db/id} #{pcd/datomic-resolver}},
    :db.install/function          {#{:db/id} #{pcd/datomic-resolver}},
    :release/media                {#{:db/id} #{pcd/datomic-resolver}},
    :label/endDay                 {#{:db/id} #{pcd/datomic-resolver}},
    :db.install/partition         {#{:db/id} #{pcd/datomic-resolver}},
    :label/startYear              {#{:db/id} #{pcd/datomic-resolver}},
    :label/name                   {#{:db/id} #{pcd/datomic-resolver}},
    :db.install/attribute         {#{:db/id} #{pcd/datomic-resolver}},
    :db.excise/attrs              {#{:db/id} #{pcd/datomic-resolver}},
    :medium/tracks                {#{:db/id} #{pcd/datomic-resolver}},
    :fressian/tag                 {#{:db/id} #{pcd/datomic-resolver}},
    :release/barcode              {#{:db/id} #{pcd/datomic-resolver}},
    :db.sys/partiallyIndexed      {#{:db/id} #{pcd/datomic-resolver}},
    :track/artistCredit           {#{:db/id} #{pcd/datomic-resolver}}})

(deftest test-index-schema
  (let [index (pcd/index-schema {::pcd/schema db-schema-output})]
    (is (= (::pc/index-oir index)
           index-schema-output))))

(deftest test-ensure-minimum-subquery
  (is (= (-> (p/query->ast [])
             (pcd/ensure-minimum-subquery)
             (p/ast->query))
         [:db/id]))
  (is (= (-> (p/query->ast [{:foo []}])
             (pcd/ensure-minimum-subquery)
             (p/ast->query))
         [{:foo [:db/id]}])))

(pc/defresolver super-name [env {:artist/keys [name]}]
  {::pc/input  #{:artist/name}
   ::pc/output [:artist/super-name]}
  {:artist/super-name (str "SUPER - " name)})

(pc/defresolver artists-before-1600 [env _]
  {::pc/output [{:artist/artists-before-1600 [:db/id]}]}
  {:artist/artists-before-1600
   (pcd/query-entities env
     '{:where [[?e :artist/name ?name]
               [?e :artist/startYear ?year]
               [(< ?year 1600)]]})})

(pc/defresolver artist-before-1600 [env _]
  {::pc/output [{:artist/artist-before-1600 [:db/id]}]}
  {:artist/artist-before-1600
   (pcd/query-entity env
     '{:where [[?e :artist/name ?name]
               [?e :artist/startYear ?year]
               [(< ?year 1600)]]})})

(def parser
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}
                  #_ #_
                  ::p/process-error        (fn [env err]
                                             #_(.printStackTrace err)
                                             err)}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register [super-name
                                                     artists-before-1600
                                                     artist-before-1600]})
                  (pcd/datomic-connect-plugin {::pcd/conn conn})
                  p/error-handler-plugin
                  p/trace-plugin]}))

(deftest test-datomic-parser
  (testing "reading from :db/id"
    (is (= (parser {}
             [{[:db/id 637716744120508]
               [:artist/name]}])
           {[:db/id 637716744120508] {:artist/name "Janis Joplin"}})))

  (testing "reading from unique attribute"
    (is (= (parser {}
             [{[:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"]
               [:artist/name]}])
           {[:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"]
            {:artist/name "Janis Joplin"}})))

  (testing "implicit dependency"
    (is (= (parser {}
             [{[:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"]
               [:artist/super-name]}])
           {[:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"]
            {:artist/super-name "SUPER - Janis Joplin"}})))

  (testing "process-query"
    (is (= (parser {}
             [{:artist/artists-before-1600
               [:artist/super-name
                {:artist/country
                 [:country/name]}]}])
           {:artist/artists-before-1600
            [{:artist/super-name "SUPER - Heinrich Schütz",
              :artist/country {:country/name "Germany"}}
             {:artist/super-name "SUPER - Choir of King's College, Cambridge",
              :artist/country {:country/name "United Kingdom"}}]}))

    (is (= (parser {}
             [{:artist/artist-before-1600
               [:artist/super-name
                {:artist/country
                 [:country/name
                  :db/id]}]}])
           {:artist/artist-before-1600
            {:artist/super-name "SUPER - Heinrich Schütz",
             :artist/country    {:country/name "Germany"
                                 :db/id        17592186045657}}}))

    (testing "nested complex dependency"
      (is (= (parser {}
               [{[:db/id 17592186073058]
                 [{:release/artists
                   [:artist/super-name]}]}])
             {[:db/id 17592186073058]
              {:release/artists [{:artist/super-name "SUPER - Horst Jankowski"}]}})))

    (testing "without subquery"
      (is (= (parser {}
               [:artist/artists-before-1600])
             {:artist/artists-before-1600
              [{:db/id 690493302253222} {:db/id 716881581319519}]}))

      (is (= (parser {}
               [:artist/artist-before-1600])
             {:artist/artist-before-1600
              {:db/id 690493302253222}})))))

(comment
  (pcd/config-parser {::pcd/conn conn} [::pcd/schema-keys])

  (time
    (do
      (-> conn d/db pcd/db->schema)
      nil))

  (parser {}
    [{::pc/indexes
      [::pc/index-oir]}])

  (time
    (parser {}
      [{[:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"]
        [:artist/super-name]}]))

  (->> (d/q '[:find ?attr ?type ?card
              :where
              [_ :db.install/attribute ?a]
              [?a :db/valueType ?t]
              [?a :db/cardinality ?c]
              [?a :db/ident ?attr]
              [?t :db/ident ?type]
              [?c :db/ident ?card]]
         db)
       (mapv #(zipmap [:db/ident
                       :db/valueType
                       :db/cardinality] %)))

  (pcd/db->schema db)
  (d/q '[:find ?id ?type ?gender ?e
         :in $ ?name
         :where
         [?e :artist/name ?name]
         [?e :artist/gid ?id]
         [?e :artist/type ?teid]
         [?teid :db/ident ?type]
         [?e :artist/gender ?geid]
         [?geid :db/ident ?gender]]
    db
    "Janis Joplin")

  (d/q '{:find  [[(pull ?e [*]) ...]]
         :where [[?e :artist/name ?name]
                 [?e :artist/startYear ?year]
                 [(< ?year 1600)]]}
    db)

  (d/q '[:find (pull ?e [* :foo/bar]) .
         :in $ ?e]
    db
    637716744120508))
