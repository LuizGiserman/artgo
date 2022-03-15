# Art'gonautes

This website was developped for the campaigns of the Art's directory (Bureau des Arts) of École Centrale de Lille (FR).
It comprises of a nuxt.js application, enhanced by vuetify.js.

It's objective is to propagate the group's purpose, as well as it's ideas for the possible future mandate, it's members, sponsors and planned events.

By consequence, the website doesn't require much of a backend: information are mostly static. The choice of nuxt.js and vuetify was made so that the site could be reactive to different breakpoints and so that I could gain more experience with these frameworks.

As of this day, it is hosted by Rézoleo - student association at École Centrale de Lille - at the address: https://artgonautes.rezoleo.fr

![Home Page](foto_site.png)

## Nuxt Guide
### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### `assets`

The assets directory contains uncompiled assets such as Stylus or Sass files, images, or fonts.

### `components`

The components directory contains Vue.js components. Components make up the different parts of a page and can be reused and imported into pages, layouts and even other components.

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

### `pages`

This directory contains the application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

### `plugins`

This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

### `static`

This directory contains the static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

### `store`

This directory contains the Vuex store files. Creating a file in this directory automatically activates Vuex.
