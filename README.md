HD-Canvas
=========

Scales a target `<canvas>` drawing context according to the `devicePixelRatio` creating a high resolution `<canvas>`.

Scaling based off of this [HTML5Rocks article](http://www.html5rocks.com/en/tutorials/canvas/hidpi/).

Install
=======

**via npm:**

```bash
$ npm install hdcanvas
```

**via git to use in a `<script>` tag:**

```bash
$ git clone https://github.com/theoperatore/hdcanvas.git
```

Usage
=====

**via node.js:**

Just require the module and hdify!

```javascript
var hdc = require('hdcanvas'),
    cvs = document.createElement('canvas'),

    // cvs    - target canvas element
    // width  - desired width of canvas element
    // height - desired height of canvas element
    cvs = hdc.hdify(cvs, width, height);

document.body.appendChild(cvs);
document.addEventListener('resize', function(ev) {
  
  // resize the canvas to the new dimensions
  cvs = hdc.hdify(cvs, newWidth, newHeight);

}, false);
```

[browserify](http://browserify.org/) away and you're ready to roll.

**via browser:**

```html
<script src="./path/to/scripts/hdcanvas/src/browser/hdcanvas.min.js" type="text/javascript"></script>
```

Now use the global module to hdify!

```javascript
var cvs = document.createElement('canvas');

// cvs    - target canvas element
// width  - desired width of canvas element
// height - desired height of canvas element
cvs = HDCANVAS.hdfiy(cvs, width, height);

document.body.appendChild(cvs);
document.addEventListener('resize', function(ev) {
  
  // resize the canvas to the new dimensions
  cvs = hdc.hdify(cvs, newWidth, newHeight);

}, false);
```
License
=======

MIT
