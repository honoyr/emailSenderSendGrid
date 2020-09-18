
<p align="center"><img src="http://grapesjs.com/img/grapesjs-front-page-m.jpg" alt="GrapesJS" width="500" align="center"/></p>


GrapesJS is a free and open source Web Builder Framework which helps building HTML templates, faster and easily, to be delivered in sites, newsletters or mobile apps. Mainly, GrapesJS was designed to be used inside a [CMS] to speed up the creation of dynamic templates. To better understand this concept check the image below

<br/>
<p align="center"><img src="http://grapesjs.com/img/gjs-concept.png" alt="GrapesJS - Style Manager" height="400" align="center"/></p>
<br/>

Generally any 'template system', that you'd find in various applications like CMS, is composed by the **structure** (HTML), **style** (CSS) and **variables**, which are then replaced with other templates and contents on server-side and rendered on client.


## Table of contents

* [Features](#features)
* [Download](#download)
* [Usage](#usage)
* [Development](#development)
* [Documentation](#documentation)
* [API](#api)
* [Testing](#testing)
* [Plugins](#plugins)


## Features

| Blocks | Style Manager | Layer Manager |
|--|--|--|
|<img  src="http://grapesjs.com/img/sc-grapesjs-blocks-prp.jpg"  alt="GrapesJS - Block Manager"  height="400"  align="center"/>|<img  src="http://grapesjs.com/img/sc-grapesjs-style-2.jpg"  alt="GrapesJS - Style Manager"  height="400"  align="center"/>|<img  src="http://grapesjs.com/img/sc-grapesjs-layers-2.jpg"  alt="GrapesJS - Layer Manager"  height="400"  align="center"/>|

| Code Viewer | Asset Manager |
|--|--|
|<img  src="http://grapesjs.com/img/sc-grapesjs-code.jpg"  alt="GrapesJS - Code Viewer"  height="300"  align="center"/>|<img  src="http://grapesjs.com/img/sc-grapesjs-assets-1.jpg"  alt="GrapesJS - Asset Manager"  height="250"  align="center"/>|

* Local and remote storage

* Default built-in commands (basically for creating and managing different components)





## Download

* CDNs
  * UNPKG (resolves to the latest version)
    * `https://unpkg.com/grapesjs`
    * `https://unpkg.com/grapesjs/dist/css/grapes.min.css`
  * CDNJS (replace `X.X.X` with the current version)
    * `https://cdnjs.cloudflare.com/ajax/libs/grapesjs/X.X.X/grapes.min.js`
    * `https://cdnjs.cloudflare.com/ajax/libs/grapesjs/X.X.X/css/grapes.min.css`
* NPM
  * `npm i grapesjs`
* GIT
  * `git clone https://github.com/artf/grapesjs.git`

For the development purpose you should follow instructions below.





## Usage

```html
<link rel="stylesheet" href="path/to/grapes.min.css">
<script src="path/to/grapes.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
  });
</script>
```

You could also grab the content directly from the element with `fromElement` property

```html
<div id="gjs">
  <div class="txt-red">Hello world!</div>
  <style>.txt-red{color: red}</style>
</div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      fromElement: true,
  });
</script>
```

## Development

GrapesJS uses [Webpack](https://github.com/webpack/webpack) as a module bundler and [Babel](https://github.com/babel/babel) as a compiler.

Clone the repository and install all the necessary dependencies

```sh
$ git clone https://github.com/honoyr/emailSenderSendGrid.git
$ cd emailSenderSendGrid
$ npm i
```

Start the dev server

```sh
$ npm start
```

Once the development server is started you should be able to reach the demo page (eg. `http://localhost:8080`)





## Documentation

Check the getting started guide here: [Documentation](https://grapesjs.com/docs/)





## API

API References could be found here: [API-Reference](https://grapesjs.com/docs/api/)





## Testing

```sh
$ npm test
```





## Plugins

### Extensions
* [grapesjs-plugin-export](https://github.com/artf/grapesjs-plugin-export) - Export GrapesJS templates in a zip archive
* [grapesjs-plugin-filestack](https://github.com/artf/grapesjs-plugin-filestack) - Add Filestack uploader in Asset Manager
* [grapesjs-plugin-ckeditor](https://github.com/artf/grapesjs-plugin-ckeditor) - Replaces the built-in RTE with CKEditor
* [grapesjs-aviary](https://github.com/artf/grapesjs-aviary) - Add the Aviary Image Editor (dismissed, use the plugin below instead)
* [grapesjs-tui-image-editor](https://github.com/artf/grapesjs-tui-image-editor) - GrapesJS TOAST UI Image Editor
* [grapesjs-blocks-basic](https://github.com/artf/grapesjs-blocks-basic) - Basic set of blocks
* [grapesjs-plugin-forms](https://github.com/artf/grapesjs-plugin-forms) - Set of form components and blocks
* [grapesjs-navbar](https://github.com/artf/grapesjs-navbar) - Simple navbar component
* [grapesjs-component-countdown](https://github.com/artf/grapesjs-component-countdown) - Simple countdown component
* [grapesjs-style-gradient](https://github.com/artf/grapesjs-style-gradient) - Add `gradient` type input to the Style Manager
* [grapesjs-style-filter](https://github.com/artf/grapesjs-style-filter) - Add `filter` type input to the Style Manager
* [grapesjs-style-bg](https://github.com/artf/grapesjs-style-bg) - Full-stack background style property type, with the possibility to add images, colors, and gradients
* [grapesjs-blocks-flexbox](https://github.com/artf/grapesjs-blocks-flexbox) - Add the flexbox block
* [grapesjs-lory-slider](https://github.com/artf/grapesjs-lory-slider) - Slider component by using [lory](https://github.com/meandmax/lory)
* [grapesjs-tabs](https://github.com/artf/grapesjs-tabs) - Simple tabs component
* [grapesjs-tooltip](https://github.com/artf/grapesjs-tooltip) - Simple, CSS only, tooltip component for GrapesJS
* [grapesjs-custom-code](https://github.com/artf/grapesjs-custom-code) - Embed custom code
* [grapesjs-touch](https://github.com/artf/grapesjs-touch) - Enable touch support
* [grapesjs-indexeddb](https://github.com/artf/grapesjs-indexeddb) - Storage wrapper for IndexedDB
* [grapesjs-firestore](https://github.com/artf/grapesjs-firestore) - Storage wrapper for [Cloud Firestore](https://firebase.google.com/docs/firestore)
* [grapesjs-parser-postcss](https://github.com/artf/grapesjs-parser-postcss) - Custom CSS parser for GrapesJS by using [PostCSS](https://github.com/postcss/postcss)
* [grapesjs-typed](https://github.com/artf/grapesjs-typed) - Typed component made by wrapping Typed.js library
