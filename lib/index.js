"use strict";
module.exports = function(targetCanvas, cssWidth, cssHeight) {

  if (!targetCanvas) {
    throw new Error("Error: Must specify a target!");
  }

  var ctx = targetCanvas.getContext('2d'),
      ratio;

  var dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio    ||
            ctx.msBackingStorePixelRatio     ||
            ctx.oBackingStorePixelRatio      ||
            ctx.backingStorePixelRatio       ||
            1;

  ratio = dpr / bsr;

  if (dpr !== bsr) {

    var width  = cssWidth  || targetCanvas.width,
        height = cssHeight || targetCanvas.height;

    targetCanvas.width  = width  * ratio;
    targetCanvas.height = height * ratio;

    targetCanvas.style.width  = width + "px";
    targetCanvas.style.height = height + "px";

    ctx.scale(ratio,ratio);
  }

  return targetCanvas;
}