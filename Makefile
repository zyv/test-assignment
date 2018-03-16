.DEFAULT_GOAL := all

setup:
	docker build -t test-assignment .

install:
	docker run -it --rm -v $(PWD):/app test-assignment yarn

build:
	docker run -it --rm -v $(PWD):/app test-assignment yarn run build

watch:
	docker run -it --rm -v $(PWD):/app test-assignment yarn run watch

open:
	open ./dist/index.html

all: setup install build
