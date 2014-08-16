var HDCANVAS = {

  hdify : function(targetCanvas, cssWidth, cssHeight) {
    "use strict";
    
    if (arguments.length != 3) {
      throw new Error("Invalid Number of Arguments:", arguments.length);
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

      targetCanvas.width  = cssWidth * ratio;
      targetCanvas.height = cssHeight * ratio;

      targetCanvas.style.width  = (cssWidth) + "px";
      targetCanvas.style.height = (cssHeight) + "px";

      ctx.scale(ratio,ratio);
    }

    return targetCanvas;
  }


}