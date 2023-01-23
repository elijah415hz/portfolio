init:
	@echo "Installing dependencies"
	npm install
	@echo "Building front end"
	npm run build

update:
	@echo "pulling newest version..."
	git pull
	@echo "building..."
	npm run build
