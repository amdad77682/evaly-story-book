(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/MyComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/MyComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.MyComponent);
    global.undefined = mod.exports;
  }
})(this, function (exports, _MyComponent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "MyComponent", {
    enumerable: true,
    get: function () {
      return _MyComponent.MyComponent;
    }
  });
});
//# sourceMappingURL=index.js.map