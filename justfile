# list all commands
default:
    @just --list

# install dependencies
install:
    pnpm install --frozen-lockfile

# start dev server
dev:
    pnpm run dev

# generate static site
generate:
    pnpm run generate

# deploy to cloudflare pages
deploy: install generate
    wrangler pages deploy .output/public --project-name=personal-site

# install and dev in one step
start: install dev