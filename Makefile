.PHONY: install
install:
	hugo mod get
	hugo mod npm pack
	npm install

.PHONY: serve
serve: install
	hugo server

.PHONY: clean
clean:
	hugo mod clean --all
	rm -rf public
