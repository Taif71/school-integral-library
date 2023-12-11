NODE_VERSION := v20.10.0
install-nvm:
	@ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash; \

use-node:
	@ if [ -s "$$HOME/.nvm/nvm.sh" ]; then \
        . "$$HOME/.nvm/nvm.sh"; \
        nvm use $(NODE_VERSION); \
    else \
        echo "nvm is not installed. Please install nvm (Node Version Manager) to continue."; \
    fi

build:
	@ npm install && npm run build

remove:
	@ rm -rf .env node_modules dist

rm-modules:
	@ rm -rf node_modules

rm-dist:
	@ rm -rf dist

rm-env:
	@ rm -rf .env 