# To build, install:
#   - Ruby
#   - Gems: asciidoctor, asciidoctor-diagram, and coderay
# then run `make`

book: docs/DevelopersGuide.html

docs/DevelopersGuide.html: docs/*.adoc
	bundle exec asciidoctor -o docs/DevelopersGuide.html -b html5 -r asciidoctor-diagram docs/DevelopersGuide.adoc
