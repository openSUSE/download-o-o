# openSUSE Download

Sources for UI of download.opensuse.org (for the software behind our
mirrors, see [openSUSE/mirrorbrain](https://github.com/openSUSE/mirrorbrain))

**!!!DO NOT USE THIS REPOSITORY AS A BASE FOR ANYTHING ELSE, THIS IS HIGHLY CUSTOM FOR THE PURPOSES OF MIRRORBRAIN!!!**

## How to build?

```bash
bundle install --path vendor/bundle
bundle exec jekyll build
```

Resulting site will be in `_site` directory.

## How to serve locally?

```bash
bundle install --path vendor/bundle
bundle exec jekyll serve
```

Visit <http://127.0.0.1:4000/> in your browser.
