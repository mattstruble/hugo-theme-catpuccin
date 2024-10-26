.PHONY: install
install:
	hugo mod get
	hugo mod npm pack
	npm install

.PHONY: serve
serve: install
	hugo server

.PHONY: update
update:
	hugo mod get -u
	hugo mod tidy

.PHONY: clean
clean:
	hugo mod clean --all
	rm -rf public
