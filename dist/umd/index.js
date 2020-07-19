(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.components);
    global.undefined = mod.exports;
  }
})(this, function (exports, _components) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});
//# sourceMappingURL=index.js.map