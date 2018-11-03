# To build, install:
#   - Ruby
#   - Gems: asciidoctor, asciidoctor-diagram, and coderay
# then run `make`

book: docs/index.html

docs/index.html: docs/*.adoc
	bundle exec asciidoctor -o docs/index.html -b html5 -r asciidoctor-diagram docs/index.adoc
