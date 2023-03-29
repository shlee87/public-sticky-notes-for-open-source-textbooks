/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      8260: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      6665: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5470: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      969: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      5287: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isMsWindow = void 0);
        var n = [
          "decrypt",
          "digest",
          "encrypt",
          "exportKey",
          "generateKey",
          "importKey",
          "sign",
          "verify",
        ];
        t.isMsWindow = function (e) {
          if (
            (function (e) {
              return "MSInputMethodContext" in e && "msCrypto" in e;
            })(e) &&
            void 0 !== e.msCrypto.subtle
          ) {
            var t = e.msCrypto,
              r = t.getRandomValues,
              i = t.subtle;
            return n
              .map(function (e) {
                return i[e];
              })
              .concat(r)
              .every(function (e) {
                return "function" == typeof e;
              });
          }
          return !1;
        };
      },
      87: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1980);
        r.__exportStar(n(8260), t),
          r.__exportStar(n(6665), t),
          r.__exportStar(n(5470), t),
          r.__exportStar(n(969), t),
          r.__exportStar(n(5287), t);
      },
      1980: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            __assign: () => o,
            __asyncDelegator: () => b,
            __asyncGenerator: () => w,
            __asyncValues: () => S,
            __await: () => m,
            __awaiter: () => l,
            __classPrivateFieldGet: () => I,
            __classPrivateFieldSet: () => P,
            __createBinding: () => h,
            __decorate: () => a,
            __exportStar: () => d,
            __extends: () => i,
            __generator: () => f,
            __importDefault: () => E,
            __importStar: () => A,
            __makeTemplateObject: () => _,
            __metadata: () => c,
            __param: () => u,
            __read: () => g,
            __rest: () => s,
            __spread: () => v,
            __spreadArrays: () => y,
            __values: () => p,
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function i(e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            o.apply(this, arguments)
          );
        };
        function s(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        function a(e, t, n, r) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        }
        function u(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((r = r.apply(e, t || [])).next());
          });
        }
        function f(e, t) {
          var n,
            r,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        }
        function h(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }
        function d(e, t) {
          for (var n in e)
            "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function p(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function g(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              s.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        }
        function v() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(g(arguments[t]));
          return e;
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
              r[i] = o[s];
          return r;
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e);
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            o = [];
          return (
            (r = {}),
            s("next"),
            s("throw"),
            s("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function s(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  o.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (n = i[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(u, c)
                : l(o[0][2], n);
            } catch (e) {
              l(o[0][3], e);
            }
            var n;
          }
          function u(e) {
            a("next", e);
          }
          function c(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        }
        function b(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: "return" === r }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = p(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  !(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        }
        function A(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function I(e, t) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          return t.get(e);
        }
        function P(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to set private field on non-instance"
            );
          return t.set(e, n), n;
        }
      },
      7333: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EMPTY_DATA_SHA_256 =
            t.SHA_256_HMAC_ALGO =
            t.SHA_256_HASH =
              void 0),
          (t.SHA_256_HASH = { name: "SHA-256" }),
          (t.SHA_256_HMAC_ALGO = { name: "HMAC", hash: t.SHA_256_HASH }),
          (t.EMPTY_DATA_SHA_256 = new Uint8Array([
            227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111,
            185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27,
            120, 82, 184, 85,
          ]));
      },
      2769: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Sha256 = void 0);
        var r = n(3479),
          i = n(8889),
          o = n(1938),
          s = n(21),
          a = n(87),
          u = n(6495),
          c = (function () {
            function e(e) {
              (0, s.supportsWebCrypto)((0, u.locateWindow)())
                ? (this.hash = new i.Sha256(e))
                : (0, a.isMsWindow)((0, u.locateWindow)())
                ? (this.hash = new r.Sha256(e))
                : (this.hash = new o.Sha256(e));
            }
            return (
              (e.prototype.update = function (e, t) {
                this.hash.update(e, t);
              }),
              (e.prototype.digest = function () {
                return this.hash.digest();
              }),
              e
            );
          })();
        t.Sha256 = c;
      },
      3479: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Sha256 = void 0);
        var r = n(8036),
          i = n(7333),
          o = n(8668),
          s = n(6495),
          a = (function () {
            function e(e) {
              e
                ? ((this.operation = (function (e) {
                    return new Promise(function (t, n) {
                      var r = (0, s.locateWindow)().msCrypto.subtle.importKey(
                        "raw",
                        u(e),
                        i.SHA_256_HMAC_ALGO,
                        !1,
                        ["sign"]
                      );
                      (r.oncomplete = function () {
                        r.result && t(r.result),
                          n(
                            new Error(
                              "ImportKey completed without importing key."
                            )
                          );
                      }),
                        (r.onerror = function () {
                          n(new Error("ImportKey failed to import key."));
                        });
                    });
                  })(e).then(function (e) {
                    return (0, s.locateWindow)().msCrypto.subtle.sign(
                      i.SHA_256_HMAC_ALGO,
                      e
                    );
                  })),
                  this.operation.catch(function () {}))
                : (this.operation = Promise.resolve(
                    (0, s.locateWindow)().msCrypto.subtle.digest("SHA-256")
                  ));
            }
            return (
              (e.prototype.update = function (e) {
                var t = this;
                (0, r.isEmptyData)(e) ||
                  ((this.operation = this.operation.then(function (n) {
                    return (
                      (n.onerror = function () {
                        t.operation = Promise.reject(
                          new Error("Error encountered updating hash")
                        );
                      }),
                      n.process(u(e)),
                      n
                    );
                  })),
                  this.operation.catch(function () {}));
              }),
              (e.prototype.digest = function () {
                return this.operation.then(function (e) {
                  return new Promise(function (t, n) {
                    (e.onerror = function () {
                      n(new Error("Error encountered finalizing hash"));
                    }),
                      (e.oncomplete = function () {
                        e.result && t(new Uint8Array(e.result)),
                          n(new Error("Error encountered finalizing hash"));
                      }),
                      e.finish();
                  });
                });
              }),
              e
            );
          })();
        function u(e) {
          return "string" == typeof e
            ? (0, o.fromUtf8)(e)
            : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e);
        }
        t.Sha256 = a;
      },
      7643: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WebCryptoSha256 = t.Ie11Sha256 = void 0),
          (0, n(5789).__exportStar)(n(2769), t);
        var r = n(3479);
        Object.defineProperty(t, "Ie11Sha256", {
          enumerable: !0,
          get: function () {
            return r.Sha256;
          },
        });
        var i = n(8889);
        Object.defineProperty(t, "WebCryptoSha256", {
          enumerable: !0,
          get: function () {
            return i.Sha256;
          },
        });
      },
      8036: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isEmptyData = void 0),
          (t.isEmptyData = function (e) {
            return "string" == typeof e ? 0 === e.length : 0 === e.byteLength;
          });
      },
      8889: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Sha256 = void 0);
        var r = n(7658),
          i = n(7333),
          o = n(6495),
          s = (function () {
            function e(e) {
              (this.toHash = new Uint8Array(0)),
                void 0 !== e &&
                  ((this.key = new Promise(function (t, n) {
                    (0, o.locateWindow)()
                      .crypto.subtle.importKey(
                        "raw",
                        (0, r.convertToBuffer)(e),
                        i.SHA_256_HMAC_ALGO,
                        !1,
                        ["sign"]
                      )
                      .then(t, n);
                  })),
                  this.key.catch(function () {}));
            }
            return (
              (e.prototype.update = function (e) {
                if (!(0, r.isEmptyData)(e)) {
                  var t = (0, r.convertToBuffer)(e),
                    n = new Uint8Array(this.toHash.byteLength + t.byteLength);
                  n.set(this.toHash, 0),
                    n.set(t, this.toHash.byteLength),
                    (this.toHash = n);
                }
              }),
              (e.prototype.digest = function () {
                var e = this;
                return this.key
                  ? this.key.then(function (t) {
                      return (0, o.locateWindow)()
                        .crypto.subtle.sign(i.SHA_256_HMAC_ALGO, t, e.toHash)
                        .then(function (e) {
                          return new Uint8Array(e);
                        });
                    })
                  : (0, r.isEmptyData)(this.toHash)
                  ? Promise.resolve(i.EMPTY_DATA_SHA_256)
                  : Promise.resolve()
                      .then(function () {
                        return (0, o.locateWindow)().crypto.subtle.digest(
                          i.SHA_256_HASH,
                          e.toHash
                        );
                      })
                      .then(function (e) {
                        return Promise.resolve(new Uint8Array(e));
                      });
              }),
              e
            );
          })();
        t.Sha256 = s;
      },
      5789: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            __assign: () => o,
            __asyncDelegator: () => b,
            __asyncGenerator: () => w,
            __asyncValues: () => S,
            __await: () => m,
            __awaiter: () => l,
            __classPrivateFieldGet: () => I,
            __classPrivateFieldSet: () => P,
            __createBinding: () => h,
            __decorate: () => a,
            __exportStar: () => d,
            __extends: () => i,
            __generator: () => f,
            __importDefault: () => E,
            __importStar: () => A,
            __makeTemplateObject: () => _,
            __metadata: () => c,
            __param: () => u,
            __read: () => g,
            __rest: () => s,
            __spread: () => v,
            __spreadArrays: () => y,
            __values: () => p,
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function i(e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            o.apply(this, arguments)
          );
        };
        function s(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        function a(e, t, n, r) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        }
        function u(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((r = r.apply(e, t || [])).next());
          });
        }
        function f(e, t) {
          var n,
            r,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        }
        function h(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }
        function d(e, t) {
          for (var n in e)
            "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function p(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function g(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              s.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        }
        function v() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(g(arguments[t]));
          return e;
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
              r[i] = o[s];
          return r;
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e);
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            o = [];
          return (
            (r = {}),
            s("next"),
            s("throw"),
            s("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function s(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  o.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (n = i[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(u, c)
                : l(o[0][2], n);
            } catch (e) {
              l(o[0][3], e);
            }
            var n;
          }
          function u(e) {
            a("next", e);
          }
          function c(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        }
        function b(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: "return" === r }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = p(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  !(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        }
        function A(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function I(e, t) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          return t.get(e);
        }
        function P(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to set private field on non-instance"
            );
          return t.set(e, n), n;
        }
      },
      914: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RawSha256 = void 0);
        var r = n(9945),
          i = (function () {
            function e() {
              (this.state = Int32Array.from(r.INIT)),
                (this.temp = new Int32Array(64)),
                (this.buffer = new Uint8Array(64)),
                (this.bufferLength = 0),
                (this.bytesHashed = 0),
                (this.finished = !1);
            }
            return (
              (e.prototype.update = function (e) {
                if (this.finished)
                  throw new Error(
                    "Attempted to update an already finished hash."
                  );
                var t = 0,
                  n = e.byteLength;
                if (
                  ((this.bytesHashed += n),
                  8 * this.bytesHashed > r.MAX_HASHABLE_LENGTH)
                )
                  throw new Error("Cannot hash more than 2^53 - 1 bits");
                for (; n > 0; )
                  (this.buffer[this.bufferLength++] = e[t++]),
                    n--,
                    this.bufferLength === r.BLOCK_SIZE &&
                      (this.hashBuffer(), (this.bufferLength = 0));
              }),
              (e.prototype.digest = function () {
                if (!this.finished) {
                  var e = 8 * this.bytesHashed,
                    t = new DataView(
                      this.buffer.buffer,
                      this.buffer.byteOffset,
                      this.buffer.byteLength
                    ),
                    n = this.bufferLength;
                  if (
                    (t.setUint8(this.bufferLength++, 128),
                    n % r.BLOCK_SIZE >= r.BLOCK_SIZE - 8)
                  ) {
                    for (var i = this.bufferLength; i < r.BLOCK_SIZE; i++)
                      t.setUint8(i, 0);
                    this.hashBuffer(), (this.bufferLength = 0);
                  }
                  for (i = this.bufferLength; i < r.BLOCK_SIZE - 8; i++)
                    t.setUint8(i, 0);
                  t.setUint32(r.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0),
                    t.setUint32(r.BLOCK_SIZE - 4, e),
                    this.hashBuffer(),
                    (this.finished = !0);
                }
                var o = new Uint8Array(r.DIGEST_LENGTH);
                for (i = 0; i < 8; i++)
                  (o[4 * i] = (this.state[i] >>> 24) & 255),
                    (o[4 * i + 1] = (this.state[i] >>> 16) & 255),
                    (o[4 * i + 2] = (this.state[i] >>> 8) & 255),
                    (o[4 * i + 3] = (this.state[i] >>> 0) & 255);
                return o;
              }),
              (e.prototype.hashBuffer = function () {
                for (
                  var e = this.buffer,
                    t = this.state,
                    n = t[0],
                    i = t[1],
                    o = t[2],
                    s = t[3],
                    a = t[4],
                    u = t[5],
                    c = t[6],
                    l = t[7],
                    f = 0;
                  f < r.BLOCK_SIZE;
                  f++
                ) {
                  if (f < 16)
                    this.temp[f] =
                      ((255 & e[4 * f]) << 24) |
                      ((255 & e[4 * f + 1]) << 16) |
                      ((255 & e[4 * f + 2]) << 8) |
                      (255 & e[4 * f + 3]);
                  else {
                    var h = this.temp[f - 2],
                      d =
                        ((h >>> 17) | (h << 15)) ^
                        ((h >>> 19) | (h << 13)) ^
                        (h >>> 10),
                      p =
                        (((h = this.temp[f - 15]) >>> 7) | (h << 25)) ^
                        ((h >>> 18) | (h << 14)) ^
                        (h >>> 3);
                    this.temp[f] =
                      ((d + this.temp[f - 7]) | 0) +
                      ((p + this.temp[f - 16]) | 0);
                  }
                  var g =
                      ((((((a >>> 6) | (a << 26)) ^
                        ((a >>> 11) | (a << 21)) ^
                        ((a >>> 25) | (a << 7))) +
                        ((a & u) ^ (~a & c))) |
                        0) +
                        ((l + ((r.KEY[f] + this.temp[f]) | 0)) | 0)) |
                      0,
                    v =
                      ((((n >>> 2) | (n << 30)) ^
                        ((n >>> 13) | (n << 19)) ^
                        ((n >>> 22) | (n << 10))) +
                        ((n & i) ^ (n & o) ^ (i & o))) |
                      0;
                  (l = c),
                    (c = u),
                    (u = a),
                    (a = (s + g) | 0),
                    (s = o),
                    (o = i),
                    (i = n),
                    (n = (g + v) | 0);
                }
                (t[0] += n),
                  (t[1] += i),
                  (t[2] += o),
                  (t[3] += s),
                  (t[4] += a),
                  (t[5] += u),
                  (t[6] += c),
                  (t[7] += l);
              }),
              e
            );
          })();
        t.RawSha256 = i;
      },
      9945: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MAX_HASHABLE_LENGTH =
            t.INIT =
            t.KEY =
            t.DIGEST_LENGTH =
            t.BLOCK_SIZE =
              void 0),
          (t.BLOCK_SIZE = 64),
          (t.DIGEST_LENGTH = 32),
          (t.KEY = new Uint32Array([
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ])),
          (t.INIT = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1);
      },
      1938: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (0, n(3541).__exportStar)(n(5430), t);
      },
      5430: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Sha256 = void 0);
        var r = n(3541),
          i = n(9945),
          o = n(914),
          s = n(7658),
          a = (function () {
            function e(e) {
              if (((this.hash = new o.RawSha256()), e)) {
                this.outer = new o.RawSha256();
                var t = (function (e) {
                    var t = (0, s.convertToBuffer)(e);
                    if (t.byteLength > i.BLOCK_SIZE) {
                      var n = new o.RawSha256();
                      n.update(t), (t = n.digest());
                    }
                    var r = new Uint8Array(i.BLOCK_SIZE);
                    return r.set(t), r;
                  })(e),
                  n = new Uint8Array(i.BLOCK_SIZE);
                n.set(t);
                for (var r = 0; r < i.BLOCK_SIZE; r++)
                  (t[r] ^= 54), (n[r] ^= 92);
                for (
                  this.hash.update(t), this.outer.update(n), r = 0;
                  r < t.byteLength;
                  r++
                )
                  t[r] = 0;
              }
            }
            return (
              (e.prototype.update = function (e) {
                if (!(0, s.isEmptyData)(e) && !this.error)
                  try {
                    this.hash.update((0, s.convertToBuffer)(e));
                  } catch (e) {
                    this.error = e;
                  }
              }),
              (e.prototype.digestSync = function () {
                if (this.error) throw this.error;
                return this.outer
                  ? (this.outer.finished ||
                      this.outer.update(this.hash.digest()),
                    this.outer.digest())
                  : this.hash.digest();
              }),
              (e.prototype.digest = function () {
                return (0, r.__awaiter)(this, void 0, void 0, function () {
                  return (0, r.__generator)(this, function (e) {
                    return [2, this.digestSync()];
                  });
                });
              }),
              e
            );
          })();
        t.Sha256 = a;
      },
      3541: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            __assign: () => o,
            __asyncDelegator: () => b,
            __asyncGenerator: () => w,
            __asyncValues: () => S,
            __await: () => m,
            __awaiter: () => l,
            __classPrivateFieldGet: () => I,
            __classPrivateFieldSet: () => P,
            __createBinding: () => h,
            __decorate: () => a,
            __exportStar: () => d,
            __extends: () => i,
            __generator: () => f,
            __importDefault: () => E,
            __importStar: () => A,
            __makeTemplateObject: () => _,
            __metadata: () => c,
            __param: () => u,
            __read: () => g,
            __rest: () => s,
            __spread: () => v,
            __spreadArrays: () => y,
            __values: () => p,
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function i(e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            o.apply(this, arguments)
          );
        };
        function s(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        function a(e, t, n, r) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        }
        function u(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((r = r.apply(e, t || [])).next());
          });
        }
        function f(e, t) {
          var n,
            r,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        }
        function h(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }
        function d(e, t) {
          for (var n in e)
            "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function p(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function g(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              s.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        }
        function v() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(g(arguments[t]));
          return e;
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
              r[i] = o[s];
          return r;
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e);
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            o = [];
          return (
            (r = {}),
            s("next"),
            s("throw"),
            s("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function s(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  o.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (n = i[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(u, c)
                : l(o[0][2], n);
            } catch (e) {
              l(o[0][3], e);
            }
            var n;
          }
          function u(e) {
            a("next", e);
          }
          function c(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        }
        function b(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: "return" === r }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = p(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  !(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        }
        function A(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function I(e, t) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          return t.get(e);
        }
        function P(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to set private field on non-instance"
            );
          return t.set(e, n), n;
        }
      },
      21: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          n(7840).__exportStar(n(7787), t);
      },
      7787: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.supportsZeroByteGCM =
            t.supportsSubtleCrypto =
            t.supportsSecureRandom =
            t.supportsWebCrypto =
              void 0);
        var r = n(7840),
          i = [
            "decrypt",
            "digest",
            "encrypt",
            "exportKey",
            "generateKey",
            "importKey",
            "sign",
            "verify",
          ];
        function o(e) {
          return (
            "object" == typeof e &&
            "object" == typeof e.crypto &&
            "function" == typeof e.crypto.getRandomValues
          );
        }
        function s(e) {
          return (
            e &&
            i.every(function (t) {
              return "function" == typeof e[t];
            })
          );
        }
        (t.supportsWebCrypto = function (e) {
          return (
            !(!o(e) || "object" != typeof e.crypto.subtle) && s(e.crypto.subtle)
          );
        }),
          (t.supportsSecureRandom = o),
          (t.supportsSubtleCrypto = s),
          (t.supportsZeroByteGCM = function (e) {
            return r.__awaiter(this, void 0, void 0, function () {
              var t;
              return r.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!s(e)) return [2, !1];
                    n.label = 1;
                  case 1:
                    return (
                      n.trys.push([1, 4, , 5]),
                      [
                        4,
                        e.generateKey({ name: "AES-GCM", length: 128 }, !1, [
                          "encrypt",
                        ]),
                      ]
                    );
                  case 2:
                    return (
                      (t = n.sent()),
                      [
                        4,
                        e.encrypt(
                          {
                            name: "AES-GCM",
                            iv: new Uint8Array(Array(12)),
                            additionalData: new Uint8Array(Array(16)),
                            tagLength: 128,
                          },
                          t,
                          new Uint8Array(0)
                        ),
                      ]
                    );
                  case 3:
                    return [2, 16 === n.sent().byteLength];
                  case 4:
                    return n.sent(), [2, !1];
                  case 5:
                    return [2];
                }
              });
            });
          });
      },
      7840: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            __assign: () => o,
            __asyncDelegator: () => b,
            __asyncGenerator: () => w,
            __asyncValues: () => S,
            __await: () => m,
            __awaiter: () => l,
            __classPrivateFieldGet: () => I,
            __classPrivateFieldSet: () => P,
            __createBinding: () => h,
            __decorate: () => a,
            __exportStar: () => d,
            __extends: () => i,
            __generator: () => f,
            __importDefault: () => E,
            __importStar: () => A,
            __makeTemplateObject: () => _,
            __metadata: () => c,
            __param: () => u,
            __read: () => g,
            __rest: () => s,
            __spread: () => v,
            __spreadArrays: () => y,
            __values: () => p,
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function i(e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            o.apply(this, arguments)
          );
        };
        function s(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        function a(e, t, n, r) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        }
        function u(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function l(e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((r = r.apply(e, t || [])).next());
          });
        }
        function f(e, t) {
          var n,
            r,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        }
        function h(e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }
        function d(e, t) {
          for (var n in e)
            "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        function p(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function g(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              s.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        }
        function v() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(g(arguments[t]));
          return e;
        }
        function y() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
              r[i] = o[s];
          return r;
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e);
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            o = [];
          return (
            (r = {}),
            s("next"),
            s("throw"),
            s("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function s(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  o.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (n = i[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(u, c)
                : l(o[0][2], n);
            } catch (e) {
              l(o[0][3], e);
            }
            var n;
          }
          function u(e) {
            a("next", e);
          }
          function c(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        }
        function b(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: "return" === r }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function S(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = p(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  !(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function _(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        }
        function A(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function I(e, t) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to get private field on non-instance"
            );
          return t.get(e);
        }
        function P(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to set private field on non-instance"
            );
          return t.set(e, n), n;
        }
      },
      1106: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.convertToBuffer = void 0);
        var r = n(8668),
          i =
            "undefined" != typeof Buffer && Buffer.from
              ? function (e) {
                  return Buffer.from(e, "utf8");
                }
              : r.fromUtf8;
        t.convertToBuffer = function (e) {
          return e instanceof Uint8Array
            ? e
            : "string" == typeof e
            ? i(e)
            : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e);
        };
      },
      7658: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.uint32ArrayFrom =
            t.numToUint8 =
            t.isEmptyData =
            t.convertToBuffer =
              void 0);
        var r = n(1106);
        Object.defineProperty(t, "convertToBuffer", {
          enumerable: !0,
          get: function () {
            return r.convertToBuffer;
          },
        });
        var i = n(4304);
        Object.defineProperty(t, "isEmptyData", {
          enumerable: !0,
          get: function () {
            return i.isEmptyData;
          },
        });
        var o = n(2174);
        Object.defineProperty(t, "numToUint8", {
          enumerable: !0,
          get: function () {
            return o.numToUint8;
          },
        });
        var s = n(1558);
        Object.defineProperty(t, "uint32ArrayFrom", {
          enumerable: !0,
          get: function () {
            return s.uint32ArrayFrom;
          },
        });
      },
      4304: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isEmptyData = void 0),
          (t.isEmptyData = function (e) {
            return "string" == typeof e ? 0 === e.length : 0 === e.byteLength;
          });
      },
      2174: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.numToUint8 = void 0),
          (t.numToUint8 = function (e) {
            return new Uint8Array([
              (4278190080 & e) >> 24,
              (16711680 & e) >> 16,
              (65280 & e) >> 8,
              255 & e,
            ]);
          });
      },
      1558: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.uint32ArrayFrom = void 0),
          (t.uint32ArrayFrom = function (e) {
            if (!Array.from) {
              for (var t = new Uint32Array(e.length); 0 < e.length; )
                t[0] = e[0];
              return t;
            }
            return Uint32Array.from(e);
          });
      },
      6495: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { locateWindow: () => i });
        const r = {};
        function i() {
          return "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : r;
        }
      },
      8668: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { fromUtf8: () => r, toUtf8: () => i });
        var r = function (e) {
            return "function" == typeof TextEncoder
              ? (function (e) {
                  return new TextEncoder().encode(e);
                })(e)
              : (function (e) {
                  for (var t = [], n = 0, r = e.length; n < r; n++) {
                    var i = e.charCodeAt(n);
                    if (i < 128) t.push(i);
                    else if (i < 2048) t.push((i >> 6) | 192, (63 & i) | 128);
                    else if (
                      n + 1 < e.length &&
                      55296 == (64512 & i) &&
                      56320 == (64512 & e.charCodeAt(n + 1))
                    ) {
                      var o =
                        65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n));
                      t.push(
                        (o >> 18) | 240,
                        ((o >> 12) & 63) | 128,
                        ((o >> 6) & 63) | 128,
                        (63 & o) | 128
                      );
                    } else
                      t.push(
                        (i >> 12) | 224,
                        ((i >> 6) & 63) | 128,
                        (63 & i) | 128
                      );
                  }
                  return Uint8Array.from(t);
                })(e);
          },
          i = function (e) {
            return "function" == typeof TextDecoder
              ? (function (e) {
                  return new TextDecoder("utf-8").decode(e);
                })(e)
              : (function (e) {
                  for (var t = "", n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    if (i < 128) t += String.fromCharCode(i);
                    else if (192 <= i && i < 224) {
                      var o = e[++n];
                      t += String.fromCharCode(((31 & i) << 6) | (63 & o));
                    } else if (240 <= i && i < 365) {
                      var s =
                        "%" +
                        [i, e[++n], e[++n], e[++n]]
                          .map(function (e) {
                            return e.toString(16);
                          })
                          .join("%");
                      t += decodeURIComponent(s);
                    } else
                      t += String.fromCharCode(
                        ((15 & i) << 12) | ((63 & e[++n]) << 6) | (63 & e[++n])
                      );
                  }
                  return t;
                })(e);
          };
      },
      9742: (e, t) => {
        "use strict";
        (t.byteLength = function (e) {
          var t = u(e),
            n = t[0],
            r = t[1];
          return (3 * (n + r)) / 4 - r;
        }),
          (t.toByteArray = function (e) {
            var t,
              n,
              o = u(e),
              s = o[0],
              a = o[1],
              c = new i(
                (function (e, t, n) {
                  return (3 * (t + n)) / 4 - n;
                })(0, s, a)
              ),
              l = 0,
              f = a > 0 ? s - 4 : s;
            for (n = 0; n < f; n += 4)
              (t =
                (r[e.charCodeAt(n)] << 18) |
                (r[e.charCodeAt(n + 1)] << 12) |
                (r[e.charCodeAt(n + 2)] << 6) |
                r[e.charCodeAt(n + 3)]),
                (c[l++] = (t >> 16) & 255),
                (c[l++] = (t >> 8) & 255),
                (c[l++] = 255 & t);
            return (
              2 === a &&
                ((t =
                  (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)),
                (c[l++] = 255 & t)),
              1 === a &&
                ((t =
                  (r[e.charCodeAt(n)] << 10) |
                  (r[e.charCodeAt(n + 1)] << 4) |
                  (r[e.charCodeAt(n + 2)] >> 2)),
                (c[l++] = (t >> 8) & 255),
                (c[l++] = 255 & t)),
              c
            );
          }),
          (t.fromByteArray = function (e) {
            for (
              var t,
                r = e.length,
                i = r % 3,
                o = [],
                s = 16383,
                a = 0,
                u = r - i;
              a < u;
              a += s
            )
              o.push(c(e, a, a + s > u ? u : a + s));
            return (
              1 === i
                ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
                : 2 === i &&
                  ((t = (e[r - 2] << 8) + e[r - 1]),
                  o.push(
                    n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="
                  )),
              o.join("")
            );
          });
        for (
          var n = [],
            r = [],
            i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = 0,
            a = o.length;
          s < a;
          ++s
        )
          (n[s] = o[s]), (r[o.charCodeAt(s)] = s);
        function u(e) {
          var t = e.length;
          if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var n = e.indexOf("=");
          return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
        }
        function c(e, t, r) {
          for (var i, o, s = [], a = t; a < r; a += 3)
            (i =
              ((e[a] << 16) & 16711680) +
              ((e[a + 1] << 8) & 65280) +
              (255 & e[a + 2])),
              s.push(
                n[((o = i) >> 18) & 63] +
                  n[(o >> 12) & 63] +
                  n[(o >> 6) & 63] +
                  n[63 & o]
              );
          return s.join("");
        }
        (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
      },
      1206: function (e) {
        e.exports = (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var i = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var i in e)
                  n.d(
                    r,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return r;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 90))
          );
        })({
          17: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r = n(18),
              i = (function () {
                function e() {}
                return (
                  (e.getFirstMatch = function (e, t) {
                    var n = t.match(e);
                    return (n && n.length > 0 && n[1]) || "";
                  }),
                  (e.getSecondMatch = function (e, t) {
                    var n = t.match(e);
                    return (n && n.length > 1 && n[2]) || "";
                  }),
                  (e.matchAndReturnConst = function (e, t, n) {
                    if (e.test(t)) return n;
                  }),
                  (e.getWindowsVersionName = function (e) {
                    switch (e) {
                      case "NT":
                        return "NT";
                      case "XP":
                      case "NT 5.1":
                        return "XP";
                      case "NT 5.0":
                        return "2000";
                      case "NT 5.2":
                        return "2003";
                      case "NT 6.0":
                        return "Vista";
                      case "NT 6.1":
                        return "7";
                      case "NT 6.2":
                        return "8";
                      case "NT 6.3":
                        return "8.1";
                      case "NT 10.0":
                        return "10";
                      default:
                        return;
                    }
                  }),
                  (e.getMacOSVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), 10 === t[0]))
                      switch (t[1]) {
                        case 5:
                          return "Leopard";
                        case 6:
                          return "Snow Leopard";
                        case 7:
                          return "Lion";
                        case 8:
                          return "Mountain Lion";
                        case 9:
                          return "Mavericks";
                        case 10:
                          return "Yosemite";
                        case 11:
                          return "El Capitan";
                        case 12:
                          return "Sierra";
                        case 13:
                          return "High Sierra";
                        case 14:
                          return "Mojave";
                        case 15:
                          return "Catalina";
                        default:
                          return;
                      }
                  }),
                  (e.getAndroidVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                      return 1 === t[0] && t[1] < 6
                        ? "Cupcake"
                        : 1 === t[0] && t[1] >= 6
                        ? "Donut"
                        : 2 === t[0] && t[1] < 2
                        ? "Eclair"
                        : 2 === t[0] && 2 === t[1]
                        ? "Froyo"
                        : 2 === t[0] && t[1] > 2
                        ? "Gingerbread"
                        : 3 === t[0]
                        ? "Honeycomb"
                        : 4 === t[0] && t[1] < 1
                        ? "Ice Cream Sandwich"
                        : 4 === t[0] && t[1] < 4
                        ? "Jelly Bean"
                        : 4 === t[0] && t[1] >= 4
                        ? "KitKat"
                        : 5 === t[0]
                        ? "Lollipop"
                        : 6 === t[0]
                        ? "Marshmallow"
                        : 7 === t[0]
                        ? "Nougat"
                        : 8 === t[0]
                        ? "Oreo"
                        : 9 === t[0]
                        ? "Pie"
                        : void 0;
                  }),
                  (e.getVersionPrecision = function (e) {
                    return e.split(".").length;
                  }),
                  (e.compareVersions = function (t, n, r) {
                    void 0 === r && (r = !1);
                    var i = e.getVersionPrecision(t),
                      o = e.getVersionPrecision(n),
                      s = Math.max(i, o),
                      a = 0,
                      u = e.map([t, n], function (t) {
                        var n = s - e.getVersionPrecision(t),
                          r = t + new Array(n + 1).join(".0");
                        return e
                          .map(r.split("."), function (e) {
                            return new Array(20 - e.length).join("0") + e;
                          })
                          .reverse();
                      });
                    for (r && (a = s - Math.min(i, o)), s -= 1; s >= a; ) {
                      if (u[0][s] > u[1][s]) return 1;
                      if (u[0][s] === u[1][s]) {
                        if (s === a) return 0;
                        s -= 1;
                      } else if (u[0][s] < u[1][s]) return -1;
                    }
                  }),
                  (e.map = function (e, t) {
                    var n,
                      r = [];
                    if (Array.prototype.map)
                      return Array.prototype.map.call(e, t);
                    for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                    return r;
                  }),
                  (e.find = function (e, t) {
                    var n, r;
                    if (Array.prototype.find)
                      return Array.prototype.find.call(e, t);
                    for (n = 0, r = e.length; n < r; n += 1) {
                      var i = e[n];
                      if (t(i, n)) return i;
                    }
                  }),
                  (e.assign = function (e) {
                    for (
                      var t,
                        n,
                        r = e,
                        i = arguments.length,
                        o = new Array(i > 1 ? i - 1 : 0),
                        s = 1;
                      s < i;
                      s++
                    )
                      o[s - 1] = arguments[s];
                    if (Object.assign)
                      return Object.assign.apply(Object, [e].concat(o));
                    var a = function () {
                      var e = o[t];
                      "object" == typeof e &&
                        null !== e &&
                        Object.keys(e).forEach(function (t) {
                          r[t] = e[t];
                        });
                    };
                    for (t = 0, n = o.length; t < n; t += 1) a();
                    return e;
                  }),
                  (e.getBrowserAlias = function (e) {
                    return r.BROWSER_ALIASES_MAP[e];
                  }),
                  (e.getBrowserTypeByAlias = function (e) {
                    return r.BROWSER_MAP[e] || "";
                  }),
                  e
                );
              })();
            (t.default = i), (e.exports = t.default);
          },
          18: function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
              (t.ENGINE_MAP =
                t.OS_MAP =
                t.PLATFORMS_MAP =
                t.BROWSER_MAP =
                t.BROWSER_ALIASES_MAP =
                  void 0),
              (t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku",
              }),
              (t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser",
              }),
              (t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv",
              }),
              (t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku",
              }),
              (t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit",
              });
          },
          90: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              i = (r = n(91)) && r.__esModule ? r : { default: r },
              o = n(18);
            function s(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            var a = (function () {
              function e() {}
              var t, n;
              return (
                (e.getParser = function (e, t) {
                  if ((void 0 === t && (t = !1), "string" != typeof e))
                    throw new Error("UserAgent should be a string");
                  return new i.default(e, t);
                }),
                (e.parse = function (e) {
                  return new i.default(e).getResult();
                }),
                (t = e),
                (n = [
                  {
                    key: "BROWSER_MAP",
                    get: function () {
                      return o.BROWSER_MAP;
                    },
                  },
                  {
                    key: "ENGINE_MAP",
                    get: function () {
                      return o.ENGINE_MAP;
                    },
                  },
                  {
                    key: "OS_MAP",
                    get: function () {
                      return o.OS_MAP;
                    },
                  },
                  {
                    key: "PLATFORMS_MAP",
                    get: function () {
                      return o.PLATFORMS_MAP;
                    },
                  },
                ]),
                null && s(t.prototype, null),
                n && s(t, n),
                e
              );
            })();
            (t.default = a), (e.exports = t.default);
          },
          91: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r = u(n(92)),
              i = u(n(93)),
              o = u(n(94)),
              s = u(n(95)),
              a = u(n(17));
            function u(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var c = (function () {
              function e(e, t) {
                if ((void 0 === t && (t = !1), null == e || "" === e))
                  throw new Error("UserAgent parameter can't be empty");
                (this._ua = e),
                  (this.parsedResult = {}),
                  !0 !== t && this.parse();
              }
              var t = e.prototype;
              return (
                (t.getUA = function () {
                  return this._ua;
                }),
                (t.test = function (e) {
                  return e.test(this._ua);
                }),
                (t.parseBrowser = function () {
                  var e = this;
                  this.parsedResult.browser = {};
                  var t = a.default.find(r.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.browser = t.describe(this.getUA())),
                    this.parsedResult.browser
                  );
                }),
                (t.getBrowser = function () {
                  return this.parsedResult.browser
                    ? this.parsedResult.browser
                    : this.parseBrowser();
                }),
                (t.getBrowserName = function (e) {
                  return e
                    ? String(this.getBrowser().name).toLowerCase() || ""
                    : this.getBrowser().name || "";
                }),
                (t.getBrowserVersion = function () {
                  return this.getBrowser().version;
                }),
                (t.getOS = function () {
                  return this.parsedResult.os
                    ? this.parsedResult.os
                    : this.parseOS();
                }),
                (t.parseOS = function () {
                  var e = this;
                  this.parsedResult.os = {};
                  var t = a.default.find(i.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.os = t.describe(this.getUA())),
                    this.parsedResult.os
                  );
                }),
                (t.getOSName = function (e) {
                  var t = this.getOS().name;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.getOSVersion = function () {
                  return this.getOS().version;
                }),
                (t.getPlatform = function () {
                  return this.parsedResult.platform
                    ? this.parsedResult.platform
                    : this.parsePlatform();
                }),
                (t.getPlatformType = function (e) {
                  void 0 === e && (e = !1);
                  var t = this.getPlatform().type;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.parsePlatform = function () {
                  var e = this;
                  this.parsedResult.platform = {};
                  var t = a.default.find(o.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t &&
                      (this.parsedResult.platform = t.describe(this.getUA())),
                    this.parsedResult.platform
                  );
                }),
                (t.getEngine = function () {
                  return this.parsedResult.engine
                    ? this.parsedResult.engine
                    : this.parseEngine();
                }),
                (t.getEngineName = function (e) {
                  return e
                    ? String(this.getEngine().name).toLowerCase() || ""
                    : this.getEngine().name || "";
                }),
                (t.parseEngine = function () {
                  var e = this;
                  this.parsedResult.engine = {};
                  var t = a.default.find(s.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.engine = t.describe(this.getUA())),
                    this.parsedResult.engine
                  );
                }),
                (t.parse = function () {
                  return (
                    this.parseBrowser(),
                    this.parseOS(),
                    this.parsePlatform(),
                    this.parseEngine(),
                    this
                  );
                }),
                (t.getResult = function () {
                  return a.default.assign({}, this.parsedResult);
                }),
                (t.satisfies = function (e) {
                  var t = this,
                    n = {},
                    r = 0,
                    i = {},
                    o = 0;
                  if (
                    (Object.keys(e).forEach(function (t) {
                      var s = e[t];
                      "string" == typeof s
                        ? ((i[t] = s), (o += 1))
                        : "object" == typeof s && ((n[t] = s), (r += 1));
                    }),
                    r > 0)
                  ) {
                    var s = Object.keys(n),
                      u = a.default.find(s, function (e) {
                        return t.isOS(e);
                      });
                    if (u) {
                      var c = this.satisfies(n[u]);
                      if (void 0 !== c) return c;
                    }
                    var l = a.default.find(s, function (e) {
                      return t.isPlatform(e);
                    });
                    if (l) {
                      var f = this.satisfies(n[l]);
                      if (void 0 !== f) return f;
                    }
                  }
                  if (o > 0) {
                    var h = Object.keys(i),
                      d = a.default.find(h, function (e) {
                        return t.isBrowser(e, !0);
                      });
                    if (void 0 !== d) return this.compareVersion(i[d]);
                  }
                }),
                (t.isBrowser = function (e, t) {
                  void 0 === t && (t = !1);
                  var n = this.getBrowserName().toLowerCase(),
                    r = e.toLowerCase(),
                    i = a.default.getBrowserTypeByAlias(r);
                  return t && i && (r = i.toLowerCase()), r === n;
                }),
                (t.compareVersion = function (e) {
                  var t = [0],
                    n = e,
                    r = !1,
                    i = this.getBrowserVersion();
                  if ("string" == typeof i)
                    return (
                      ">" === e[0] || "<" === e[0]
                        ? ((n = e.substr(1)),
                          "=" === e[1]
                            ? ((r = !0), (n = e.substr(2)))
                            : (t = []),
                          ">" === e[0] ? t.push(1) : t.push(-1))
                        : "=" === e[0]
                        ? (n = e.substr(1))
                        : "~" === e[0] && ((r = !0), (n = e.substr(1))),
                      t.indexOf(a.default.compareVersions(i, n, r)) > -1
                    );
                }),
                (t.isOS = function (e) {
                  return this.getOSName(!0) === String(e).toLowerCase();
                }),
                (t.isPlatform = function (e) {
                  return this.getPlatformType(!0) === String(e).toLowerCase();
                }),
                (t.isEngine = function (e) {
                  return this.getEngineName(!0) === String(e).toLowerCase();
                }),
                (t.is = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                  );
                }),
                (t.some = function (e) {
                  var t = this;
                  return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                      return t.is(e);
                    })
                  );
                }),
                e
              );
            })();
            (t.default = c), (e.exports = t.default);
          },
          92: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              i = (r = n(17)) && r.__esModule ? r : { default: r },
              o = /version\/(\d+(\.?_?\d+)+)/i,
              s = [
                {
                  test: [/googlebot/i],
                  describe: function (e) {
                    var t = { name: "Googlebot" },
                      n =
                        i.default.getFirstMatch(
                          /googlebot\/(\d+(\.\d+))/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/opera/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/opr\/|opios/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      n =
                        i.default.getFirstMatch(
                          /(?:opr|opios)[\s/](\S+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/SamsungBrowser/i],
                  describe: function (e) {
                    var t = { name: "Samsung Internet for Android" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/Whale/i],
                  describe: function (e) {
                    var t = { name: "NAVER Whale Browser" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/MZBrowser/i],
                  describe: function (e) {
                    var t = { name: "MZ Browser" },
                      n =
                        i.default.getFirstMatch(
                          /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/focus/i],
                  describe: function (e) {
                    var t = { name: "Focus" },
                      n =
                        i.default.getFirstMatch(
                          /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/swing/i],
                  describe: function (e) {
                    var t = { name: "Swing" },
                      n =
                        i.default.getFirstMatch(
                          /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/coast/i],
                  describe: function (e) {
                    var t = { name: "Opera Coast" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/opt\/\d+(?:.?_?\d+)+/i],
                  describe: function (e) {
                    var t = { name: "Opera Touch" },
                      n =
                        i.default.getFirstMatch(
                          /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/yabrowser/i],
                  describe: function (e) {
                    var t = { name: "Yandex Browser" },
                      n =
                        i.default.getFirstMatch(
                          /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/ucbrowser/i],
                  describe: function (e) {
                    var t = { name: "UC Browser" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/Maxthon|mxios/i],
                  describe: function (e) {
                    var t = { name: "Maxthon" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/epiphany/i],
                  describe: function (e) {
                    var t = { name: "Epiphany" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/puffin/i],
                  describe: function (e) {
                    var t = { name: "Puffin" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/sleipnir/i],
                  describe: function (e) {
                    var t = { name: "Sleipnir" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/k-meleon/i],
                  describe: function (e) {
                    var t = { name: "K-Meleon" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/micromessenger/i],
                  describe: function (e) {
                    var t = { name: "WeChat" },
                      n =
                        i.default.getFirstMatch(
                          /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/qqbrowser/i],
                  describe: function (e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e)
                          ? "QQ Browser Lite"
                          : "QQ Browser",
                      },
                      n =
                        i.default.getFirstMatch(
                          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/msie|trident/i],
                  describe: function (e) {
                    var t = { name: "Internet Explorer" },
                      n = i.default.getFirstMatch(
                        /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/\sedg\//i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      n = i.default.getFirstMatch(
                        /\sedg\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/edg([ea]|ios)/i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      n = i.default.getSecondMatch(
                        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/vivaldi/i],
                  describe: function (e) {
                    var t = { name: "Vivaldi" },
                      n = i.default.getFirstMatch(
                        /vivaldi\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/seamonkey/i],
                  describe: function (e) {
                    var t = { name: "SeaMonkey" },
                      n = i.default.getFirstMatch(
                        /seamonkey\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/sailfish/i],
                  describe: function (e) {
                    var t = { name: "Sailfish" },
                      n = i.default.getFirstMatch(
                        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/silk/i],
                  describe: function (e) {
                    var t = { name: "Amazon Silk" },
                      n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/phantom/i],
                  describe: function (e) {
                    var t = { name: "PhantomJS" },
                      n = i.default.getFirstMatch(
                        /phantomjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/slimerjs/i],
                  describe: function (e) {
                    var t = { name: "SlimerJS" },
                      n = i.default.getFirstMatch(
                        /slimerjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t = { name: "BlackBerry" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = { name: "WebOS Browser" },
                      n =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = { name: "Bada" },
                      n = i.default.getFirstMatch(
                        /dolfin\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = { name: "Tizen" },
                      n =
                        i.default.getFirstMatch(
                          /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/qupzilla/i],
                  describe: function (e) {
                    var t = { name: "QupZilla" },
                      n =
                        i.default.getFirstMatch(
                          /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/firefox|iceweasel|fxios/i],
                  describe: function (e) {
                    var t = { name: "Firefox" },
                      n = i.default.getFirstMatch(
                        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/electron/i],
                  describe: function (e) {
                    var t = { name: "Electron" },
                      n = i.default.getFirstMatch(
                        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/MiuiBrowser/i],
                  describe: function (e) {
                    var t = { name: "Miui" },
                      n = i.default.getFirstMatch(
                        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/chromium/i],
                  describe: function (e) {
                    var t = { name: "Chromium" },
                      n =
                        i.default.getFirstMatch(
                          /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/chrome|crios|crmo/i],
                  describe: function (e) {
                    var t = { name: "Chrome" },
                      n = i.default.getFirstMatch(
                        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/GSA/i],
                  describe: function (e) {
                    var t = { name: "Google Search" },
                      n = i.default.getFirstMatch(
                        /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      n = e.test(/android/i);
                    return t && n;
                  },
                  describe: function (e) {
                    var t = { name: "Android Browser" },
                      n = i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/playstation 4/i],
                  describe: function (e) {
                    var t = { name: "PlayStation 4" },
                      n = i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/safari|applewebkit/i],
                  describe: function (e) {
                    var t = { name: "Safari" },
                      n = i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/.*/i],
                  describe: function (e) {
                    var t =
                      -1 !== e.search("\\(")
                        ? /^(.*)\/(.*)[ \t]\((.*)/
                        : /^(.*)\/(.*) /;
                    return {
                      name: i.default.getFirstMatch(t, e),
                      version: i.default.getSecondMatch(t, e),
                    };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          93: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              i = (r = n(17)) && r.__esModule ? r : { default: r },
              o = n(18),
              s = [
                {
                  test: [/Roku\/DVP/],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return { name: o.OS_MAP.Roku, version: t };
                  },
                },
                {
                  test: [/windows phone/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.WindowsPhone, version: t };
                  },
                },
                {
                  test: [/windows /i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /Windows ((NT|XP)( \d\d?.\d)?)/i,
                        e
                      ),
                      n = i.default.getWindowsVersionName(t);
                    return {
                      name: o.OS_MAP.Windows,
                      version: t,
                      versionName: n,
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function (e) {
                    var t = { name: o.OS_MAP.iOS },
                      n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/macintosh/i],
                  describe: function (e) {
                    var t = i.default
                        .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                        .replace(/[_\s]/g, "."),
                      n = i.default.getMacOSVersionName(t),
                      r = { name: o.OS_MAP.MacOS, version: t };
                    return n && (r.versionName = n), r;
                  },
                },
                {
                  test: [/(ipod|iphone|ipad)/i],
                  describe: function (e) {
                    var t = i.default
                      .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                      .replace(/[_\s]/g, ".");
                    return { name: o.OS_MAP.iOS, version: t };
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      n = e.test(/android/i);
                    return t && n;
                  },
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /android[\s/-](\d+(\.\d+)*)/i,
                        e
                      ),
                      n = i.default.getAndroidVersionName(t),
                      r = { name: o.OS_MAP.Android, version: t };
                    return n && (r.versionName = n), r;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                        e
                      ),
                      n = { name: o.OS_MAP.WebOS };
                    return t && t.length && (n.version = t), n;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t =
                      i.default.getFirstMatch(
                        /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                        e
                      ) ||
                      i.default.getFirstMatch(
                        /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                        e
                      ) ||
                      i.default.getFirstMatch(/\bbb(\d+)/i, e);
                    return { name: o.OS_MAP.BlackBerry, version: t };
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return { name: o.OS_MAP.Bada, version: t };
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /tizen[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.Tizen, version: t };
                  },
                },
                {
                  test: [/linux/i],
                  describe: function () {
                    return { name: o.OS_MAP.Linux };
                  },
                },
                {
                  test: [/CrOS/],
                  describe: function () {
                    return { name: o.OS_MAP.ChromeOS };
                  },
                },
                {
                  test: [/PlayStation 4/],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.PlayStation4, version: t };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          94: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              i = (r = n(17)) && r.__esModule ? r : { default: r },
              o = n(18),
              s = [
                {
                  test: [/googlebot/i],
                  describe: function () {
                    return { type: "bot", vendor: "Google" };
                  },
                },
                {
                  test: [/huawei/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                      n = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                    return t && (n.model = t), n;
                  },
                },
                {
                  test: [/nexus\s*(?:7|8|9|10).*/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                  },
                },
                {
                  test: [/ipad/i],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/kftt build/i],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Amazon",
                      model: "Kindle Fire HD 7",
                    };
                  },
                },
                {
                  test: [/silk/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                  },
                },
                {
                  test: [/tablet(?! pc)/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/ipod|iphone/i),
                      n = e.test(/like (ipod|iphone)/i);
                    return t && !n;
                  },
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "Apple",
                      model: t,
                    };
                  },
                },
                {
                  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                  },
                },
                {
                  test: [/[^-]mobi/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "blackberry" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "BlackBerry",
                    };
                  },
                },
                {
                  test: function (e) {
                    return "bada" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "windows phone" === e.getBrowserName();
                  },
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "Microsoft",
                    };
                  },
                },
                {
                  test: function (e) {
                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    return "android" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "macos" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
                  },
                },
                {
                  test: function (e) {
                    return "windows" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "linux" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "playstation 4" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tv };
                  },
                },
                {
                  test: function (e) {
                    return "roku" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tv };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          95: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              i = (r = n(17)) && r.__esModule ? r : { default: r },
              o = n(18),
              s = [
                {
                  test: function (e) {
                    return "microsoft edge" === e.getBrowserName(!0);
                  },
                  describe: function (e) {
                    if (/\sedg\//i.test(e)) return { name: o.ENGINE_MAP.Blink };
                    var t = i.default.getFirstMatch(
                      /edge\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                    return { name: o.ENGINE_MAP.EdgeHTML, version: t };
                  },
                },
                {
                  test: [/trident/i],
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Trident },
                      n = i.default.getFirstMatch(
                        /trident\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: function (e) {
                    return e.test(/presto/i);
                  },
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Presto },
                      n = i.default.getFirstMatch(
                        /presto\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/gecko/i),
                      n = e.test(/like gecko/i);
                    return t && !n;
                  },
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Gecko },
                      n = i.default.getFirstMatch(
                        /gecko\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/(apple)?webkit\/537\.36/i],
                  describe: function () {
                    return { name: o.ENGINE_MAP.Blink };
                  },
                },
                {
                  test: [/(apple)?webkit/i],
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.WebKit },
                      n = i.default.getFirstMatch(
                        /webkit\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
        });
      },
      8764: (e, t, n) => {
        "use strict";
        var r = n(9742),
          i = n(645),
          o = n(5826);
        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(e, t) {
          if (s() < t) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
              : (null === e && (e = new u(t)), (e.length = t)),
            e
          );
        }
        function u(e, t, n) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(e, t, n);
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return f(this, e);
          }
          return c(this, e, t, n);
        }
        function c(e, t, n, r) {
          if ("number" == typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, n, r) {
                if ((t.byteLength, n < 0 || t.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                return (
                  (t =
                    void 0 === n && void 0 === r
                      ? new Uint8Array(t)
                      : void 0 === r
                      ? new Uint8Array(t, n)
                      : new Uint8Array(t, n, r)),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((e = t).__proto__ = u.prototype)
                    : (e = h(e, t)),
                  e
                );
              })(e, t, n, r)
            : "string" == typeof t
            ? (function (e, t, n) {
                if (
                  (("string" == typeof n && "" !== n) || (n = "utf8"),
                  !u.isEncoding(n))
                )
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | p(t, n),
                  i = (e = a(e, r)).write(t, n);
                return i !== r && (e = e.slice(0, i)), e;
              })(e, t, n)
            : (function (e, t) {
                if (u.isBuffer(t)) {
                  var n = 0 | d(t.length);
                  return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e;
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" != typeof t.length || (r = t.length) != r
                      ? a(e, 0)
                      : h(e, t);
                  if ("Buffer" === t.type && o(t.data)) return h(e, t.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function l(e) {
          if ("number" != typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function f(e, t) {
          if ((l(t), (e = a(e, t < 0 ? 0 : 0 | d(t))), !u.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < t; ++n) e[n] = 0;
          return e;
        }
        function h(e, t) {
          var n = t.length < 0 ? 0 : 0 | d(t.length);
          e = a(e, n);
          for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
          return e;
        }
        function d(e) {
          if (e >= s())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function p(e, t) {
          if (u.isBuffer(e)) return e.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var n = e.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return B(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return q(e).length;
              default:
                if (r) return B(e).length;
                (t = ("" + t).toLowerCase()), (r = !0);
            }
        }
        function g(e, t, n) {
          var r = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return U(this, t, n);
              case "utf8":
              case "utf-8":
                return P(this, t, n);
              case "ascii":
                return O(this, t, n);
              case "latin1":
              case "binary":
                return T(this, t, n);
              case "base64":
                return I(this, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, t, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (r = !0);
            }
        }
        function v(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function y(e, t, n, r, i) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (i) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
            return 0 === t.length ? -1 : m(e, t, n, r, i);
          if ("number" == typeof t)
            return (
              (t &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : m(e, [t], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function m(e, t, n, r, i) {
          var o,
            s = 1,
            a = e.length,
            u = t.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (n /= 2);
          }
          function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (i) {
            var l = -1;
            for (o = n; o < a; o++)
              if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === u)) return l * s;
              } else -1 !== l && (o -= o - l), (l = -1);
          } else
            for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
              for (var f = !0, h = 0; h < u; h++)
                if (c(e, o + h) !== c(t, h)) {
                  f = !1;
                  break;
                }
              if (f) return o;
            }
          return -1;
        }
        function w(e, t, n, r) {
          n = Number(n) || 0;
          var i = e.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = t.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          r > o / 2 && (r = o / 2);
          for (var s = 0; s < r; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[n + s] = a;
          }
          return s;
        }
        function b(e, t, n, r) {
          return V(B(t, e.length - n), e, n, r);
        }
        function S(e, t, n, r) {
          return V(
            (function (e) {
              for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function _(e, t, n, r) {
          return S(e, t, n, r);
        }
        function A(e, t, n, r) {
          return V(q(t), e, n, r);
        }
        function E(e, t, n, r) {
          return V(
            (function (e, t) {
              for (
                var n, r, i, o = [], s = 0;
                s < e.length && !((t -= 2) < 0);
                ++s
              )
                (r = (n = e.charCodeAt(s)) >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function I(e, t, n) {
          return 0 === t && n === e.length
            ? r.fromByteArray(e)
            : r.fromByteArray(e.slice(t, n));
        }
        function P(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], i = t; i < n; ) {
            var o,
              s,
              a,
              u,
              c = e[i],
              l = null,
              f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + f <= n)
              switch (f) {
                case 1:
                  c < 128 && (l = c);
                  break;
                case 2:
                  128 == (192 & (o = e[i + 1])) &&
                    (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                    (l = u);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (l = u);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    (a = e[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u =
                        ((15 & c) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      u < 1114112 &&
                      (l = u);
              }
            null === l
              ? ((l = 65533), (f = 1))
              : l > 65535 &&
                ((l -= 65536),
                r.push(((l >>> 10) & 1023) | 55296),
                (l = 56320 | (1023 & l))),
              r.push(l),
              (i += f);
          }
          return (function (e) {
            var t = e.length;
            if (t <= C) return String.fromCharCode.apply(String, e);
            for (var n = "", r = 0; r < t; )
              n += String.fromCharCode.apply(String, e.slice(r, (r += C)));
            return n;
          })(r);
        }
        (t.lW = u),
          (t.h2 = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== n.g.TYPED_ARRAY_SUPPORT
              ? n.g.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === e.foo() &&
                        "function" == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          s(),
          (u.poolSize = 8192),
          (u._augment = function (e) {
            return (e.__proto__ = u.prototype), e;
          }),
          (u.from = function (e, t, n) {
            return c(null, e, t, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (e, t, n) {
            return (function (e, t, n, r) {
              return (
                l(t),
                t <= 0
                  ? a(e, t)
                  : void 0 !== n
                  ? "string" == typeof r
                    ? a(e, t).fill(n, r)
                    : a(e, t).fill(n)
                  : a(e, t)
              );
            })(null, e, t, n);
          }),
          (u.allocUnsafe = function (e) {
            return f(null, e);
          }),
          (u.allocUnsafeSlow = function (e) {
            return f(null, e);
          }),
          (u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
              i < o;
              ++i
            )
              if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (e, t) {
            if (!o(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t)
              for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t),
              i = 0;
            for (n = 0; n < e.length; ++n) {
              var s = e[n];
              if (!u.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(r, i), (i += s.length);
            }
            return r;
          }),
          (u.byteLength = p),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) v(this, t, t + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              v(this, t, t + 3), v(this, t + 1, t + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              v(this, t, t + 7),
                v(this, t + 1, t + 6),
                v(this, t + 2, t + 5),
                v(this, t + 3, t + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? P(this, 0, e)
              : g.apply(this, arguments);
          }),
          (u.prototype.equals = function (e) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e);
          }),
          (u.prototype.inspect = function () {
            var e = "",
              n = t.h2;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (u.prototype.compare = function (e, t, n, r, i) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              t < 0 || n > e.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (r >>>= 0),
                s = (n >>>= 0) - (t >>>= 0),
                a = Math.min(o, s),
                c = this.slice(r, i),
                l = e.slice(t, n),
                f = 0;
              f < a;
              ++f
            )
              if (c[f] !== l[f]) {
                (o = c[f]), (s = l[f]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (u.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (u.prototype.indexOf = function (e, t, n) {
            return y(this, e, t, n, !0);
          }),
          (u.prototype.lastIndexOf = function (e, t, n) {
            return y(this, e, t, n, !1);
          }),
          (u.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" == typeof t)
              (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === n || n > i) && (n = i),
              (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
              switch (r) {
                case "hex":
                  return w(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return b(this, e, t, n);
                case "ascii":
                  return S(this, e, t, n);
                case "latin1":
                case "binary":
                  return _(this, e, t, n);
                case "base64":
                  return A(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, e, t, n);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var C = 4096;
        function O(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
          return r;
        }
        function T(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
          return r;
        }
        function U(e, t, n) {
          var r,
            i = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
          for (var o = "", s = t; s < n; ++s)
            o += (r = e[s]) < 16 ? "0" + r.toString(16) : r.toString(16);
          return o;
        }
        function k(e, t, n) {
          for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function R(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function M(e, t, n, r, i, o) {
          if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function x(e, t, n, r) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
            e[n + i] =
              (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function D(e, t, n, r) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
            e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function F(e, t, n, r, i, o) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function N(e, t, n, r, o) {
          return o || F(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
        }
        function j(e, t, n, r, o) {
          return o || F(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function (e, t) {
          var n,
            r = this.length;
          if (
            ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0
              ? (t += r) < 0 && (t = 0)
              : t > r && (t = r),
            t < e && (t = e),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var i = t - e;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + e];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || R(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              r += this[e + o] * i;
            return r;
          }),
          (u.prototype.readUIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || R(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
              r += this[e + --t] * i;
            return r;
          }),
          (u.prototype.readUInt8 = function (e, t) {
            return t || R(e, 1, this.length), this[e];
          }),
          (u.prototype.readUInt16LE = function (e, t) {
            return t || R(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (e, t) {
            return t || R(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (u.prototype.readUInt32LE = function (e, t) {
            return (
              t || R(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (e, t) {
            return (
              t || R(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (u.prototype.readIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || R(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (u.prototype.readIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || R(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
              o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (u.prototype.readInt8 = function (e, t) {
            return (
              t || R(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (u.prototype.readInt16LE = function (e, t) {
            t || R(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function (e, t) {
            t || R(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function (e, t) {
            return (
              t || R(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (e, t) {
            return (
              t || R(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (u.prototype.readFloatLE = function (e, t) {
            return t || R(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (e, t) {
            return t || R(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (e, t) {
            return t || R(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (e, t) {
            return t || R(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (e, t, n, r) {
            (e = +e),
              (t |= 0),
              (n |= 0),
              r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + n;
          }),
          (u.prototype.writeUIntBE = function (e, t, n, r) {
            (e = +e),
              (t |= 0),
              (n |= 0),
              r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + n;
          }),
          (u.prototype.writeUInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : x(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : x(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : D(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : D(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              M(this, e, t, n, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[t] = 255 & e; ++o < n && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + n;
          }),
          (u.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              M(this, e, t, n, i - 1, -i);
            }
            var o = n - 1,
              s = 1,
              a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + n;
          }),
          (u.prototype.writeInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : x(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : x(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : D(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || M(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : D(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeFloatLE = function (e, t, n) {
            return N(this, e, t, !0, n);
          }),
          (u.prototype.writeFloatBE = function (e, t, n) {
            return N(this, e, t, !1, n);
          }),
          (u.prototype.writeDoubleLE = function (e, t, n) {
            return j(this, e, t, !0, n);
          }),
          (u.prototype.writeDoubleBE = function (e, t, n) {
            return j(this, e, t, !1, n);
          }),
          (u.prototype.copy = function (e, t, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              e.length - t < r - n && (r = e.length - t + n);
            var i,
              o = r - n;
            if (this === e && n < t && t < r)
              for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) e[i + t] = this[i + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o;
          }),
          (u.prototype.fill = function (e, t, n, r) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((r = t), (t = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (
              ((t >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (o = t; o < n; ++o) this[o] = e;
            else {
              var s = u.isBuffer(e) ? e : B(new u(e, r).toString()),
                a = s.length;
              for (o = 0; o < n - t; ++o) this[o + t] = s[o % a];
            }
            return this;
          });
        var L = /[^+\/0-9A-Za-z-_]/g;
        function B(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
            if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === r) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((t -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function q(e) {
          return r.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(L, "")).length < 2
              )
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function V(e, t, n, r) {
          for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
            t[i + n] = e[i];
          return i;
        }
      },
      6489: (e, t) => {
        "use strict";
        (t.Q = function (e, t) {
          if ("string" != typeof e)
            throw new TypeError("argument str must be a string");
          for (
            var r = {}, i = t || {}, s = e.split(";"), a = i.decode || n, u = 0;
            u < s.length;
            u++
          ) {
            var c = s[u],
              l = c.indexOf("=");
            if (!(l < 0)) {
              var f = c.substring(0, l).trim();
              if (null == r[f]) {
                var h = c.substring(l + 1, c.length).trim();
                '"' === h[0] && (h = h.slice(1, -1)), (r[f] = o(h, a));
              }
            }
          }
          return r;
        }),
          (t.q = function (e, t, n) {
            var o = n || {},
              s = o.encode || r;
            if ("function" != typeof s)
              throw new TypeError("option encode is invalid");
            if (!i.test(e)) throw new TypeError("argument name is invalid");
            var a = s(t);
            if (a && !i.test(a)) throw new TypeError("argument val is invalid");
            var u = e + "=" + a;
            if (null != o.maxAge) {
              var c = o.maxAge - 0;
              if (isNaN(c) || !isFinite(c))
                throw new TypeError("option maxAge is invalid");
              u += "; Max-Age=" + Math.floor(c);
            }
            if (o.domain) {
              if (!i.test(o.domain))
                throw new TypeError("option domain is invalid");
              u += "; Domain=" + o.domain;
            }
            if (o.path) {
              if (!i.test(o.path))
                throw new TypeError("option path is invalid");
              u += "; Path=" + o.path;
            }
            if (o.expires) {
              if ("function" != typeof o.expires.toUTCString)
                throw new TypeError("option expires is invalid");
              u += "; Expires=" + o.expires.toUTCString();
            }
            if (
              (o.httpOnly && (u += "; HttpOnly"),
              o.secure && (u += "; Secure"),
              o.sameSite)
            )
              switch (
                "string" == typeof o.sameSite
                  ? o.sameSite.toLowerCase()
                  : o.sameSite
              ) {
                case !0:
                  u += "; SameSite=Strict";
                  break;
                case "lax":
                  u += "; SameSite=Lax";
                  break;
                case "strict":
                  u += "; SameSite=Strict";
                  break;
                case "none":
                  u += "; SameSite=None";
                  break;
                default:
                  throw new TypeError("option sameSite is invalid");
              }
            return u;
          });
        var n = decodeURIComponent,
          r = encodeURIComponent,
          i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function o(e, t) {
          try {
            return t(e);
          } catch (t) {
            return e;
          }
        }
      },
      645: (e, t) => {
        (t.read = function (e, t, n, r, i) {
          var o,
            s,
            a = 8 * i - r - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            l = -7,
            f = n ? i - 1 : 0,
            h = n ? -1 : 1,
            d = e[t + f];
          for (
            f += h, o = d & ((1 << -l) - 1), d >>= -l, l += a;
            l > 0;
            o = 256 * o + e[t + f], f += h, l -= 8
          );
          for (
            s = o & ((1 << -l) - 1), o >>= -l, l += r;
            l > 0;
            s = 256 * s + e[t + f], f += h, l -= 8
          );
          if (0 === o) o = 1 - c;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, r)), (o -= c);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - r);
        }),
          (t.write = function (e, t, n, r, i, o) {
            var s,
              a,
              u,
              c = 8 * o - i - 1,
              l = (1 << c) - 1,
              f = l >> 1,
              h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = r ? 0 : o - 1,
              p = r ? 1 : -1,
              g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((a = isNaN(t) ? 1 : 0), (s = l))
                  : ((s = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    (t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >=
                      2 && (s++, (u /= 2)),
                    s + f >= l
                      ? ((a = 0), (s = l))
                      : s + f >= 1
                      ? ((a = (t * u - 1) * Math.pow(2, i)), (s += f))
                      : ((a = t * Math.pow(2, f - 1) * Math.pow(2, i)),
                        (s = 0)));
              i >= 8;
              e[n + d] = 255 & a, d += p, a /= 256, i -= 8
            );
            for (
              s = (s << i) | a, c += i;
              c > 0;
              e[n + d] = 255 & s, d += p, s /= 256, c -= 8
            );
            e[n + d - p] |= 128 * g;
          });
      },
      5826: (e) => {
        var t = {}.toString;
        e.exports =
          Array.isArray ||
          function (e) {
            return "[object Array]" == t.call(e);
          };
      },
      204: (e, t, n) => {
        e.exports = self.fetch || (self.fetch = n(5869).default || n(5869));
      },
      6808: (e, t, n) => {
        var r, i, o;
        void 0 ===
          (i =
            "function" ==
            typeof (r = o =
              function () {
                function e() {
                  for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) t[r] = n[r];
                  }
                  return t;
                }
                function t(e) {
                  return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                }
                return (function n(r) {
                  function i() {}
                  function o(t, n, o) {
                    if ("undefined" != typeof document) {
                      "number" ==
                        typeof (o = e({ path: "/" }, i.defaults, o)).expires &&
                        (o.expires = new Date(
                          1 * new Date() + 864e5 * o.expires
                        )),
                        (o.expires = o.expires ? o.expires.toUTCString() : "");
                      try {
                        var s = JSON.stringify(n);
                        /^[\{\[]/.test(s) && (n = s);
                      } catch (e) {}
                      (n = r.write
                        ? r.write(n, t)
                        : encodeURIComponent(String(n)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                          )),
                        (t = encodeURIComponent(String(t))
                          .replace(
                            /%(23|24|26|2B|5E|60|7C)/g,
                            decodeURIComponent
                          )
                          .replace(/[\(\)]/g, escape));
                      var a = "";
                      for (var u in o)
                        o[u] &&
                          ((a += "; " + u),
                          !0 !== o[u] && (a += "=" + o[u].split(";")[0]));
                      return (document.cookie = t + "=" + n + a);
                    }
                  }
                  function s(e, n) {
                    if ("undefined" != typeof document) {
                      for (
                        var i = {},
                          o = document.cookie
                            ? document.cookie.split("; ")
                            : [],
                          s = 0;
                        s < o.length;
                        s++
                      ) {
                        var a = o[s].split("="),
                          u = a.slice(1).join("=");
                        n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                        try {
                          var c = t(a[0]);
                          if (((u = (r.read || r)(u, c) || t(u)), n))
                            try {
                              u = JSON.parse(u);
                            } catch (e) {}
                          if (((i[c] = u), e === c)) break;
                        } catch (e) {}
                      }
                      return e ? i[e] : i;
                    }
                  }
                  return (
                    (i.set = o),
                    (i.get = function (e) {
                      return s(e, !1);
                    }),
                    (i.getJSON = function (e) {
                      return s(e, !0);
                    }),
                    (i.remove = function (t, n) {
                      o(t, "", e(n, { expires: -1 }));
                    }),
                    (i.defaults = {}),
                    (i.withConverter = n),
                    i
                  );
                })(function () {});
              })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i),
          (e.exports = o());
      },
      4971: function (e, t, n) {
        var r;
        (e = n.nmd(e)),
          (function (i) {
            t && t.nodeType, e && e.nodeType;
            var o = "object" == typeof n.g && n.g;
            o.global !== o && o.window !== o && o.self;
            var s,
              a = 2147483647,
              u = 36,
              c = 1,
              l = 26,
              f = 38,
              h = 700,
              d = 72,
              p = 128,
              g = "-",
              v = /^xn--/,
              y = /[^\x20-\x7E]/,
              m = /[\x2E\u3002\uFF0E\uFF61]/g,
              w = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
              },
              b = u - c,
              S = Math.floor,
              _ = String.fromCharCode;
            function A(e) {
              throw RangeError(w[e]);
            }
            function E(e, t) {
              for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
              return r;
            }
            function I(e, t) {
              var n = e.split("@"),
                r = "";
              return (
                n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
                r + E((e = e.replace(m, ".")).split("."), t).join(".")
              );
            }
            function P(e) {
              for (var t, n, r = [], i = 0, o = e.length; i < o; )
                (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
                  ? 56320 == (64512 & (n = e.charCodeAt(i++)))
                    ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                    : (r.push(t), i--)
                  : r.push(t);
              return r;
            }
            function C(e) {
              return E(e, function (e) {
                var t = "";
                return (
                  e > 65535 &&
                    ((t += _((((e -= 65536) >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  t + _(e)
                );
              }).join("");
            }
            function O(e, t) {
              return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
            }
            function T(e, t, n) {
              var r = 0;
              for (
                e = n ? S(e / h) : e >> 1, e += S(e / t);
                e > (b * l) >> 1;
                r += u
              )
                e = S(e / b);
              return S(r + ((b + 1) * e) / (e + f));
            }
            function U(e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                f,
                h,
                v,
                y,
                m,
                w = [],
                b = e.length,
                _ = 0,
                E = p,
                I = d;
              for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r)
                e.charCodeAt(r) >= 128 && A("not-basic"),
                  w.push(e.charCodeAt(r));
              for (i = n > 0 ? n + 1 : 0; i < b; ) {
                for (
                  o = _, s = 1, f = u;
                  i >= b && A("invalid-input"),
                    ((h =
                      (m = e.charCodeAt(i++)) - 48 < 10
                        ? m - 22
                        : m - 65 < 26
                        ? m - 65
                        : m - 97 < 26
                        ? m - 97
                        : u) >= u ||
                      h > S((a - _) / s)) &&
                      A("overflow"),
                    (_ += h * s),
                    !(h < (v = f <= I ? c : f >= I + l ? l : f - I));
                  f += u
                )
                  s > S(a / (y = u - v)) && A("overflow"), (s *= y);
                (I = T(_ - o, (t = w.length + 1), 0 == o)),
                  S(_ / t) > a - E && A("overflow"),
                  (E += S(_ / t)),
                  (_ %= t),
                  w.splice(_++, 0, E);
              }
              return C(w);
            }
            function k(e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                f,
                h,
                v,
                y,
                m,
                w,
                b,
                E,
                I,
                C = [];
              for (
                w = (e = P(e)).length, t = p, n = 0, o = d, s = 0;
                s < w;
                ++s
              )
                (m = e[s]) < 128 && C.push(_(m));
              for (r = i = C.length, i && C.push(g); r < w; ) {
                for (f = a, s = 0; s < w; ++s)
                  (m = e[s]) >= t && m < f && (f = m);
                for (
                  f - t > S((a - n) / (b = r + 1)) && A("overflow"),
                    n += (f - t) * b,
                    t = f,
                    s = 0;
                  s < w;
                  ++s
                )
                  if (((m = e[s]) < t && ++n > a && A("overflow"), m == t)) {
                    for (
                      h = n, v = u;
                      !(h < (y = v <= o ? c : v >= o + l ? l : v - o));
                      v += u
                    )
                      (I = h - y),
                        (E = u - y),
                        C.push(_(O(y + (I % E), 0))),
                        (h = S(I / E));
                    C.push(_(O(h, 0))), (o = T(n, b, r == i)), (n = 0), ++r;
                  }
                ++n, ++t;
              }
              return C.join("");
            }
            (s = {
              version: "1.3.2",
              ucs2: { decode: P, encode: C },
              decode: U,
              encode: k,
              toASCII: function (e) {
                return I(e, function (e) {
                  return y.test(e) ? "xn--" + k(e) : e;
                });
              },
              toUnicode: function (e) {
                return I(e, function (e) {
                  return v.test(e) ? U(e.slice(4).toLowerCase()) : e;
                });
              },
            }),
              void 0 ===
                (r = function () {
                  return s;
                }.call(t, n, t, e)) || (e.exports = r);
          })();
      },
      2587: (e) => {
        "use strict";
        function t(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        e.exports = function (e, n, r, i) {
          (n = n || "&"), (r = r || "=");
          var o = {};
          if ("string" != typeof e || 0 === e.length) return o;
          var s = /\+/g;
          e = e.split(n);
          var a = 1e3;
          i && "number" == typeof i.maxKeys && (a = i.maxKeys);
          var u = e.length;
          a > 0 && u > a && (u = a);
          for (var c = 0; c < u; ++c) {
            var l,
              f,
              h,
              d,
              p = e[c].replace(s, "%20"),
              g = p.indexOf(r);
            g >= 0
              ? ((l = p.substr(0, g)), (f = p.substr(g + 1)))
              : ((l = p), (f = "")),
              (h = decodeURIComponent(l)),
              (d = decodeURIComponent(f)),
              t(o, h)
                ? Array.isArray(o[h])
                  ? o[h].push(d)
                  : (o[h] = [o[h], d])
                : (o[h] = d);
          }
          return o;
        };
      },
      2361: (e) => {
        "use strict";
        var t = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        e.exports = function (e, n, r, i) {
          return (
            (n = n || "&"),
            (r = r || "="),
            null === e && (e = void 0),
            "object" == typeof e
              ? Object.keys(e)
                  .map(function (i) {
                    var o = encodeURIComponent(t(i)) + r;
                    return Array.isArray(e[i])
                      ? e[i]
                          .map(function (e) {
                            return o + encodeURIComponent(t(e));
                          })
                          .join(n)
                      : o + encodeURIComponent(t(e[i]));
                  })
                  .join(n)
              : i
              ? encodeURIComponent(t(i)) + r + encodeURIComponent(t(e))
              : ""
          );
        };
      },
      7673: (e, t, n) => {
        "use strict";
        (t.decode = t.parse = n(2587)), (t.encode = t.stringify = n(2361));
      },
      5869: (e, t, n) => {
        "use strict";
        function r(e, t) {
          return (
            (t = t || {}),
            new Promise(function (n, r) {
              var i = new XMLHttpRequest(),
                o = [],
                s = [],
                a = {},
                u = function () {
                  return {
                    ok: 2 == ((i.status / 100) | 0),
                    statusText: i.statusText,
                    status: i.status,
                    url: i.responseURL,
                    text: function () {
                      return Promise.resolve(i.responseText);
                    },
                    json: function () {
                      return Promise.resolve(i.responseText).then(JSON.parse);
                    },
                    blob: function () {
                      return Promise.resolve(new Blob([i.response]));
                    },
                    clone: u,
                    headers: {
                      keys: function () {
                        return o;
                      },
                      entries: function () {
                        return s;
                      },
                      get: function (e) {
                        return a[e.toLowerCase()];
                      },
                      has: function (e) {
                        return e.toLowerCase() in a;
                      },
                    },
                  };
                };
              for (var c in (i.open(t.method || "get", e, !0),
              (i.onload = function () {
                i
                  .getAllResponseHeaders()
                  .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
                    o.push((t = t.toLowerCase())),
                      s.push([t, n]),
                      (a[t] = a[t] ? a[t] + "," + n : n);
                  }),
                  n(u());
              }),
              (i.onerror = r),
              (i.withCredentials = "include" == t.credentials),
              t.headers))
                i.setRequestHeader(c, t.headers[c]);
              i.send(t.body || null);
            })
          );
        }
        n.r(t), n.d(t, { default: () => r });
      },
      8575: (e, t, n) => {
        "use strict";
        var r = n(4971),
          i = n(2502);
        function o() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        t.Qc = w;
        var s = /^([a-z0-9.+-]+:)/i,
          a = /:[0-9]*$/,
          u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          c = ["{", "}", "|", "\\", "^", "`"].concat([
            "<",
            ">",
            '"',
            "`",
            " ",
            "\r",
            "\n",
            "\t",
          ]),
          l = ["'"].concat(c),
          f = ["%", "/", "?", ";", "#"].concat(l),
          h = ["/", "?", "#"],
          d = /^[+a-z0-9A-Z_-]{0,63}$/,
          p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          g = { javascript: !0, "javascript:": !0 },
          v = { javascript: !0, "javascript:": !0 },
          y = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0,
          },
          m = n(7673);
        function w(e, t, n) {
          if (e && i.isObject(e) && e instanceof o) return e;
          var r = new o();
          return r.parse(e, t, n), r;
        }
        (o.prototype.parse = function (e, t, n) {
          if (!i.isString(e))
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof e
            );
          var o = e.indexOf("?"),
            a = -1 !== o && o < e.indexOf("#") ? "?" : "#",
            c = e.split(a);
          c[0] = c[0].replace(/\\/g, "/");
          var w = (e = c.join(a));
          if (((w = w.trim()), !n && 1 === e.split("#").length)) {
            var b = u.exec(w);
            if (b)
              return (
                (this.path = w),
                (this.href = w),
                (this.pathname = b[1]),
                b[2]
                  ? ((this.search = b[2]),
                    (this.query = t
                      ? m.parse(this.search.substr(1))
                      : this.search.substr(1)))
                  : t && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var S = s.exec(w);
          if (S) {
            var _ = (S = S[0]).toLowerCase();
            (this.protocol = _), (w = w.substr(S.length));
          }
          if (n || S || w.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var A = "//" === w.substr(0, 2);
            !A || (S && v[S]) || ((w = w.substr(2)), (this.slashes = !0));
          }
          if (!v[S] && (A || (S && !y[S]))) {
            for (var E, I, P = -1, C = 0; C < h.length; C++)
              -1 !== (O = w.indexOf(h[C])) && (-1 === P || O < P) && (P = O);
            for (
              -1 !==
                (I = -1 === P ? w.lastIndexOf("@") : w.lastIndexOf("@", P)) &&
                ((E = w.slice(0, I)),
                (w = w.slice(I + 1)),
                (this.auth = decodeURIComponent(E))),
                P = -1,
                C = 0;
              C < f.length;
              C++
            ) {
              var O;
              -1 !== (O = w.indexOf(f[C])) && (-1 === P || O < P) && (P = O);
            }
            -1 === P && (P = w.length),
              (this.host = w.slice(0, P)),
              (w = w.slice(P)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var T =
              "[" === this.hostname[0] &&
              "]" === this.hostname[this.hostname.length - 1];
            if (!T)
              for (
                var U = this.hostname.split(/\./), k = ((C = 0), U.length);
                C < k;
                C++
              ) {
                var R = U[C];
                if (R && !R.match(d)) {
                  for (var M = "", x = 0, D = R.length; x < D; x++)
                    R.charCodeAt(x) > 127 ? (M += "x") : (M += R[x]);
                  if (!M.match(d)) {
                    var F = U.slice(0, C),
                      N = U.slice(C + 1),
                      j = R.match(p);
                    j && (F.push(j[1]), N.unshift(j[2])),
                      N.length && (w = "/" + N.join(".") + w),
                      (this.hostname = F.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255
              ? (this.hostname = "")
              : (this.hostname = this.hostname.toLowerCase()),
              T || (this.hostname = r.toASCII(this.hostname));
            var L = this.port ? ":" + this.port : "",
              B = this.hostname || "";
            (this.host = B + L),
              (this.href += this.host),
              T &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2
                )),
                "/" !== w[0] && (w = "/" + w));
          }
          if (!g[_])
            for (C = 0, k = l.length; C < k; C++) {
              var q = l[C];
              if (-1 !== w.indexOf(q)) {
                var V = encodeURIComponent(q);
                V === q && (V = escape(q)), (w = w.split(q).join(V));
              }
            }
          var K = w.indexOf("#");
          -1 !== K && ((this.hash = w.substr(K)), (w = w.slice(0, K)));
          var H = w.indexOf("?");
          if (
            (-1 !== H
              ? ((this.search = w.substr(H)),
                (this.query = w.substr(H + 1)),
                t && (this.query = m.parse(this.query)),
                (w = w.slice(0, H)))
              : t && ((this.search = ""), (this.query = {})),
            w && (this.pathname = w),
            y[_] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            L = this.pathname || "";
            var z = this.search || "";
            this.path = L + z;
          }
          return (this.href = this.format()), this;
        }),
          (o.prototype.format = function () {
            var e = this.auth || "";
            e &&
              ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")),
              (e += "@"));
            var t = this.protocol || "",
              n = this.pathname || "",
              r = this.hash || "",
              o = !1,
              s = "";
            this.host
              ? (o = e + this.host)
              : this.hostname &&
                ((o =
                  e +
                  (-1 === this.hostname.indexOf(":")
                    ? this.hostname
                    : "[" + this.hostname + "]")),
                this.port && (o += ":" + this.port)),
              this.query &&
                i.isObject(this.query) &&
                Object.keys(this.query).length &&
                (s = m.stringify(this.query));
            var a = this.search || (s && "?" + s) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
              this.slashes || ((!t || y[t]) && !1 !== o)
                ? ((o = "//" + (o || "")),
                  n && "/" !== n.charAt(0) && (n = "/" + n))
                : o || (o = ""),
              r && "#" !== r.charAt(0) && (r = "#" + r),
              a && "?" !== a.charAt(0) && (a = "?" + a),
              t +
                o +
                (n = n.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) +
                (a = a.replace("#", "%23")) +
                r
            );
          }),
          (o.prototype.resolve = function (e) {
            return this.resolveObject(w(e, !1, !0)).format();
          }),
          (o.prototype.resolveObject = function (e) {
            if (i.isString(e)) {
              var t = new o();
              t.parse(e, !1, !0), (e = t);
            }
            for (
              var n = new o(), r = Object.keys(this), s = 0;
              s < r.length;
              s++
            ) {
              var a = r[s];
              n[a] = this[a];
            }
            if (((n.hash = e.hash), "" === e.href))
              return (n.href = n.format()), n;
            if (e.slashes && !e.protocol) {
              for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                var l = u[c];
                "protocol" !== l && (n[l] = e[l]);
              }
              return (
                y[n.protocol] &&
                  n.hostname &&
                  !n.pathname &&
                  (n.path = n.pathname = "/"),
                (n.href = n.format()),
                n
              );
            }
            if (e.protocol && e.protocol !== n.protocol) {
              if (!y[e.protocol]) {
                for (var f = Object.keys(e), h = 0; h < f.length; h++) {
                  var d = f[h];
                  n[d] = e[d];
                }
                return (n.href = n.format()), n;
              }
              if (((n.protocol = e.protocol), e.host || v[e.protocol]))
                n.pathname = e.pathname;
              else {
                for (
                  var p = (e.pathname || "").split("/");
                  p.length && !(e.host = p.shift());

                );
                e.host || (e.host = ""),
                  e.hostname || (e.hostname = ""),
                  "" !== p[0] && p.unshift(""),
                  p.length < 2 && p.unshift(""),
                  (n.pathname = p.join("/"));
              }
              if (
                ((n.search = e.search),
                (n.query = e.query),
                (n.host = e.host || ""),
                (n.auth = e.auth),
                (n.hostname = e.hostname || e.host),
                (n.port = e.port),
                n.pathname || n.search)
              ) {
                var g = n.pathname || "",
                  m = n.search || "";
                n.path = g + m;
              }
              return (
                (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n
              );
            }
            var w = n.pathname && "/" === n.pathname.charAt(0),
              b = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              S = b || w || (n.host && e.pathname),
              _ = S,
              A = (n.pathname && n.pathname.split("/")) || [],
              E =
                ((p = (e.pathname && e.pathname.split("/")) || []),
                n.protocol && !y[n.protocol]);
            if (
              (E &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === A[0] ? (A[0] = n.host) : A.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                  ((e.hostname = null),
                  (e.port = null),
                  e.host && ("" === p[0] ? (p[0] = e.host) : p.unshift(e.host)),
                  (e.host = null)),
                (S = S && ("" === p[0] || "" === A[0]))),
              b)
            )
              (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname =
                  e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (A = p);
            else if (p.length)
              A || (A = []),
                A.pop(),
                (A = A.concat(p)),
                (n.search = e.search),
                (n.query = e.query);
            else if (!i.isNullOrUndefined(e.search))
              return (
                E &&
                  ((n.hostname = n.host = A.shift()),
                  (T =
                    !!(n.host && n.host.indexOf("@") > 0) &&
                    n.host.split("@")) &&
                    ((n.auth = T.shift()), (n.host = n.hostname = T.shift()))),
                (n.search = e.search),
                (n.query = e.query),
                (i.isNull(n.pathname) && i.isNull(n.search)) ||
                  (n.path =
                    (n.pathname ? n.pathname : "") +
                    (n.search ? n.search : "")),
                (n.href = n.format()),
                n
              );
            if (!A.length)
              return (
                (n.pathname = null),
                n.search ? (n.path = "/" + n.search) : (n.path = null),
                (n.href = n.format()),
                n
              );
            for (
              var I = A.slice(-1)[0],
                P =
                  ((n.host || e.host || A.length > 1) &&
                    ("." === I || ".." === I)) ||
                  "" === I,
                C = 0,
                O = A.length;
              O >= 0;
              O--
            )
              "." === (I = A[O])
                ? A.splice(O, 1)
                : ".." === I
                ? (A.splice(O, 1), C++)
                : C && (A.splice(O, 1), C--);
            if (!S && !_) for (; C--; C) A.unshift("..");
            !S ||
              "" === A[0] ||
              (A[0] && "/" === A[0].charAt(0)) ||
              A.unshift(""),
              P && "/" !== A.join("/").substr(-1) && A.push("");
            var T,
              U = "" === A[0] || (A[0] && "/" === A[0].charAt(0));
            return (
              E &&
                ((n.hostname = n.host = U ? "" : A.length ? A.shift() : ""),
                (T =
                  !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                  ((n.auth = T.shift()), (n.host = n.hostname = T.shift()))),
              (S = S || (n.host && A.length)) && !U && A.unshift(""),
              A.length
                ? (n.pathname = A.join("/"))
                : ((n.pathname = null), (n.path = null)),
              (i.isNull(n.pathname) && i.isNull(n.search)) ||
                (n.path =
                  (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
              (n.auth = e.auth || n.auth),
              (n.slashes = n.slashes || e.slashes),
              (n.href = n.format()),
              n
            );
          }),
          (o.prototype.parseHost = function () {
            var e = this.host,
              t = a.exec(e);
            t &&
              (":" !== (t = t[0]) && (this.port = t.substr(1)),
              (e = e.substr(0, e.length - t.length))),
              e && (this.hostname = e);
          });
      },
      2502: (e) => {
        "use strict";
        e.exports = {
          isString: function (e) {
            return "string" == typeof e;
          },
          isObject: function (e) {
            return "object" == typeof e && null !== e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNullOrUndefined: function (e) {
            return null == e;
          },
        };
      },
      5877: (e, t, n) => {
        var r = n(3570),
          i = n(1171),
          o = i;
        (o.v1 = r), (o.v4 = i), (e.exports = o);
      },
      5327: (e) => {
        for (var t = [], n = 0; n < 256; ++n)
          t[n] = (n + 256).toString(16).substr(1);
        e.exports = function (e, n) {
          var r = n || 0,
            i = t;
          return [
            i[e[r++]],
            i[e[r++]],
            i[e[r++]],
            i[e[r++]],
            "-",
            i[e[r++]],
            i[e[r++]],
            "-",
            i[e[r++]],
            i[e[r++]],
            "-",
            i[e[r++]],
            i[e[r++]],
            "-",
            i[e[r++]],
            i[e[r++]],
            i[e[r++]],
            i[e[r++]],
            i[e[r++]],
            i[e[r++]],
          ].join("");
        };
      },
      5217: (e) => {
        var t =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
        if (t) {
          var n = new Uint8Array(16);
          e.exports = function () {
            return t(n), n;
          };
        } else {
          var r = new Array(16);
          e.exports = function () {
            for (var e, t = 0; t < 16; t++)
              0 == (3 & t) && (e = 4294967296 * Math.random()),
                (r[t] = (e >>> ((3 & t) << 3)) & 255);
            return r;
          };
        }
      },
      3570: (e, t, n) => {
        var r,
          i,
          o = n(5217),
          s = n(5327),
          a = 0,
          u = 0;
        e.exports = function (e, t, n) {
          var c = (t && n) || 0,
            l = t || [],
            f = (e = e || {}).node || r,
            h = void 0 !== e.clockseq ? e.clockseq : i;
          if (null == f || null == h) {
            var d = o();
            null == f && (f = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
              null == h && (h = i = 16383 & ((d[6] << 8) | d[7]));
          }
          var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
            g = void 0 !== e.nsecs ? e.nsecs : u + 1,
            v = p - a + (g - u) / 1e4;
          if (
            (v < 0 && void 0 === e.clockseq && (h = (h + 1) & 16383),
            (v < 0 || p > a) && void 0 === e.nsecs && (g = 0),
            g >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (a = p), (u = g), (i = h);
          var y = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
          (l[c++] = (y >>> 24) & 255),
            (l[c++] = (y >>> 16) & 255),
            (l[c++] = (y >>> 8) & 255),
            (l[c++] = 255 & y);
          var m = ((p / 4294967296) * 1e4) & 268435455;
          (l[c++] = (m >>> 8) & 255),
            (l[c++] = 255 & m),
            (l[c++] = ((m >>> 24) & 15) | 16),
            (l[c++] = (m >>> 16) & 255),
            (l[c++] = (h >>> 8) | 128),
            (l[c++] = 255 & h);
          for (var w = 0; w < 6; ++w) l[c + w] = f[w];
          return t || s(l);
        };
      },
      1171: (e, t, n) => {
        var r = n(5217),
          i = n(5327);
        e.exports = function (e, t, n) {
          var o = (t && n) || 0;
          "string" == typeof e &&
            ((t = "binary" === e ? new Array(16) : null), (e = null));
          var s = (e = e || {}).random || (e.rng || r)();
          if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
            for (var a = 0; a < 16; ++a) t[o + a] = s[a];
          return t || i(s);
        };
      },
      6249: () => {},
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            e(t, n)
          );
        },
        t = function () {
          return (
            (t =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            t.apply(this, arguments)
          );
        };
      function r(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function i(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function o(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(o(arguments[t]));
        return e;
      }
      var a,
        u = { VERBOSE: 1, DEBUG: 2, INFO: 3, WARN: 4, ERROR: 5 };
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.ERROR = "ERROR"),
          (e.INFO = "INFO"),
          (e.WARN = "WARN"),
          (e.VERBOSE = "VERBOSE");
      })(a || (a = {}));
      var c = (function () {
          function e(e, t) {
            void 0 === t && (t = a.WARN),
              (this.name = e),
              (this.level = t),
              (this._pluggables = []);
          }
          return (
            (e.prototype._padding = function (e) {
              return e < 10 ? "0" + e : "" + e;
            }),
            (e.prototype._ts = function () {
              var e = new Date();
              return (
                [
                  this._padding(e.getMinutes()),
                  this._padding(e.getSeconds()),
                ].join(":") +
                "." +
                e.getMilliseconds()
              );
            }),
            (e.prototype.configure = function (e) {
              return e ? ((this._config = e), this._config) : this._config;
            }),
            (e.prototype._log = function (t) {
              for (var n, r, i = [], o = 1; o < arguments.length; o++)
                i[o - 1] = arguments[o];
              var s = this.level;
              e.LOG_LEVEL && (s = e.LOG_LEVEL),
                "undefined" != typeof window &&
                  window.LOG_LEVEL &&
                  (s = window.LOG_LEVEL);
              var c = u[s];
              if (u[t] >= c) {
                var l = console.log.bind(console);
                t === a.ERROR &&
                  console.error &&
                  (l = console.error.bind(console)),
                  t === a.WARN &&
                    console.warn &&
                    (l = console.warn.bind(console));
                var f = "[" + t + "] " + this._ts() + " " + this.name,
                  h = "";
                if (1 === i.length && "string" == typeof i[0])
                  l((h = f + " - " + i[0]));
                else if (1 === i.length) (h = f + " " + i[0]), l(f, i[0]);
                else if ("string" == typeof i[0]) {
                  var d = i.slice(1);
                  1 === d.length && (d = d[0]),
                    (h = f + " - " + i[0] + " " + d),
                    l(f + " - " + i[0], d);
                } else (h = f + " " + i), l(f, i);
                try {
                  for (
                    var p = (function (e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                          n = t && e[t],
                          r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length)
                          return {
                            next: function () {
                              return (
                                e && r >= e.length && (e = void 0),
                                { value: e && e[r++], done: !e }
                              );
                            },
                          };
                        throw new TypeError(
                          t
                            ? "Object is not iterable."
                            : "Symbol.iterator is not defined."
                        );
                      })(this._pluggables),
                      g = p.next();
                    !g.done;
                    g = p.next()
                  ) {
                    var v = g.value,
                      y = { message: h, timestamp: Date.now() };
                    v.pushLogs([y]);
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    g && !g.done && (r = p.return) && r.call(p);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, s([a.INFO], e));
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, s([a.INFO], e));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, s([a.WARN], e));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, s([a.ERROR], e));
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, s([a.DEBUG], e));
            }),
            (e.prototype.verbose = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this._log.apply(this, s([a.VERBOSE], e));
            }),
            (e.prototype.addPluggable = function (e) {
              e &&
                "Logging" === e.getCategoryName() &&
                (this._pluggables.push(e), e.configure(this._config));
            }),
            (e.prototype.listPluggables = function () {
              return this._pluggables;
            }),
            (e.LOG_LEVEL = null),
            e
          );
        })(),
        l = new c("Amplify"),
        f = (function () {
          function e() {
            (this._components = []),
              (this._config = {}),
              (this._modules = {}),
              (this.Auth = null),
              (this.Analytics = null),
              (this.API = null),
              (this.Credentials = null),
              (this.Storage = null),
              (this.I18n = null),
              (this.Cache = null),
              (this.PubSub = null),
              (this.Interactions = null),
              (this.Pushnotification = null),
              (this.UI = null),
              (this.XR = null),
              (this.Predictions = null),
              (this.DataStore = null),
              (this.Geo = null),
              (this.Notifications = null),
              (this.Logger = c),
              (this.ServiceWorker = null);
          }
          return (
            (e.prototype.register = function (e) {
              l.debug("component registered in amplify", e),
                this._components.push(e),
                "function" == typeof e.getModuleName
                  ? ((this._modules[e.getModuleName()] = e),
                    (this[e.getModuleName()] = e))
                  : l.debug("no getModuleName method for component", e),
                e.configure(this._config);
            }),
            (e.prototype.configure = function (e) {
              var t = this;
              return e
                ? ((this._config = Object.assign(this._config, e)),
                  l.debug("amplify config", this._config),
                  Object.entries(this._modules).forEach(function (e) {
                    var n = o(e, 2),
                      r = (n[0], n[1]);
                    Object.keys(r).forEach(function (e) {
                      t._modules[e] && (r[e] = t._modules[e]);
                    });
                  }),
                  this._components.map(function (e) {
                    e.configure(t._config);
                  }),
                  this._config)
                : this._config;
            }),
            (e.prototype.addPluggable = function (e) {
              e &&
                e.getCategory &&
                "function" == typeof e.getCategory &&
                this._components.map(function (t) {
                  t.addPluggable &&
                    "function" == typeof t.addPluggable &&
                    t.addPluggable(e);
                });
            }),
            e
          );
        })(),
        h = new f(),
        d = function (e, t) {
          return (
            (d =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            d(e, t)
          );
        };
      function p(e, t) {
        function n() {
          this.constructor = e;
        }
        d(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var g,
        v,
        y,
        m = function () {
          return (
            (m =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            m.apply(this, arguments)
          );
        };
      function w(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function b(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function S(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function _(e) {
        return (
          e &&
          !!["provider"].find(function (t) {
            return e.hasOwnProperty(t);
          })
        );
      }
      function A(e) {
        return void 0 !== e.redirectSignIn;
      }
      !(function (e) {
        (e.Cognito = "COGNITO"),
          (e.Google = "Google"),
          (e.Facebook = "Facebook"),
          (e.Amazon = "LoginWithAmazon"),
          (e.Apple = "SignInWithApple");
      })(g || (g = {})),
        (function (e) {
          (e.NoConfig = "noConfig"),
            (e.MissingAuthConfig = "missingAuthConfig"),
            (e.EmptyUsername = "emptyUsername"),
            (e.InvalidUsername = "invalidUsername"),
            (e.EmptyPassword = "emptyPassword"),
            (e.EmptyCode = "emptyCode"),
            (e.SignUpError = "signUpError"),
            (e.NoMFA = "noMFA"),
            (e.InvalidMFA = "invalidMFA"),
            (e.EmptyChallengeResponse = "emptyChallengeResponse"),
            (e.NoUserSession = "noUserSession"),
            (e.Default = "default"),
            (e.DeviceConfig = "deviceConfig"),
            (e.NetworkError = "networkError"),
            (e.AutoSignInError = "autoSignInError");
        })(v || (v = {})),
        (function (e) {
          (e.API_KEY = "API_KEY"),
            (e.AWS_IAM = "AWS_IAM"),
            (e.OPENID_CONNECT = "OPENID_CONNECT"),
            (e.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"),
            (e.AWS_LAMBDA = "AWS_LAMBDA");
        })(y || (y = {}));
      var E = new c("Hub"),
        I =
          "undefined" != typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default",
        P = (function () {
          function e(e) {
            (this.listeners = []),
              (this.patterns = []),
              (this.protectedChannels = [
                "core",
                "auth",
                "api",
                "analytics",
                "interactions",
                "pubsub",
                "storage",
                "ui",
                "xr",
              ]),
              (this.name = e);
          }
          return (
            (e.prototype._remove = function (e, t) {
              if (e instanceof RegExp) {
                var n = this.patterns.find(function (t) {
                  return t.pattern.source === e.source;
                });
                if (!n) return void E.warn("No listeners for " + e);
                this.patterns = s(
                  this.patterns.filter(function (e) {
                    return e !== n;
                  })
                );
              } else {
                var r = this.listeners[e];
                if (!r) return void E.warn("No listeners for " + e);
                this.listeners[e] = s(
                  r.filter(function (e) {
                    return e.callback !== t;
                  })
                );
              }
            }),
            (e.prototype.remove = function (e, t) {
              this._remove(e, t);
            }),
            (e.prototype.dispatch = function (e, n, r, i) {
              void 0 === r && (r = ""),
                this.protectedChannels.indexOf(e) > -1 &&
                  (i === I ||
                    E.warn(
                      "WARNING: " +
                        e +
                        " is protected and dispatching on it can have unintended consequences"
                    ));
              var o = {
                channel: e,
                payload: t({}, n),
                source: r,
                patternInfo: [],
              };
              try {
                this._toListeners(o);
              } catch (e) {
                E.error(e);
              }
            }),
            (e.prototype.listen = function (e, t, n) {
              var r,
                i = this;
              if (
                (void 0 === n && (n = "noname"),
                (function (e) {
                  return void 0 !== e.onHubCapsule;
                })(t))
              )
                E.warn(
                  "WARNING onHubCapsule is Deprecated. Please pass in a callback."
                ),
                  (r = t.onHubCapsule.bind(t));
              else {
                if ("function" != typeof t)
                  throw new Error("No callback supplied to Hub");
                r = t;
              }
              if (e instanceof RegExp)
                this.patterns.push({ pattern: e, callback: r });
              else {
                var o = this.listeners[e];
                o || ((o = []), (this.listeners[e] = o)),
                  o.push({ name: n, callback: r });
              }
              return function () {
                i._remove(e, r);
              };
            }),
            (e.prototype._toListeners = function (e) {
              var n = e.channel,
                r = e.payload,
                i = this.listeners[n];
              if (
                (i &&
                  i.forEach(function (t) {
                    E.debug("Dispatching to " + n + " with ", r);
                    try {
                      t.callback(e);
                    } catch (e) {
                      E.error(e);
                    }
                  }),
                this.patterns.length > 0)
              ) {
                if (!r.message)
                  return void E.warn(
                    "Cannot perform pattern matching without a message key"
                  );
                var s = r.message;
                this.patterns.forEach(function (n) {
                  var r = s.match(n.pattern);
                  if (r) {
                    var i = o(r).slice(1),
                      a = t(t({}, e), { patternInfo: i });
                    try {
                      n.callback(a);
                    } catch (e) {
                      E.error(e);
                    }
                  }
                });
              }
            }),
            e
          );
        })(),
        C = new P("__default__"),
        O = {},
        T = (function () {
          function e() {}
          return (
            (e.setItem = function (e, t) {
              return (O[e] = t), O[e];
            }),
            (e.getItem = function (e) {
              return Object.prototype.hasOwnProperty.call(O, e) ? O[e] : void 0;
            }),
            (e.removeItem = function (e) {
              return delete O[e];
            }),
            (e.clear = function () {
              return (O = {});
            }),
            e
          );
        })(),
        U = (function () {
          function e() {
            try {
              (this.storageWindow = window.localStorage),
                this.storageWindow.setItem("aws.amplify.test-ls", 1),
                this.storageWindow.removeItem("aws.amplify.test-ls");
            } catch (e) {
              this.storageWindow = T;
            }
          }
          return (
            (e.prototype.getStorage = function () {
              return this.storageWindow;
            }),
            e
          );
        })(),
        k = function () {
          return {
            isBrowser:
              "undefined" != typeof window && void 0 !== window.document,
            isNode:
              "undefined" != typeof process &&
              null != process.versions &&
              null != process.versions.node,
          };
        },
        R = new c("Util"),
        M = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (n.nonRetryable = !0), n;
          }
          return (
            (function (t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            })(n, t),
            n
          );
        })(Error),
        x = 3e5,
        D = new c("CognitoCredentials"),
        F = new Promise(function (e, t) {
          return k().isBrowser
            ? window.gapi && window.gapi.auth2 && window.gapi.auth2
              ? (D.debug("google api already loaded"), e())
              : void setTimeout(function () {
                  return e();
                }, 2e3)
            : (D.debug("not in the browser, directly resolved"), e());
        }),
        N = (function () {
          function e() {
            (this.initialized = !1),
              (this.refreshGoogleToken = this.refreshGoogleToken.bind(this)),
              (this._refreshGoogleTokenImpl =
                this._refreshGoogleTokenImpl.bind(this));
          }
          return (
            (e.prototype.refreshGoogleToken = function () {
              return r(this, void 0, void 0, function () {
                return i(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.initialized
                        ? [3, 2]
                        : (D.debug("need to wait for the Google SDK loaded"),
                          [4, F]);
                    case 1:
                      e.sent(),
                        (this.initialized = !0),
                        D.debug("finish waiting"),
                        (e.label = 2);
                    case 2:
                      return [2, this._refreshGoogleTokenImpl()];
                  }
                });
              });
            }),
            (e.prototype._refreshGoogleTokenImpl = function () {
              var e = null;
              return (
                k().isBrowser &&
                  (e =
                    window.gapi && window.gapi.auth2
                      ? window.gapi.auth2
                      : null),
                e
                  ? new Promise(function (t, n) {
                      e.getAuthInstance()
                        .then(function (e) {
                          e ||
                            (D.debug("google Auth undefined"),
                            n(new M("google Auth undefined")));
                          var r = e.currentUser.get();
                          r.isSignedIn()
                            ? (D.debug("refreshing the google access token"),
                              r
                                .reloadAuthResponse()
                                .then(function (e) {
                                  var n = e.id_token,
                                    r = e.expires_at;
                                  t({ token: n, expires_at: r });
                                })
                                .catch(function (e) {
                                  e && "network_error" === e.error
                                    ? n(
                                        "Network error reloading google auth response"
                                      )
                                    : n(
                                        new M(
                                          "Failed to reload google auth response"
                                        )
                                      );
                                }))
                            : n(new M("User is not signed in with Google"));
                        })
                        .catch(function (e) {
                          D.debug("Failed to refresh google token", e),
                            n(new M("Failed to refresh google token"));
                        });
                    })
                  : (D.debug("no gapi auth2 available"),
                    Promise.reject("no gapi auth2 available"))
              );
            }),
            e
          );
        })(),
        j = new c("CognitoCredentials"),
        L = new Promise(function (e, t) {
          return k().isBrowser
            ? window.FB
              ? (j.debug("FB SDK already loaded"), e())
              : void setTimeout(function () {
                  return e();
                }, 2e3)
            : (j.debug("not in the browser, directly resolved"), e());
        }),
        B = (function () {
          function e() {
            (this.initialized = !1),
              (this.refreshFacebookToken =
                this.refreshFacebookToken.bind(this)),
              (this._refreshFacebookTokenImpl =
                this._refreshFacebookTokenImpl.bind(this));
          }
          return (
            (e.prototype.refreshFacebookToken = function () {
              return r(this, void 0, void 0, function () {
                return i(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.initialized
                        ? [3, 2]
                        : (j.debug("need to wait for the Facebook SDK loaded"),
                          [4, L]);
                    case 1:
                      e.sent(),
                        (this.initialized = !0),
                        j.debug("finish waiting"),
                        (e.label = 2);
                    case 2:
                      return [2, this._refreshFacebookTokenImpl()];
                  }
                });
              });
            }),
            (e.prototype._refreshFacebookTokenImpl = function () {
              var e = null;
              if ((k().isBrowser && (e = window.FB), !e)) {
                var t = "no fb sdk available";
                return j.debug(t), Promise.reject(new M(t));
              }
              return new Promise(function (t, n) {
                e.getLoginStatus(
                  function (e) {
                    if (e && e.authResponse) {
                      var r = e.authResponse,
                        i = r.accessToken,
                        o = 1e3 * r.expiresIn + new Date().getTime();
                      i ||
                        ((s = "the jwtToken is undefined"),
                        j.debug(s),
                        n(new M(s))),
                        t({ token: i, expires_at: o });
                    } else {
                      var s =
                        "no response from facebook when refreshing the jwt token";
                      j.debug(s), n(new M(s));
                    }
                  },
                  { scope: "public_profile,email" }
                );
              });
            }),
            e
          );
        })(),
        q = new N(),
        V = new B();
      function K(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function H(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      var z = function (e, t) {
        return (
          (z =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          z(e, t)
        );
      };
      function G(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        z(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var W,
        Y,
        J,
        $,
        Z,
        Q,
        X,
        ee,
        te,
        ne,
        re,
        ie,
        oe,
        se,
        ae,
        ue,
        ce,
        le,
        fe,
        he,
        de,
        pe,
        ge,
        ve,
        ye,
        me,
        we,
        be,
        Se,
        _e,
        Ae,
        Ee,
        Ie,
        Pe,
        Ce,
        Oe,
        Te,
        Ue,
        ke,
        Re,
        Me,
        xe,
        De,
        Fe,
        Ne,
        je,
        Le,
        Be,
        qe,
        Ve,
        Ke,
        He,
        ze,
        Ge,
        We,
        Ye,
        Je,
        $e = function () {
          return (
            ($e =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            $e.apply(this, arguments)
          );
        };
      function Ze(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function Qe(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(a) {
          return function (u) {
            return (function (a) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), a[0] && (s = 0)), s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & a[0]
                          ? r.return
                          : a[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, a[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                    case 0:
                    case 1:
                      i = a;
                      break;
                    case 4:
                      return s.label++, { value: a[1], done: !1 };
                    case 5:
                      s.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== a[0] && 2 !== a[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                        s.label = a[1];
                        break;
                      }
                      if (6 === a[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = a);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(a);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  a = t.call(e, s);
                } catch (e) {
                  (a = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, u]);
          };
        }
      }
      Object.create,
        Object.create,
        (function (e) {
          (e.AUTHENTICATED_ROLE = "AuthenticatedRole"), (e.DENY = "Deny");
        })(W || (W = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Y || (Y = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(J || (J = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })($ || ($ = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Z || (Z = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Q || (Q = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(X || (X = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ee || (ee = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(te || (te = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ne || (ne = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(re || (re = {})),
        (function (e) {
          (e.ACCESS_DENIED = "AccessDenied"),
            (e.INTERNAL_SERVER_ERROR = "InternalServerError");
        })(ie || (ie = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(oe || (oe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(se || (se = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ae || (ae = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ue || (ue = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ce || (ce = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(le || (le = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(fe || (fe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(he || (he = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(de || (de = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(pe || (pe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ge || (ge = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ve || (ve = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ye || (ye = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(me || (me = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(we || (we = {})),
        (function (e) {
          (e.CONTAINS = "Contains"),
            (e.EQUALS = "Equals"),
            (e.NOT_EQUAL = "NotEqual"),
            (e.STARTS_WITH = "StartsWith");
        })(be || (be = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Se || (Se = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(_e || (_e = {})),
        (function (e) {
          (e.RULES = "Rules"), (e.TOKEN = "Token");
        })(Ae || (Ae = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ee || (Ee = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ie || (Ie = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Pe || (Pe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ce || (Ce = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Oe || (Oe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Te || (Te = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ue || (Ue = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ke || (ke = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Re || (Re = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Me || (Me = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(xe || (xe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(De || (De = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Fe || (Fe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ne || (Ne = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(je || (je = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Le || (Le = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Be || (Be = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(qe || (qe = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ve || (Ve = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ke || (Ke = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(He || (He = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(ze || (ze = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ge || (Ge = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(We || (We = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Ye || (Ye = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return $e({}, e);
          };
        })(Je || (Je = {}));
      var Xe = (function () {
          function e(e) {
            (this.statusCode = e.statusCode),
              (this.headers = e.headers || {}),
              (this.body = e.body);
          }
          return (
            (e.isInstance = function (e) {
              if (!e) return !1;
              var t = e;
              return (
                "number" == typeof t.statusCode && "object" == typeof t.headers
              );
            }),
            e
          );
        })(),
        et = function () {
          return (
            (et =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            et.apply(this, arguments)
          );
        };
      function tt(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      var nt = (function () {
          function e(e) {
            (this.method = e.method || "GET"),
              (this.hostname = e.hostname || "localhost"),
              (this.port = e.port),
              (this.query = e.query || {}),
              (this.headers = e.headers || {}),
              (this.body = e.body),
              (this.protocol = e.protocol
                ? ":" !== e.protocol.substr(-1)
                  ? e.protocol + ":"
                  : e.protocol
                : "https:"),
              (this.path = e.path
                ? "/" !== e.path.charAt(0)
                  ? "/" + e.path
                  : e.path
                : "/");
          }
          return (
            (e.isInstance = function (e) {
              if (!e) return !1;
              var t = e;
              return (
                "method" in t &&
                "protocol" in t &&
                "hostname" in t &&
                "path" in t &&
                "object" == typeof t.query &&
                "object" == typeof t.headers
              );
            }),
            (e.prototype.clone = function () {
              var t,
                n = new e(et(et({}, this), { headers: et({}, this.headers) }));
              return (
                n.query &&
                  (n.query =
                    ((t = n.query),
                    Object.keys(t).reduce(function (e, n) {
                      var r,
                        i = t[n];
                      return et(
                        et({}, e),
                        (((r = {})[n] = Array.isArray(i)
                          ? (function () {
                              for (var e = [], t = 0; t < arguments.length; t++)
                                e = e.concat(tt(arguments[t]));
                              return e;
                            })(i)
                          : i),
                        r)
                      );
                    }, {}))),
                n
              );
            }),
            e
          );
        })(),
        rt = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r, i, o, s, a, u, c, l, f, h, d, p, g, v;
            return Qe(this, function (y) {
              switch (y.label) {
                case 0:
                  return (r = [$e({}, e)]), (v = {}), [4, Ct(e.body, t)];
                case 1:
                  switch (
                    ((n = $e.apply(
                      void 0,
                      r.concat([((v.body = y.sent()), v)])
                    )),
                    (o = "UnknownError"),
                    (o = Ot(e, n.body)))
                  ) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException":
                      return [3, 2];
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException":
                      return [3, 4];
                    case "InvalidIdentityPoolConfigurationException":
                    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
                      return [3, 6];
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException":
                      return [3, 8];
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                      return [3, 10];
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException":
                      return [3, 12];
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                      return [3, 14];
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                      return [3, 16];
                  }
                  return [3, 18];
                case 2:
                  return (s = [{}]), [4, ot(n, t)];
                case 3:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, s.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 4:
                  return (a = [{}]), [4, st(n, t)];
                case 5:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, a.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 6:
                  return (u = [{}]), [4, at(n, t)];
                case 7:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, u.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 8:
                  return (c = [{}]), [4, ut(n, t)];
                case 9:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, c.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 10:
                  return (l = [{}]), [4, lt(n, t)];
                case 11:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, l.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 12:
                  return (f = [{}]), [4, ft(n, t)];
                case 13:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, f.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 14:
                  return (h = [{}]), [4, ht(n, t)];
                case 15:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, h.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 16:
                  return (d = [{}]), [4, dt(n, t)];
                case 17:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, d.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 18:
                  (p = n.body),
                    (o = p.code || p.Code || o),
                    (i = $e($e({}, p), {
                      name: "" + o,
                      message: p.message || p.Message || o,
                      $fault: "client",
                      $metadata: It(e),
                    })),
                    (y.label = 19);
                case 19:
                  return (
                    (g = i.message || i.Message || o),
                    (i.message = g),
                    delete i.Message,
                    [2, Promise.reject(Object.assign(new Error(g), i))]
                  );
              }
            });
          });
        },
        it = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r, i, o, s, a, u, c, l, f, h, d, p, g, v;
            return Qe(this, function (y) {
              switch (y.label) {
                case 0:
                  return (r = [$e({}, e)]), (v = {}), [4, Ct(e.body, t)];
                case 1:
                  switch (
                    ((n = $e.apply(
                      void 0,
                      r.concat([((v.body = y.sent()), v)])
                    )),
                    (o = "UnknownError"),
                    (o = Ot(e, n.body)))
                  ) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException":
                      return [3, 2];
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException":
                      return [3, 4];
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException":
                      return [3, 6];
                    case "LimitExceededException":
                    case "com.amazonaws.cognitoidentity#LimitExceededException":
                      return [3, 8];
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                      return [3, 10];
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException":
                      return [3, 12];
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                      return [3, 14];
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                      return [3, 16];
                  }
                  return [3, 18];
                case 2:
                  return (s = [{}]), [4, ot(n, t)];
                case 3:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, s.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 4:
                  return (a = [{}]), [4, st(n, t)];
                case 5:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, a.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 6:
                  return (u = [{}]), [4, ut(n, t)];
                case 7:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, u.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 8:
                  return (c = [{}]), [4, ct(n, t)];
                case 9:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, c.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 10:
                  return (l = [{}]), [4, lt(n, t)];
                case 11:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, l.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 12:
                  return (f = [{}]), [4, ft(n, t)];
                case 13:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, f.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 14:
                  return (h = [{}]), [4, ht(n, t)];
                case 15:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, h.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 16:
                  return (d = [{}]), [4, dt(n, t)];
                case 17:
                  return (
                    (i = $e.apply(void 0, [
                      $e.apply(void 0, d.concat([y.sent()])),
                      { name: o, $metadata: It(e) },
                    ])),
                    [3, 19]
                  );
                case 18:
                  (p = n.body),
                    (o = p.code || p.Code || o),
                    (i = $e($e({}, p), {
                      name: "" + o,
                      message: p.message || p.Message || o,
                      $fault: "client",
                      $metadata: It(e),
                    })),
                    (y.label = 19);
                case 19:
                  return (
                    (g = i.message || i.Message || o),
                    (i.message = g),
                    delete i.Message,
                    [2, Promise.reject(Object.assign(new Error(g), i))]
                  );
              }
            });
          });
        },
        ot = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = vt(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "ExternalServiceException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        st = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = yt(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "InternalErrorException",
                      $fault: "server",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        at = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = mt(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "InvalidIdentityPoolConfigurationException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        ut = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = wt(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "InvalidParameterException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        ct = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = bt(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "LimitExceededException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        lt = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = St(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "NotAuthorizedException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        ft = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = _t(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "ResourceConflictException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        ht = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = At(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "ResourceNotFoundException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        dt = function (e, t) {
          return Ze(void 0, void 0, void 0, function () {
            var n, r;
            return Qe(this, function (i) {
              return (
                (n = e.body),
                (r = Et(n, t)),
                [
                  2,
                  $e(
                    {
                      name: "TooManyRequestsException",
                      $fault: "client",
                      $metadata: It(e),
                    },
                    r
                  ),
                ]
              );
            });
          });
        },
        pt = function (e, t) {
          return Object.entries(e).reduce(function (e, t) {
            var n,
              r = (function (e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r,
                  i,
                  o = n.call(e),
                  s = [];
                try {
                  for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                    s.push(r.value);
                } catch (e) {
                  i = { error: e };
                } finally {
                  try {
                    r && !r.done && (n = o.return) && n.call(o);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                return s;
              })(t, 2),
              i = r[0],
              o = r[1];
            return null === o ? e : $e($e({}, e), (((n = {})[i] = o), n));
          }, {});
        },
        gt = function (e, t) {
          return {
            AccessKeyId:
              void 0 !== e.AccessKeyId && null !== e.AccessKeyId
                ? e.AccessKeyId
                : void 0,
            Expiration:
              void 0 !== e.Expiration && null !== e.Expiration
                ? new Date(Math.round(1e3 * e.Expiration))
                : void 0,
            SecretKey:
              void 0 !== e.SecretKey && null !== e.SecretKey
                ? e.SecretKey
                : void 0,
            SessionToken:
              void 0 !== e.SessionToken && null !== e.SessionToken
                ? e.SessionToken
                : void 0,
          };
        },
        vt = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        yt = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        mt = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        wt = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        bt = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        St = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        _t = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        At = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        Et = function (e, t) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        It = function (e) {
          var t;
          return {
            httpStatusCode: e.statusCode,
            requestId:
              null !== (t = e.headers["x-amzn-requestid"]) && void 0 !== t
                ? t
                : e.headers["x-amzn-request-id"],
            extendedRequestId: e.headers["x-amz-id-2"],
            cfId: e.headers["x-amz-cf-id"],
          };
        },
        Pt = function (e, t, n, r, i) {
          return Ze(void 0, void 0, void 0, function () {
            var o, s, a, u, c, l;
            return Qe(this, function (f) {
              switch (f.label) {
                case 0:
                  return [4, e.endpoint()];
                case 1:
                  return (
                    (o = f.sent()),
                    (s = o.hostname),
                    (a = o.protocol),
                    (u = void 0 === a ? "https" : a),
                    (c = o.port),
                    (l = {
                      protocol: u,
                      hostname: s,
                      port: c,
                      method: "POST",
                      path: n,
                      headers: t,
                    }),
                    void 0 !== r && (l.hostname = r),
                    void 0 !== i && (l.body = i),
                    [2, new nt(l)]
                  );
              }
            });
          });
        },
        Ct = function (e, t) {
          return (function (e, t) {
            return (function (e, t) {
              return (
                void 0 === e && (e = new Uint8Array()),
                e instanceof Uint8Array
                  ? Promise.resolve(e)
                  : t.streamCollector(e) || Promise.resolve(new Uint8Array())
              );
            })(e, t).then(function (e) {
              return t.utf8Encoder(e);
            });
          })(e, t).then(function (e) {
            return e.length ? JSON.parse(e) : {};
          });
        },
        Ot = function (e, t) {
          var n,
            r = function (e) {
              var t = e;
              return (
                t.indexOf(":") >= 0 && (t = t.split(":")[0]),
                t.indexOf("#") >= 0 && (t = t.split("#")[1]),
                t
              );
            },
            i =
              ((n = e.headers),
              "x-amzn-errortype",
              Object.keys(n).find(function (e) {
                return e.toLowerCase() === "x-amzn-errortype".toLowerCase();
              }));
          return void 0 !== i
            ? r(e.headers[i])
            : void 0 !== t.code
            ? r(t.code)
            : void 0 !== t.__type
            ? r(t.__type)
            : "";
        },
        Tt = function () {
          return (
            (Tt =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Tt.apply(this, arguments)
          );
        };
      function Ut(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function kt(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      var Rt = function (e, t) {
          return function (n, r) {
            return function (r) {
              return Ut(void 0, void 0, void 0, function () {
                var i, o;
                return kt(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, n(r)];
                    case 1:
                      return (i = s.sent().response), [4, t(i, e)];
                    case 2:
                      return (o = s.sent()), [2, { response: i, output: o }];
                  }
                });
              });
            };
          };
        },
        Mt = function (e, t) {
          return function (n, r) {
            return function (r) {
              return Ut(void 0, void 0, void 0, function () {
                var i;
                return kt(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, t(r.input, e)];
                    case 1:
                      return (
                        (i = o.sent()), [2, n(Tt(Tt({}, r), { request: i }))]
                      );
                  }
                });
              });
            };
          };
        },
        xt = {
          name: "deserializerMiddleware",
          step: "deserialize",
          tags: ["DESERIALIZER"],
          override: !0,
        },
        Dt = {
          name: "serializerMiddleware",
          step: "serialize",
          tags: ["SERIALIZER"],
          override: !0,
        };
      function Ft(e, t, n) {
        return {
          applyToStack: function (r) {
            r.add(Rt(e, n), xt), r.add(Mt(e, t), Dt);
          },
        };
      }
      var Nt = function () {
        return (
          (Nt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Nt.apply(this, arguments)
        );
      };
      function jt(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function Lt() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(jt(arguments[t]));
        return e;
      }
      var Bt = function () {
          var e = [],
            t = [],
            n = new Set(),
            r = function (n) {
              return (
                e.forEach(function (e) {
                  n.add(e.middleware, Nt({}, e));
                }),
                t.forEach(function (e) {
                  n.addRelativeTo(e.middleware, Nt({}, e));
                }),
                n
              );
            },
            i = function (e) {
              var t = [];
              return (
                e.before.forEach(function (e) {
                  0 === e.before.length && 0 === e.after.length
                    ? t.push(e)
                    : t.push.apply(t, Lt(i(e)));
                }),
                t.push(e),
                e.after.reverse().forEach(function (e) {
                  0 === e.before.length && 0 === e.after.length
                    ? t.push(e)
                    : t.push.apply(t, Lt(i(e)));
                }),
                t
              );
            },
            o = {
              add: function (t, r) {
                void 0 === r && (r = {});
                var i = r.name,
                  o = r.override,
                  s = Nt(
                    { step: "initialize", priority: "normal", middleware: t },
                    r
                  );
                if (i) {
                  if (n.has(i)) {
                    if (!o)
                      throw new Error("Duplicate middleware name '" + i + "'");
                    var a = e.findIndex(function (e) {
                        return e.name === i;
                      }),
                      u = e[a];
                    if (u.step !== s.step || u.priority !== s.priority)
                      throw new Error(
                        '"' +
                          i +
                          '" middleware with ' +
                          u.priority +
                          " priority in " +
                          u.step +
                          " step cannot be overridden by same-name middleware with " +
                          s.priority +
                          " priority in " +
                          s.step +
                          " step."
                      );
                    e.splice(a, 1);
                  }
                  n.add(i);
                }
                e.push(s);
              },
              addRelativeTo: function (e, r) {
                var i = r.name,
                  o = r.override,
                  s = Nt({ middleware: e }, r);
                if (i) {
                  if (n.has(i)) {
                    if (!o)
                      throw new Error("Duplicate middleware name '" + i + "'");
                    var a = t.findIndex(function (e) {
                        return e.name === i;
                      }),
                      u = t[a];
                    if (
                      u.toMiddleware !== s.toMiddleware ||
                      u.relation !== s.relation
                    )
                      throw new Error(
                        '"' +
                          i +
                          '" middleware ' +
                          u.relation +
                          ' "' +
                          u.toMiddleware +
                          '" middleware cannot be overridden by same-name middleware ' +
                          s.relation +
                          ' "' +
                          s.toMiddleware +
                          '" middleware.'
                      );
                    t.splice(a, 1);
                  }
                  n.add(i);
                }
                t.push(s);
              },
              clone: function () {
                return r(Bt());
              },
              use: function (e) {
                e.applyToStack(o);
              },
              remove: function (r) {
                return "string" == typeof r
                  ? (function (r) {
                      var i = !1,
                        o = function (e) {
                          return (
                            !e.name ||
                            e.name !== r ||
                            ((i = !0), n.delete(r), !1)
                          );
                        };
                      return (e = e.filter(o)), (t = t.filter(o)), i;
                    })(r)
                  : (function (r) {
                      var i = !1,
                        o = function (e) {
                          return (
                            e.middleware !== r ||
                            ((i = !0), e.name && n.delete(e.name), !1)
                          );
                        };
                      return (e = e.filter(o)), (t = t.filter(o)), i;
                    })(r);
              },
              removeByTag: function (r) {
                var i = !1,
                  o = function (e) {
                    var t = e.tags,
                      o = e.name;
                    return (
                      !t || !t.includes(r) || (o && n.delete(o), (i = !0), !1)
                    );
                  };
                return (e = e.filter(o)), (t = t.filter(o)), i;
              },
              concat: function (e) {
                var t = r(Bt());
                return t.use(e), t;
              },
              applyToStack: r,
              resolve: function (n, r) {
                var o, s;
                try {
                  for (
                    var a = (function (e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                          n = t && e[t],
                          r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length)
                          return {
                            next: function () {
                              return (
                                e && r >= e.length && (e = void 0),
                                { value: e && e[r++], done: !e }
                              );
                            },
                          };
                        throw new TypeError(
                          t
                            ? "Object is not iterable."
                            : "Symbol.iterator is not defined."
                        );
                      })(
                        (function () {
                          var n,
                            r = [],
                            o = [],
                            s = {};
                          return (
                            e.forEach(function (e) {
                              var t = Nt(Nt({}, e), { before: [], after: [] });
                              t.name && (s[t.name] = t), r.push(t);
                            }),
                            t.forEach(function (e) {
                              var t = Nt(Nt({}, e), { before: [], after: [] });
                              t.name && (s[t.name] = t), o.push(t);
                            }),
                            o.forEach(function (e) {
                              if (e.toMiddleware) {
                                var t = s[e.toMiddleware];
                                if (void 0 === t)
                                  throw new Error(
                                    e.toMiddleware +
                                      " is not found when adding " +
                                      (e.name || "anonymous") +
                                      " middleware " +
                                      e.relation +
                                      " " +
                                      e.toMiddleware
                                  );
                                "after" === e.relation && t.after.push(e),
                                  "before" === e.relation && t.before.push(e);
                              }
                            }),
                            ((n = r),
                            n.sort(function (e, t) {
                              return (
                                qt[t.step] - qt[e.step] ||
                                Vt[t.priority || "normal"] -
                                  Vt[e.priority || "normal"]
                              );
                            }))
                              .map(i)
                              .reduce(function (e, t) {
                                return e.push.apply(e, Lt(t)), e;
                              }, [])
                              .map(function (e) {
                                return e.middleware;
                              })
                          );
                        })().reverse()
                      ),
                      u = a.next();
                    !u.done;
                    u = a.next()
                  )
                    n = (0, u.value)(n, r);
                } catch (e) {
                  o = { error: e };
                } finally {
                  try {
                    u && !u.done && (s = a.return) && s.call(a);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                return n;
              },
            };
          return o;
        },
        qt = {
          initialize: 5,
          serialize: 4,
          build: 3,
          finalizeRequest: 2,
          deserialize: 1,
        },
        Vt = { high: 3, normal: 2, low: 1 },
        Kt = (function () {
          function e(e) {
            (this.middlewareStack = Bt()), (this.config = e);
          }
          return (
            (e.prototype.send = function (e, t, n) {
              var r = "function" != typeof t ? t : void 0,
                i = "function" == typeof t ? t : n,
                o = e.resolveMiddleware(this.middlewareStack, this.config, r);
              if (!i)
                return o(e).then(function (e) {
                  return e.output;
                });
              o(e)
                .then(
                  function (e) {
                    return i(null, e.output);
                  },
                  function (e) {
                    return i(e);
                  }
                )
                .catch(function () {});
            }),
            (e.prototype.destroy = function () {
              this.config.requestHandler.destroy &&
                this.config.requestHandler.destroy();
            }),
            e
          );
        })(),
        Ht = function () {
          this.middlewareStack = Bt();
        },
        zt = function (e, t) {
          return (
            (zt =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            zt(e, t)
          );
        };
      function Gt(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      var Wt = function () {
        var e = Object.getPrototypeOf(this).constructor,
          t = Function.bind.apply(
            String,
            (function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(Gt(arguments[t]));
              return e;
            })([null], arguments)
          ),
          n = new t();
        return Object.setPrototypeOf(n, e.prototype), n;
      };
      (Wt.prototype = Object.create(String.prototype, {
        constructor: {
          value: Wt,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        Object.setPrototypeOf(Wt, String),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          (function (e, t) {
            function n() {
              this.constructor = e;
            }
            zt(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          })(t, e),
            (t.prototype.deserializeJSON = function () {
              return JSON.parse(e.prototype.toString.call(this));
            }),
            (t.prototype.toJSON = function () {
              return e.prototype.toString.call(this);
            }),
            (t.fromObject = function (e) {
              return e instanceof t
                ? e
                : new t(
                    e instanceof String || "string" == typeof e
                      ? e
                      : JSON.stringify(e)
                  );
            });
        })(Wt);
      var Yt = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.input = t), n;
          }
          return (
            G(t, e),
            (t.prototype.resolveMiddleware = function (e, t, n) {
              this.middlewareStack.use(Ft(t, this.serialize, this.deserialize));
              var r = e.concat(this.middlewareStack),
                i = {
                  logger: t.logger,
                  clientName: "CognitoIdentityClient",
                  commandName: "GetCredentialsForIdentityCommand",
                  inputFilterSensitiveLog: de.filterSensitiveLog,
                  outputFilterSensitiveLog: ge.filterSensitiveLog,
                },
                o = t.requestHandler;
              return r.resolve(function (e) {
                return o.handle(e.request, n || {});
              }, i);
            }),
            (t.prototype.serialize = function (e, t) {
              return (function (e, t) {
                return Ze(void 0, void 0, void 0, function () {
                  var n, r;
                  return Qe(this, function (i) {
                    return (
                      (n = {
                        "content-type": "application/x-amz-json-1.1",
                        "x-amz-target":
                          "AWSCognitoIdentityService.GetCredentialsForIdentity",
                      }),
                      (r = JSON.stringify(
                        (function (e, t) {
                          return $e(
                            $e(
                              $e(
                                {},
                                void 0 !== e.CustomRoleArn &&
                                  null !== e.CustomRoleArn && {
                                    CustomRoleArn: e.CustomRoleArn,
                                  }
                              ),
                              void 0 !== e.IdentityId &&
                                null !== e.IdentityId && {
                                  IdentityId: e.IdentityId,
                                }
                            ),
                            void 0 !== e.Logins &&
                              null !== e.Logins && { Logins: pt(e.Logins, t) }
                          );
                        })(e, t)
                      )),
                      [2, Pt(t, n, "/", void 0, r)]
                    );
                  });
                });
              })(e, t);
            }),
            (t.prototype.deserialize = function (e, t) {
              return (function (e, t) {
                return Ze(void 0, void 0, void 0, function () {
                  var n, r, i;
                  return Qe(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return e.statusCode >= 300
                          ? [2, rt(e, t)]
                          : [4, Ct(e.body, t)];
                      case 1:
                        return (
                          (n = o.sent()),
                          (r = (function (e, t) {
                            return {
                              Credentials:
                                void 0 !== e.Credentials &&
                                null !== e.Credentials
                                  ? gt(e.Credentials)
                                  : void 0,
                              IdentityId:
                                void 0 !== e.IdentityId && null !== e.IdentityId
                                  ? e.IdentityId
                                  : void 0,
                            };
                          })(n)),
                          (i = $e({ $metadata: It(e) }, r)),
                          [2, Promise.resolve(i)]
                        );
                    }
                  });
                });
              })(e, t);
            }),
            t
          );
        })(Ht),
        Jt = function (e, t) {
          return (
            (Jt =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            Jt(e, t)
          );
        },
        $t = (function (e) {
          function t(t, n) {
            void 0 === n && (n = !0);
            var r = e.call(this, t) || this;
            return (r.tryNextLink = n), r;
          }
          return (
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              Jt(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            t
          );
        })(Error);
      function Zt(e) {
        return Promise.all(
          Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return (
              "string" == typeof r
                ? t.push([n, r])
                : t.push(
                    r().then(function (e) {
                      return [n, e];
                    })
                  ),
              t
            );
          }, [])
        ).then(function (e) {
          return e.reduce(function (e, t) {
            var n = (function (e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r,
                  i,
                  o = n.call(e),
                  s = [];
                try {
                  for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                    s.push(r.value);
                } catch (e) {
                  i = { error: e };
                } finally {
                  try {
                    r && !r.done && (n = o.return) && n.call(o);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                return s;
              })(t, 2),
              r = n[0],
              i = n[1];
            return (e[r] = i), e;
          }, {});
        });
      }
      function Qt(e) {
        var t = this;
        return function () {
          return K(t, void 0, void 0, function () {
            var t, n, r, i, o, s, a, u, c, l, f, h, d;
            return H(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (l = (c = e.client).send),
                    (f = Yt.bind),
                    (d = {
                      CustomRoleArn: e.customRoleArn,
                      IdentityId: e.identityId,
                    }),
                    e.logins ? [4, Zt(e.logins)] : [3, 2]
                  );
                case 1:
                  return (h = p.sent()), [3, 3];
                case 2:
                  (h = void 0), (p.label = 3);
                case 3:
                  return [
                    4,
                    l.apply(c, [
                      new (f.apply(Yt, [void 0, ((d.Logins = h), d)]))(),
                    ]),
                  ];
                case 4:
                  return (
                    (t = p.sent().Credentials),
                    (n =
                      void 0 === t
                        ? (function () {
                            throw new $t(
                              "Response from Amazon Cognito contained no credentials"
                            );
                          })()
                        : t),
                    (r = n.AccessKeyId),
                    (i =
                      void 0 === r
                        ? (function () {
                            throw new $t(
                              "Response from Amazon Cognito contained no access key ID"
                            );
                          })()
                        : r),
                    (o = n.Expiration),
                    (s = n.SecretKey),
                    (a =
                      void 0 === s
                        ? (function () {
                            throw new $t(
                              "Response from Amazon Cognito contained no secret key"
                            );
                          })()
                        : s),
                    (u = n.SessionToken),
                    [
                      2,
                      {
                        identityId: e.identityId,
                        accessKeyId: i,
                        secretAccessKey: a,
                        sessionToken: u,
                        expiration: o,
                      },
                    ]
                  );
              }
            });
          });
        };
      }
      var Xt = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.input = t), n;
          }
          return (
            G(t, e),
            (t.prototype.resolveMiddleware = function (e, t, n) {
              this.middlewareStack.use(Ft(t, this.serialize, this.deserialize));
              var r = e.concat(this.middlewareStack),
                i = {
                  logger: t.logger,
                  clientName: "CognitoIdentityClient",
                  commandName: "GetIdCommand",
                  inputFilterSensitiveLog: ye.filterSensitiveLog,
                  outputFilterSensitiveLog: me.filterSensitiveLog,
                },
                o = t.requestHandler;
              return r.resolve(function (e) {
                return o.handle(e.request, n || {});
              }, i);
            }),
            (t.prototype.serialize = function (e, t) {
              return (function (e, t) {
                return Ze(void 0, void 0, void 0, function () {
                  var n, r;
                  return Qe(this, function (i) {
                    return (
                      (n = {
                        "content-type": "application/x-amz-json-1.1",
                        "x-amz-target": "AWSCognitoIdentityService.GetId",
                      }),
                      (r = JSON.stringify(
                        (function (e, t) {
                          return $e(
                            $e(
                              $e(
                                {},
                                void 0 !== e.AccountId &&
                                  null !== e.AccountId && {
                                    AccountId: e.AccountId,
                                  }
                              ),
                              void 0 !== e.IdentityPoolId &&
                                null !== e.IdentityPoolId && {
                                  IdentityPoolId: e.IdentityPoolId,
                                }
                            ),
                            void 0 !== e.Logins &&
                              null !== e.Logins && { Logins: pt(e.Logins, t) }
                          );
                        })(e, t)
                      )),
                      [2, Pt(t, n, "/", void 0, r)]
                    );
                  });
                });
              })(e, t);
            }),
            (t.prototype.deserialize = function (e, t) {
              return (function (e, t) {
                return Ze(void 0, void 0, void 0, function () {
                  var n, r, i;
                  return Qe(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return e.statusCode >= 300
                          ? [2, it(e, t)]
                          : [4, Ct(e.body, t)];
                      case 1:
                        return (
                          (n = o.sent()),
                          (r = (function (e, t) {
                            return {
                              IdentityId:
                                void 0 !== e.IdentityId && null !== e.IdentityId
                                  ? e.IdentityId
                                  : void 0,
                            };
                          })(n)),
                          (i = $e({ $metadata: It(e) }, r)),
                          [2, Promise.resolve(i)]
                        );
                    }
                  });
                });
              })(e, t);
            }),
            t
          );
        })(Ht),
        en = "IdentityIds",
        tn = (function () {
          function e(e) {
            void 0 === e && (e = "aws:cognito-identity-ids"), (this.dbName = e);
          }
          return (
            (e.prototype.getItem = function (e) {
              return this.withObjectStore("readonly", function (t) {
                var n = t.get(e);
                return new Promise(function (e) {
                  (n.onerror = function () {
                    return e(null);
                  }),
                    (n.onsuccess = function () {
                      return e(n.result ? n.result.value : null);
                    });
                });
              }).catch(function () {
                return null;
              });
            }),
            (e.prototype.removeItem = function (e) {
              return this.withObjectStore("readwrite", function (t) {
                var n = t.delete(e);
                return new Promise(function (e, t) {
                  (n.onerror = function () {
                    return t(n.error);
                  }),
                    (n.onsuccess = function () {
                      return e();
                    });
                });
              });
            }),
            (e.prototype.setItem = function (e, t) {
              return this.withObjectStore("readwrite", function (n) {
                var r = n.put({ id: e, value: t });
                return new Promise(function (e, t) {
                  (r.onerror = function () {
                    return t(r.error);
                  }),
                    (r.onsuccess = function () {
                      return e();
                    });
                });
              });
            }),
            (e.prototype.getDb = function () {
              var e = self.indexedDB.open(this.dbName, 1);
              return new Promise(function (t, n) {
                (e.onsuccess = function () {
                  t(e.result);
                }),
                  (e.onerror = function () {
                    n(e.error);
                  }),
                  (e.onblocked = function () {
                    n(new Error("Unable to access DB"));
                  }),
                  (e.onupgradeneeded = function () {
                    var t = e.result;
                    (t.onerror = function () {
                      n(new Error("Failed to create object store"));
                    }),
                      t.createObjectStore(en, { keyPath: "id" });
                  });
              });
            }),
            (e.prototype.withObjectStore = function (e, t) {
              return this.getDb().then(function (n) {
                var r = n.transaction(en, e);
                return (
                  (r.oncomplete = function () {
                    return n.close();
                  }),
                  new Promise(function (e, n) {
                    (r.onerror = function () {
                      return n(r.error);
                    }),
                      e(t(r.objectStore(en)));
                  }).catch(function (e) {
                    throw (n.close(), e);
                  })
                );
              });
            }),
            e
          );
        })(),
        nn = new ((function () {
          function e(e) {
            void 0 === e && (e = {}), (this.store = e);
          }
          return (
            (e.prototype.getItem = function (e) {
              return e in this.store ? this.store[e] : null;
            }),
            (e.prototype.removeItem = function (e) {
              delete this.store[e];
            }),
            (e.prototype.setItem = function (e, t) {
              this.store[e] = t;
            }),
            e
          );
        })())();
      var rn = new c("Parser"),
        on = function (e) {
          var n,
            r = {};
          if (e.aws_mobile_analytics_app_id) {
            var i = {
              AWSPinpoint: {
                appId: e.aws_mobile_analytics_app_id,
                region: e.aws_mobile_analytics_app_region,
              },
            };
            r.Analytics = i;
          }
          return (
            (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) &&
              (r.Auth = {
                userPoolId: e.aws_user_pools_id,
                userPoolWebClientId: e.aws_user_pools_web_client_id,
                region: e.aws_cognito_region,
                identityPoolId: e.aws_cognito_identity_pool_id,
                identityPoolRegion: e.aws_cognito_region,
                mandatorySignIn: "enable" === e.aws_mandatory_sign_in,
                signUpVerificationMethod:
                  e.aws_cognito_sign_up_verification_method || "code",
              }),
            (n = e.aws_user_files_s3_bucket
              ? {
                  AWSS3: {
                    bucket: e.aws_user_files_s3_bucket,
                    region: e.aws_user_files_s3_bucket_region,
                    dangerouslyConnectToHttpEndpointForTesting:
                      e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing,
                  },
                }
              : e
              ? e.Storage || e
              : {}),
            e.Logging &&
              (r.Logging = t(t({}, e.Logging), {
                region: e.aws_project_region,
              })),
            e.geo &&
              ((r.Geo = Object.assign({}, e.geo)),
              e.geo.amazon_location_service &&
                (r.Geo = {
                  AmazonLocationService: e.geo.amazon_location_service,
                })),
            (r.Analytics = Object.assign({}, r.Analytics, e.Analytics)),
            (r.Auth = Object.assign({}, r.Auth, e.Auth)),
            (r.Storage = Object.assign({}, n)),
            (r.Logging = Object.assign({}, r.Logging, e.Logging)),
            rn.debug("parse config", e, "to amplifyconfig", r),
            r
          );
        },
        sn = n(7643);
      function an(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function un(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      for (
        var cn = function (e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, ln);
          },
          ln = function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
          },
          fn = (function () {
            function e(e) {
              var t = (void 0 === e ? {} : e).requestTimeout;
              this.requestTimeout = t;
            }
            return (
              (e.prototype.destroy = function () {}),
              (e.prototype.handle = function (e, t) {
                var n = (void 0 === t ? {} : t).abortSignal,
                  r = this.requestTimeout;
                if (null == n ? void 0 : n.aborted) {
                  var i = new Error("Request aborted");
                  return (i.name = "AbortError"), Promise.reject(i);
                }
                var o = e.path;
                if (e.query) {
                  var s = (function (e) {
                    var t,
                      n,
                      r = [];
                    try {
                      for (
                        var i = (function (e) {
                            var t =
                                "function" == typeof Symbol && Symbol.iterator,
                              n = t && e[t],
                              r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length)
                              return {
                                next: function () {
                                  return (
                                    e && r >= e.length && (e = void 0),
                                    { value: e && e[r++], done: !e }
                                  );
                                },
                              };
                            throw new TypeError(
                              t
                                ? "Object is not iterable."
                                : "Symbol.iterator is not defined."
                            );
                          })(Object.keys(e).sort()),
                          o = i.next();
                        !o.done;
                        o = i.next()
                      ) {
                        var s = o.value,
                          a = e[s];
                        if (((s = cn(s)), Array.isArray(a)))
                          for (var u = 0, c = a.length; u < c; u++)
                            r.push(s + "=" + cn(a[u]));
                        else {
                          var l = s;
                          (a || "string" == typeof a) && (l += "=" + cn(a)),
                            r.push(l);
                        }
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                    return r.join("&");
                  })(e.query);
                  s && (o += "?" + s);
                }
                var a = e.port,
                  u = e.method,
                  c = e.protocol + "//" + e.hostname + (a ? ":" + a : "") + o,
                  l = {
                    body: "GET" === u || "HEAD" === u ? void 0 : e.body,
                    headers: new Headers(e.headers),
                    method: u,
                  };
                "undefined" != typeof AbortController && (l.signal = n);
                var f,
                  h = new Request(c, l),
                  d = [
                    fetch(h).then(function (e) {
                      var t,
                        n,
                        r = e.headers,
                        i = {};
                      try {
                        for (
                          var o = (function (e) {
                              var t =
                                  "function" == typeof Symbol &&
                                  Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                              if (n) return n.call(e);
                              if (e && "number" == typeof e.length)
                                return {
                                  next: function () {
                                    return (
                                      e && r >= e.length && (e = void 0),
                                      { value: e && e[r++], done: !e }
                                    );
                                  },
                                };
                              throw new TypeError(
                                t
                                  ? "Object is not iterable."
                                  : "Symbol.iterator is not defined."
                              );
                            })(r.entries()),
                            s = o.next();
                          !s.done;
                          s = o.next()
                        ) {
                          var a = s.value;
                          i[a[0]] = a[1];
                        }
                      } catch (e) {
                        t = { error: e };
                      } finally {
                        try {
                          s && !s.done && (n = o.return) && n.call(o);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                      return void 0 !== e.body
                        ? {
                            response: new Xe({
                              headers: i,
                              statusCode: e.status,
                              body: e.body,
                            }),
                          }
                        : e.blob().then(function (t) {
                            return {
                              response: new Xe({
                                headers: i,
                                statusCode: e.status,
                                body: t,
                              }),
                            };
                          });
                    }),
                    ((f = r),
                    void 0 === f && (f = 0),
                    new Promise(function (e, t) {
                      f &&
                        setTimeout(function () {
                          var e = new Error(
                            "Request did not complete within " + f + " ms"
                          );
                          (e.name = "TimeoutError"), t(e);
                        }, f);
                    })),
                  ];
                return (
                  n &&
                    d.push(
                      new Promise(function (e, t) {
                        n.onabort = function () {
                          var e = new Error("Request aborted");
                          (e.name = "AbortError"), t(e);
                        };
                      })
                    ),
                  Promise.race(d)
                );
              }),
              e
            );
          })(),
          hn = {},
          dn = new Array(64),
          pn = 0,
          gn = "A".charCodeAt(0),
          vn = "Z".charCodeAt(0);
        pn + gn <= vn;
        pn++
      ) {
        var yn = String.fromCharCode(pn + gn);
        (hn[yn] = pn), (dn[pn] = yn);
      }
      for (
        pn = 0, gn = "a".charCodeAt(0), vn = "z".charCodeAt(0);
        pn + gn <= vn;
        pn++
      ) {
        yn = String.fromCharCode(pn + gn);
        var mn = pn + 26;
        (hn[yn] = mn), (dn[mn] = yn);
      }
      for (pn = 0; pn < 10; pn++)
        (hn[pn.toString(10)] = pn + 52),
          (yn = pn.toString(10)),
          (mn = pn + 52),
          (hn[yn] = mn),
          (dn[mn] = yn);
      (hn["+"] = 62), (dn[62] = "+"), (hn["/"] = 63), (dn[63] = "/");
      var wn = 6,
        bn = 8;
      function Sn(e) {
        var t = (e.length / 4) * 3;
        "==" === e.substr(-2) ? (t -= 2) : "=" === e.substr(-1) && t--;
        for (
          var n = new ArrayBuffer(t), r = new DataView(n), i = 0;
          i < e.length;
          i += 4
        ) {
          for (var o = 0, s = 0, a = i, u = i + 3; a <= u; a++)
            "=" !== e[a]
              ? ((o |= hn[e[a]] << ((u - a) * wn)), (s += wn))
              : (o >>= wn);
          var c = (i / 4) * 3;
          o >>= s % bn;
          for (var l = Math.floor(s / bn), f = 0; f < l; f++) {
            var h = (l - f - 1) * bn;
            r.setUint8(c + f, (o & (255 << h)) >> h);
          }
        }
        return new Uint8Array(n);
      }
      function _n(e) {
        return new Promise(function (t, n) {
          var r = new FileReader();
          (r.onloadend = function () {
            var e;
            if (2 !== r.readyState)
              return n(new Error("Reader aborted too early"));
            var i = null !== (e = r.result) && void 0 !== e ? e : "",
              o = i.indexOf(","),
              s = o > -1 ? o + 1 : i.length;
            t(i.substring(s));
          }),
            (r.onabort = function () {
              return n(new Error("Read aborted"));
            }),
            (r.onerror = function () {
              return n(r.error);
            }),
            r.readAsDataURL(e);
        });
      }
      var An = function () {
        return (
          (An =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          An.apply(this, arguments)
        );
      };
      function En(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function In(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function Pn(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      var Cn = {
          name: "retryMiddleware",
          tags: ["RETRY"],
          step: "finalizeRequest",
          priority: "high",
          override: !0,
        },
        On = function (e) {
          return {
            applyToStack: function (t) {
              t.add(
                (function (e) {
                  return function (t, n) {
                    return function (r) {
                      return En(void 0, void 0, void 0, function () {
                        var i;
                        return In(this, function (o) {
                          return (
                            (null ===
                              (i = null == e ? void 0 : e.retryStrategy) ||
                            void 0 === i
                              ? void 0
                              : i.mode) &&
                              (n.userAgent = (function () {
                                for (
                                  var e = [], t = 0;
                                  t < arguments.length;
                                  t++
                                )
                                  e = e.concat(Pn(arguments[t]));
                                return e;
                              })(n.userAgent || [], [
                                ["cfg/retry-mode", e.retryStrategy.mode],
                              ])),
                            [2, e.retryStrategy.retry(t, r)]
                          );
                        });
                      });
                    };
                  };
                })(e),
                Cn
              );
            },
          };
        },
        Tn = [
          "AuthFailure",
          "InvalidSignatureException",
          "RequestExpired",
          "RequestInTheFuture",
          "RequestTimeTooSkewed",
          "SignatureDoesNotMatch",
        ],
        Un = [
          "BandwidthLimitExceeded",
          "EC2ThrottledException",
          "LimitExceededException",
          "PriorRequestNotComplete",
          "ProvisionedThroughputExceededException",
          "RequestLimitExceeded",
          "RequestThrottled",
          "RequestThrottledException",
          "SlowDown",
          "ThrottledException",
          "Throttling",
          "ThrottlingException",
          "TooManyRequestsException",
          "TransactionInProgressException",
        ],
        kn = [
          "AbortError",
          "TimeoutError",
          "RequestTimeout",
          "RequestTimeoutException",
        ],
        Rn = [500, 502, 503, 504],
        Mn = function (e) {
          var t, n;
          return (
            429 ===
              (null === (t = e.$metadata) || void 0 === t
                ? void 0
                : t.httpStatusCode) ||
            Un.includes(e.name) ||
            1 ==
              (null === (n = e.$retryable) || void 0 === n
                ? void 0
                : n.throttling)
          );
        },
        xn = n(5877),
        Dn = 500,
        Fn = function (e) {
          var t = e,
            n = e,
            r = function (e) {
              return "TimeoutError" === e.name ? 10 : 5;
            },
            i = function (e) {
              return r(e) <= n;
            };
          return Object.freeze({
            hasRetryTokens: i,
            retrieveRetryTokens: function (e) {
              if (!i(e)) throw new Error("No retry token available");
              var t = r(e);
              return (n -= t), t;
            },
            releaseRetryTokens: function (e) {
              (n += null != e ? e : 1), (n = Math.min(n, t));
            },
          });
        },
        Nn = function (e, t) {
          return Math.floor(Math.min(2e4, Math.random() * Math.pow(2, t) * e));
        },
        jn = function (e) {
          return (
            !!e &&
            ((function (e) {
              return void 0 !== e.$retryable;
            })(e) ||
              (function (e) {
                return Tn.includes(e.name);
              })(e) ||
              Mn(e) ||
              (function (e) {
                var t;
                return (
                  kn.includes(e.name) ||
                  Rn.includes(
                    (null === (t = e.$metadata) || void 0 === t
                      ? void 0
                      : t.httpStatusCode) || 0
                  )
                );
              })(e))
          );
        },
        Ln = "standard",
        Bn = (function () {
          function e(e, t) {
            var n, r, i;
            (this.maxAttemptsProvider = e),
              (this.mode = Ln),
              (this.retryDecider =
                null !== (n = null == t ? void 0 : t.retryDecider) &&
                void 0 !== n
                  ? n
                  : jn),
              (this.delayDecider =
                null !== (r = null == t ? void 0 : t.delayDecider) &&
                void 0 !== r
                  ? r
                  : Nn),
              (this.retryQuota =
                null !== (i = null == t ? void 0 : t.retryQuota) && void 0 !== i
                  ? i
                  : Fn(Dn));
          }
          return (
            (e.prototype.shouldRetry = function (e, t, n) {
              return (
                t < n &&
                this.retryDecider(e) &&
                this.retryQuota.hasRetryTokens(e)
              );
            }),
            (e.prototype.getMaxAttempts = function () {
              return En(this, void 0, void 0, function () {
                var e;
                return In(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [4, this.maxAttemptsProvider()]
                      );
                    case 1:
                      return (e = t.sent()), [3, 3];
                    case 2:
                      return t.sent(), (e = 3), [3, 3];
                    case 3:
                      return [2, e];
                  }
                });
              });
            }),
            (e.prototype.retry = function (e, t) {
              return En(this, void 0, void 0, function () {
                var n, r, i, o, s, a, u, c;
                return In(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (r = 0), (i = 0), [4, this.getMaxAttempts()];
                    case 1:
                      (o = l.sent()),
                        (s = t.request),
                        nt.isInstance(s) &&
                          (s.headers["amz-sdk-invocation-id"] = (0, xn.v4)()),
                        (a = function () {
                          var a, c, l, f, h;
                          return In(this, function (d) {
                            switch (d.label) {
                              case 0:
                                return (
                                  d.trys.push([0, 2, , 5]),
                                  nt.isInstance(s) &&
                                    (s.headers["amz-sdk-request"] =
                                      "attempt=" + (r + 1) + "; max=" + o),
                                  [4, e(t)]
                                );
                              case 1:
                                return (
                                  (a = d.sent()),
                                  (c = a.response),
                                  (l = a.output),
                                  u.retryQuota.releaseRetryTokens(n),
                                  (l.$metadata.attempts = r + 1),
                                  (l.$metadata.totalRetryDelay = i),
                                  [2, { value: { response: c, output: l } }]
                                );
                              case 2:
                                return (
                                  (f = d.sent()),
                                  r++,
                                  u.shouldRetry(f, r, o)
                                    ? ((n =
                                        u.retryQuota.retrieveRetryTokens(f)),
                                      (h = u.delayDecider(
                                        Mn(f) ? 500 : 100,
                                        r
                                      )),
                                      (i += h),
                                      [
                                        4,
                                        new Promise(function (e) {
                                          return setTimeout(e, h);
                                        }),
                                      ])
                                    : [3, 4]
                                );
                              case 3:
                                return d.sent(), [2, "continue"];
                              case 4:
                                throw (
                                  (f.$metadata || (f.$metadata = {}),
                                  (f.$metadata.attempts = r),
                                  (f.$metadata.totalRetryDelay = i),
                                  f)
                                );
                              case 5:
                                return [2];
                            }
                          });
                        }),
                        (u = this),
                        (l.label = 2);
                    case 2:
                      return [5, a()];
                    case 3:
                      return "object" == typeof (c = l.sent())
                        ? [2, c.value]
                        : [3, 2];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        qn = function (e) {
          var t = Vn(e.maxAttempts);
          return An(An({}, e), {
            maxAttempts: t,
            retryStrategy: e.retryStrategy || new Bn(t),
          });
        },
        Vn = function (e) {
          if ((void 0 === e && (e = 3), "number" == typeof e)) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        };
      var Kn = n(1206),
        Hn = n.n(Kn),
        zn = n(8668),
        Gn = "cognito-identity.{region}.amazonaws.com",
        Wn = new Set([
          "af-south-1",
          "ap-east-1",
          "ap-northeast-1",
          "ap-northeast-2",
          "ap-south-1",
          "ap-southeast-1",
          "ap-southeast-2",
          "ca-central-1",
          "eu-central-1",
          "eu-north-1",
          "eu-south-1",
          "eu-west-1",
          "eu-west-2",
          "eu-west-3",
          "me-south-1",
          "sa-east-1",
          "us-east-1",
          "us-east-2",
          "us-west-1",
          "us-west-2",
        ]),
        Yn = new Set(["cn-north-1", "cn-northwest-1"]),
        Jn = new Set(["us-iso-east-1"]),
        $n = new Set(["us-isob-east-1"]),
        Zn = new Set(["us-gov-east-1", "us-gov-west-1"]);
      function Qn(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      var Xn,
        er,
        tr,
        nr = {
          apiVersion: "2014-06-30",
          disableHostPrefix: !1,
          logger: {},
          regionInfoProvider: function (e, t) {
            var n = void 0;
            switch (e) {
              case "ap-northeast-1":
                n = {
                  hostname: "cognito-identity.ap-northeast-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-northeast-2":
                n = {
                  hostname: "cognito-identity.ap-northeast-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-south-1":
                n = {
                  hostname: "cognito-identity.ap-south-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-southeast-1":
                n = {
                  hostname: "cognito-identity.ap-southeast-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ap-southeast-2":
                n = {
                  hostname: "cognito-identity.ap-southeast-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "ca-central-1":
                n = {
                  hostname: "cognito-identity.ca-central-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "cn-north-1":
                n = {
                  hostname: "cognito-identity.cn-north-1.amazonaws.com.cn",
                  partition: "aws-cn",
                };
                break;
              case "eu-central-1":
                n = {
                  hostname: "cognito-identity.eu-central-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-north-1":
                n = {
                  hostname: "cognito-identity.eu-north-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-west-1":
                n = {
                  hostname: "cognito-identity.eu-west-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-west-2":
                n = {
                  hostname: "cognito-identity.eu-west-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "eu-west-3":
                n = {
                  hostname: "cognito-identity.eu-west-3.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "fips-us-east-1":
                n = {
                  hostname: "cognito-identity-fips.us-east-1.amazonaws.com",
                  partition: "aws",
                  signingRegion: "us-east-1",
                };
                break;
              case "fips-us-east-2":
                n = {
                  hostname: "cognito-identity-fips.us-east-2.amazonaws.com",
                  partition: "aws",
                  signingRegion: "us-east-2",
                };
                break;
              case "fips-us-gov-west-1":
                n = {
                  hostname: "cognito-identity-fips.us-gov-west-1.amazonaws.com",
                  partition: "aws-us-gov",
                  signingRegion: "us-gov-west-1",
                };
                break;
              case "fips-us-west-2":
                n = {
                  hostname: "cognito-identity-fips.us-west-2.amazonaws.com",
                  partition: "aws",
                  signingRegion: "us-west-2",
                };
                break;
              case "sa-east-1":
                n = {
                  hostname: "cognito-identity.sa-east-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-east-1":
                n = {
                  hostname: "cognito-identity.us-east-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-east-2":
                n = {
                  hostname: "cognito-identity.us-east-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-gov-west-1":
                n = {
                  hostname: "cognito-identity.us-gov-west-1.amazonaws.com",
                  partition: "aws-us-gov",
                };
                break;
              case "us-west-1":
                n = {
                  hostname: "cognito-identity.us-west-1.amazonaws.com",
                  partition: "aws",
                };
                break;
              case "us-west-2":
                n = {
                  hostname: "cognito-identity.us-west-2.amazonaws.com",
                  partition: "aws",
                };
                break;
              default:
                Wn.has(e) &&
                  (n = {
                    hostname: Gn.replace("{region}", e),
                    partition: "aws",
                  }),
                  Yn.has(e) &&
                    (n = {
                      hostname:
                        "cognito-identity.{region}.amazonaws.com.cn".replace(
                          "{region}",
                          e
                        ),
                      partition: "aws-cn",
                    }),
                  Jn.has(e) &&
                    (n = {
                      hostname: "cognito-identity.{region}.c2s.ic.gov".replace(
                        "{region}",
                        e
                      ),
                      partition: "aws-iso",
                    }),
                  $n.has(e) &&
                    (n = {
                      hostname:
                        "cognito-identity.{region}.sc2s.sgov.gov".replace(
                          "{region}",
                          e
                        ),
                      partition: "aws-iso-b",
                    }),
                  Zn.has(e) &&
                    (n = {
                      hostname:
                        "cognito-identity.{region}.amazonaws.com".replace(
                          "{region}",
                          e
                        ),
                      partition: "aws-us-gov",
                    }),
                  void 0 === n &&
                    (n = {
                      hostname: Gn.replace("{region}", e),
                      partition: "aws",
                    });
            }
            return Promise.resolve(
              $e({ signingService: "cognito-identity" }, n)
            );
          },
          serviceId: "Cognito Identity",
          urlParser: function (e) {
            var t,
              n = new URL(e),
              r = n.hostname,
              i = n.pathname,
              o = n.port,
              s = n.protocol,
              a = n.search;
            return (
              a &&
                (t = (function (e) {
                  var t,
                    n,
                    r = {};
                  if ((e = e.replace(/^\?/, "")))
                    try {
                      for (
                        var i = (function (e) {
                            var t =
                                "function" == typeof Symbol && Symbol.iterator,
                              n = t && e[t],
                              r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length)
                              return {
                                next: function () {
                                  return (
                                    e && r >= e.length && (e = void 0),
                                    { value: e && e[r++], done: !e }
                                  );
                                },
                              };
                            throw new TypeError(
                              t
                                ? "Object is not iterable."
                                : "Symbol.iterator is not defined."
                            );
                          })(e.split("&")),
                          o = i.next();
                        !o.done;
                        o = i.next()
                      ) {
                        var s = Qn(o.value.split("="), 2),
                          a = s[0],
                          u = s[1],
                          c = void 0 === u ? null : u;
                        (a = decodeURIComponent(a)),
                          c && (c = decodeURIComponent(c)),
                          a in r
                            ? Array.isArray(r[a])
                              ? r[a].push(c)
                              : (r[a] = [r[a], c])
                            : (r[a] = c);
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                  return r;
                })(a)),
              {
                hostname: r,
                port: o ? parseInt(o) : void 0,
                protocol: s,
                path: i,
                query: t,
              }
            );
          },
        },
        rr = $e($e({}, nr), {
          runtime: "browser",
          base64Decoder: Sn,
          base64Encoder: function (e) {
            for (var t = "", n = 0; n < e.length; n += 3) {
              for (
                var r = 0, i = 0, o = n, s = Math.min(n + 3, e.length);
                o < s;
                o++
              )
                (r |= e[o] << ((s - o - 1) * bn)), (i += bn);
              var a = Math.ceil(i / wn);
              r <<= a * wn - i;
              for (var u = 1; u <= a; u++) {
                var c = (a - u) * wn;
                t += dn[(r & (63 << c)) >> c];
              }
              t += "==".slice(0, 4 - a);
            }
            return t;
          },
          bodyLengthChecker: function (e) {
            if ("string" == typeof e) {
              for (var t = e.length, n = t - 1; n >= 0; n--) {
                var r = e.charCodeAt(n);
                r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2);
              }
              return t;
            }
            return "number" == typeof e.byteLength
              ? e.byteLength
              : "number" == typeof e.size
              ? e.size
              : void 0;
          },
          credentialDefaultProvider: function (e) {
            return function () {
              return Promise.reject(new Error("Credential is missing"));
            };
          },
          defaultUserAgentProvider:
            ((Xn = { serviceId: nr.serviceId, clientVersion: "3.6.1" }),
            (er = Xn.serviceId),
            (tr = Xn.clientVersion),
            function () {
              return (
                (e = void 0),
                (t = void 0),
                (r = function () {
                  var e, t, n, r, i, o, s, a, u;
                  return (function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      s = {
                        label: 0,
                        sent: function () {
                          if (1 & i[0]) throw i[1];
                          return i[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (o = { next: a(0), throw: a(1), return: a(2) }),
                      "function" == typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                          return this;
                        }),
                      o
                    );
                    function a(o) {
                      return function (a) {
                        return (function (o) {
                          if (n)
                            throw new TypeError(
                              "Generator is already executing."
                            );
                          for (; s; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (i =
                                    2 & o[0]
                                      ? r.return
                                      : o[0]
                                      ? r.throw ||
                                        ((i = r.return) && i.call(r), 0)
                                      : r.next) &&
                                  !(i = i.call(r, o[1])).done)
                              )
                                return i;
                              switch (
                                ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                              ) {
                                case 0:
                                case 1:
                                  i = o;
                                  break;
                                case 4:
                                  return s.label++, { value: o[1], done: !1 };
                                case 5:
                                  s.label++, (r = o[1]), (o = [0]);
                                  continue;
                                case 7:
                                  (o = s.ops.pop()), s.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (i =
                                        (i = s.trys).length > 0 &&
                                        i[i.length - 1]) ||
                                      (6 !== o[0] && 2 !== o[0])
                                    )
                                  ) {
                                    s = 0;
                                    continue;
                                  }
                                  if (
                                    3 === o[0] &&
                                    (!i || (o[1] > i[0] && o[1] < i[3]))
                                  ) {
                                    s.label = o[1];
                                    break;
                                  }
                                  if (6 === o[0] && s.label < i[1]) {
                                    (s.label = i[1]), (i = o);
                                    break;
                                  }
                                  if (i && s.label < i[2]) {
                                    (s.label = i[2]), s.ops.push(o);
                                    break;
                                  }
                                  i[2] && s.ops.pop(), s.trys.pop();
                                  continue;
                              }
                              o = t.call(e, s);
                            } catch (e) {
                              (o = [6, e]), (r = 0);
                            } finally {
                              n = i = 0;
                            }
                          if (5 & o[0]) throw o[1];
                          return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, a]);
                      };
                    }
                  })(this, function (c) {
                    return (
                      (e = (
                        null ===
                          (n =
                            null === window || void 0 === window
                              ? void 0
                              : window.navigator) || void 0 === n
                          ? void 0
                          : n.userAgent
                      )
                        ? Hn().parse(window.navigator.userAgent)
                        : void 0),
                      (t = [
                        ["aws-sdk-js", tr],
                        [
                          "os/" +
                            ((null === (r = null == e ? void 0 : e.os) ||
                            void 0 === r
                              ? void 0
                              : r.name) || "other"),
                          null === (i = null == e ? void 0 : e.os) ||
                          void 0 === i
                            ? void 0
                            : i.version,
                        ],
                        ["lang/js"],
                        [
                          "md/browser",
                          (null !==
                            (s =
                              null === (o = null == e ? void 0 : e.browser) ||
                              void 0 === o
                                ? void 0
                                : o.name) && void 0 !== s
                            ? s
                            : "unknown") +
                            "_" +
                            (null !==
                              (u =
                                null === (a = null == e ? void 0 : e.browser) ||
                                void 0 === a
                                  ? void 0
                                  : a.version) && void 0 !== u
                              ? u
                              : "unknown"),
                        ],
                      ]),
                      er && t.push(["api/" + er, tr]),
                      [2, t]
                    );
                  });
                }),
                new ((n = void 0) || (n = Promise))(function (i, o) {
                  function s(e) {
                    try {
                      u(r.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function a(e) {
                    try {
                      u(r.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function u(e) {
                    var t;
                    e.done
                      ? i(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(s, a);
                  }
                  u((r = r.apply(e, t || [])).next());
                })
              );
              var e, t, n, r;
            }),
          maxAttempts: 3,
          region:
            ("Region is missing",
            function () {
              return Promise.reject("Region is missing");
            }),
          requestHandler: new fn(),
          sha256: sn.Sha256,
          streamCollector: function (e) {
            return "function" == typeof Blob && e instanceof Blob
              ? (function (e) {
                  return an(this, void 0, void 0, function () {
                    var t, n;
                    return un(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, _n(e)];
                        case 1:
                          return (
                            (t = r.sent()), (n = Sn(t)), [2, new Uint8Array(n)]
                          );
                      }
                    });
                  });
                })(e)
              : (function (e) {
                  return an(this, void 0, void 0, function () {
                    var t, n, r, i, o, s, a;
                    return un(this, function (u) {
                      switch (u.label) {
                        case 0:
                          (t = new Uint8Array(0)),
                            (n = e.getReader()),
                            (r = !1),
                            (u.label = 1);
                        case 1:
                          return r ? [3, 3] : [4, n.read()];
                        case 2:
                          return (
                            (i = u.sent()),
                            (o = i.done),
                            (s = i.value) &&
                              ((a = t),
                              (t = new Uint8Array(a.length + s.length)).set(a),
                              t.set(s, a.length)),
                            (r = o),
                            [3, 1]
                          );
                        case 3:
                          return [2, t];
                      }
                    });
                  });
                })(e);
          },
          utf8Decoder: zn.fromUtf8,
          utf8Encoder: zn.toUtf8,
        }),
        ir = function () {
          return (
            (ir =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            ir.apply(this, arguments)
          );
        };
      var or = function (e) {
          var t;
          return ir(ir({}, e), {
            tls: null === (t = e.tls) || void 0 === t || t,
            endpoint: e.endpoint
              ? sr(e)
              : function () {
                  return ar(e);
                },
            isCustomEndpoint: !!e.endpoint,
          });
        },
        sr = function (e) {
          var t = e.endpoint,
            n = e.urlParser;
          if ("string" == typeof t) {
            var r = Promise.resolve(n(t));
            return function () {
              return r;
            };
          }
          if ("object" == typeof t) {
            var i = Promise.resolve(t);
            return function () {
              return i;
            };
          }
          return t;
        },
        ar = function (e) {
          return (
            (t = void 0),
            (n = void 0),
            (i = function () {
              var t, n, r, i, o;
              return (function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (o = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function a(o) {
                  return function (a) {
                    return (function (o) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & o[0]
                                  ? r.return
                                  : o[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, o[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return s.label++, { value: o[1], done: !1 };
                            case 5:
                              s.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = s.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== o[0] && 2 !== o[0])
                                )
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!i || (o[1] > i[0] && o[1] < i[3]))
                              ) {
                                s.label = o[1];
                                break;
                              }
                              if (6 === o[0] && s.label < i[1]) {
                                (s.label = i[1]), (i = o);
                                break;
                              }
                              if (i && s.label < i[2]) {
                                (s.label = i[2]), s.ops.push(o);
                                break;
                              }
                              i[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          o = t.call(e, s);
                        } catch (e) {
                          (o = [6, e]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, a]);
                  };
                }
              })(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = e.tls), (n = void 0 === t || t), [4, e.region()]
                    );
                  case 1:
                    if (
                      ((r = s.sent()),
                      !new RegExp(
                        /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/
                      ).test(r))
                    )
                      throw new Error("Invalid region in client config");
                    return [4, e.regionInfoProvider(r)];
                  case 2:
                    if (
                      !(i = (null !== (o = s.sent()) && void 0 !== o ? o : {})
                        .hostname)
                    )
                      throw new Error(
                        "Cannot resolve hostname from client config"
                      );
                    return [
                      2,
                      e.urlParser((n ? "https:" : "http:") + "//" + i),
                    ];
                }
              });
            }),
            new ((r = void 0) || (r = Promise))(function (e, o) {
              function s(e) {
                try {
                  u(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  u(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof r
                      ? n
                      : new r(function (e) {
                          e(n);
                        })).then(s, a);
              }
              u((i = i.apply(t, n || [])).next());
            })
          );
          var t, n, r, i;
        },
        ur = function (e) {
          if (!e.region) throw new Error("Region is missing");
          return ir(ir({}, e), { region: cr(e.region) });
        },
        cr = function (e) {
          if ("string" == typeof e) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        },
        lr = function () {
          return (
            (lr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            lr.apply(this, arguments)
          );
        };
      var fr = "content-length",
        hr = {
          step: "build",
          tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
          name: "contentLengthMiddleware",
          override: !0,
        },
        dr = function (e) {
          return {
            applyToStack: function (t) {
              t.add(
                (function (e) {
                  var t = this;
                  return function (n) {
                    return function (r) {
                      return (
                        (i = t),
                        (o = void 0),
                        (a = function () {
                          var t, i, o, s, a;
                          return (function (e, t) {
                            var n,
                              r,
                              i,
                              o,
                              s = {
                                label: 0,
                                sent: function () {
                                  if (1 & i[0]) throw i[1];
                                  return i[1];
                                },
                                trys: [],
                                ops: [],
                              };
                            return (
                              (o = { next: a(0), throw: a(1), return: a(2) }),
                              "function" == typeof Symbol &&
                                (o[Symbol.iterator] = function () {
                                  return this;
                                }),
                              o
                            );
                            function a(o) {
                              return function (a) {
                                return (function (o) {
                                  if (n)
                                    throw new TypeError(
                                      "Generator is already executing."
                                    );
                                  for (; s; )
                                    try {
                                      if (
                                        ((n = 1),
                                        r &&
                                          (i =
                                            2 & o[0]
                                              ? r.return
                                              : o[0]
                                              ? r.throw ||
                                                ((i = r.return) && i.call(r), 0)
                                              : r.next) &&
                                          !(i = i.call(r, o[1])).done)
                                      )
                                        return i;
                                      switch (
                                        ((r = 0),
                                        i && (o = [2 & o[0], i.value]),
                                        o[0])
                                      ) {
                                        case 0:
                                        case 1:
                                          i = o;
                                          break;
                                        case 4:
                                          return (
                                            s.label++, { value: o[1], done: !1 }
                                          );
                                        case 5:
                                          s.label++, (r = o[1]), (o = [0]);
                                          continue;
                                        case 7:
                                          (o = s.ops.pop()), s.trys.pop();
                                          continue;
                                        default:
                                          if (
                                            !(
                                              (i =
                                                (i = s.trys).length > 0 &&
                                                i[i.length - 1]) ||
                                              (6 !== o[0] && 2 !== o[0])
                                            )
                                          ) {
                                            s = 0;
                                            continue;
                                          }
                                          if (
                                            3 === o[0] &&
                                            (!i || (o[1] > i[0] && o[1] < i[3]))
                                          ) {
                                            s.label = o[1];
                                            break;
                                          }
                                          if (6 === o[0] && s.label < i[1]) {
                                            (s.label = i[1]), (i = o);
                                            break;
                                          }
                                          if (i && s.label < i[2]) {
                                            (s.label = i[2]), s.ops.push(o);
                                            break;
                                          }
                                          i[2] && s.ops.pop(), s.trys.pop();
                                          continue;
                                      }
                                      o = t.call(e, s);
                                    } catch (e) {
                                      (o = [6, e]), (r = 0);
                                    } finally {
                                      n = i = 0;
                                    }
                                  if (5 & o[0]) throw o[1];
                                  return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0,
                                  };
                                })([o, a]);
                              };
                            }
                          })(this, function (u) {
                            return (
                              (t = r.request),
                              nt.isInstance(t) &&
                                ((i = t.body),
                                (o = t.headers),
                                i &&
                                  -1 ===
                                    Object.keys(o)
                                      .map(function (e) {
                                        return e.toLowerCase();
                                      })
                                      .indexOf(fr) &&
                                  void 0 !== (s = e(i)) &&
                                  (t.headers = lr(
                                    lr({}, t.headers),
                                    (((a = {})[fr] = String(s)), a)
                                  ))),
                              [2, n(lr(lr({}, r), { request: t }))]
                            );
                          });
                        }),
                        new ((s = void 0) || (s = Promise))(function (e, t) {
                          function n(e) {
                            try {
                              u(a.next(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function r(e) {
                            try {
                              u(a.throw(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function u(t) {
                            var i;
                            t.done
                              ? e(t.value)
                              : ((i = t.value),
                                i instanceof s
                                  ? i
                                  : new s(function (e) {
                                      e(i);
                                    })).then(n, r);
                          }
                          u((a = a.apply(i, o || [])).next());
                        })
                      );
                      var i, o, s, a;
                    };
                  };
                })(e.bodyLengthChecker),
                hr
              );
            },
          };
        };
      var pr = {
          name: "hostHeaderMiddleware",
          step: "build",
          priority: "low",
          tags: ["HOST"],
          override: !0,
        },
        gr = function (e) {
          return {
            applyToStack: function (t) {
              t.add(
                (function (e) {
                  return function (t) {
                    return function (n) {
                      return (
                        (r = void 0),
                        (i = void 0),
                        (s = function () {
                          var r, i;
                          return (function (e, t) {
                            var n,
                              r,
                              i,
                              o,
                              s = {
                                label: 0,
                                sent: function () {
                                  if (1 & i[0]) throw i[1];
                                  return i[1];
                                },
                                trys: [],
                                ops: [],
                              };
                            return (
                              (o = { next: a(0), throw: a(1), return: a(2) }),
                              "function" == typeof Symbol &&
                                (o[Symbol.iterator] = function () {
                                  return this;
                                }),
                              o
                            );
                            function a(o) {
                              return function (a) {
                                return (function (o) {
                                  if (n)
                                    throw new TypeError(
                                      "Generator is already executing."
                                    );
                                  for (; s; )
                                    try {
                                      if (
                                        ((n = 1),
                                        r &&
                                          (i =
                                            2 & o[0]
                                              ? r.return
                                              : o[0]
                                              ? r.throw ||
                                                ((i = r.return) && i.call(r), 0)
                                              : r.next) &&
                                          !(i = i.call(r, o[1])).done)
                                      )
                                        return i;
                                      switch (
                                        ((r = 0),
                                        i && (o = [2 & o[0], i.value]),
                                        o[0])
                                      ) {
                                        case 0:
                                        case 1:
                                          i = o;
                                          break;
                                        case 4:
                                          return (
                                            s.label++, { value: o[1], done: !1 }
                                          );
                                        case 5:
                                          s.label++, (r = o[1]), (o = [0]);
                                          continue;
                                        case 7:
                                          (o = s.ops.pop()), s.trys.pop();
                                          continue;
                                        default:
                                          if (
                                            !(
                                              (i =
                                                (i = s.trys).length > 0 &&
                                                i[i.length - 1]) ||
                                              (6 !== o[0] && 2 !== o[0])
                                            )
                                          ) {
                                            s = 0;
                                            continue;
                                          }
                                          if (
                                            3 === o[0] &&
                                            (!i || (o[1] > i[0] && o[1] < i[3]))
                                          ) {
                                            s.label = o[1];
                                            break;
                                          }
                                          if (6 === o[0] && s.label < i[1]) {
                                            (s.label = i[1]), (i = o);
                                            break;
                                          }
                                          if (i && s.label < i[2]) {
                                            (s.label = i[2]), s.ops.push(o);
                                            break;
                                          }
                                          i[2] && s.ops.pop(), s.trys.pop();
                                          continue;
                                      }
                                      o = t.call(e, s);
                                    } catch (e) {
                                      (o = [6, e]), (r = 0);
                                    } finally {
                                      n = i = 0;
                                    }
                                  if (5 & o[0]) throw o[1];
                                  return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0,
                                  };
                                })([o, a]);
                              };
                            }
                          })(this, function (o) {
                            return nt.isInstance(n.request)
                              ? ((r = n.request),
                                (void 0 ===
                                (i = (e.requestHandler.metadata || {})
                                  .handlerProtocol)
                                  ? ""
                                  : i
                                ).indexOf("h2") >= 0 && !r.headers[":authority"]
                                  ? (delete r.headers.host,
                                    (r.headers[":authority"] = ""))
                                  : r.headers.host ||
                                    (r.headers.host = r.hostname),
                                [2, t(n)])
                              : [2, t(n)];
                          });
                        }),
                        new ((o = void 0) || (o = Promise))(function (e, t) {
                          function n(e) {
                            try {
                              u(s.next(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function a(e) {
                            try {
                              u(s.throw(e));
                            } catch (e) {
                              t(e);
                            }
                          }
                          function u(t) {
                            var r;
                            t.done
                              ? e(t.value)
                              : ((r = t.value),
                                r instanceof o
                                  ? r
                                  : new o(function (e) {
                                      e(r);
                                    })).then(n, a);
                          }
                          u((s = s.apply(r, i || [])).next());
                        })
                      );
                      var r, i, o, s;
                    };
                  };
                })(e),
                pr
              );
            },
          };
        };
      var vr = function () {
          return function (e, t) {
            return function (n) {
              return (
                (r = void 0),
                (i = void 0),
                (s = function () {
                  var r, i, o, s, a, u, c, l, f;
                  return (function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      s = {
                        label: 0,
                        sent: function () {
                          if (1 & i[0]) throw i[1];
                          return i[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (o = { next: a(0), throw: a(1), return: a(2) }),
                      "function" == typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                          return this;
                        }),
                      o
                    );
                    function a(o) {
                      return function (a) {
                        return (function (o) {
                          if (n)
                            throw new TypeError(
                              "Generator is already executing."
                            );
                          for (; s; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (i =
                                    2 & o[0]
                                      ? r.return
                                      : o[0]
                                      ? r.throw ||
                                        ((i = r.return) && i.call(r), 0)
                                      : r.next) &&
                                  !(i = i.call(r, o[1])).done)
                              )
                                return i;
                              switch (
                                ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                              ) {
                                case 0:
                                case 1:
                                  i = o;
                                  break;
                                case 4:
                                  return s.label++, { value: o[1], done: !1 };
                                case 5:
                                  s.label++, (r = o[1]), (o = [0]);
                                  continue;
                                case 7:
                                  (o = s.ops.pop()), s.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (i =
                                        (i = s.trys).length > 0 &&
                                        i[i.length - 1]) ||
                                      (6 !== o[0] && 2 !== o[0])
                                    )
                                  ) {
                                    s = 0;
                                    continue;
                                  }
                                  if (
                                    3 === o[0] &&
                                    (!i || (o[1] > i[0] && o[1] < i[3]))
                                  ) {
                                    s.label = o[1];
                                    break;
                                  }
                                  if (6 === o[0] && s.label < i[1]) {
                                    (s.label = i[1]), (i = o);
                                    break;
                                  }
                                  if (i && s.label < i[2]) {
                                    (s.label = i[2]), s.ops.push(o);
                                    break;
                                  }
                                  i[2] && s.ops.pop(), s.trys.pop();
                                  continue;
                              }
                              o = t.call(e, s);
                            } catch (e) {
                              (o = [6, e]), (r = 0);
                            } finally {
                              n = i = 0;
                            }
                          if (5 & o[0]) throw o[1];
                          return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, a]);
                      };
                    }
                  })(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return (
                          (r = t.clientName),
                          (i = t.commandName),
                          (o = t.inputFilterSensitiveLog),
                          (s = t.logger),
                          (a = t.outputFilterSensitiveLog),
                          [4, e(n)]
                        );
                      case 1:
                        return (
                          (u = h.sent()),
                          s
                            ? ("function" == typeof s.info &&
                                ((c = u.output),
                                (l = c.$metadata),
                                (f = (function (e, t) {
                                  var n = {};
                                  for (var r in e)
                                    Object.prototype.hasOwnProperty.call(
                                      e,
                                      r
                                    ) &&
                                      t.indexOf(r) < 0 &&
                                      (n[r] = e[r]);
                                  if (
                                    null != e &&
                                    "function" ==
                                      typeof Object.getOwnPropertySymbols
                                  ) {
                                    var i = 0;
                                    for (
                                      r = Object.getOwnPropertySymbols(e);
                                      i < r.length;
                                      i++
                                    )
                                      t.indexOf(r[i]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                          e,
                                          r[i]
                                        ) &&
                                        (n[r[i]] = e[r[i]]);
                                  }
                                  return n;
                                })(c, ["$metadata"])),
                                s.info({
                                  clientName: r,
                                  commandName: i,
                                  input: o(n.input),
                                  output: a(f),
                                  metadata: l,
                                })),
                              [2, u])
                            : [2, u]
                        );
                    }
                  });
                }),
                new ((o = void 0) || (o = Promise))(function (e, t) {
                  function n(e) {
                    try {
                      u(s.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function a(e) {
                    try {
                      u(s.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function u(t) {
                    var r;
                    t.done
                      ? e(t.value)
                      : ((r = t.value),
                        r instanceof o
                          ? r
                          : new o(function (e) {
                              e(r);
                            })).then(n, a);
                  }
                  u((s = s.apply(r, i || [])).next());
                })
              );
              var r, i, o, s;
            };
          };
        },
        yr = {
          name: "loggerMiddleware",
          tags: ["LOGGER"],
          step: "initialize",
          override: !0,
        },
        mr = function (e) {
          return {
            applyToStack: function (e) {
              e.add(vr(), yr);
            },
          };
        },
        wr = function () {
          return (
            (wr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            wr.apply(this, arguments)
          );
        };
      var br = function () {
        return (
          (br =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          br.apply(this, arguments)
        );
      };
      function Sr(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function _r(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0])
                        )
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function Ar(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function Er(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      for (var Ir = {}, Pr = {}, Cr = 0; Cr < 256; Cr++) {
        var Or = Cr.toString(16).toLowerCase();
        1 === Or.length && (Or = "0" + Or), (Ir[Cr] = Or), (Pr[Or] = Cr);
      }
      function Tr(e) {
        for (var t = "", n = 0; n < e.byteLength; n++) t += Ir[e[n]];
        return t;
      }
      var Ur = "X-Amz-Date",
        kr = "X-Amz-Signature",
        Rr = "X-Amz-Security-Token",
        Mr = "authorization",
        xr = Ur.toLowerCase(),
        Dr = [Mr, xr, "date"],
        Fr = kr.toLowerCase(),
        Nr = "x-amz-content-sha256",
        jr = Rr.toLowerCase(),
        Lr = {
          authorization: !0,
          "cache-control": !0,
          connection: !0,
          expect: !0,
          from: !0,
          "keep-alive": !0,
          "max-forwards": !0,
          pragma: !0,
          referer: !0,
          te: !0,
          trailer: !0,
          "transfer-encoding": !0,
          upgrade: !0,
          "user-agent": !0,
          "x-amzn-trace-id": !0,
        },
        Br = /^proxy-/,
        qr = /^sec-/,
        Vr = "AWS4-HMAC-SHA256",
        Kr = "AWS4-HMAC-SHA256-PAYLOAD",
        Hr = "UNSIGNED-PAYLOAD",
        zr = "aws4_request",
        Gr = {},
        Wr = [];
      function Yr(e, t, n) {
        return e + "/" + t + "/" + n + "/" + zr;
      }
      function Jr(e, t, n) {
        var r = new e(t);
        return r.update(n), r.digest();
      }
      function $r(e, t, n) {
        var r,
          i,
          o = e.headers,
          s = {};
        try {
          for (
            var a = Ar(Object.keys(o).sort()), u = a.next();
            !u.done;
            u = a.next()
          ) {
            var c = u.value,
              l = c.toLowerCase();
            ((l in Lr ||
              (null == t ? void 0 : t.has(l)) ||
              Br.test(l) ||
              qr.test(l)) &&
              (!n || (n && !n.has(l)))) ||
              (s[l] = o[c].trim().replace(/\s+/g, " "));
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            u && !u.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        return s;
      }
      var Zr = function (e) {
        return (
          ("function" == typeof ArrayBuffer && e instanceof ArrayBuffer) ||
          "[object ArrayBuffer]" === Object.prototype.toString.call(e)
        );
      };
      function Qr(e, t) {
        var n = e.headers,
          r = e.body;
        return Sr(this, void 0, void 0, function () {
          var e, i, o, s, a, u, c;
          return _r(this, function (l) {
            switch (l.label) {
              case 0:
                try {
                  for (
                    e = Ar(Object.keys(n)), i = e.next();
                    !i.done;
                    i = e.next()
                  )
                    if ((o = i.value).toLowerCase() === Nr) return [2, n[o]];
                } catch (e) {
                  u = { error: e };
                } finally {
                  try {
                    i && !i.done && (c = e.return) && c.call(e);
                  } finally {
                    if (u) throw u.error;
                  }
                }
                return null != r
                  ? [3, 1]
                  : [
                      2,
                      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    ];
              case 1:
                return "string" == typeof r || ArrayBuffer.isView(r) || Zr(r)
                  ? ((s = new t()).update(r), (a = Tr), [4, s.digest()])
                  : [3, 3];
              case 2:
                return [2, a.apply(void 0, [l.sent()])];
              case 3:
                return [2, Hr];
            }
          });
        });
      }
      function Xr(e) {
        var t = e.headers,
          n = e.query,
          r = (function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          })(e, ["headers", "query"]);
        return br(br({}, r), { headers: br({}, t), query: n ? ei(n) : void 0 });
      }
      function ei(e) {
        return Object.keys(e).reduce(function (t, n) {
          var r,
            i = e[n];
          return br(
            br({}, t),
            (((r = {})[n] = Array.isArray(i)
              ? (function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(Er(arguments[t]));
                  return e;
                })(i)
              : i),
            r)
          );
        }, {});
      }
      function ti(e) {
        var t, n;
        e = "function" == typeof e.clone ? e.clone() : Xr(e);
        try {
          for (
            var r = Ar(Object.keys(e.headers)), i = r.next();
            !i.done;
            i = r.next()
          ) {
            var o = i.value;
            Dr.indexOf(o.toLowerCase()) > -1 && delete e.headers[o];
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
        return e;
      }
      var ni = (function () {
          function e(e) {
            var t = e.applyChecksum,
              n = e.credentials,
              r = e.region,
              i = e.service,
              o = e.sha256,
              s = e.uriEscapePath,
              a = void 0 === s || s;
            (this.service = i),
              (this.sha256 = o),
              (this.uriEscapePath = a),
              (this.applyChecksum = "boolean" != typeof t || t),
              (this.regionProvider = oi(r)),
              (this.credentialProvider = si(n));
          }
          return (
            (e.prototype.presign = function (e, t) {
              return (
                void 0 === t && (t = {}),
                Sr(this, void 0, void 0, function () {
                  var n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l,
                    f,
                    h,
                    d,
                    p,
                    g,
                    v,
                    y,
                    m,
                    w,
                    b,
                    S,
                    _,
                    A,
                    E,
                    I;
                  return _r(this, function (P) {
                    switch (P.label) {
                      case 0:
                        return (
                          (n = t.signingDate),
                          (r = void 0 === n ? new Date() : n),
                          (i = t.expiresIn),
                          (o = void 0 === i ? 3600 : i),
                          (s = t.unsignableHeaders),
                          (a = t.unhoistableHeaders),
                          (u = t.signableHeaders),
                          (c = t.signingRegion),
                          (l = t.signingService),
                          [4, this.credentialProvider()]
                        );
                      case 1:
                        return (
                          (f = P.sent()), null == c ? [3, 2] : ((d = c), [3, 4])
                        );
                      case 2:
                        return [4, this.regionProvider()];
                      case 3:
                        (d = P.sent()), (P.label = 4);
                      case 4:
                        return (
                          (h = d),
                          (p = ri(r)),
                          (g = p.longDate),
                          (v = p.shortDate),
                          o > 604800
                            ? [
                                2,
                                Promise.reject(
                                  "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
                                ),
                              ]
                            : ((y = Yr(v, h, null != l ? l : this.service)),
                              (m = (function (e, t) {
                                var n, r, i;
                                void 0 === t && (t = {});
                                var o =
                                    "function" == typeof e.clone
                                      ? e.clone()
                                      : Xr(e),
                                  s = o.headers,
                                  a = o.query,
                                  u = void 0 === a ? {} : a;
                                try {
                                  for (
                                    var c = Ar(Object.keys(s)), l = c.next();
                                    !l.done;
                                    l = c.next()
                                  ) {
                                    var f = l.value,
                                      h = f.toLowerCase();
                                    "x-amz-" !== h.substr(0, 6) ||
                                      (null === (i = t.unhoistableHeaders) ||
                                      void 0 === i
                                        ? void 0
                                        : i.has(h)) ||
                                      ((u[f] = s[f]), delete s[f]);
                                  }
                                } catch (e) {
                                  n = { error: e };
                                } finally {
                                  try {
                                    l && !l.done && (r = c.return) && r.call(c);
                                  } finally {
                                    if (n) throw n.error;
                                  }
                                }
                                return br(br({}, e), { headers: s, query: u });
                              })(ti(e), { unhoistableHeaders: a })),
                              f.sessionToken && (m.query[Rr] = f.sessionToken),
                              (m.query["X-Amz-Algorithm"] = Vr),
                              (m.query["X-Amz-Credential"] =
                                f.accessKeyId + "/" + y),
                              (m.query[Ur] = g),
                              (m.query["X-Amz-Expires"] = o.toString(10)),
                              (w = $r(m, s, u)),
                              (m.query["X-Amz-SignedHeaders"] = ii(w)),
                              (b = m.query),
                              (S = kr),
                              (_ = this.getSignature),
                              (A = [g, y, this.getSigningKey(f, h, v, l)]),
                              (E = this.createCanonicalRequest),
                              (I = [m, w]),
                              [4, Qr(e, this.sha256)])
                        );
                      case 5:
                        return [
                          4,
                          _.apply(
                            this,
                            A.concat([E.apply(this, I.concat([P.sent()]))])
                          ),
                        ];
                      case 6:
                        return (b[S] = P.sent()), [2, m];
                    }
                  });
                })
              );
            }),
            (e.prototype.sign = function (e, t) {
              return Sr(this, void 0, void 0, function () {
                return _r(this, function (n) {
                  return "string" == typeof e
                    ? [2, this.signString(e, t)]
                    : e.headers && e.payload
                    ? [2, this.signEvent(e, t)]
                    : [2, this.signRequest(e, t)];
                });
              });
            }),
            (e.prototype.signEvent = function (e, t) {
              var n = e.headers,
                r = e.payload,
                i = t.signingDate,
                o = void 0 === i ? new Date() : i,
                s = t.priorSignature,
                a = t.signingRegion,
                u = t.signingService;
              return Sr(this, void 0, void 0, function () {
                var e, t, i, c, l, f, h, d, p, g, v;
                return _r(this, function (y) {
                  switch (y.label) {
                    case 0:
                      return null == a ? [3, 1] : ((t = a), [3, 3]);
                    case 1:
                      return [4, this.regionProvider()];
                    case 2:
                      (t = y.sent()), (y.label = 3);
                    case 3:
                      return (
                        (e = t),
                        (i = ri(o)),
                        (c = i.shortDate),
                        (l = i.longDate),
                        (f = Yr(c, e, null != u ? u : this.service)),
                        [4, Qr({ headers: {}, body: r }, this.sha256)]
                      );
                    case 4:
                      return (
                        (h = y.sent()),
                        (d = new this.sha256()).update(n),
                        (g = Tr),
                        [4, d.digest()]
                      );
                    case 5:
                      return (
                        (p = g.apply(void 0, [y.sent()])),
                        (v = [Kr, l, f, s, p, h].join("\n")),
                        [
                          2,
                          this.signString(v, {
                            signingDate: o,
                            signingRegion: e,
                            signingService: u,
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.signString = function (e, t) {
              var n = void 0 === t ? {} : t,
                r = n.signingDate,
                i = void 0 === r ? new Date() : r,
                o = n.signingRegion,
                s = n.signingService;
              return Sr(this, void 0, void 0, function () {
                var t, n, r, a, u, c, l, f;
                return _r(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return [4, this.credentialProvider()];
                    case 1:
                      return (
                        (t = h.sent()), null == o ? [3, 2] : ((r = o), [3, 4])
                      );
                    case 2:
                      return [4, this.regionProvider()];
                    case 3:
                      (r = h.sent()), (h.label = 4);
                    case 4:
                      return (
                        (n = r),
                        (a = ri(i).shortDate),
                        (l = (c = this.sha256).bind),
                        [4, this.getSigningKey(t, n, a, s)]
                      );
                    case 5:
                      return (
                        (u = new (l.apply(c, [void 0, h.sent()]))()).update(e),
                        (f = Tr),
                        [4, u.digest()]
                      );
                    case 6:
                      return [2, f.apply(void 0, [h.sent()])];
                  }
                });
              });
            }),
            (e.prototype.signRequest = function (e, t) {
              var n = void 0 === t ? {} : t,
                r = n.signingDate,
                i = void 0 === r ? new Date() : r,
                o = n.signableHeaders,
                s = n.unsignableHeaders,
                a = n.signingRegion,
                u = n.signingService;
              return Sr(this, void 0, void 0, function () {
                var t, n, r, c, l, f, h, d, p, g, v;
                return _r(this, function (y) {
                  switch (y.label) {
                    case 0:
                      return [4, this.credentialProvider()];
                    case 1:
                      return (
                        (t = y.sent()), null == a ? [3, 2] : ((r = a), [3, 4])
                      );
                    case 2:
                      return [4, this.regionProvider()];
                    case 3:
                      (r = y.sent()), (y.label = 4);
                    case 4:
                      return (
                        (n = r),
                        (c = ti(e)),
                        (l = ri(i)),
                        (f = l.longDate),
                        (h = l.shortDate),
                        (d = Yr(h, n, null != u ? u : this.service)),
                        (c.headers[xr] = f),
                        t.sessionToken && (c.headers[jr] = t.sessionToken),
                        [4, Qr(c, this.sha256)]
                      );
                    case 5:
                      return (
                        (p = y.sent()),
                        !(function (e, t) {
                          var n, r;
                          e = e.toLowerCase();
                          try {
                            for (
                              var i = Ar(Object.keys(t)), o = i.next();
                              !o.done;
                              o = i.next()
                            )
                              if (e === o.value.toLowerCase()) return !0;
                          } catch (e) {
                            n = { error: e };
                          } finally {
                            try {
                              o && !o.done && (r = i.return) && r.call(i);
                            } finally {
                              if (n) throw n.error;
                            }
                          }
                          return !1;
                        })(Nr, c.headers) &&
                          this.applyChecksum &&
                          (c.headers[Nr] = p),
                        (g = $r(c, s, o)),
                        [
                          4,
                          this.getSignature(
                            f,
                            d,
                            this.getSigningKey(t, n, h, u),
                            this.createCanonicalRequest(c, g, p)
                          ),
                        ]
                      );
                    case 6:
                      return (
                        (v = y.sent()),
                        (c.headers[Mr] =
                          Vr +
                          " Credential=" +
                          t.accessKeyId +
                          "/" +
                          d +
                          ", SignedHeaders=" +
                          ii(g) +
                          ", Signature=" +
                          v),
                        [2, c]
                      );
                  }
                });
              });
            }),
            (e.prototype.createCanonicalRequest = function (e, t, n) {
              var r = Object.keys(t).sort();
              return (
                e.method +
                "\n" +
                this.getCanonicalPath(e) +
                "\n" +
                (function (e) {
                  var t,
                    n,
                    r = e.query,
                    i = void 0 === r ? {} : r,
                    o = [],
                    s = {},
                    a = function (e) {
                      if (e.toLowerCase() === Fr) return "continue";
                      o.push(e);
                      var t = i[e];
                      "string" == typeof t
                        ? (s[e] = cn(e) + "=" + cn(t))
                        : Array.isArray(t) &&
                          (s[e] = t
                            .slice(0)
                            .sort()
                            .reduce(function (t, n) {
                              return t.concat([cn(e) + "=" + cn(n)]);
                            }, [])
                            .join("&"));
                    };
                  try {
                    for (
                      var u = Ar(Object.keys(i).sort()), c = u.next();
                      !c.done;
                      c = u.next()
                    )
                      a(c.value);
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      c && !c.done && (n = u.return) && n.call(u);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return o
                    .map(function (e) {
                      return s[e];
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .join("&");
                })(e) +
                "\n" +
                r
                  .map(function (e) {
                    return e + ":" + t[e];
                  })
                  .join("\n") +
                "\n\n" +
                r.join(";") +
                "\n" +
                n
              );
            }),
            (e.prototype.createStringToSign = function (e, t, n) {
              return Sr(this, void 0, void 0, function () {
                var r, i;
                return _r(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (r = new this.sha256()).update(n), [4, r.digest()];
                    case 1:
                      return (
                        (i = o.sent()),
                        [2, Vr + "\n" + e + "\n" + t + "\n" + Tr(i)]
                      );
                  }
                });
              });
            }),
            (e.prototype.getCanonicalPath = function (e) {
              var t = e.path;
              return this.uriEscapePath
                ? "/" +
                    encodeURIComponent(t.replace(/^\//, "")).replace(
                      /%2F/g,
                      "/"
                    )
                : t;
            }),
            (e.prototype.getSignature = function (e, t, n, r) {
              return Sr(this, void 0, void 0, function () {
                var i, o, s, a, u;
                return _r(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return [4, this.createStringToSign(e, t, r)];
                    case 1:
                      return (
                        (i = c.sent()), (a = (s = this.sha256).bind), [4, n]
                      );
                    case 2:
                      return (
                        (o = new (a.apply(s, [void 0, c.sent()]))()).update(i),
                        (u = Tr),
                        [4, o.digest()]
                      );
                    case 3:
                      return [2, u.apply(void 0, [c.sent()])];
                  }
                });
              });
            }),
            (e.prototype.getSigningKey = function (e, t, n, r) {
              return (function (e, t, n, r, i) {
                return Sr(void 0, void 0, void 0, function () {
                  var o, s, a, u, c, l, f, h, d;
                  return _r(this, function (p) {
                    switch (p.label) {
                      case 0:
                        return [4, Jr(e, t.secretAccessKey, t.accessKeyId)];
                      case 1:
                        if (
                          ((o = p.sent()),
                          (s =
                            n +
                            ":" +
                            r +
                            ":" +
                            i +
                            ":" +
                            Tr(o) +
                            ":" +
                            t.sessionToken) in Gr)
                        )
                          return [2, Gr[s]];
                        for (Wr.push(s); Wr.length > 50; )
                          delete Gr[Wr.shift()];
                        (a = "AWS4" + t.secretAccessKey), (p.label = 2);
                      case 2:
                        p.trys.push([2, 7, 8, 9]),
                          (u = Ar([n, r, i, zr])),
                          (c = u.next()),
                          (p.label = 3);
                      case 3:
                        return c.done
                          ? [3, 6]
                          : ((l = c.value), [4, Jr(e, a, l)]);
                      case 4:
                        (a = p.sent()), (p.label = 5);
                      case 5:
                        return (c = u.next()), [3, 3];
                      case 6:
                        return [3, 9];
                      case 7:
                        return (f = p.sent()), (h = { error: f }), [3, 9];
                      case 8:
                        try {
                          c && !c.done && (d = u.return) && d.call(u);
                        } finally {
                          if (h) throw h.error;
                        }
                        return [7];
                      case 9:
                        return [2, (Gr[s] = a)];
                    }
                  });
                });
              })(this.sha256, e, n, t, r || this.service);
            }),
            e
          );
        })(),
        ri = function (e) {
          var t,
            n = ((t = e),
            (function (e) {
              return "number" == typeof e
                ? new Date(1e3 * e)
                : "string" == typeof e
                ? Number(e)
                  ? new Date(1e3 * Number(e))
                  : new Date(e)
                : e;
            })(t)
              .toISOString()
              .replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
          return { longDate: n, shortDate: n.substr(0, 8) };
        },
        ii = function (e) {
          return Object.keys(e).sort().join(";");
        },
        oi = function (e) {
          if ("string" == typeof e) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        },
        si = function (e) {
          if ("object" == typeof e) {
            var t = Promise.resolve(e);
            return function () {
              return t;
            };
          }
          return e;
        };
      function ai(e) {
        if ("object" == typeof e) {
          var t = Promise.resolve(e);
          return function () {
            return t;
          };
        }
        return e;
      }
      var ui = function () {
        return (
          (ui =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          ui.apply(this, arguments)
        );
      };
      function ci(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function li() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(ci(arguments[t]));
        return e;
      }
      var fi = "user-agent",
        hi = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        di = function (e) {
          var t = ci(e, 2),
            n = t[0],
            r = t[1],
            i = n.indexOf("/"),
            o = n.substring(0, i),
            s = n.substring(i + 1);
          return (
            "api" === o && (s = s.toLowerCase()),
            [o, s, r]
              .filter(function (e) {
                return e && e.length > 0;
              })
              .map(function (e) {
                return null == e ? void 0 : e.replace(hi, "_");
              })
              .join("/")
          );
        },
        pi = {
          name: "getUserAgentMiddleware",
          step: "build",
          priority: "low",
          tags: ["SET_USER_AGENT", "USER_AGENT"],
          override: !0,
        },
        gi = function (e) {
          return {
            applyToStack: function (t) {
              var n;
              t.add(
                ((n = e),
                function (e, t) {
                  return function (r) {
                    return (
                      (i = void 0),
                      (o = void 0),
                      (a = function () {
                        var i, o, s, a, u, c, l, f;
                        return (function (e, t) {
                          var n,
                            r,
                            i,
                            o,
                            s = {
                              label: 0,
                              sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (o = { next: a(0), throw: a(1), return: a(2) }),
                            "function" == typeof Symbol &&
                              (o[Symbol.iterator] = function () {
                                return this;
                              }),
                            o
                          );
                          function a(o) {
                            return function (a) {
                              return (function (o) {
                                if (n)
                                  throw new TypeError(
                                    "Generator is already executing."
                                  );
                                for (; s; )
                                  try {
                                    if (
                                      ((n = 1),
                                      r &&
                                        (i =
                                          2 & o[0]
                                            ? r.return
                                            : o[0]
                                            ? r.throw ||
                                              ((i = r.return) && i.call(r), 0)
                                            : r.next) &&
                                        !(i = i.call(r, o[1])).done)
                                    )
                                      return i;
                                    switch (
                                      ((r = 0),
                                      i && (o = [2 & o[0], i.value]),
                                      o[0])
                                    ) {
                                      case 0:
                                      case 1:
                                        i = o;
                                        break;
                                      case 4:
                                        return (
                                          s.label++, { value: o[1], done: !1 }
                                        );
                                      case 5:
                                        s.label++, (r = o[1]), (o = [0]);
                                        continue;
                                      case 7:
                                        (o = s.ops.pop()), s.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (i =
                                              (i = s.trys).length > 0 &&
                                              i[i.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0])
                                          )
                                        ) {
                                          s = 0;
                                          continue;
                                        }
                                        if (
                                          3 === o[0] &&
                                          (!i || (o[1] > i[0] && o[1] < i[3]))
                                        ) {
                                          s.label = o[1];
                                          break;
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                          (s.label = i[1]), (i = o);
                                          break;
                                        }
                                        if (i && s.label < i[2]) {
                                          (s.label = i[2]), s.ops.push(o);
                                          break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                    }
                                    o = t.call(e, s);
                                  } catch (e) {
                                    (o = [6, e]), (r = 0);
                                  } finally {
                                    n = i = 0;
                                  }
                                if (5 & o[0]) throw o[1];
                                return {
                                  value: o[0] ? o[1] : void 0,
                                  done: !0,
                                };
                              })([o, a]);
                            };
                          }
                        })(this, function (h) {
                          switch (h.label) {
                            case 0:
                              return (
                                (i = r.request),
                                nt.isInstance(i)
                                  ? ((o = i.headers),
                                    (s =
                                      (null ===
                                        (l =
                                          null == t ? void 0 : t.userAgent) ||
                                      void 0 === l
                                        ? void 0
                                        : l.map(di)) || []),
                                    [4, n.defaultUserAgentProvider()])
                                  : [2, e(r)]
                              );
                            case 1:
                              return (
                                (a = h.sent().map(di)),
                                (u =
                                  (null ===
                                    (f =
                                      null == n ? void 0 : n.customUserAgent) ||
                                  void 0 === f
                                    ? void 0
                                    : f.map(di)) || []),
                                (o["x-amz-user-agent"] = li(a, s, u).join(" ")),
                                (c = li(
                                  a.filter(function (e) {
                                    return e.startsWith("aws-sdk-");
                                  }),
                                  u
                                ).join(" ")),
                                "browser" !== n.runtime &&
                                  c &&
                                  (o[fi] = o[fi] ? o[fi] + " " + c : c),
                                [2, e(ui(ui({}, r), { request: i }))]
                              );
                          }
                        });
                      }),
                      new ((s = void 0) || (s = Promise))(function (e, t) {
                        function n(e) {
                          try {
                            u(a.next(e));
                          } catch (e) {
                            t(e);
                          }
                        }
                        function r(e) {
                          try {
                            u(a.throw(e));
                          } catch (e) {
                            t(e);
                          }
                        }
                        function u(t) {
                          var i;
                          t.done
                            ? e(t.value)
                            : ((i = t.value),
                              i instanceof s
                                ? i
                                : new s(function (e) {
                                    e(i);
                                  })).then(n, r);
                        }
                        u((a = a.apply(i, o || [])).next());
                      })
                    );
                    var i, o, s, a;
                  };
                }),
                pi
              );
            },
          };
        },
        vi = (function (e) {
          function t(t) {
            var n,
              r = this,
              i = $e($e({}, rr), t),
              o = ur(i),
              s = (function (e) {
                var t,
                  n = this,
                  r = ai(e.credentials || e.credentialDefaultProvider(e)),
                  i = e.signingEscapePath,
                  o = void 0 === i || i,
                  s = e.systemClockOffset,
                  a = void 0 === s ? e.systemClockOffset || 0 : s,
                  u = e.sha256;
                return (
                  (t = e.signer
                    ? ai(e.signer)
                    : function () {
                        return ai(e.region)()
                          .then(function (t) {
                            return (
                              (r = n),
                              (i = void 0),
                              (s = function () {
                                return (function (e, t) {
                                  var n,
                                    r,
                                    i,
                                    o,
                                    s = {
                                      label: 0,
                                      sent: function () {
                                        if (1 & i[0]) throw i[1];
                                        return i[1];
                                      },
                                      trys: [],
                                      ops: [],
                                    };
                                  return (
                                    (o = {
                                      next: a(0),
                                      throw: a(1),
                                      return: a(2),
                                    }),
                                    "function" == typeof Symbol &&
                                      (o[Symbol.iterator] = function () {
                                        return this;
                                      }),
                                    o
                                  );
                                  function a(o) {
                                    return function (a) {
                                      return (function (o) {
                                        if (n)
                                          throw new TypeError(
                                            "Generator is already executing."
                                          );
                                        for (; s; )
                                          try {
                                            if (
                                              ((n = 1),
                                              r &&
                                                (i =
                                                  2 & o[0]
                                                    ? r.return
                                                    : o[0]
                                                    ? r.throw ||
                                                      ((i = r.return) &&
                                                        i.call(r),
                                                      0)
                                                    : r.next) &&
                                                !(i = i.call(r, o[1])).done)
                                            )
                                              return i;
                                            switch (
                                              ((r = 0),
                                              i && (o = [2 & o[0], i.value]),
                                              o[0])
                                            ) {
                                              case 0:
                                              case 1:
                                                i = o;
                                                break;
                                              case 4:
                                                return (
                                                  s.label++,
                                                  { value: o[1], done: !1 }
                                                );
                                              case 5:
                                                s.label++,
                                                  (r = o[1]),
                                                  (o = [0]);
                                                continue;
                                              case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                              default:
                                                if (
                                                  !(
                                                    (i =
                                                      (i = s.trys).length > 0 &&
                                                      i[i.length - 1]) ||
                                                    (6 !== o[0] && 2 !== o[0])
                                                  )
                                                ) {
                                                  s = 0;
                                                  continue;
                                                }
                                                if (
                                                  3 === o[0] &&
                                                  (!i ||
                                                    (o[1] > i[0] &&
                                                      o[1] < i[3]))
                                                ) {
                                                  s.label = o[1];
                                                  break;
                                                }
                                                if (
                                                  6 === o[0] &&
                                                  s.label < i[1]
                                                ) {
                                                  (s.label = i[1]), (i = o);
                                                  break;
                                                }
                                                if (i && s.label < i[2]) {
                                                  (s.label = i[2]),
                                                    s.ops.push(o);
                                                  break;
                                                }
                                                i[2] && s.ops.pop(),
                                                  s.trys.pop();
                                                continue;
                                            }
                                            o = t.call(e, s);
                                          } catch (e) {
                                            (o = [6, e]), (r = 0);
                                          } finally {
                                            n = i = 0;
                                          }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                          value: o[0] ? o[1] : void 0,
                                          done: !0,
                                        };
                                      })([o, a]);
                                    };
                                  }
                                })(this, function (n) {
                                  switch (n.label) {
                                    case 0:
                                      return [4, e.regionInfoProvider(t)];
                                    case 1:
                                      return [2, [n.sent() || {}, t]];
                                  }
                                });
                              }),
                              new ((o = void 0) || (o = Promise))(function (
                                e,
                                t
                              ) {
                                function n(e) {
                                  try {
                                    u(s.next(e));
                                  } catch (e) {
                                    t(e);
                                  }
                                }
                                function a(e) {
                                  try {
                                    u(s.throw(e));
                                  } catch (e) {
                                    t(e);
                                  }
                                }
                                function u(t) {
                                  var r;
                                  t.done
                                    ? e(t.value)
                                    : ((r = t.value),
                                      r instanceof o
                                        ? r
                                        : new o(function (e) {
                                            e(r);
                                          })).then(n, a);
                                }
                                u((s = s.apply(r, i || [])).next());
                              })
                            );
                            var r, i, o, s;
                          })
                          .then(function (t) {
                            var n = (function (e, t) {
                                var n =
                                  "function" == typeof Symbol &&
                                  e[Symbol.iterator];
                                if (!n) return e;
                                var r,
                                  i,
                                  o = n.call(e),
                                  s = [];
                                try {
                                  for (
                                    ;
                                    (void 0 === t || t-- > 0) &&
                                    !(r = o.next()).done;

                                  )
                                    s.push(r.value);
                                } catch (e) {
                                  i = { error: e };
                                } finally {
                                  try {
                                    r && !r.done && (n = o.return) && n.call(o);
                                  } finally {
                                    if (i) throw i.error;
                                  }
                                }
                                return s;
                              })(t, 2),
                              i = n[0],
                              s = n[1],
                              a = i.signingRegion,
                              c = i.signingService;
                            return (
                              (e.signingRegion = e.signingRegion || a || s),
                              (e.signingName =
                                e.signingName || c || e.serviceId),
                              new ni({
                                credentials: r,
                                region: e.signingRegion,
                                service: e.signingName,
                                sha256: u,
                                uriEscapePath: o,
                              })
                            );
                          });
                      }),
                  wr(wr({}, e), {
                    systemClockOffset: a,
                    signingEscapePath: o,
                    credentials: r,
                    signer: t,
                  })
                );
              })(or(o)),
              a = qn(s),
              u = ui(ui({}, (n = a)), {
                customUserAgent:
                  "string" == typeof n.customUserAgent
                    ? [[n.customUserAgent]]
                    : n.customUserAgent,
              });
            return (
              ((r = e.call(this, u) || this).config = u),
              r.middlewareStack.use(On(r.config)),
              r.middlewareStack.use(dr(r.config)),
              r.middlewareStack.use(gr(r.config)),
              r.middlewareStack.use(mr(r.config)),
              r.middlewareStack.use(gi(r.config)),
              r
            );
          }
          return (
            G(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
            }),
            t
          );
        })(Kt),
        yi = "aws-amplify/5.1.4",
        mi = {
          userAgent: yi + " js",
          product: "",
          navigator: null,
          isReactNative: !1,
        };
      "undefined" != typeof navigator &&
        navigator.product &&
        ((mi.product = navigator.product || ""),
        (mi.navigator = navigator || null),
        "ReactNative" === navigator.product
          ? ((mi.userAgent = yi + " react-native"), (mi.isReactNative = !0))
          : ((mi.userAgent = yi + " js"), (mi.isReactNative = !1)));
      var wi = function (e) {
        return "" + mi.userAgent + (e || "");
      };
      function bi(e) {
        var n = new vi({ region: e.region, customUserAgent: wi() });
        return (
          n.middlewareStack.add(
            function (e, n) {
              return function (n) {
                return e(
                  (function (e) {
                    return t(t({}, e), {
                      request: t(t({}, e.request), {
                        headers: t(t({}, e.request.headers), {
                          "cache-control": "no-store",
                        }),
                      }),
                    });
                  })(n)
                );
              };
            },
            { step: "build", name: "cacheControlMiddleWare" }
          ),
          n
        );
      }
      var Si = new c("Credentials"),
        _i =
          "undefined" != typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default",
        Ai = (function () {
          function e(e) {
            (this._gettingCredPromise = null),
              (this._refreshHandlers = {}),
              (this.Auth = void 0),
              this.configure(e),
              (this._refreshHandlers.google = q.refreshGoogleToken),
              (this._refreshHandlers.facebook = V.refreshFacebookToken);
          }
          return (
            (e.prototype.getModuleName = function () {
              return "Credentials";
            }),
            (e.prototype.getCredSource = function () {
              return this._credentials_source;
            }),
            (e.prototype.configure = function (e) {
              if (!e) return this._config || {};
              this._config = Object.assign({}, this._config, e);
              var n = this._config.refreshHandlers;
              return (
                n &&
                  (this._refreshHandlers = t(t({}, this._refreshHandlers), n)),
                (this._storage = this._config.storage),
                this._storage || (this._storage = new U().getStorage()),
                (this._storageSync = Promise.resolve()),
                "function" == typeof this._storage.sync &&
                  (this._storageSync = this._storage.sync()),
                C.dispatch(
                  "core",
                  {
                    event: "credentials_configured",
                    data: null,
                    message: "Credentials has been configured successfully",
                  },
                  "Credentials",
                  _i
                ),
                this._config
              );
            }),
            (e.prototype.get = function () {
              return Si.debug("getting credentials"), this._pickupCredentials();
            }),
            (e.prototype._getCognitoIdentityIdStorageKey = function (e) {
              return "CognitoIdentityId-" + e;
            }),
            (e.prototype._pickupCredentials = function () {
              return (
                Si.debug("picking up credentials"),
                this._gettingCredPromise && this._gettingCredPromise.isPending()
                  ? Si.debug("getting old cred promise")
                  : (Si.debug("getting new cred promise"),
                    (this._gettingCredPromise = (function (e) {
                      if (e.isResolved) return e;
                      var t = !0,
                        n = !1,
                        r = !1,
                        i = e.then(
                          function (e) {
                            return (r = !0), (t = !1), e;
                          },
                          function (e) {
                            throw ((n = !0), (t = !1), e);
                          }
                        );
                      return (
                        (i.isFullfilled = function () {
                          return r;
                        }),
                        (i.isPending = function () {
                          return t;
                        }),
                        (i.isRejected = function () {
                          return n;
                        }),
                        i
                      );
                    })(this._keepAlive()))),
                this._gettingCredPromise
              );
            }),
            (e.prototype._keepAlive = function () {
              return r(this, void 0, void 0, function () {
                var e, t, n, r, o, s, a;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (Si.debug(
                          "checking if credentials exists and not expired"
                        ),
                        (e = this._credentials) &&
                          !this._isExpired(e) &&
                          !this._isPastTTL())
                      )
                        return (
                          Si.debug(
                            "credentials not changed and not expired, directly return"
                          ),
                          [2, Promise.resolve(e)]
                        );
                      if (
                        (Si.debug(
                          "need to get a new credential or refresh the existing one"
                        ),
                        (t = this.Auth),
                        !(n = void 0 === t ? h.Auth : t) ||
                          "function" != typeof n.currentUserCredentials)
                      )
                        return [2, this._setCredentialsForGuest()];
                      if (this._isExpired(e) || !this._isPastTTL())
                        return [3, 6];
                      Si.debug("ttl has passed but token is not yet expired"),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 5, , 6]), [4, n.currentUserPoolUser()]
                      );
                    case 2:
                      return (r = i.sent()), [4, n.currentSession()];
                    case 3:
                      return (
                        (o = i.sent()),
                        (s = o.refreshToken),
                        [
                          4,
                          new Promise(function (e, t) {
                            r.refreshSession(s, function (n, r) {
                              return n ? t(n) : e(r);
                            });
                          }),
                        ]
                      );
                    case 4:
                      return i.sent(), [3, 6];
                    case 5:
                      return (
                        (a = i.sent()),
                        Si.debug(
                          "Error attempting to refreshing the session",
                          a
                        ),
                        [3, 6]
                      );
                    case 6:
                      return [2, n.currentUserCredentials()];
                  }
                });
              });
            }),
            (e.prototype.refreshFederatedToken = function (e) {
              Si.debug("Getting federated credentials");
              var t = e.provider,
                n = e.user,
                r = e.token,
                i = e.identity_id,
                o = e.expires_at;
              o = 1970 === new Date(o).getFullYear() ? 1e3 * o : o;
              var s = this;
              return (
                Si.debug("checking if federated jwt token expired"),
                o > new Date().getTime()
                  ? (Si.debug("token not expired"),
                    this._setCredentialsFromFederation({
                      provider: t,
                      token: r,
                      user: n,
                      identity_id: i,
                      expires_at: o,
                    }))
                  : s._refreshHandlers[t] &&
                    "function" == typeof s._refreshHandlers[t]
                  ? (Si.debug(
                      "getting refreshed jwt token from federation provider"
                    ),
                    this._providerRefreshWithRetry({
                      refreshHandler: s._refreshHandlers[t],
                      provider: t,
                      user: n,
                    }))
                  : (Si.debug("no refresh handler for provider:", t),
                    this.clear(),
                    Promise.reject("no refresh handler for provider"))
              );
            }),
            (e.prototype._providerRefreshWithRetry = function (e) {
              var t,
                n,
                o,
                a,
                u = this,
                c = e.refreshHandler,
                l = e.provider,
                f = e.user;
              return ((t = c),
              (n = []),
              (o = 1e4),
              void 0 === o && (o = x),
              (function (e, t, n, o) {
                return r(this, void 0, void 0, function () {
                  var a = this;
                  return i(this, function (u) {
                    if ("function" != typeof e)
                      throw Error("functionToRetry must be a function");
                    return [
                      2,
                      new Promise(function (u, c) {
                        return r(a, void 0, void 0, function () {
                          var r, a, l, f, h, d, p;
                          return i(this, function (g) {
                            switch (g.label) {
                              case 0:
                                (r = 0),
                                  (a = !1),
                                  (f = function () {}),
                                  o &&
                                    o.then(function () {
                                      (a = !0), clearTimeout(l), f();
                                    }),
                                  (d = function () {
                                    var o, d, p, g;
                                    return i(this, function (i) {
                                      switch (i.label) {
                                        case 0:
                                          r++,
                                            R.debug(
                                              e.name +
                                                " attempt #" +
                                                r +
                                                " with this vars: " +
                                                JSON.stringify(t)
                                            ),
                                            (i.label = 1);
                                        case 1:
                                          return (
                                            i.trys.push([1, 3, , 7]),
                                            (o = {}),
                                            (d = u),
                                            [4, e.apply(void 0, s(t))]
                                          );
                                        case 2:
                                          return [
                                            2,
                                            ((o.value = d.apply(void 0, [
                                              i.sent(),
                                            ])),
                                            o),
                                          ];
                                        case 3:
                                          return (
                                            (p = i.sent()),
                                            (h = p),
                                            R.debug("error on " + e.name, p),
                                            (v = p) && v.nonRetryable
                                              ? (R.debug(
                                                  e.name +
                                                    " non retryable error",
                                                  p
                                                ),
                                                [2, { value: c(p) }])
                                              : ((g = n(r, t, p)),
                                                R.debug(
                                                  e.name +
                                                    " retrying in " +
                                                    g +
                                                    " ms"
                                                ),
                                                !1 === g || a
                                                  ? [2, { value: c(p) }]
                                                  : [3, 4])
                                          );
                                        case 4:
                                          return [
                                            4,
                                            new Promise(function (e) {
                                              (f = e), (l = setTimeout(f, g));
                                            }),
                                          ];
                                        case 5:
                                          i.sent(), (i.label = 6);
                                        case 6:
                                          return [3, 7];
                                        case 7:
                                          return [2];
                                      }
                                      var v;
                                    });
                                  }),
                                  (g.label = 1);
                              case 1:
                                return a ? [3, 3] : [5, d()];
                              case 2:
                                return "object" == typeof (p = g.sent())
                                  ? [2, p.value]
                                  : [3, 1];
                              case 3:
                                return c(h), [2];
                            }
                          });
                        });
                      }),
                    ];
                  });
                });
              })(
                t,
                n,
                (function (e) {
                  return (
                    void 0 === e && (e = x),
                    function (t) {
                      var n = 100 * Math.pow(2, t) + 100 * Math.random();
                      return !(n > e) && n;
                    }
                  );
                })(o),
                a
              ))
                .then(function (e) {
                  return (
                    Si.debug("refresh federated token sucessfully", e),
                    u._setCredentialsFromFederation({
                      provider: l,
                      token: e.token,
                      user: f,
                      identity_id: e.identity_id,
                      expires_at: e.expires_at,
                    })
                  );
                })
                .catch(function (e) {
                  return (
                    ("string" == typeof e &&
                      0 ===
                        e
                          .toLowerCase()
                          .lastIndexOf("network error", e.length)) ||
                      u.clear(),
                    Si.debug("refresh federated token failed", e),
                    Promise.reject("refreshing federation token failed: " + e)
                  );
                });
            }),
            (e.prototype._isExpired = function (e) {
              if (!e)
                return Si.debug("no credentials for expiration check"), !0;
              Si.debug("are these credentials expired?", e);
              var t = Date.now();
              return e.expiration.getTime() <= t;
            }),
            (e.prototype._isPastTTL = function () {
              return this._nextCredentialsRefresh <= Date.now();
            }),
            (e.prototype._setCredentialsForGuest = function () {
              var e;
              return r(this, void 0, void 0, function () {
                var t,
                  n,
                  o,
                  s,
                  a,
                  u,
                  c,
                  l,
                  f,
                  h,
                  d = this;
                return i(this, function (p) {
                  switch (p.label) {
                    case 0:
                      return (
                        Si.debug("setting credentials for guest"),
                        (null === (e = this._config) || void 0 === e
                          ? void 0
                          : e.identityPoolId) ||
                          (this._config = Object.assign(
                            {},
                            this._config,
                            on(this._config || {}).Auth
                          )),
                        (t = this._config),
                        (n = t.identityPoolId),
                        (o = t.region),
                        (s = t.mandatorySignIn),
                        (a = t.identityPoolRegion),
                        s
                          ? [
                              2,
                              Promise.reject(
                                "cannot get guest credentials when mandatory signin enabled"
                              ),
                            ]
                          : n
                          ? a || o
                            ? ((c = this), [4, this._getGuestIdentityId()])
                            : (Si.debug(
                                "region is not configured for getting the credentials"
                              ),
                              [
                                2,
                                Promise.reject(
                                  "region is not configured for getting the credentials"
                                ),
                              ])
                          : (Si.debug(
                              "No Cognito Identity pool provided for unauthenticated access"
                            ),
                            [
                              2,
                              Promise.reject(
                                "No Cognito Identity pool provided for unauthenticated access"
                              ),
                            ])
                      );
                    case 1:
                      return (
                        (u = c._identityId = p.sent()),
                        (l = bi({ region: a || o })),
                        (f = void 0),
                        u
                          ? (f = Qt({ identityId: u, client: l })())
                          : ((h = function () {
                              return r(d, void 0, void 0, function () {
                                var e;
                                return i(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [
                                        4,
                                        l.send(new Xt({ IdentityPoolId: n })),
                                      ];
                                    case 1:
                                      return (
                                        (e = t.sent().IdentityId),
                                        (this._identityId = e),
                                        [2, Qt({ client: l, identityId: e })()]
                                      );
                                  }
                                });
                              });
                            }),
                            (f = h().catch(function (e) {
                              return r(d, void 0, void 0, function () {
                                return i(this, function (t) {
                                  throw e;
                                });
                              });
                            }))),
                        [
                          2,
                          this._loadCredentials(f, "guest", !1, null)
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return r(d, void 0, void 0, function () {
                                var t,
                                  o = this;
                                return i(this, function (s) {
                                  switch (s.label) {
                                    case 0:
                                      return "ResourceNotFoundException" !==
                                        e.name ||
                                        e.message !==
                                          "Identity '" + u + "' not found."
                                        ? [3, 2]
                                        : (Si.debug(
                                            "Failed to load guest credentials"
                                          ),
                                          [4, this._removeGuestIdentityId()]);
                                    case 1:
                                      return (
                                        s.sent(),
                                        (t = function () {
                                          return r(
                                            o,
                                            void 0,
                                            void 0,
                                            function () {
                                              var e;
                                              return i(this, function (t) {
                                                switch (t.label) {
                                                  case 0:
                                                    return [
                                                      4,
                                                      l.send(
                                                        new Xt({
                                                          IdentityPoolId: n,
                                                        })
                                                      ),
                                                    ];
                                                  case 1:
                                                    return (
                                                      (e = t.sent().IdentityId),
                                                      (this._identityId = e),
                                                      [
                                                        2,
                                                        Qt({
                                                          client: l,
                                                          identityId: e,
                                                        })(),
                                                      ]
                                                    );
                                                }
                                              });
                                            }
                                          );
                                        }),
                                        (f = t().catch(function (e) {
                                          return r(
                                            o,
                                            void 0,
                                            void 0,
                                            function () {
                                              return i(this, function (t) {
                                                throw e;
                                              });
                                            }
                                          );
                                        })),
                                        [
                                          2,
                                          this._loadCredentials(
                                            f,
                                            "guest",
                                            !1,
                                            null
                                          ),
                                        ]
                                      );
                                    case 2:
                                      return [2, e];
                                  }
                                });
                              });
                            }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype._setCredentialsFromFederation = function (e) {
              var t = e.provider,
                n = e.token,
                r = e.identity_id,
                i =
                  {
                    google: "accounts.google.com",
                    facebook: "graph.facebook.com",
                    amazon: "www.amazon.com",
                    developer: "cognito-identity.amazonaws.com",
                  }[t] || t;
              if (!i)
                return Promise.reject("You must specify a federated provider");
              var o = {};
              o[i] = n;
              var s = this._config,
                a = s.identityPoolId,
                u = s.region,
                c = s.identityPoolRegion;
              if (!a)
                return (
                  Si.debug("No Cognito Federated Identity pool provided"),
                  Promise.reject("No Cognito Federated Identity pool provided")
                );
              if (!c && !u)
                return (
                  Si.debug(
                    "region is not configured for getting the credentials"
                  ),
                  Promise.reject(
                    "region is not configured for getting the credentials"
                  )
                );
              var l = bi({ region: c || u }),
                f = void 0;
              return (
                (f = r
                  ? Qt({ identityId: r, logins: o, client: l })()
                  : (function (e) {
                      var t = this,
                        n = e.accountId,
                        r = e.cache,
                        i =
                          void 0 === r
                            ? "object" == typeof self && self.indexedDB
                              ? new tn()
                              : "object" == typeof window && window.localStorage
                              ? window.localStorage
                              : nn
                            : r,
                        o = e.client,
                        s = e.customRoleArn,
                        a = e.identityPoolId,
                        u = e.logins,
                        c = e.userIdentifier,
                        l =
                          void 0 === c
                            ? u && 0 !== Object.keys(u).length
                              ? void 0
                              : "ANONYMOUS"
                            : c,
                        f = l
                          ? "aws:cognito-identity-credentials:" + a + ":" + l
                          : void 0,
                        h = function () {
                          return K(t, void 0, void 0, function () {
                            var e, t, r, c, l, d, p, g, v;
                            return H(this, function (y) {
                              switch (y.label) {
                                case 0:
                                  return (t = f) ? [4, i.getItem(f)] : [3, 2];
                                case 1:
                                  (t = y.sent()), (y.label = 2);
                                case 2:
                                  return (e = t)
                                    ? [3, 7]
                                    : ((d = (l = o).send),
                                      (p = Xt.bind),
                                      (v = { AccountId: n, IdentityPoolId: a }),
                                      u ? [4, Zt(u)] : [3, 4]);
                                case 3:
                                  return (g = y.sent()), [3, 5];
                                case 4:
                                  (g = void 0), (y.label = 5);
                                case 5:
                                  return [
                                    4,
                                    d.apply(l, [
                                      new (p.apply(Xt, [
                                        void 0,
                                        ((v.Logins = g), v),
                                      ]))(),
                                    ]),
                                  ];
                                case 6:
                                  (r = y.sent().IdentityId),
                                    (c =
                                      void 0 === r
                                        ? (function () {
                                            throw new $t(
                                              "Response from Amazon Cognito contained no identity ID"
                                            );
                                          })()
                                        : r),
                                    (e = c),
                                    f &&
                                      Promise.resolve(i.setItem(f, e)).catch(
                                        function () {}
                                      ),
                                    (y.label = 7);
                                case 7:
                                  return [
                                    2,
                                    (h = Qt({
                                      client: o,
                                      customRoleArn: s,
                                      logins: u,
                                      identityId: e,
                                    }))(),
                                  ];
                              }
                            });
                          });
                        };
                      return function () {
                        return h().catch(function (e) {
                          return K(t, void 0, void 0, function () {
                            return H(this, function (t) {
                              throw (
                                (f &&
                                  Promise.resolve(i.removeItem(f)).catch(
                                    function () {}
                                  ),
                                e)
                              );
                            });
                          });
                        });
                      };
                    })({ logins: o, identityPoolId: a, client: l })()),
                this._loadCredentials(f, "federated", !0, e)
              );
            }),
            (e.prototype._setCredentialsFromSession = function (e) {
              var t = this;
              Si.debug("set credentials from session");
              var n = e.getIdToken().getJwtToken(),
                o = this._config,
                s = o.region,
                a = o.userPoolId,
                u = o.identityPoolId,
                c = o.identityPoolRegion;
              if (!u)
                return (
                  Si.debug("No Cognito Federated Identity pool provided"),
                  Promise.reject("No Cognito Federated Identity pool provided")
                );
              if (!c && !s)
                return (
                  Si.debug(
                    "region is not configured for getting the credentials"
                  ),
                  Promise.reject(
                    "region is not configured for getting the credentials"
                  )
                );
              var l = {};
              l["cognito-idp." + s + ".amazonaws.com/" + a] = n;
              var f = bi({ region: c || s }),
                h = r(t, void 0, void 0, function () {
                  var e, t, n, r, o, s, a, c, h, d;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, this._getGuestIdentityId()];
                      case 1:
                        return (e = i.sent())
                          ? [3, 3]
                          : [
                              4,
                              f.send(new Xt({ IdentityPoolId: u, Logins: l })),
                            ];
                      case 2:
                        (n = i.sent().IdentityId), (t = n), (i.label = 3);
                      case 3:
                        return [
                          4,
                          f.send(new Yt({ IdentityId: e || t, Logins: l })),
                        ];
                      case 4:
                        return (
                          (r = i.sent()),
                          (o = r.Credentials),
                          (s = o.AccessKeyId),
                          (a = o.Expiration),
                          (c = o.SecretKey),
                          (h = o.SessionToken),
                          (d = r.IdentityId),
                          (this._identityId = d),
                          e
                            ? (Si.debug(
                                "The guest identity " +
                                  e +
                                  " has been successfully linked to the logins"
                              ),
                              e === d &&
                                Si.debug(
                                  "The guest identity " +
                                    e +
                                    " has become the primary identity"
                                ),
                              [4, this._removeGuestIdentityId()])
                            : [3, 6]
                        );
                      case 5:
                        i.sent(), (i.label = 6);
                      case 6:
                        return [
                          2,
                          {
                            accessKeyId: s,
                            secretAccessKey: c,
                            sessionToken: h,
                            expiration: a,
                            identityId: d,
                          },
                        ];
                    }
                  });
                }).catch(function (e) {
                  return r(t, void 0, void 0, function () {
                    return i(this, function (t) {
                      throw e;
                    });
                  });
                });
              return this._loadCredentials(h, "userPool", !0, null);
            }),
            (e.prototype._loadCredentials = function (e, t, n, o) {
              var s = this,
                a = this;
              return new Promise(function (u, c) {
                e.then(function (e) {
                  return r(s, void 0, void 0, function () {
                    var r, s, c, l, f;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (
                            (Si.debug("Load credentials successfully", e),
                            this._identityId &&
                              !e.identityId &&
                              (e.identityId = this._identityId),
                            (a._credentials = e),
                            (a._credentials.authenticated = n),
                            (a._credentials_source = t),
                            (a._nextCredentialsRefresh =
                              new Date().getTime() + 3e6),
                            "federated" === t)
                          ) {
                            (r = Object.assign(
                              { id: this._credentials.identityId },
                              o.user
                            )),
                              (s = o.provider),
                              (c = o.token),
                              (l = o.expires_at),
                              (f = o.identity_id);
                            try {
                              this._storage.setItem(
                                "aws-amplify-federatedInfo",
                                JSON.stringify({
                                  provider: s,
                                  token: c,
                                  user: r,
                                  expires_at: l,
                                  identity_id: f,
                                })
                              );
                            } catch (e) {
                              Si.debug(
                                "Failed to put federated info into auth storage",
                                e
                              );
                            }
                          }
                          return "guest" !== t
                            ? [3, 2]
                            : [4, this._setGuestIdentityId(e.identityId)];
                        case 1:
                          i.sent(), (i.label = 2);
                        case 2:
                          return u(a._credentials), [2];
                      }
                    });
                  });
                }).catch(function (t) {
                  if (t)
                    return (
                      Si.debug("Failed to load credentials", e),
                      Si.debug("Error loading credentials", t),
                      void c(t)
                    );
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              return "session" === t
                ? this._setCredentialsFromSession(e)
                : "federation" === t
                ? this._setCredentialsFromFederation(e)
                : "guest" === t
                ? this._setCredentialsForGuest()
                : (Si.debug("no source specified for setting credentials"),
                  Promise.reject("invalid source"));
            }),
            (e.prototype.clear = function () {
              return r(this, void 0, void 0, function () {
                return i(this, function (e) {
                  return (
                    (this._credentials = null),
                    (this._credentials_source = null),
                    Si.debug("removing aws-amplify-federatedInfo from storage"),
                    this._storage.removeItem("aws-amplify-federatedInfo"),
                    [2]
                  );
                });
              });
            }),
            (e.prototype._getGuestIdentityId = function () {
              return r(this, void 0, void 0, function () {
                var e, t;
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (e = this._config.identityPoolId), (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return (
                        n.sent(),
                        [
                          2,
                          this._storage.getItem(
                            this._getCognitoIdentityIdStorageKey(e)
                          ),
                        ]
                      );
                    case 3:
                      return (
                        (t = n.sent()),
                        Si.debug(
                          "Failed to get the cached guest identityId",
                          t
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype._setGuestIdentityId = function (e) {
              return r(this, void 0, void 0, function () {
                var t, n;
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (t = this._config.identityPoolId), (r.label = 1);
                    case 1:
                      return r.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return (
                        r.sent(),
                        this._storage.setItem(
                          this._getCognitoIdentityIdStorageKey(t),
                          e
                        ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = r.sent()),
                        Si.debug("Failed to cache guest identityId", n),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype._removeGuestIdentityId = function () {
              return r(this, void 0, void 0, function () {
                var e;
                return i(this, function (t) {
                  return (
                    (e = this._config.identityPoolId),
                    Si.debug(
                      "removing " +
                        this._getCognitoIdentityIdStorageKey(e) +
                        " from storage"
                    ),
                    this._storage.removeItem(
                      this._getCognitoIdentityIdStorageKey(e)
                    ),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.shear = function (e) {
              return {
                accessKeyId: e.accessKeyId,
                sessionToken: e.sessionToken,
                secretAccessKey: e.secretAccessKey,
                identityId: e.identityId,
                authenticated: e.authenticated,
              };
            }),
            e
          );
        })(),
        Ei = new Ai(null);
      h.register(Ei);
      var Ii = n(6489);
      function Pi(e, t) {
        void 0 === t && (t = {});
        var n = (function (e) {
          return e && "j" === e[0] && ":" === e[1] ? e.substr(2) : e;
        })(e);
        if (
          (function (e, t) {
            return (
              void 0 === t &&
                (t = !e || ("{" !== e[0] && "[" !== e[0] && '"' !== e[0])),
              !t
            );
          })(n, t.doNotParse)
        )
          try {
            return JSON.parse(n);
          } catch (e) {}
        return e;
      }
      var Ci = function () {
          return (
            (Ci =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Ci.apply(this, arguments)
          );
        },
        Oi = (function () {
          function e(e, t) {
            var n = this;
            (this.changeListeners = []),
              (this.HAS_DOCUMENT_COOKIE = !1),
              (this.cookies = (function (e, t) {
                return "string" == typeof e
                  ? Ii.Q(e, t)
                  : "object" == typeof e && null !== e
                  ? e
                  : {};
              })(e, t)),
              new Promise(function () {
                n.HAS_DOCUMENT_COOKIE =
                  "object" == typeof document &&
                  "string" == typeof document.cookie;
              }).catch(function () {});
          }
          return (
            (e.prototype._updateBrowserValues = function (e) {
              this.HAS_DOCUMENT_COOKIE &&
                (this.cookies = Ii.Q(document.cookie, e));
            }),
            (e.prototype._emitChange = function (e) {
              for (var t = 0; t < this.changeListeners.length; ++t)
                this.changeListeners[t](e);
            }),
            (e.prototype.get = function (e, t, n) {
              return (
                void 0 === t && (t = {}),
                this._updateBrowserValues(n),
                Pi(this.cookies[e], t)
              );
            }),
            (e.prototype.getAll = function (e, t) {
              void 0 === e && (e = {}), this._updateBrowserValues(t);
              var n = {};
              for (var r in this.cookies) n[r] = Pi(this.cookies[r], e);
              return n;
            }),
            (e.prototype.set = function (e, t, n) {
              var r;
              "object" == typeof t && (t = JSON.stringify(t)),
                (this.cookies = Ci(
                  Ci({}, this.cookies),
                  (((r = {})[e] = t), r)
                )),
                this.HAS_DOCUMENT_COOKIE && (document.cookie = Ii.q(e, t, n)),
                this._emitChange({ name: e, value: t, options: n });
            }),
            (e.prototype.remove = function (e, t) {
              var n = (t = Ci(Ci({}, t), {
                expires: new Date(1970, 1, 1, 0, 0, 1),
                maxAge: 0,
              }));
              (this.cookies = Ci({}, this.cookies)),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE && (document.cookie = Ii.q(e, "", n)),
                this._emitChange({ name: e, value: void 0, options: t });
            }),
            (e.prototype.addChangeListener = function (e) {
              this.changeListeners.push(e);
            }),
            (e.prototype.removeChangeListener = function (e) {
              var t = this.changeListeners.indexOf(e);
              t >= 0 && this.changeListeners.splice(t, 1);
            }),
            e
          );
        })();
      const Ti = Oi;
      var Ui,
        ki = k().isBrowser,
        Ri = (function () {
          function e(e) {
            void 0 === e && (e = {}),
              (this.cookies = new Ti()),
              (this.store = ki ? window.localStorage : Object.create(null)),
              (this.cookies = e.req ? new Ti(e.req.headers.cookie) : new Ti()),
              Object.assign(this.store, this.cookies.getAll());
          }
          return (
            Object.defineProperty(e.prototype, "length", {
              get: function () {
                return Object.entries(this.store).length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.clear = function () {
              var e = this;
              Array.from(new Array(this.length))
                .map(function (t, n) {
                  return e.key(n);
                })
                .forEach(function (t) {
                  return e.removeItem(t);
                });
            }),
            (e.prototype.getItem = function (e) {
              return this.getLocalItem(e);
            }),
            (e.prototype.getLocalItem = function (e) {
              return Object.prototype.hasOwnProperty.call(this.store, e)
                ? this.store[e]
                : null;
            }),
            (e.prototype.getUniversalItem = function (e) {
              return this.cookies.get(e);
            }),
            (e.prototype.key = function (e) {
              return Object.keys(this.store)[e];
            }),
            (e.prototype.removeItem = function (e) {
              this.removeLocalItem(e), this.removeUniversalItem(e);
            }),
            (e.prototype.removeLocalItem = function (e) {
              delete this.store[e];
            }),
            (e.prototype.removeUniversalItem = function (e) {
              this.cookies.remove(e, { path: "/" });
            }),
            (e.prototype.setItem = function (e, t) {
              this.setLocalItem(e, t);
              var n = e.split(".").pop();
              [
                "LastAuthUser",
                "accessToken",
                "refreshToken",
                "idToken",
              ].includes(null != n ? n : "") &&
                this.setUniversalItem(e, t, {
                  expires: new Date(Date.now() + 31536e6),
                });
            }),
            (e.prototype.setLocalItem = function (e, t) {
              this.store[e] = t;
            }),
            (e.prototype.setUniversalItem = function (e, n, r) {
              void 0 === r && (r = {}),
                this.cookies.set(
                  e,
                  n,
                  t(t({}, r), {
                    path: "/",
                    sameSite: !0,
                    secure: !ki || "localhost" !== window.location.hostname,
                  })
                );
            }),
            e
          );
        })(),
        Mi = (function () {
          function e(e) {
            var t = e || {},
              n = t.ValidationData,
              r = t.Username,
              i = t.Password,
              o = t.AuthParameters,
              s = t.ClientMetadata;
            (this.validationData = n || {}),
              (this.authParameters = o || {}),
              (this.clientMetadata = s || {}),
              (this.username = r),
              (this.password = i);
          }
          var t = e.prototype;
          return (
            (t.getUsername = function () {
              return this.username;
            }),
            (t.getPassword = function () {
              return this.password;
            }),
            (t.getValidationData = function () {
              return this.validationData;
            }),
            (t.getAuthParameters = function () {
              return this.authParameters;
            }),
            (t.getClientMetadata = function () {
              return this.clientMetadata;
            }),
            e
          );
        })(),
        xi = n(8764);
      if (
        ("undefined" != typeof window && window.crypto && (Ui = window.crypto),
        !Ui &&
          "undefined" != typeof window &&
          window.msCrypto &&
          (Ui = window.msCrypto),
        !Ui && void 0 !== n.g && n.g.crypto && (Ui = n.g.crypto),
        !Ui)
      )
        try {
          Ui = n(6249);
        } catch (e) {}
      function Di() {
        if (Ui) {
          if ("function" == typeof Ui.getRandomValues)
            try {
              return Ui.getRandomValues(new Uint32Array(1))[0];
            } catch (e) {}
          if ("function" == typeof Ui.randomBytes)
            try {
              return Ui.randomBytes(4).readInt32LE();
            } catch (e) {}
        }
        throw new Error(
          "Native crypto module could not be used to get secure random number."
        );
      }
      var Fi = (function () {
          function e(e, t) {
            (e = this.words = e || []),
              (this.sigBytes = null != t ? t : 4 * e.length);
          }
          var t = e.prototype;
          return (
            (t.random = function (t) {
              for (var n = [], r = 0; r < t; r += 4) n.push(Di());
              return new e(n, t);
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.words, n = e.sigBytes, r = [], i = 0;
                  i < n;
                  i++
                ) {
                  var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                  r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
                }
                return r.join("");
              })(this);
            }),
            e
          );
        })(),
        Ni = n(1938);
      const ji = Li;
      function Li(e, t) {
        null != e && this.fromString(e, t);
      }
      function Bi() {
        return new Li(null);
      }
      var qi,
        Vi = "undefined" != typeof navigator;
      Vi && "Microsoft Internet Explorer" == navigator.appName
        ? ((Li.prototype.am = function (e, t, n, r, i, o) {
            for (var s = 32767 & t, a = t >> 15; --o >= 0; ) {
              var u = 32767 & this[e],
                c = this[e++] >> 15,
                l = a * u + c * s;
              (i =
                ((u = s * u + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>>
                  30) +
                (l >>> 15) +
                a * c +
                (i >>> 30)),
                (n[r++] = 1073741823 & u);
            }
            return i;
          }),
          (qi = 30))
        : Vi && "Netscape" != navigator.appName
        ? ((Li.prototype.am = function (e, t, n, r, i, o) {
            for (; --o >= 0; ) {
              var s = t * this[e++] + n[r] + i;
              (i = Math.floor(s / 67108864)), (n[r++] = 67108863 & s);
            }
            return i;
          }),
          (qi = 26))
        : ((Li.prototype.am = function (e, t, n, r, i, o) {
            for (var s = 16383 & t, a = t >> 14; --o >= 0; ) {
              var u = 16383 & this[e],
                c = this[e++] >> 14,
                l = a * u + c * s;
              (i =
                ((u = s * u + ((16383 & l) << 14) + n[r] + i) >> 28) +
                (l >> 14) +
                a * c),
                (n[r++] = 268435455 & u);
            }
            return i;
          }),
          (qi = 28)),
        (Li.prototype.DB = qi),
        (Li.prototype.DM = (1 << qi) - 1),
        (Li.prototype.DV = 1 << qi),
        (Li.prototype.FV = Math.pow(2, 52)),
        (Li.prototype.F1 = 52 - qi),
        (Li.prototype.F2 = 2 * qi - 52);
      var Ki,
        Hi,
        zi = "0123456789abcdefghijklmnopqrstuvwxyz",
        Gi = new Array();
      for (Ki = "0".charCodeAt(0), Hi = 0; Hi <= 9; ++Hi) Gi[Ki++] = Hi;
      for (Ki = "a".charCodeAt(0), Hi = 10; Hi < 36; ++Hi) Gi[Ki++] = Hi;
      for (Ki = "A".charCodeAt(0), Hi = 10; Hi < 36; ++Hi) Gi[Ki++] = Hi;
      function Wi(e) {
        return zi.charAt(e);
      }
      function Yi(e, t) {
        var n = Gi[e.charCodeAt(t)];
        return null == n ? -1 : n;
      }
      function Ji(e) {
        var t = Bi();
        return t.fromInt(e), t;
      }
      function $i(e) {
        var t,
          n = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (n += 16)),
          0 != (t = e >> 8) && ((e = t), (n += 8)),
          0 != (t = e >> 4) && ((e = t), (n += 4)),
          0 != (t = e >> 2) && ((e = t), (n += 2)),
          0 != (t = e >> 1) && ((e = t), (n += 1)),
          n
        );
      }
      function Zi(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }
      function Qi(e) {
        return xi.lW.from(new Fi().random(e).toString(), "hex");
      }
      (Zi.prototype.convert = function (e) {
        var t = Bi();
        return (
          e.abs().dlShiftTo(this.m.t, t),
          t.divRemTo(this.m, null, t),
          e.s < 0 && t.compareTo(Li.ZERO) > 0 && this.m.subTo(t, t),
          t
        );
      }),
        (Zi.prototype.revert = function (e) {
          var t = Bi();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (Zi.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var n = 32767 & e[t],
              r =
                (n * this.mpl +
                  (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(n = t + this.m.t)] += this.m.am(0, r, e, t, 0, this.m.t);
              e[n] >= e.DV;

            )
              (e[n] -= e.DV), e[++n]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (Zi.prototype.mulTo = function (e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (Zi.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (Li.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (Li.prototype.fromInt = function (e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0
              ? (this[0] = e)
              : e < -1
              ? (this[0] = e + this.DV)
              : (this.t = 0);
        }),
        (Li.prototype.fromString = function (e, t) {
          var n;
          if (16 == t) n = 4;
          else if (8 == t) n = 3;
          else if (2 == t) n = 1;
          else if (32 == t) n = 5;
          else {
            if (4 != t)
              throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
            n = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var r = e.length, i = !1, o = 0; --r >= 0; ) {
            var s = Yi(e, r);
            s < 0
              ? "-" == e.charAt(r) && (i = !0)
              : ((i = !1),
                0 == o
                  ? (this[this.t++] = s)
                  : o + n > this.DB
                  ? ((this[this.t - 1] |=
                      (s & ((1 << (this.DB - o)) - 1)) << o),
                    (this[this.t++] = s >> (this.DB - o)))
                  : (this[this.t - 1] |= s << o),
                (o += n) >= this.DB && (o -= this.DB));
          }
          this.clamp(), i && Li.ZERO.subTo(this, this);
        }),
        (Li.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }),
        (Li.prototype.dlShiftTo = function (e, t) {
          var n;
          for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
          for (n = e - 1; n >= 0; --n) t[n] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (Li.prototype.drShiftTo = function (e, t) {
          for (var n = e; n < this.t; ++n) t[n - e] = this[n];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (Li.prototype.lShiftTo = function (e, t) {
          var n,
            r = e % this.DB,
            i = this.DB - r,
            o = (1 << i) - 1,
            s = Math.floor(e / this.DB),
            a = (this.s << r) & this.DM;
          for (n = this.t - 1; n >= 0; --n)
            (t[n + s + 1] = (this[n] >> i) | a), (a = (this[n] & o) << r);
          for (n = s - 1; n >= 0; --n) t[n] = 0;
          (t[s] = a), (t.t = this.t + s + 1), (t.s = this.s), t.clamp();
        }),
        (Li.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var n = Math.floor(e / this.DB);
          if (n >= this.t) t.t = 0;
          else {
            var r = e % this.DB,
              i = this.DB - r,
              o = (1 << r) - 1;
            t[0] = this[n] >> r;
            for (var s = n + 1; s < this.t; ++s)
              (t[s - n - 1] |= (this[s] & o) << i), (t[s - n] = this[s] >> r);
            r > 0 && (t[this.t - n - 1] |= (this.s & o) << i),
              (t.t = this.t - n),
              t.clamp();
          }
        }),
        (Li.prototype.subTo = function (e, t) {
          for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i; )
            (r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
          if (e.t < this.t) {
            for (r -= e.s; n < this.t; )
              (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < e.t; )
              (r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r -= e.s;
          }
          (t.s = r < 0 ? -1 : 0),
            r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
            (t.t = n),
            t.clamp();
        }),
        (Li.prototype.multiplyTo = function (e, t) {
          var n = this.abs(),
            r = e.abs(),
            i = n.t;
          for (t.t = i + r.t; --i >= 0; ) t[i] = 0;
          for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
          (t.s = 0), t.clamp(), this.s != e.s && Li.ZERO.subTo(t, t);
        }),
        (Li.prototype.squareTo = function (e) {
          for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0; ) e[n] = 0;
          for (n = 0; n < t.t - 1; ++n) {
            var r = t.am(n, t[n], e, 2 * n, 0, 1);
            (e[n + t.t] += t.am(
              n + 1,
              2 * t[n],
              e,
              2 * n + 1,
              r,
              t.t - n - 1
            )) >= t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (Li.prototype.divRemTo = function (e, t, n) {
          var r = e.abs();
          if (!(r.t <= 0)) {
            var i = this.abs();
            if (i.t < r.t)
              return (
                null != t && t.fromInt(0), void (null != n && this.copyTo(n))
              );
            null == n && (n = Bi());
            var o = Bi(),
              s = this.s,
              a = e.s,
              u = this.DB - $i(r[r.t - 1]);
            u > 0
              ? (r.lShiftTo(u, o), i.lShiftTo(u, n))
              : (r.copyTo(o), i.copyTo(n));
            var c = o.t,
              l = o[c - 1];
            if (0 != l) {
              var f = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                h = this.FV / f,
                d = (1 << this.F1) / f,
                p = 1 << this.F2,
                g = n.t,
                v = g - c,
                y = null == t ? Bi() : t;
              for (
                o.dlShiftTo(v, y),
                  n.compareTo(y) >= 0 && ((n[n.t++] = 1), n.subTo(y, n)),
                  Li.ONE.dlShiftTo(c, y),
                  y.subTo(o, o);
                o.t < c;

              )
                o[o.t++] = 0;
              for (; --v >= 0; ) {
                var m =
                  n[--g] == l
                    ? this.DM
                    : Math.floor(n[g] * h + (n[g - 1] + p) * d);
                if ((n[g] += o.am(0, m, n, v, 0, c)) < m)
                  for (o.dlShiftTo(v, y), n.subTo(y, n); n[g] < --m; )
                    n.subTo(y, n);
              }
              null != t && (n.drShiftTo(c, t), s != a && Li.ZERO.subTo(t, t)),
                (n.t = c),
                n.clamp(),
                u > 0 && n.rShiftTo(u, n),
                s < 0 && Li.ZERO.subTo(n, n);
            }
          }
        }),
        (Li.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return (t =
            ((t =
              ((t =
                ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) &
                255) *
                (2 - (((65535 & e) * t) & 65535))) &
              65535) *
              (2 - ((e * t) % this.DV))) %
            this.DV) > 0
            ? this.DV - t
            : -t;
        }),
        (Li.prototype.addTo = function (e, t) {
          for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i; )
            (r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
          if (e.t < this.t) {
            for (r += e.s; n < this.t; )
              (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < e.t; )
              (r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += e.s;
          }
          (t.s = r < 0 ? -1 : 0),
            r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
            (t.t = n),
            t.clamp();
        }),
        (Li.prototype.toString = function (e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e)
              throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
            t = 2;
          }
          var n,
            r = (1 << t) - 1,
            i = !1,
            o = "",
            s = this.t,
            a = this.DB - ((s * this.DB) % t);
          if (s-- > 0)
            for (
              a < this.DB && (n = this[s] >> a) > 0 && ((i = !0), (o = Wi(n)));
              s >= 0;

            )
              a < t
                ? ((n = (this[s] & ((1 << a) - 1)) << (t - a)),
                  (n |= this[--s] >> (a += this.DB - t)))
                : ((n = (this[s] >> (a -= t)) & r),
                  a <= 0 && ((a += this.DB), --s)),
                n > 0 && (i = !0),
                i && (o += Wi(n));
          return i ? o : "0";
        }),
        (Li.prototype.negate = function () {
          var e = Bi();
          return Li.ZERO.subTo(this, e), e;
        }),
        (Li.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (Li.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var n = this.t;
          if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
          for (; --n >= 0; ) if (0 != (t = this[n] - e[n])) return t;
          return 0;
        }),
        (Li.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) +
                $i(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (Li.prototype.mod = function (e) {
          var t = Bi();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(Li.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }),
        (Li.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (Li.prototype.add = function (e) {
          var t = Bi();
          return this.addTo(e, t), t;
        }),
        (Li.prototype.subtract = function (e) {
          var t = Bi();
          return this.subTo(e, t), t;
        }),
        (Li.prototype.multiply = function (e) {
          var t = Bi();
          return this.multiplyTo(e, t), t;
        }),
        (Li.prototype.divide = function (e) {
          var t = Bi();
          return this.divRemTo(e, t, null), t;
        }),
        (Li.prototype.modPow = function (e, t, n) {
          var r,
            i = e.bitLength(),
            o = Ji(1),
            s = new Zi(t);
          if (i <= 0) return o;
          r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6;
          var a = new Array(),
            u = 3,
            c = r - 1,
            l = (1 << r) - 1;
          if (((a[1] = s.convert(this)), r > 1)) {
            var f = Bi();
            for (s.sqrTo(a[1], f); u <= l; )
              (a[u] = Bi()), s.mulTo(f, a[u - 2], a[u]), (u += 2);
          }
          var h,
            d,
            p = e.t - 1,
            g = !0,
            v = Bi();
          for (i = $i(e[p]) - 1; p >= 0; ) {
            for (
              i >= c
                ? (h = (e[p] >> (i - c)) & l)
                : ((h = (e[p] & ((1 << (i + 1)) - 1)) << (c - i)),
                  p > 0 && (h |= e[p - 1] >> (this.DB + i - c))),
                u = r;
              0 == (1 & h);

            )
              (h >>= 1), --u;
            if (((i -= u) < 0 && ((i += this.DB), --p), g))
              a[h].copyTo(o), (g = !1);
            else {
              for (; u > 1; ) s.sqrTo(o, v), s.sqrTo(v, o), (u -= 2);
              u > 0 ? s.sqrTo(o, v) : ((d = o), (o = v), (v = d)),
                s.mulTo(v, a[h], o);
            }
            for (; p >= 0 && 0 == (e[p] & (1 << i)); )
              s.sqrTo(o, v),
                (d = o),
                (o = v),
                (v = d),
                --i < 0 && ((i = this.DB - 1), --p);
          }
          var y = s.revert(o);
          return n(null, y), y;
        }),
        (Li.ZERO = Ji(0)),
        (Li.ONE = Ji(1));
      var Xi = /^[89a-f]/i,
        eo =
          "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
        to = (function () {
          function e(e) {
            (this.N = new ji(eo, 16)),
              (this.g = new ji("2", 16)),
              (this.k = new ji(
                this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)),
                16
              )),
              (this.smallAValue = this.generateRandomSmallA()),
              this.getLargeAValue(function () {}),
              (this.infoBits = xi.lW.from("Caldera Derived Key", "utf8")),
              (this.poolName = e);
          }
          var t = e.prototype;
          return (
            (t.getSmallAValue = function () {
              return this.smallAValue;
            }),
            (t.getLargeAValue = function (e) {
              var t = this;
              this.largeAValue
                ? e(null, this.largeAValue)
                : this.calculateA(this.smallAValue, function (n, r) {
                    n && e(n, null),
                      (t.largeAValue = r),
                      e(null, t.largeAValue);
                  });
            }),
            (t.generateRandomSmallA = function () {
              var e = Qi(128).toString("hex");
              return new ji(e, 16);
            }),
            (t.generateRandomString = function () {
              return Qi(40).toString("base64");
            }),
            (t.getRandomPassword = function () {
              return this.randomPassword;
            }),
            (t.getSaltDevices = function () {
              return this.SaltToHashDevices;
            }),
            (t.getVerifierDevices = function () {
              return this.verifierDevices;
            }),
            (t.generateHashDevice = function (e, t, n) {
              var r = this;
              this.randomPassword = this.generateRandomString();
              var i = "" + e + t + ":" + this.randomPassword,
                o = this.hash(i),
                s = Qi(16).toString("hex");
              (this.SaltToHashDevices = this.padHex(new ji(s, 16))),
                this.g.modPow(
                  new ji(this.hexHash(this.SaltToHashDevices + o), 16),
                  this.N,
                  function (e, t) {
                    e && n(e, null),
                      (r.verifierDevices = r.padHex(t)),
                      n(null, null);
                  }
                );
            }),
            (t.calculateA = function (e, t) {
              var n = this;
              this.g.modPow(e, this.N, function (e, r) {
                e && t(e, null),
                  r.mod(n.N).equals(ji.ZERO) &&
                    t(
                      new Error("Illegal paramater. A mod N cannot be 0."),
                      null
                    ),
                  t(null, r);
              });
            }),
            (t.calculateU = function (e, t) {
              return (
                (this.UHexHash = this.hexHash(this.padHex(e) + this.padHex(t))),
                new ji(this.UHexHash, 16)
              );
            }),
            (t.hash = function (e) {
              var t = new Ni.Sha256();
              t.update(e);
              var n = t.digestSync(),
                r = xi.lW.from(n).toString("hex");
              return new Array(64 - r.length).join("0") + r;
            }),
            (t.hexHash = function (e) {
              return this.hash(xi.lW.from(e, "hex"));
            }),
            (t.computehkdf = function (e, t) {
              var n = xi.lW.concat([
                  this.infoBits,
                  xi.lW.from(String.fromCharCode(1), "utf8"),
                ]),
                r = new Ni.Sha256(t);
              r.update(e);
              var i = r.digestSync(),
                o = new Ni.Sha256(i);
              return o.update(n), o.digestSync().slice(0, 16);
            }),
            (t.getPasswordAuthenticationKey = function (e, t, n, r, i) {
              var o = this;
              if (n.mod(this.N).equals(ji.ZERO))
                throw new Error("B cannot be zero.");
              if (
                ((this.UValue = this.calculateU(this.largeAValue, n)),
                this.UValue.equals(ji.ZERO))
              )
                throw new Error("U cannot be zero.");
              var s = "" + this.poolName + e + ":" + t,
                a = this.hash(s),
                u = new ji(this.hexHash(this.padHex(r) + a), 16);
              this.calculateS(u, n, function (e, t) {
                e && i(e, null);
                var n = o.computehkdf(
                  xi.lW.from(o.padHex(t), "hex"),
                  xi.lW.from(o.padHex(o.UValue), "hex")
                );
                i(null, n);
              });
            }),
            (t.calculateS = function (e, t, n) {
              var r = this;
              this.g.modPow(e, this.N, function (i, o) {
                i && n(i, null),
                  t
                    .subtract(r.k.multiply(o))
                    .modPow(
                      r.smallAValue.add(r.UValue.multiply(e)),
                      r.N,
                      function (e, t) {
                        e && n(e, null), n(null, t.mod(r.N));
                      }
                    );
              });
            }),
            (t.getNewPasswordRequiredChallengeUserAttributePrefix =
              function () {
                return "userAttributes.";
              }),
            (t.padHex = function (e) {
              if (!(e instanceof ji)) throw new Error("Not a BigInteger");
              var t = e.compareTo(ji.ZERO) < 0,
                n = e.abs().toString(16);
              if (
                ((n = n.length % 2 != 0 ? "0" + n : n),
                (n = Xi.test(n) ? "00" + n : n),
                t)
              ) {
                var r = n
                  .split("")
                  .map(function (e) {
                    var t = 15 & ~parseInt(e, 16);
                    return "0123456789ABCDEF".charAt(t);
                  })
                  .join("");
                (n = new ji(r, 16).add(ji.ONE).toString(16))
                  .toUpperCase()
                  .startsWith("FF8") && (n = n.substring(2));
              }
              return n;
            }),
            e
          );
        })(),
        no = (function () {
          function e(e) {
            (this.jwtToken = e || ""), (this.payload = this.decodePayload());
          }
          var t = e.prototype;
          return (
            (t.getJwtToken = function () {
              return this.jwtToken;
            }),
            (t.getExpiration = function () {
              return this.payload.exp;
            }),
            (t.getIssuedAt = function () {
              return this.payload.iat;
            }),
            (t.decodePayload = function () {
              var e = this.jwtToken.split(".")[1];
              try {
                return JSON.parse(xi.lW.from(e, "base64").toString("utf8"));
              } catch (e) {
                return {};
              }
            }),
            e
          );
        })();
      function ro(e, t) {
        return (
          (ro = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ro(e, t)
        );
      }
      var io = (function (e) {
        var t, n;
        function r(t) {
          var n = (void 0 === t ? {} : t).AccessToken;
          return e.call(this, n || "") || this;
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          ro(t, n),
          r
        );
      })(no);
      function oo(e, t) {
        return (
          (oo = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          oo(e, t)
        );
      }
      var so = (function (e) {
          var t, n;
          function r(t) {
            var n = (void 0 === t ? {} : t).IdToken;
            return e.call(this, n || "") || this;
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            oo(t, n),
            r
          );
        })(no),
        ao = (function () {
          function e(e) {
            var t = (void 0 === e ? {} : e).RefreshToken;
            this.token = t || "";
          }
          return (
            (e.prototype.getToken = function () {
              return this.token;
            }),
            e
          );
        })(),
        uo = "aws-amplify/5.0.4",
        co = {
          userAgent: uo + " js",
          product: "",
          navigator: null,
          isReactNative: !1,
        };
      "undefined" != typeof navigator &&
        navigator.product &&
        ((co.product = navigator.product || ""),
        (co.navigator = navigator || null),
        "ReactNative" === navigator.product
          ? ((co.userAgent = uo + " react-native"), (co.isReactNative = !0))
          : ((co.userAgent = uo + " js"), (co.isReactNative = !1)));
      var lo = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.IdToken,
              r = t.RefreshToken,
              i = t.AccessToken,
              o = t.ClockDrift;
            if (null == i || null == n)
              throw new Error("Id token and Access Token must be present.");
            (this.idToken = n),
              (this.refreshToken = r),
              (this.accessToken = i),
              (this.clockDrift = void 0 === o ? this.calculateClockDrift() : o);
          }
          var t = e.prototype;
          return (
            (t.getIdToken = function () {
              return this.idToken;
            }),
            (t.getRefreshToken = function () {
              return this.refreshToken;
            }),
            (t.getAccessToken = function () {
              return this.accessToken;
            }),
            (t.getClockDrift = function () {
              return this.clockDrift;
            }),
            (t.calculateClockDrift = function () {
              return (
                Math.floor(new Date() / 1e3) -
                Math.min(
                  this.accessToken.getIssuedAt(),
                  this.idToken.getIssuedAt()
                )
              );
            }),
            (t.isValid = function () {
              var e = Math.floor(new Date() / 1e3) - this.clockDrift;
              return (
                e < this.accessToken.getExpiration() &&
                e < this.idToken.getExpiration()
              );
            }),
            e
          );
        })(),
        fo = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        ho = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        po = (function () {
          function e() {}
          return (
            (e.prototype.getNowString = function () {
              var e = new Date(),
                t = ho[e.getUTCDay()],
                n = fo[e.getUTCMonth()],
                r = e.getUTCDate(),
                i = e.getUTCHours();
              i < 10 && (i = "0" + i);
              var o = e.getUTCMinutes();
              o < 10 && (o = "0" + o);
              var s = e.getUTCSeconds();
              return (
                s < 10 && (s = "0" + s),
                t +
                  " " +
                  n +
                  " " +
                  r +
                  " " +
                  i +
                  ":" +
                  o +
                  ":" +
                  s +
                  " UTC " +
                  e.getUTCFullYear()
              );
            }),
            e
          );
        })(),
        go = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.Name,
              r = t.Value;
            (this.Name = n || ""), (this.Value = r || "");
          }
          var t = e.prototype;
          return (
            (t.getValue = function () {
              return this.Value;
            }),
            (t.setValue = function (e) {
              return (this.Value = e), this;
            }),
            (t.getName = function () {
              return this.Name;
            }),
            (t.setName = function (e) {
              return (this.Name = e), this;
            }),
            (t.toString = function () {
              return JSON.stringify(this);
            }),
            (t.toJSON = function () {
              return { Name: this.Name, Value: this.Value };
            }),
            e
          );
        })(),
        vo = {},
        yo = (function () {
          function e() {}
          return (
            (e.setItem = function (e, t) {
              return (vo[e] = t), vo[e];
            }),
            (e.getItem = function (e) {
              return Object.prototype.hasOwnProperty.call(vo, e)
                ? vo[e]
                : void 0;
            }),
            (e.removeItem = function (e) {
              return delete vo[e];
            }),
            (e.clear = function () {
              return (vo = {});
            }),
            e
          );
        })(),
        mo = (function () {
          function e() {
            try {
              (this.storageWindow = window.localStorage),
                this.storageWindow.setItem("aws.cognito.test-ls", 1),
                this.storageWindow.removeItem("aws.cognito.test-ls");
            } catch (e) {
              this.storageWindow = yo;
            }
          }
          return (
            (e.prototype.getStorage = function () {
              return this.storageWindow;
            }),
            e
          );
        })(),
        wo =
          "undefined" != typeof navigator
            ? co.isReactNative
              ? "react-native"
              : navigator.userAgent
            : "nodejs",
        bo = (function () {
          function e(e) {
            if (null == e || null == e.Username || null == e.Pool)
              throw new Error("Username and Pool information are required.");
            (this.username = e.Username || ""),
              (this.pool = e.Pool),
              (this.Session = null),
              (this.client = e.Pool.client),
              (this.signInUserSession = null),
              (this.authenticationFlowType = "USER_SRP_AUTH"),
              (this.storage = e.Storage || new mo().getStorage()),
              (this.keyPrefix =
                "CognitoIdentityServiceProvider." + this.pool.getClientId()),
              (this.userDataKey =
                this.keyPrefix + "." + this.username + ".userData");
          }
          var t = e.prototype;
          return (
            (t.setSignInUserSession = function (e) {
              this.clearCachedUserData(),
                (this.signInUserSession = e),
                this.cacheTokens();
            }),
            (t.getSignInUserSession = function () {
              return this.signInUserSession;
            }),
            (t.getUsername = function () {
              return this.username;
            }),
            (t.getAuthenticationFlowType = function () {
              return this.authenticationFlowType;
            }),
            (t.setAuthenticationFlowType = function (e) {
              this.authenticationFlowType = e;
            }),
            (t.initiateAuth = function (e, t) {
              var n = this,
                r = e.getAuthParameters();
              r.USERNAME = this.username;
              var i =
                  0 !== Object.keys(e.getValidationData()).length
                    ? e.getValidationData()
                    : e.getClientMetadata(),
                o = {
                  AuthFlow: "CUSTOM_AUTH",
                  ClientId: this.pool.getClientId(),
                  AuthParameters: r,
                  ClientMetadata: i,
                };
              this.getUserContextData() &&
                (o.UserContextData = this.getUserContextData()),
                this.client.request("InitiateAuth", o, function (e, r) {
                  if (e) return t.onFailure(e);
                  var i = r.ChallengeName,
                    o = r.ChallengeParameters;
                  return "CUSTOM_CHALLENGE" === i
                    ? ((n.Session = r.Session), t.customChallenge(o))
                    : ((n.signInUserSession = n.getCognitoUserSession(
                        r.AuthenticationResult
                      )),
                      n.cacheTokens(),
                      t.onSuccess(n.signInUserSession));
                });
            }),
            (t.authenticateUser = function (e, t) {
              return "USER_PASSWORD_AUTH" === this.authenticationFlowType
                ? this.authenticateUserPlainUsernamePassword(e, t)
                : "USER_SRP_AUTH" === this.authenticationFlowType ||
                  "CUSTOM_AUTH" === this.authenticationFlowType
                ? this.authenticateUserDefaultAuth(e, t)
                : t.onFailure(
                    new Error("Authentication flow type is invalid.")
                  );
            }),
            (t.authenticateUserDefaultAuth = function (e, t) {
              var n,
                r,
                i = this,
                o = new to(this.pool.getUserPoolName()),
                s = new po(),
                a = {};
              null != this.deviceKey && (a.DEVICE_KEY = this.deviceKey),
                (a.USERNAME = this.username),
                o.getLargeAValue(function (u, c) {
                  u && t.onFailure(u),
                    (a.SRP_A = c.toString(16)),
                    "CUSTOM_AUTH" === i.authenticationFlowType &&
                      (a.CHALLENGE_NAME = "SRP_A");
                  var l =
                      0 !== Object.keys(e.getValidationData()).length
                        ? e.getValidationData()
                        : e.getClientMetadata(),
                    f = {
                      AuthFlow: i.authenticationFlowType,
                      ClientId: i.pool.getClientId(),
                      AuthParameters: a,
                      ClientMetadata: l,
                    };
                  i.getUserContextData(i.username) &&
                    (f.UserContextData = i.getUserContextData(i.username)),
                    i.client.request("InitiateAuth", f, function (a, u) {
                      if (a) return t.onFailure(a);
                      var c = u.ChallengeParameters;
                      (i.username = c.USER_ID_FOR_SRP),
                        (i.userDataKey =
                          i.keyPrefix + "." + i.username + ".userData"),
                        (n = new ji(c.SRP_B, 16)),
                        (r = new ji(c.SALT, 16)),
                        i.getCachedDeviceKeyAndPassword(),
                        o.getPasswordAuthenticationKey(
                          i.username,
                          e.getPassword(),
                          n,
                          r,
                          function (e, n) {
                            e && t.onFailure(e);
                            var r = s.getNowString(),
                              a = xi.lW.concat([
                                xi.lW.from(i.pool.getUserPoolName(), "utf8"),
                                xi.lW.from(i.username, "utf8"),
                                xi.lW.from(c.SECRET_BLOCK, "base64"),
                                xi.lW.from(r, "utf8"),
                              ]),
                              f = new Ni.Sha256(n);
                            f.update(a);
                            var h = f.digestSync(),
                              d = xi.lW.from(h).toString("base64"),
                              p = {};
                            (p.USERNAME = i.username),
                              (p.PASSWORD_CLAIM_SECRET_BLOCK = c.SECRET_BLOCK),
                              (p.TIMESTAMP = r),
                              (p.PASSWORD_CLAIM_SIGNATURE = d),
                              null != i.deviceKey &&
                                (p.DEVICE_KEY = i.deviceKey);
                            var g = {
                              ChallengeName: "PASSWORD_VERIFIER",
                              ClientId: i.pool.getClientId(),
                              ChallengeResponses: p,
                              Session: u.Session,
                              ClientMetadata: l,
                            };
                            i.getUserContextData() &&
                              (g.UserContextData = i.getUserContextData()),
                              (function e(t, n) {
                                return i.client.request(
                                  "RespondToAuthChallenge",
                                  t,
                                  function (r, o) {
                                    return r &&
                                      "ResourceNotFoundException" === r.code &&
                                      -1 !==
                                        r.message
                                          .toLowerCase()
                                          .indexOf("device")
                                      ? ((p.DEVICE_KEY = null),
                                        (i.deviceKey = null),
                                        (i.randomPassword = null),
                                        (i.deviceGroupKey = null),
                                        i.clearCachedDeviceKeyAndPassword(),
                                        e(t, n))
                                      : n(r, o);
                                  }
                                );
                              })(g, function (e, n) {
                                return e
                                  ? t.onFailure(e)
                                  : i.authenticateUserInternal(n, o, t);
                              });
                          }
                        );
                    });
                });
            }),
            (t.authenticateUserPlainUsernamePassword = function (e, t) {
              var n = this,
                r = {};
              if (
                ((r.USERNAME = this.username),
                (r.PASSWORD = e.getPassword()),
                r.PASSWORD)
              ) {
                var i = new to(this.pool.getUserPoolName());
                this.getCachedDeviceKeyAndPassword(),
                  null != this.deviceKey && (r.DEVICE_KEY = this.deviceKey);
                var o =
                    0 !== Object.keys(e.getValidationData()).length
                      ? e.getValidationData()
                      : e.getClientMetadata(),
                  s = {
                    AuthFlow: "USER_PASSWORD_AUTH",
                    ClientId: this.pool.getClientId(),
                    AuthParameters: r,
                    ClientMetadata: o,
                  };
                this.getUserContextData(this.username) &&
                  (s.UserContextData = this.getUserContextData(this.username)),
                  this.client.request("InitiateAuth", s, function (e, r) {
                    return e
                      ? t.onFailure(e)
                      : n.authenticateUserInternal(r, i, t);
                  });
              } else t.onFailure(new Error("PASSWORD parameter is required"));
            }),
            (t.authenticateUserInternal = function (e, t, n) {
              var r = this,
                i = e.ChallengeName,
                o = e.ChallengeParameters;
              if ("SMS_MFA" === i)
                return (this.Session = e.Session), n.mfaRequired(i, o);
              if ("SELECT_MFA_TYPE" === i)
                return (this.Session = e.Session), n.selectMFAType(i, o);
              if ("MFA_SETUP" === i)
                return (this.Session = e.Session), n.mfaSetup(i, o);
              if ("SOFTWARE_TOKEN_MFA" === i)
                return (this.Session = e.Session), n.totpRequired(i, o);
              if ("CUSTOM_CHALLENGE" === i)
                return (this.Session = e.Session), n.customChallenge(o);
              if ("NEW_PASSWORD_REQUIRED" === i) {
                this.Session = e.Session;
                var s = null,
                  a = null,
                  u = [],
                  c = t.getNewPasswordRequiredChallengeUserAttributePrefix();
                if (
                  (o &&
                    ((s = JSON.parse(e.ChallengeParameters.userAttributes)),
                    (a = JSON.parse(e.ChallengeParameters.requiredAttributes))),
                  a)
                )
                  for (var l = 0; l < a.length; l++)
                    u[l] = a[l].substr(c.length);
                return n.newPasswordRequired(s, u);
              }
              if ("DEVICE_SRP_AUTH" === i)
                return (
                  (this.Session = e.Session), void this.getDeviceResponse(n)
                );
              (this.signInUserSession = this.getCognitoUserSession(
                e.AuthenticationResult
              )),
                (this.challengeName = i),
                this.cacheTokens();
              var f = e.AuthenticationResult.NewDeviceMetadata;
              if (null == f) return n.onSuccess(this.signInUserSession);
              t.generateHashDevice(
                e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
                e.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                function (i) {
                  if (i) return n.onFailure(i);
                  var o = {
                    Salt: xi.lW
                      .from(t.getSaltDevices(), "hex")
                      .toString("base64"),
                    PasswordVerifier: xi.lW
                      .from(t.getVerifierDevices(), "hex")
                      .toString("base64"),
                  };
                  (r.verifierDevices = o.PasswordVerifier),
                    (r.deviceGroupKey = f.DeviceGroupKey),
                    (r.randomPassword = t.getRandomPassword()),
                    r.client.request(
                      "ConfirmDevice",
                      {
                        DeviceKey: f.DeviceKey,
                        AccessToken: r.signInUserSession
                          .getAccessToken()
                          .getJwtToken(),
                        DeviceSecretVerifierConfig: o,
                        DeviceName: wo,
                      },
                      function (t, i) {
                        return t
                          ? n.onFailure(t)
                          : ((r.deviceKey =
                              e.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                            r.cacheDeviceKeyAndPassword(),
                            !0 === i.UserConfirmationNecessary
                              ? n.onSuccess(
                                  r.signInUserSession,
                                  i.UserConfirmationNecessary
                                )
                              : n.onSuccess(r.signInUserSession));
                      }
                    );
                }
              );
            }),
            (t.completeNewPasswordChallenge = function (e, t, n, r) {
              var i = this;
              if (!e)
                return n.onFailure(new Error("New password is required."));
              var o = new to(this.pool.getUserPoolName()),
                s = o.getNewPasswordRequiredChallengeUserAttributePrefix(),
                a = {};
              t &&
                Object.keys(t).forEach(function (e) {
                  a[s + e] = t[e];
                }),
                (a.NEW_PASSWORD = e),
                (a.USERNAME = this.username);
              var u = {
                ChallengeName: "NEW_PASSWORD_REQUIRED",
                ClientId: this.pool.getClientId(),
                ChallengeResponses: a,
                Session: this.Session,
                ClientMetadata: r,
              };
              this.getUserContextData() &&
                (u.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  u,
                  function (e, t) {
                    return e
                      ? n.onFailure(e)
                      : i.authenticateUserInternal(t, o, n);
                  }
                );
            }),
            (t.getDeviceResponse = function (e, t) {
              var n = this,
                r = new to(this.deviceGroupKey),
                i = new po(),
                o = {};
              (o.USERNAME = this.username),
                (o.DEVICE_KEY = this.deviceKey),
                r.getLargeAValue(function (s, a) {
                  s && e.onFailure(s), (o.SRP_A = a.toString(16));
                  var u = {
                    ChallengeName: "DEVICE_SRP_AUTH",
                    ClientId: n.pool.getClientId(),
                    ChallengeResponses: o,
                    ClientMetadata: t,
                    Session: n.Session,
                  };
                  n.getUserContextData() &&
                    (u.UserContextData = n.getUserContextData()),
                    n.client.request(
                      "RespondToAuthChallenge",
                      u,
                      function (t, o) {
                        if (t) return e.onFailure(t);
                        var s = o.ChallengeParameters,
                          a = new ji(s.SRP_B, 16),
                          u = new ji(s.SALT, 16);
                        r.getPasswordAuthenticationKey(
                          n.deviceKey,
                          n.randomPassword,
                          a,
                          u,
                          function (t, r) {
                            if (t) return e.onFailure(t);
                            var a = i.getNowString(),
                              u = xi.lW.concat([
                                xi.lW.from(n.deviceGroupKey, "utf8"),
                                xi.lW.from(n.deviceKey, "utf8"),
                                xi.lW.from(s.SECRET_BLOCK, "base64"),
                                xi.lW.from(a, "utf8"),
                              ]),
                              c = new Ni.Sha256(r);
                            c.update(u);
                            var l = c.digestSync(),
                              f = xi.lW.from(l).toString("base64"),
                              h = {};
                            (h.USERNAME = n.username),
                              (h.PASSWORD_CLAIM_SECRET_BLOCK = s.SECRET_BLOCK),
                              (h.TIMESTAMP = a),
                              (h.PASSWORD_CLAIM_SIGNATURE = f),
                              (h.DEVICE_KEY = n.deviceKey);
                            var d = {
                              ChallengeName: "DEVICE_PASSWORD_VERIFIER",
                              ClientId: n.pool.getClientId(),
                              ChallengeResponses: h,
                              Session: o.Session,
                            };
                            n.getUserContextData() &&
                              (d.UserContextData = n.getUserContextData()),
                              n.client.request(
                                "RespondToAuthChallenge",
                                d,
                                function (t, r) {
                                  return t
                                    ? e.onFailure(t)
                                    : ((n.signInUserSession =
                                        n.getCognitoUserSession(
                                          r.AuthenticationResult
                                        )),
                                      n.cacheTokens(),
                                      e.onSuccess(n.signInUserSession));
                                }
                              );
                          }
                        );
                      }
                    );
                });
            }),
            (t.confirmRegistration = function (e, t, n, r) {
              var i = {
                ClientId: this.pool.getClientId(),
                ConfirmationCode: e,
                Username: this.username,
                ForceAliasCreation: t,
                ClientMetadata: r,
              };
              this.getUserContextData() &&
                (i.UserContextData = this.getUserContextData()),
                this.client.request("ConfirmSignUp", i, function (e) {
                  return e ? n(e, null) : n(null, "SUCCESS");
                });
            }),
            (t.sendCustomChallengeAnswer = function (e, t, n) {
              var r = this,
                i = {};
              (i.USERNAME = this.username), (i.ANSWER = e);
              var o = new to(this.pool.getUserPoolName());
              this.getCachedDeviceKeyAndPassword(),
                null != this.deviceKey && (i.DEVICE_KEY = this.deviceKey);
              var s = {
                ChallengeName: "CUSTOM_CHALLENGE",
                ChallengeResponses: i,
                ClientId: this.pool.getClientId(),
                Session: this.Session,
                ClientMetadata: n,
              };
              this.getUserContextData() &&
                (s.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  s,
                  function (e, n) {
                    return e
                      ? t.onFailure(e)
                      : r.authenticateUserInternal(n, o, t);
                  }
                );
            }),
            (t.sendMFACode = function (e, t, n, r) {
              var i = this,
                o = {};
              (o.USERNAME = this.username), (o.SMS_MFA_CODE = e);
              var s = n || "SMS_MFA";
              "SOFTWARE_TOKEN_MFA" === s && (o.SOFTWARE_TOKEN_MFA_CODE = e),
                null != this.deviceKey && (o.DEVICE_KEY = this.deviceKey);
              var a = {
                ChallengeName: s,
                ChallengeResponses: o,
                ClientId: this.pool.getClientId(),
                Session: this.Session,
                ClientMetadata: r,
              };
              this.getUserContextData() &&
                (a.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  a,
                  function (e, n) {
                    if (e) return t.onFailure(e);
                    if ("DEVICE_SRP_AUTH" !== n.ChallengeName) {
                      if (
                        ((i.signInUserSession = i.getCognitoUserSession(
                          n.AuthenticationResult
                        )),
                        i.cacheTokens(),
                        null == n.AuthenticationResult.NewDeviceMetadata)
                      )
                        return t.onSuccess(i.signInUserSession);
                      var r = new to(i.pool.getUserPoolName());
                      r.generateHashDevice(
                        n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
                        n.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                        function (e) {
                          if (e) return t.onFailure(e);
                          var o = {
                            Salt: xi.lW
                              .from(r.getSaltDevices(), "hex")
                              .toString("base64"),
                            PasswordVerifier: xi.lW
                              .from(r.getVerifierDevices(), "hex")
                              .toString("base64"),
                          };
                          (i.verifierDevices = o.PasswordVerifier),
                            (i.deviceGroupKey =
                              n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey),
                            (i.randomPassword = r.getRandomPassword()),
                            i.client.request(
                              "ConfirmDevice",
                              {
                                DeviceKey:
                                  n.AuthenticationResult.NewDeviceMetadata
                                    .DeviceKey,
                                AccessToken: i.signInUserSession
                                  .getAccessToken()
                                  .getJwtToken(),
                                DeviceSecretVerifierConfig: o,
                                DeviceName: wo,
                              },
                              function (e, r) {
                                return e
                                  ? t.onFailure(e)
                                  : ((i.deviceKey =
                                      n.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                                    i.cacheDeviceKeyAndPassword(),
                                    !0 === r.UserConfirmationNecessary
                                      ? t.onSuccess(
                                          i.signInUserSession,
                                          r.UserConfirmationNecessary
                                        )
                                      : t.onSuccess(i.signInUserSession));
                              }
                            );
                        }
                      );
                    } else i.getDeviceResponse(t);
                  }
                );
            }),
            (t.changePassword = function (e, t, n, r) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return n(new Error("User is not authenticated"), null);
              this.client.request(
                "ChangePassword",
                {
                  PreviousPassword: e,
                  ProposedPassword: t,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  ClientMetadata: r,
                },
                function (e) {
                  return e ? n(e, null) : n(null, "SUCCESS");
                }
              );
            }),
            (t.enableMFA = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              var t = [];
              t.push({ DeliveryMedium: "SMS", AttributeName: "phone_number" }),
                this.client.request(
                  "SetUserSettings",
                  {
                    MFAOptions: t,
                    AccessToken: this.signInUserSession
                      .getAccessToken()
                      .getJwtToken(),
                  },
                  function (t) {
                    return t ? e(t, null) : e(null, "SUCCESS");
                  }
                );
            }),
            (t.setUserMfaPreference = function (e, t, n) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return n(new Error("User is not authenticated"), null);
              this.client.request(
                "SetUserMFAPreference",
                {
                  SMSMfaSettings: e,
                  SoftwareTokenMfaSettings: t,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (e) {
                  return e ? n(e, null) : n(null, "SUCCESS");
                }
              );
            }),
            (t.disableMFA = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "SetUserSettings",
                {
                  MFAOptions: [],
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (t) {
                  return t ? e(t, null) : e(null, "SUCCESS");
                }
              );
            }),
            (t.deleteUser = function (e, t) {
              var n = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "DeleteUser",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  ClientMetadata: t,
                },
                function (t) {
                  return t
                    ? e(t, null)
                    : (n.clearCachedUser(), e(null, "SUCCESS"));
                }
              );
            }),
            (t.updateAttributes = function (e, t, n) {
              var r = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t(new Error("User is not authenticated"), null);
              this.client.request(
                "UpdateUserAttributes",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  UserAttributes: e,
                  ClientMetadata: n,
                },
                function (e, n) {
                  return e
                    ? t(e, null)
                    : r.getUserData(
                        function () {
                          return t(null, "SUCCESS", n);
                        },
                        { bypassCache: !0 }
                      );
                }
              );
            }),
            (t.getUserAttributes = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "GetUser",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (t, n) {
                  if (t) return e(t, null);
                  for (var r = [], i = 0; i < n.UserAttributes.length; i++) {
                    var o = {
                        Name: n.UserAttributes[i].Name,
                        Value: n.UserAttributes[i].Value,
                      },
                      s = new go(o);
                    r.push(s);
                  }
                  return e(null, r);
                }
              );
            }),
            (t.getMFAOptions = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e(new Error("User is not authenticated"), null);
              this.client.request(
                "GetUser",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (t, n) {
                  return t ? e(t, null) : e(null, n.MFAOptions);
                }
              );
            }),
            (t.createGetUserRequest = function () {
              return this.client.promisifyRequest("GetUser", {
                AccessToken: this.signInUserSession
                  .getAccessToken()
                  .getJwtToken(),
              });
            }),
            (t.refreshSessionIfPossible = function (e) {
              var t = this;
              return (
                void 0 === e && (e = {}),
                new Promise(function (n) {
                  var r = t.signInUserSession.getRefreshToken();
                  r && r.getToken()
                    ? t.refreshSession(r, n, e.clientMetadata)
                    : n();
                })
              );
            }),
            (t.getUserData = function (e, t) {
              var n = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return (
                  this.clearCachedUserData(),
                  e(new Error("User is not authenticated"), null)
                );
              var r = this.getUserDataFromCache();
              if (r)
                if (this.isFetchUserDataAndTokenRequired(t))
                  this.fetchUserData()
                    .then(function (e) {
                      return n.refreshSessionIfPossible(t).then(function () {
                        return e;
                      });
                    })
                    .then(function (t) {
                      return e(null, t);
                    })
                    .catch(e);
                else
                  try {
                    return void e(null, JSON.parse(r));
                  } catch (t) {
                    return this.clearCachedUserData(), void e(t, null);
                  }
              else
                this.fetchUserData()
                  .then(function (t) {
                    e(null, t);
                  })
                  .catch(e);
            }),
            (t.getUserDataFromCache = function () {
              return this.storage.getItem(this.userDataKey);
            }),
            (t.isFetchUserDataAndTokenRequired = function (e) {
              var t = (e || {}).bypassCache;
              return void 0 !== t && t;
            }),
            (t.fetchUserData = function () {
              var e = this;
              return this.createGetUserRequest().then(function (t) {
                return e.cacheUserData(t), t;
              });
            }),
            (t.deleteAttributes = function (e, t) {
              var n = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t(new Error("User is not authenticated"), null);
              this.client.request(
                "DeleteUserAttributes",
                {
                  UserAttributeNames: e,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (e) {
                  return e
                    ? t(e, null)
                    : n.getUserData(
                        function () {
                          return t(null, "SUCCESS");
                        },
                        { bypassCache: !0 }
                      );
                }
              );
            }),
            (t.resendConfirmationCode = function (e, t) {
              var n = {
                ClientId: this.pool.getClientId(),
                Username: this.username,
                ClientMetadata: t,
              };
              this.client.request("ResendConfirmationCode", n, function (t, n) {
                return t ? e(t, null) : e(null, n);
              });
            }),
            (t.getSession = function (e, t) {
              if ((void 0 === t && (t = {}), null == this.username))
                return e(
                  new Error("Username is null. Cannot retrieve a new session"),
                  null
                );
              if (
                null != this.signInUserSession &&
                this.signInUserSession.isValid()
              )
                return e(null, this.signInUserSession);
              var n =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                r = n + ".idToken",
                i = n + ".accessToken",
                o = n + ".refreshToken",
                s = n + ".clockDrift";
              if (this.storage.getItem(r)) {
                var a = new so({ IdToken: this.storage.getItem(r) }),
                  u = new io({ AccessToken: this.storage.getItem(i) }),
                  c = new ao({ RefreshToken: this.storage.getItem(o) }),
                  l = parseInt(this.storage.getItem(s), 0) || 0,
                  f = new lo({
                    IdToken: a,
                    AccessToken: u,
                    RefreshToken: c,
                    ClockDrift: l,
                  });
                if (f.isValid())
                  return (
                    (this.signInUserSession = f),
                    e(null, this.signInUserSession)
                  );
                if (!c.getToken())
                  return e(
                    new Error(
                      "Cannot retrieve a new session. Please authenticate."
                    ),
                    null
                  );
                this.refreshSession(c, e, t.clientMetadata);
              } else
                e(
                  new Error(
                    "Local storage is missing an ID Token, Please authenticate"
                  ),
                  null
                );
            }),
            (t.refreshSession = function (e, t, n) {
              var r = this,
                i = this.pool.wrapRefreshSessionCallback
                  ? this.pool.wrapRefreshSessionCallback(t)
                  : t,
                o = {};
              o.REFRESH_TOKEN = e.getToken();
              var s =
                  "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                a = s + ".LastAuthUser";
              if (this.storage.getItem(a)) {
                this.username = this.storage.getItem(a);
                var u = s + "." + this.username + ".deviceKey";
                (this.deviceKey = this.storage.getItem(u)),
                  (o.DEVICE_KEY = this.deviceKey);
              }
              var c = {
                ClientId: this.pool.getClientId(),
                AuthFlow: "REFRESH_TOKEN_AUTH",
                AuthParameters: o,
                ClientMetadata: n,
              };
              this.getUserContextData() &&
                (c.UserContextData = this.getUserContextData()),
                this.client.request("InitiateAuth", c, function (t, n) {
                  if (t)
                    return (
                      "NotAuthorizedException" === t.code &&
                        r.clearCachedUser(),
                      i(t, null)
                    );
                  if (n) {
                    var o = n.AuthenticationResult;
                    return (
                      Object.prototype.hasOwnProperty.call(o, "RefreshToken") ||
                        (o.RefreshToken = e.getToken()),
                      (r.signInUserSession = r.getCognitoUserSession(o)),
                      r.cacheTokens(),
                      i(null, r.signInUserSession)
                    );
                  }
                });
            }),
            (t.cacheTokens = function () {
              var e =
                  "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                t = e + "." + this.username + ".idToken",
                n = e + "." + this.username + ".accessToken",
                r = e + "." + this.username + ".refreshToken",
                i = e + "." + this.username + ".clockDrift",
                o = e + ".LastAuthUser";
              this.storage.setItem(
                t,
                this.signInUserSession.getIdToken().getJwtToken()
              ),
                this.storage.setItem(
                  n,
                  this.signInUserSession.getAccessToken().getJwtToken()
                ),
                this.storage.setItem(
                  r,
                  this.signInUserSession.getRefreshToken().getToken()
                ),
                this.storage.setItem(
                  i,
                  "" + this.signInUserSession.getClockDrift()
                ),
                this.storage.setItem(o, this.username);
            }),
            (t.cacheUserData = function (e) {
              this.storage.setItem(this.userDataKey, JSON.stringify(e));
            }),
            (t.clearCachedUserData = function () {
              this.storage.removeItem(this.userDataKey);
            }),
            (t.clearCachedUser = function () {
              this.clearCachedTokens(), this.clearCachedUserData();
            }),
            (t.cacheDeviceKeyAndPassword = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                t = e + ".deviceKey",
                n = e + ".randomPasswordKey",
                r = e + ".deviceGroupKey";
              this.storage.setItem(t, this.deviceKey),
                this.storage.setItem(n, this.randomPassword),
                this.storage.setItem(r, this.deviceGroupKey);
            }),
            (t.getCachedDeviceKeyAndPassword = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                t = e + ".deviceKey",
                n = e + ".randomPasswordKey",
                r = e + ".deviceGroupKey";
              this.storage.getItem(t) &&
                ((this.deviceKey = this.storage.getItem(t)),
                (this.randomPassword = this.storage.getItem(n)),
                (this.deviceGroupKey = this.storage.getItem(r)));
            }),
            (t.clearCachedDeviceKeyAndPassword = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.pool.getClientId() +
                  "." +
                  this.username,
                t = e + ".deviceKey",
                n = e + ".randomPasswordKey",
                r = e + ".deviceGroupKey";
              this.storage.removeItem(t),
                this.storage.removeItem(n),
                this.storage.removeItem(r);
            }),
            (t.clearCachedTokens = function () {
              var e =
                  "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                t = e + "." + this.username + ".idToken",
                n = e + "." + this.username + ".accessToken",
                r = e + "." + this.username + ".refreshToken",
                i = e + ".LastAuthUser",
                o = e + "." + this.username + ".clockDrift";
              this.storage.removeItem(t),
                this.storage.removeItem(n),
                this.storage.removeItem(r),
                this.storage.removeItem(i),
                this.storage.removeItem(o);
            }),
            (t.getCognitoUserSession = function (e) {
              var t = new so(e),
                n = new io(e),
                r = new ao(e);
              return new lo({ IdToken: t, AccessToken: n, RefreshToken: r });
            }),
            (t.forgotPassword = function (e, t) {
              var n = {
                ClientId: this.pool.getClientId(),
                Username: this.username,
                ClientMetadata: t,
              };
              this.getUserContextData() &&
                (n.UserContextData = this.getUserContextData()),
                this.client.request("ForgotPassword", n, function (t, n) {
                  return t
                    ? e.onFailure(t)
                    : "function" == typeof e.inputVerificationCode
                    ? e.inputVerificationCode(n)
                    : e.onSuccess(n);
                });
            }),
            (t.confirmPassword = function (e, t, n, r) {
              var i = {
                ClientId: this.pool.getClientId(),
                Username: this.username,
                ConfirmationCode: e,
                Password: t,
                ClientMetadata: r,
              };
              this.getUserContextData() &&
                (i.UserContextData = this.getUserContextData()),
                this.client.request("ConfirmForgotPassword", i, function (e) {
                  return e ? n.onFailure(e) : n.onSuccess("SUCCESS");
                });
            }),
            (t.getAttributeVerificationCode = function (e, t, n) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "GetUserAttributeVerificationCode",
                {
                  AttributeName: e,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  ClientMetadata: n,
                },
                function (e, n) {
                  return e
                    ? t.onFailure(e)
                    : "function" == typeof t.inputVerificationCode
                    ? t.inputVerificationCode(n)
                    : t.onSuccess("SUCCESS");
                }
              );
            }),
            (t.verifyAttribute = function (e, t, n) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return n.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "VerifyUserAttribute",
                {
                  AttributeName: e,
                  Code: t,
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (e) {
                  return e ? n.onFailure(e) : n.onSuccess("SUCCESS");
                }
              );
            }),
            (t.getDevice = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "GetDevice",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: this.deviceKey,
                },
                function (t, n) {
                  return t ? e.onFailure(t) : e.onSuccess(n);
                }
              );
            }),
            (t.forgetSpecificDevice = function (e, t) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return t.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "ForgetDevice",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: e,
                },
                function (e) {
                  return e ? t.onFailure(e) : t.onSuccess("SUCCESS");
                }
              );
            }),
            (t.forgetDevice = function (e) {
              var t = this;
              this.forgetSpecificDevice(this.deviceKey, {
                onFailure: e.onFailure,
                onSuccess: function (n) {
                  return (
                    (t.deviceKey = null),
                    (t.deviceGroupKey = null),
                    (t.randomPassword = null),
                    t.clearCachedDeviceKeyAndPassword(),
                    e.onSuccess(n)
                  );
                },
              });
            }),
            (t.setDeviceStatusRemembered = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "UpdateDeviceStatus",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: this.deviceKey,
                  DeviceRememberedStatus: "remembered",
                },
                function (t) {
                  return t ? e.onFailure(t) : e.onSuccess("SUCCESS");
                }
              );
            }),
            (t.setDeviceStatusNotRemembered = function (e) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "UpdateDeviceStatus",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                  DeviceKey: this.deviceKey,
                  DeviceRememberedStatus: "not_remembered",
                },
                function (t) {
                  return t ? e.onFailure(t) : e.onSuccess("SUCCESS");
                }
              );
            }),
            (t.listDevices = function (e, t, n) {
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return n.onFailure(new Error("User is not authenticated"));
              var r = {
                AccessToken: this.signInUserSession
                  .getAccessToken()
                  .getJwtToken(),
                Limit: e,
              };
              t && (r.PaginationToken = t),
                this.client.request("ListDevices", r, function (e, t) {
                  return e ? n.onFailure(e) : n.onSuccess(t);
                });
            }),
            (t.globalSignOut = function (e) {
              var t = this;
              if (
                null == this.signInUserSession ||
                !this.signInUserSession.isValid()
              )
                return e.onFailure(new Error("User is not authenticated"));
              this.client.request(
                "GlobalSignOut",
                {
                  AccessToken: this.signInUserSession
                    .getAccessToken()
                    .getJwtToken(),
                },
                function (n) {
                  return n
                    ? e.onFailure(n)
                    : (t.clearCachedUser(), e.onSuccess("SUCCESS"));
                }
              );
            }),
            (t.signOut = function (e) {
              var t = this;
              e && "function" == typeof e
                ? this.getSession(function (n, r) {
                    if (n) return e(n);
                    t.revokeTokens(function (n) {
                      t.cleanClientData(), e(n);
                    });
                  })
                : this.cleanClientData();
            }),
            (t.revokeTokens = function (e) {
              if (
                (void 0 === e && (e = function () {}), "function" != typeof e)
              )
                throw new Error(
                  "Invalid revokeTokenCallback. It should be a function."
                );
              if (!this.signInUserSession)
                return e(new Error("User is not authenticated"));
              if (!this.signInUserSession.getAccessToken())
                return e(new Error("No Access token available"));
              var t = this.signInUserSession.getRefreshToken().getToken(),
                n = this.signInUserSession.getAccessToken();
              if (this.isSessionRevocable(n) && t)
                return this.revokeToken({ token: t, callback: e });
              e();
            }),
            (t.isSessionRevocable = function (e) {
              if (e && "function" == typeof e.decodePayload)
                try {
                  return !!e.decodePayload().origin_jti;
                } catch (e) {}
              return !1;
            }),
            (t.cleanClientData = function () {
              (this.signInUserSession = null), this.clearCachedUser();
            }),
            (t.revokeToken = function (e) {
              var t = e.token,
                n = e.callback;
              this.client.requestWithRetry(
                "RevokeToken",
                { Token: t, ClientId: this.pool.getClientId() },
                function (e) {
                  if (e) return n(e);
                  n();
                }
              );
            }),
            (t.sendMFASelectionAnswer = function (e, t) {
              var n = this,
                r = {};
              (r.USERNAME = this.username), (r.ANSWER = e);
              var i = {
                ChallengeName: "SELECT_MFA_TYPE",
                ChallengeResponses: r,
                ClientId: this.pool.getClientId(),
                Session: this.Session,
              };
              this.getUserContextData() &&
                (i.UserContextData = this.getUserContextData()),
                this.client.request(
                  "RespondToAuthChallenge",
                  i,
                  function (r, i) {
                    return r
                      ? t.onFailure(r)
                      : ((n.Session = i.Session),
                        "SMS_MFA" === e
                          ? t.mfaRequired(
                              i.ChallengeName,
                              i.ChallengeParameters
                            )
                          : "SOFTWARE_TOKEN_MFA" === e
                          ? t.totpRequired(
                              i.ChallengeName,
                              i.ChallengeParameters
                            )
                          : void 0);
                  }
                );
            }),
            (t.getUserContextData = function () {
              return this.pool.getUserContextData(this.username);
            }),
            (t.associateSoftwareToken = function (e) {
              var t = this;
              null != this.signInUserSession && this.signInUserSession.isValid()
                ? this.client.request(
                    "AssociateSoftwareToken",
                    {
                      AccessToken: this.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                    },
                    function (t, n) {
                      return t
                        ? e.onFailure(t)
                        : e.associateSecretCode(n.SecretCode);
                    }
                  )
                : this.client.request(
                    "AssociateSoftwareToken",
                    { Session: this.Session },
                    function (n, r) {
                      return n
                        ? e.onFailure(n)
                        : ((t.Session = r.Session),
                          e.associateSecretCode(r.SecretCode));
                    }
                  );
            }),
            (t.verifySoftwareToken = function (e, t, n) {
              var r = this;
              null != this.signInUserSession && this.signInUserSession.isValid()
                ? this.client.request(
                    "VerifySoftwareToken",
                    {
                      AccessToken: this.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                      UserCode: e,
                      FriendlyDeviceName: t,
                    },
                    function (e, t) {
                      return e ? n.onFailure(e) : n.onSuccess(t);
                    }
                  )
                : this.client.request(
                    "VerifySoftwareToken",
                    {
                      Session: this.Session,
                      UserCode: e,
                      FriendlyDeviceName: t,
                    },
                    function (e, t) {
                      if (e) return n.onFailure(e);
                      r.Session = t.Session;
                      var i = {};
                      i.USERNAME = r.username;
                      var o = {
                        ChallengeName: "MFA_SETUP",
                        ClientId: r.pool.getClientId(),
                        ChallengeResponses: i,
                        Session: r.Session,
                      };
                      r.getUserContextData() &&
                        (o.UserContextData = r.getUserContextData()),
                        r.client.request(
                          "RespondToAuthChallenge",
                          o,
                          function (e, t) {
                            return e
                              ? n.onFailure(e)
                              : ((r.signInUserSession = r.getCognitoUserSession(
                                  t.AuthenticationResult
                                )),
                                r.cacheTokens(),
                                n.onSuccess(r.signInUserSession));
                          }
                        );
                    }
                  );
            }),
            e
          );
        })();
      function So() {}
      n(204), (So.prototype.userAgent = co.userAgent);
      const _o = So;
      function Ao(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (Ao = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return Eo(e, arguments, Po(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Io(r, e)
            );
          }),
          Ao(e)
        );
      }
      function Eo(e, t, n) {
        return (
          (Eo = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && Io(i, n.prototype), i;
              }),
          Eo.apply(null, arguments)
        );
      }
      function Io(e, t) {
        return (
          (Io = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Io(e, t)
        );
      }
      function Po(e) {
        return (
          (Po = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Po(e)
        );
      }
      var Co = (function (e) {
          function t(t, n, r, i) {
            var o;
            return (
              ((o = e.call(this, t) || this).code = n),
              (o.name = r),
              (o.statusCode = i),
              o
            );
          }
          return (
            (r = e),
            ((n = t).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            Io(n, r),
            t
          );
          var n, r;
        })(Ao(Error)),
        Oo = (function () {
          function e(e, t, n) {
            this.endpoint = t || "https://cognito-idp." + e + ".amazonaws.com/";
            var r = (n || {}).credentials;
            this.fetchOptions = r ? { credentials: r } : {};
          }
          var t = e.prototype;
          return (
            (t.promisifyRequest = function (e, t) {
              var n = this;
              return new Promise(function (r, i) {
                n.request(e, t, function (e, t) {
                  e ? i(new Co(e.message, e.code, e.name, e.statusCode)) : r(t);
                });
              });
            }),
            (t.requestWithRetry = function (e, t, n) {
              var r,
                i,
                o = this;
              ((r = [t]),
              (i = 5e3),
              void 0 === i && (i = Ro),
              ko(
                function (t) {
                  return new Promise(function (n, r) {
                    o.request(e, t, function (e, t) {
                      e ? r(e) : n(t);
                    });
                  });
                },
                r,
                (function (e) {
                  return function (t) {
                    var n = 100 * Math.pow(2, t) + 100 * Math.random();
                    return !(n > e) && n;
                  };
                })(i)
              ))
                .then(function (e) {
                  return n(null, e);
                })
                .catch(function (e) {
                  return n(e);
                });
            }),
            (t.request = function (e, t, n) {
              var r,
                i = {
                  "Content-Type": "application/x-amz-json-1.1",
                  "X-Amz-Target": "AWSCognitoIdentityProviderService." + e,
                  "X-Amz-User-Agent": _o.prototype.userAgent,
                  "Cache-Control": "no-store",
                },
                o = Object.assign({}, this.fetchOptions, {
                  headers: i,
                  method: "POST",
                  mode: "cors",
                  body: JSON.stringify(t),
                });
              fetch(this.endpoint, o)
                .then(
                  function (e) {
                    return (r = e), e;
                  },
                  function (e) {
                    if (e instanceof TypeError)
                      throw new Error("Network error");
                    throw e;
                  }
                )
                .then(function (e) {
                  return e.json().catch(function () {
                    return {};
                  });
                })
                .then(function (e) {
                  if (r.ok) return n(null, e);
                  var t = (e.__type || e.code).split("#").pop(),
                    i = new Error(e.message || e.Message || null);
                  return (i.name = t), (i.code = t), n(i);
                })
                .catch(function (e) {
                  if (r && r.headers && r.headers.get("x-amzn-errortype"))
                    try {
                      var t = r.headers.get("x-amzn-errortype").split(":")[0],
                        i = new Error(r.status ? r.status.toString() : null);
                      return (
                        (i.code = t),
                        (i.name = t),
                        (i.statusCode = r.status),
                        n(i)
                      );
                    } catch (t) {
                      return n(e);
                    }
                  else
                    e instanceof Error &&
                      "Network error" === e.message &&
                      (e.code = "NetworkError");
                  return n(e);
                });
            }),
            e
          );
        })(),
        To = { debug: function () {} },
        Uo =
          (Error,
          function (e) {
            return e && e.nonRetryable;
          });
      function ko(e, t, n, r) {
        if ((void 0 === r && (r = 1), "function" != typeof e))
          throw Error("functionToRetry must be a function");
        return (
          To.debug(
            e.name + " attempt #" + r + " with args: " + JSON.stringify(t)
          ),
          e.apply(void 0, t).catch(function (i) {
            if ((To.debug("error on " + e.name, i), Uo(i)))
              throw (To.debug(e.name + " non retryable error", i), i);
            var o = n(r, t, i);
            if ((To.debug(e.name + " retrying in " + o + " ms"), !1 !== o))
              return new Promise(function (e) {
                return setTimeout(e, o);
              }).then(function () {
                return ko(e, t, n, r + 1);
              });
            throw i;
          })
        );
      }
      var Ro = 3e5,
        Mo = 55,
        xo = (function () {
          function e(e, t) {
            var n = e || {},
              r = n.UserPoolId,
              i = n.ClientId,
              o = n.endpoint,
              s = n.fetchOptions,
              a = n.AdvancedSecurityDataCollectionFlag;
            if (!r || !i)
              throw new Error("Both UserPoolId and ClientId are required.");
            if (r.length > Mo || !/^[\w-]+_[0-9a-zA-Z]+$/.test(r))
              throw new Error("Invalid UserPoolId format.");
            var u = r.split("_")[0];
            (this.userPoolId = r),
              (this.clientId = i),
              (this.client = new Oo(u, o, s)),
              (this.advancedSecurityDataCollectionFlag = !1 !== a),
              (this.storage = e.Storage || new mo().getStorage()),
              t && (this.wrapRefreshSessionCallback = t);
          }
          var t = e.prototype;
          return (
            (t.getUserPoolId = function () {
              return this.userPoolId;
            }),
            (t.getUserPoolName = function () {
              return this.getUserPoolId().split("_")[1];
            }),
            (t.getClientId = function () {
              return this.clientId;
            }),
            (t.signUp = function (e, t, n, r, i, o) {
              var s = this,
                a = {
                  ClientId: this.clientId,
                  Username: e,
                  Password: t,
                  UserAttributes: n,
                  ValidationData: r,
                  ClientMetadata: o,
                };
              this.getUserContextData(e) &&
                (a.UserContextData = this.getUserContextData(e)),
                this.client.request("SignUp", a, function (t, n) {
                  if (t) return i(t, null);
                  var r = { Username: e, Pool: s, Storage: s.storage },
                    o = {
                      user: new bo(r),
                      userConfirmed: n.UserConfirmed,
                      userSub: n.UserSub,
                      codeDeliveryDetails: n.CodeDeliveryDetails,
                    };
                  return i(null, o);
                });
            }),
            (t.getCurrentUser = function () {
              var e =
                  "CognitoIdentityServiceProvider." +
                  this.clientId +
                  ".LastAuthUser",
                t = this.storage.getItem(e);
              if (t) {
                var n = { Username: t, Pool: this, Storage: this.storage };
                return new bo(n);
              }
              return null;
            }),
            (t.getUserContextData = function (e) {
              if ("undefined" != typeof AmazonCognitoAdvancedSecurityData) {
                var t = AmazonCognitoAdvancedSecurityData;
                if (this.advancedSecurityDataCollectionFlag) {
                  var n = t.getData(e, this.userPoolId, this.clientId);
                  if (n) return { EncodedData: n };
                }
                return {};
              }
            }),
            e
          );
        })(),
        Do = n(6808),
        Fo = (function () {
          function e(e) {
            if (
              (void 0 === e && (e = {}),
              e.domain && (this.domain = e.domain),
              e.path ? (this.path = e.path) : (this.path = "/"),
              Object.prototype.hasOwnProperty.call(e, "expires")
                ? (this.expires = e.expires)
                : (this.expires = 365),
              Object.prototype.hasOwnProperty.call(e, "secure")
                ? (this.secure = e.secure)
                : (this.secure = !0),
              Object.prototype.hasOwnProperty.call(e, "sameSite"))
            ) {
              if (!["strict", "lax", "none"].includes(e.sameSite))
                throw new Error(
                  'The sameSite value of cookieStorage must be "lax", "strict" or "none".'
                );
              if ("none" === e.sameSite && !this.secure)
                throw new Error(
                  "sameSite = None requires the Secure attribute in latest browser versions."
                );
              this.sameSite = e.sameSite;
            } else this.sameSite = null;
          }
          var t = e.prototype;
          return (
            (t.setItem = function (e, t) {
              var n = {
                path: this.path,
                expires: this.expires,
                domain: this.domain,
                secure: this.secure,
              };
              return (
                this.sameSite && (n.sameSite = this.sameSite),
                Do.set(e, t, n),
                Do.get(e)
              );
            }),
            (t.getItem = function (e) {
              return Do.get(e);
            }),
            (t.removeItem = function (e) {
              var t = {
                path: this.path,
                expires: this.expires,
                domain: this.domain,
                secure: this.secure,
              };
              return (
                this.sameSite && (t.sameSite = this.sameSite), Do.remove(e, t)
              );
            }),
            (t.clear = function () {
              for (
                var e = Do.get(), t = Object.keys(e).length, n = 0;
                n < t;
                ++n
              )
                this.removeItem(Object.keys(e)[n]);
              return {};
            }),
            e
          );
        })(),
        No = n(8575),
        jo = function (e) {
          var t = window.open(e, "_self");
          return t ? Promise.resolve(t) : Promise.reject();
        },
        Lo =
          "undefined" != typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default",
        Bo = function (e, t, n) {
          C.dispatch("auth", { event: e, data: t, message: n }, "Auth", Lo);
        },
        qo = new c("OAuth"),
        Vo = (function () {
          function e(e) {
            var t = e.config,
              n = e.cognitoClientId,
              r = e.scopes,
              i = void 0 === r ? [] : r;
            if (
              ((this._urlOpener = t.urlOpener || jo),
              (this._config = t),
              (this._cognitoClientId = n),
              !this.isValidScopes(i))
            )
              throw Error("scopes must be a String Array");
            this._scopes = i;
          }
          return (
            (e.prototype.isValidScopes = function (e) {
              return (
                Array.isArray(e) &&
                e.every(function (e) {
                  return "string" == typeof e;
                })
              );
            }),
            (e.prototype.oauthSignIn = function (e, t, n, r, i, o) {
              void 0 === e && (e = "code"), void 0 === i && (i = g.Cognito);
              var s = this._generateState(32),
                a = o
                  ? s +
                    "-" +
                    o
                      .split("")
                      .map(function (e) {
                        return e.charCodeAt(0).toString(16).padStart(2, "0");
                      })
                      .join("")
                  : s;
              !(function (e) {
                window.sessionStorage.setItem("oauth_state", e);
              })(a);
              var u,
                c = this._generateRandom(128);
              (u = c), window.sessionStorage.setItem("ouath_pkce_key", u);
              var l = this._generateChallenge(c),
                f = this._scopes.join(" "),
                h = Object.entries(
                  m(
                    m(
                      {
                        redirect_uri: n,
                        response_type: e,
                        client_id: r,
                        identity_provider: i,
                        scope: f,
                        state: a,
                      },
                      "code" === e ? { code_challenge: l } : {}
                    ),
                    "code" === e ? { code_challenge_method: "S256" } : {}
                  )
                )
                  .map(function (e) {
                    var t = S(e, 2),
                      n = t[0],
                      r = t[1];
                    return encodeURIComponent(n) + "=" + encodeURIComponent(r);
                  })
                  .join("&"),
                d = "https://" + t + "/oauth2/authorize?" + h;
              qo.debug("Redirecting to " + d), this._urlOpener(d, n);
            }),
            (e.prototype._handleCodeFlow = function (e) {
              return w(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a, u, c, l, f, h, d, p;
                return b(this, function (g) {
                  switch (g.label) {
                    case 0:
                      return (
                        (t = ((0, No.Qc)(e).query || "")
                          .split("&")
                          .map(function (e) {
                            return e.split("=");
                          })
                          .reduce(
                            function (e, t) {
                              var n,
                                r = S(t, 2),
                                i = r[0],
                                o = r[1];
                              return m(m({}, e), (((n = {})[i] = o), n));
                            },
                            { code: void 0 }
                          ).code),
                        (n = (0, No.Qc)(e).pathname || "/"),
                        (r =
                          (0, No.Qc)(this._config.redirectSignIn).pathname ||
                          "/"),
                        t && n === r
                          ? ((i =
                              "https://" +
                              this._config.domain +
                              "/oauth2/token"),
                            Bo("codeFlow", {}, "Retrieving tokens from " + i),
                            (o = A(this._config)
                              ? this._cognitoClientId
                              : this._config.clientID),
                            (s = A(this._config)
                              ? this._config.redirectSignIn
                              : this._config.redirectUri),
                            (v =
                              window.sessionStorage.getItem("ouath_pkce_key")),
                            window.sessionStorage.removeItem("ouath_pkce_key"),
                            (u = m(
                              {
                                grant_type: "authorization_code",
                                code: t,
                                client_id: o,
                                redirect_uri: s,
                              },
                              (a = v) ? { code_verifier: a } : {}
                            )),
                            qo.debug(
                              "Calling token endpoint: " + i + " with",
                              u
                            ),
                            (c = Object.entries(u)
                              .map(function (e) {
                                var t = S(e, 2),
                                  n = t[0],
                                  r = t[1];
                                return (
                                  encodeURIComponent(n) +
                                  "=" +
                                  encodeURIComponent(r)
                                );
                              })
                              .join("&")),
                            [
                              4,
                              fetch(i, {
                                method: "POST",
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                body: c,
                              }),
                            ])
                          : [2]
                      );
                    case 1:
                      return [4, g.sent().json()];
                    case 2:
                      if (
                        ((l = g.sent()),
                        (f = l.access_token),
                        (h = l.refresh_token),
                        (d = l.id_token),
                        (p = l.error))
                      )
                        throw new Error(p);
                      return [
                        2,
                        { accessToken: f, refreshToken: h, idToken: d },
                      ];
                  }
                  var v;
                });
              });
            }),
            (e.prototype._handleImplicitFlow = function (e) {
              return w(this, void 0, void 0, function () {
                var t, n, r;
                return b(this, function (i) {
                  return (
                    (t = ((0, No.Qc)(e).hash || "#")
                      .substr(1)
                      .split("&")
                      .map(function (e) {
                        return e.split("=");
                      })
                      .reduce(
                        function (e, t) {
                          var n,
                            r = S(t, 2),
                            i = r[0],
                            o = r[1];
                          return m(m({}, e), (((n = {})[i] = o), n));
                        },
                        { id_token: void 0, access_token: void 0 }
                      )),
                    (n = t.id_token),
                    (r = t.access_token),
                    Bo("implicitFlow", {}, "Got tokens from " + e),
                    qo.debug("Retrieving implicit tokens from " + e + " with"),
                    [2, { accessToken: r, idToken: n, refreshToken: null }]
                  );
                });
              });
            }),
            (e.prototype.handleAuthResponse = function (e) {
              return w(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a;
                return b(this, function (u) {
                  switch (u.label) {
                    case 0:
                      if (
                        (u.trys.push([0, 5, , 6]),
                        (t = e
                          ? m(
                              m(
                                {},
                                ((0, No.Qc)(e).hash || "#")
                                  .substr(1)
                                  .split("&")
                                  .map(function (e) {
                                    return e.split("=");
                                  })
                                  .reduce(function (e, t) {
                                    var n = S(t, 2),
                                      r = n[0],
                                      i = n[1];
                                    return (e[r] = i), e;
                                  }, {})
                              ),
                              ((0, No.Qc)(e).query || "")
                                .split("&")
                                .map(function (e) {
                                  return e.split("=");
                                })
                                .reduce(function (e, t) {
                                  var n = S(t, 2),
                                    r = n[0],
                                    i = n[1];
                                  return (e[r] = i), e;
                                }, {})
                            )
                          : {}),
                        (n = t.error),
                        (r = t.error_description),
                        n)
                      )
                        throw new Error(r);
                      return (
                        (i = this._validateState(t)),
                        qo.debug(
                          "Starting " +
                            this._config.responseType +
                            " flow with " +
                            e
                        ),
                        "code" !== this._config.responseType
                          ? [3, 2]
                          : ((o = [{}]), [4, this._handleCodeFlow(e)])
                      );
                    case 1:
                      return [
                        2,
                        m.apply(void 0, [
                          m.apply(void 0, o.concat([u.sent()])),
                          { state: i },
                        ]),
                      ];
                    case 2:
                      return (s = [{}]), [4, this._handleImplicitFlow(e)];
                    case 3:
                      return [
                        2,
                        m.apply(void 0, [
                          m.apply(void 0, s.concat([u.sent()])),
                          { state: i },
                        ]),
                      ];
                    case 4:
                      return [3, 6];
                    case 5:
                      throw (
                        ((a = u.sent()),
                        qo.error("Error handling auth response.", a),
                        a)
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype._validateState = function (e) {
              if (e) {
                var t,
                  n =
                    ((t = window.sessionStorage.getItem("oauth_state")),
                    window.sessionStorage.removeItem("oauth_state"),
                    t),
                  r = e.state;
                if (n && n !== r)
                  throw new Error("Invalid state in OAuth flow");
                return r;
              }
            }),
            (e.prototype.signOut = function () {
              return w(this, void 0, void 0, function () {
                var e, t, n;
                return b(this, function (r) {
                  return (
                    (e = "https://" + this._config.domain + "/logout?"),
                    (t = A(this._config)
                      ? this._cognitoClientId
                      : this._config.oauth.clientID),
                    (n = A(this._config)
                      ? this._config.redirectSignOut
                      : this._config.returnTo),
                    (e += Object.entries({
                      client_id: t,
                      logout_uri: encodeURIComponent(n),
                    })
                      .map(function (e) {
                        var t = S(e, 2);
                        return t[0] + "=" + t[1];
                      })
                      .join("&")),
                    Bo(
                      "oAuthSignOut",
                      { oAuth: "signOut" },
                      "Signing out from " + e
                    ),
                    qo.debug("Signing out from " + e),
                    [2, this._urlOpener(e, n)]
                  );
                });
              });
            }),
            (e.prototype._generateState = function (e) {
              for (
                var t = "",
                  n = e,
                  r =
                    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                n > 0;
                --n
              )
                t += r[Math.round(Math.random() * (r.length - 1))];
              return t;
            }),
            (e.prototype._generateChallenge = function (e) {
              var t = new Ni.Sha256();
              t.update(e);
              var n = t.digestSync(),
                r = xi.lW.from(n).toString("base64");
              return this._base64URL(r);
            }),
            (e.prototype._base64URL = function (e) {
              return e
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
            }),
            (e.prototype._generateRandom = function (e) {
              var t = new Uint8Array(e);
              if ("undefined" != typeof window && window.crypto)
                window.crypto.getRandomValues(t);
              else
                for (var n = 0; n < e; n += 1)
                  t[n] =
                    (Math.random() *
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
                        .length) |
                    0;
              return this._bufferToString(t);
            }),
            (e.prototype._bufferToString = function (e) {
              for (
                var t =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                  n = [],
                  r = 0;
                r < e.byteLength;
                r += 1
              ) {
                var i = e[r] % t.length;
                n.push(t[i]);
              }
              return n.join("");
            }),
            e
          );
        })();
      const Ko = Vo;
      var Ho;
      !(function (e) {
        (e.DEFAULT_MSG = "Authentication Error"),
          (e.EMPTY_EMAIL = "Email cannot be empty"),
          (e.EMPTY_PHONE = "Phone number cannot be empty"),
          (e.EMPTY_USERNAME = "Username cannot be empty"),
          (e.INVALID_USERNAME =
            "The username should either be a string or one of the sign in types"),
          (e.EMPTY_PASSWORD = "Password cannot be empty"),
          (e.EMPTY_CODE = "Confirmation code cannot be empty"),
          (e.SIGN_UP_ERROR = "Error creating account"),
          (e.NO_MFA = "No valid MFA method provided"),
          (e.INVALID_MFA = "Invalid MFA type"),
          (e.EMPTY_CHALLENGE = "Challenge response cannot be empty"),
          (e.NO_USER_SESSION =
            "Failed to get the session because the user is empty"),
          (e.NETWORK_ERROR = "Network Error"),
          (e.DEVICE_CONFIG =
            "Device tracking has not been configured in this User Pool"),
          (e.AUTOSIGNIN_ERROR = "Please use your credentials to sign in");
      })(Ho || (Ho = {}));
      var zo = new c("AuthError"),
        Go = (function (e) {
          function t(n) {
            var r = this,
              i = Yo[n],
              o = i.message,
              s = i.log;
            return (
              ((r = e.call(this, o) || this).constructor = t),
              Object.setPrototypeOf(r, t.prototype),
              (r.name = "AuthError"),
              (r.log = s || o),
              zo.error(r.log),
              r
            );
          }
          return p(t, e), t;
        })(Error),
        Wo = (function (e) {
          function t(n) {
            var r = e.call(this, n) || this;
            return (
              (r.constructor = t),
              Object.setPrototypeOf(r, t.prototype),
              (r.name = "NoUserPoolError"),
              r
            );
          }
          return p(t, e), t;
        })(Go),
        Yo = {
          noConfig: {
            message: Ho.DEFAULT_MSG,
            log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        ",
          },
          missingAuthConfig: {
            message: Ho.DEFAULT_MSG,
            log: "\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        ",
          },
          emptyUsername: { message: Ho.EMPTY_USERNAME },
          invalidUsername: { message: Ho.INVALID_USERNAME },
          emptyPassword: { message: Ho.EMPTY_PASSWORD },
          emptyCode: { message: Ho.EMPTY_CODE },
          signUpError: {
            message: Ho.SIGN_UP_ERROR,
            log: "The first parameter should either be non-null string or object",
          },
          noMFA: { message: Ho.NO_MFA },
          invalidMFA: { message: Ho.INVALID_MFA },
          emptyChallengeResponse: { message: Ho.EMPTY_CHALLENGE },
          noUserSession: { message: Ho.NO_USER_SESSION },
          deviceConfig: { message: Ho.DEVICE_CONFIG },
          networkError: { message: Ho.NETWORK_ERROR },
          autoSignInError: { message: Ho.AUTOSIGNIN_ERROR },
          default: { message: Ho.DEFAULT_MSG },
        },
        Jo = new c("AuthClass"),
        $o = "aws.cognito.signin.user.admin",
        Zo =
          "undefined" != typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("amplify_default")
            : "@@amplify_default",
        Qo = function (e, t, n) {
          C.dispatch("auth", { event: e, data: t, message: n }, "Auth", Zo);
        },
        Xo = (function () {
          function e(e) {
            var t = this;
            (this.userPool = null),
              (this.user = null),
              (this.oAuthFlowInProgress = !1),
              (this.autoSignInInitiated = !1),
              (this.inflightSessionPromise = null),
              (this.inflightSessionPromiseCounter = 0),
              (this.Credentials = Ei),
              (this.wrapRefreshSessionCallback = function (e) {
                return function (t, n) {
                  return (
                    n
                      ? Qo("tokenRefresh", void 0, "New token retrieved")
                      : Qo(
                          "tokenRefresh_failure",
                          t,
                          "Failed to retrieve new token"
                        ),
                    e(t, n)
                  );
                };
              }),
              this.configure(e),
              (this.currentCredentials = this.currentCredentials.bind(this)),
              (this.currentUserCredentials =
                this.currentUserCredentials.bind(this)),
              C.listen("auth", function (e) {
                switch (e.payload.event) {
                  case "verify":
                  case "signIn":
                    t._storage.setItem("amplify-signin-with-hostedUI", "false");
                    break;
                  case "signOut":
                    t._storage.removeItem("amplify-signin-with-hostedUI");
                    break;
                  case "cognitoHostedUI":
                    t._storage.setItem("amplify-signin-with-hostedUI", "true");
                }
              });
          }
          return (
            (e.prototype.getModuleName = function () {
              return "Auth";
            }),
            (e.prototype.configure = function (e) {
              var t = this;
              if (!e) return this._config || {};
              Jo.debug("configure Auth");
              var n = Object.assign({}, this._config, on(e).Auth, e);
              this._config = n;
              var r = this._config,
                i = r.userPoolId,
                o = r.userPoolWebClientId,
                s = r.cookieStorage,
                a = r.oauth,
                u = r.region,
                c = r.identityPoolId,
                l = r.mandatorySignIn,
                f = r.refreshHandlers,
                h = r.identityPoolRegion,
                d = r.clientMetadata,
                p = r.endpoint,
                g = r.storage;
              if (g) {
                if (!this._isValidAuthStorage(g))
                  throw (
                    (Jo.error("The storage in the Auth config is not valid!"),
                    new Error("Empty storage object"))
                  );
                this._storage = g;
              } else
                this._storage = s
                  ? new Fo(s)
                  : e.ssr
                  ? new Ri()
                  : new U().getStorage();
              if (
                ((this._storageSync = Promise.resolve()),
                "function" == typeof this._storage.sync &&
                  (this._storageSync = this._storage.sync()),
                i)
              ) {
                var y = { UserPoolId: i, ClientId: o, endpoint: p };
                (y.Storage = this._storage),
                  (this.userPool = new xo(y, this.wrapRefreshSessionCallback));
              }
              this.Credentials.configure({
                mandatorySignIn: l,
                region: u,
                userPoolId: i,
                identityPoolId: c,
                refreshHandlers: f,
                storage: this._storage,
                identityPoolRegion: h,
              });
              var m = a ? (A(this._config.oauth) ? a : a.awsCognito) : void 0;
              if (m) {
                var w = Object.assign(
                  {
                    cognitoClientId: o,
                    UserPoolId: i,
                    domain: m.domain,
                    scopes: m.scope,
                    redirectSignIn: m.redirectSignIn,
                    redirectSignOut: m.redirectSignOut,
                    responseType: m.responseType,
                    Storage: this._storage,
                    urlOpener: m.urlOpener,
                    clientMetadata: d,
                  },
                  m.options
                );
                this._oAuthHandler = new Ko({
                  scopes: w.scopes,
                  config: w,
                  cognitoClientId: w.cognitoClientId,
                });
                var b = {};
                !(function (e) {
                  if (k().isBrowser && window.location)
                    !(function (e) {
                      var n = e.url;
                      b[n] || ((b[n] = !0), t._handleAuthResponse(n));
                    })({ url: window.location.href });
                  else if (!k().isNode) throw new Error("Not supported");
                })();
              }
              return (
                Qo(
                  "configured",
                  null,
                  "The Auth category has been configured successfully"
                ),
                this.autoSignInInitiated ||
                  "function" != typeof this._storage.getItem ||
                  (this.isTrueStorageValue("amplify-polling-started") &&
                    (Qo("autoSignIn_failure", null, v.AutoSignInError),
                    this._storage.removeItem("amplify-auto-sign-in")),
                  this._storage.removeItem("amplify-polling-started")),
                this._config
              );
            }),
            (e.prototype.signUp = function (e) {
              for (
                var t, n, r, i = this, o = [], s = 1;
                s < arguments.length;
                s++
              )
                o[s - 1] = arguments[s];
              if (!this.userPool) return this.rejectNoUserPool();
              var a,
                u = null,
                c = null,
                l = [],
                f = null,
                h = { enabled: !1 },
                d = {},
                p = {};
              if (e && "string" == typeof e) {
                (u = e), (c = o ? o[0] : null);
                var g = o ? o[1] : null,
                  y = o ? o[2] : null;
                g && l.push(new go({ Name: "email", Value: g })),
                  y && l.push(new go({ Name: "phone_number", Value: y }));
              } else {
                if (!e || "object" != typeof e)
                  return this.rejectAuthError(v.SignUpError);
                (u = e.username),
                  (c = e.password),
                  e && e.clientMetadata
                    ? (a = e.clientMetadata)
                    : this._config.clientMetadata &&
                      (a = this._config.clientMetadata);
                var m = e.attributes;
                m &&
                  Object.keys(m).map(function (e) {
                    l.push(new go({ Name: e, Value: m[e] }));
                  });
                var w = e.validationData;
                w &&
                  ((f = []),
                  Object.keys(w).map(function (e) {
                    f.push(new go({ Name: e, Value: w[e] }));
                  })),
                  (h =
                    null !== (t = e.autoSignIn) && void 0 !== t
                      ? t
                      : { enabled: !1 }).enabled &&
                    (this._storage.setItem("amplify-auto-sign-in", "true"),
                    (d =
                      null !== (n = h.validationData) && void 0 !== n ? n : {}),
                    (p =
                      null !== (r = h.clientMetaData) && void 0 !== r
                        ? r
                        : {}));
              }
              return u
                ? c
                  ? (Jo.debug("signUp attrs:", l),
                    Jo.debug("signUp validation data:", f),
                    new Promise(function (e, t) {
                      i.userPool.signUp(
                        u,
                        c,
                        l,
                        f,
                        function (n, r) {
                          n
                            ? (Qo("signUp_failure", n, u + " failed to signup"),
                              t(n))
                            : (Qo(
                                "signUp",
                                r,
                                u + " has signed up successfully"
                              ),
                              h.enabled && i.handleAutoSignIn(u, c, d, p, r),
                              e(r));
                        },
                        a
                      );
                    }))
                  : this.rejectAuthError(v.EmptyPassword)
                : this.rejectAuthError(v.EmptyUsername);
            }),
            (e.prototype.handleAutoSignIn = function (e, t, n, r, i) {
              this.autoSignInInitiated = !0;
              var o = new Mi({
                Username: e,
                Password: t,
                ValidationData: n,
                ClientMetadata: r,
              });
              i.userConfirmed
                ? this.signInAfterUserConfirmed(o)
                : "link" === this._config.signUpVerificationMethod
                ? this.handleLinkAutoSignIn(o)
                : this.handleCodeAutoSignIn(o);
            }),
            (e.prototype.handleCodeAutoSignIn = function (e) {
              var t = this,
                n = function (r) {
                  "confirmSignUp" === r.payload.event &&
                    t.signInAfterUserConfirmed(e, n);
                };
              C.listen("auth", n);
            }),
            (e.prototype.handleLinkAutoSignIn = function (e) {
              var t = this;
              this._storage.setItem("amplify-polling-started", "true");
              var n = Date.now(),
                r = setInterval(function () {
                  Date.now() - n > 18e4
                    ? (clearInterval(r),
                      Qo(
                        "autoSignIn_failure",
                        null,
                        "Please confirm your account and use your credentials to sign in."
                      ),
                      t._storage.removeItem("amplify-auto-sign-in"))
                    : t.signInAfterUserConfirmed(e, null, r);
                }, 5e3);
            }),
            (e.prototype.signInAfterUserConfirmed = function (e, t, n) {
              return w(this, void 0, void 0, function () {
                var r,
                  i,
                  o = this;
                return b(this, function (s) {
                  switch (s.label) {
                    case 0:
                      (r = this.createCognitoUser(e.getUsername())),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.authenticateUser(
                            e,
                            this.authCallbacks(
                              r,
                              function (r) {
                                Qo(
                                  "autoSignIn",
                                  r,
                                  e.getUsername() +
                                    " has signed in successfully"
                                ),
                                  t && C.remove("auth", t),
                                  n &&
                                    (clearInterval(n),
                                    o._storage.removeItem(
                                      "amplify-polling-started"
                                    )),
                                  o._storage.removeItem("amplify-auto-sign-in");
                              },
                              function (e) {
                                Jo.error(e),
                                  o._storage.removeItem("amplify-auto-sign-in");
                              }
                            )
                          ),
                        ]
                      );
                    case 2:
                      return s.sent(), [3, 4];
                    case 3:
                      return (i = s.sent()), Jo.error(i), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.confirmSignUp = function (e, t, n) {
              var r = this;
              if (!this.userPool) return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(v.EmptyUsername);
              if (!t) return this.rejectAuthError(v.EmptyCode);
              var i,
                o = this.createCognitoUser(e),
                s =
                  !n ||
                  "boolean" != typeof n.forceAliasCreation ||
                  n.forceAliasCreation;
              return (
                n && n.clientMetadata
                  ? (i = n.clientMetadata)
                  : this._config.clientMetadata &&
                    (i = this._config.clientMetadata),
                new Promise(function (n, a) {
                  o.confirmRegistration(
                    t,
                    s,
                    function (t, i) {
                      t
                        ? a(t)
                        : (Qo(
                            "confirmSignUp",
                            i,
                            e + " has been confirmed successfully"
                          ),
                          r.isTrueStorageValue("amplify-auto-sign-in") &&
                            !r.autoSignInInitiated &&
                            (Qo("autoSignIn_failure", null, v.AutoSignInError),
                            r._storage.removeItem("amplify-auto-sign-in")),
                          n(i));
                    },
                    i
                  );
                })
              );
            }),
            (e.prototype.isTrueStorageValue = function (e) {
              var t = this._storage.getItem(e);
              return !!t && "true" === t;
            }),
            (e.prototype.resendSignUp = function (e, t) {
              if (
                (void 0 === t && (t = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(v.EmptyUsername);
              var n = this.createCognitoUser(e);
              return new Promise(function (e, r) {
                n.resendConfirmationCode(function (t, n) {
                  t ? r(t) : e(n);
                }, t);
              });
            }),
            (e.prototype.signIn = function (e, t, n) {
              if (
                (void 0 === n && (n = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              var r = null,
                i = null,
                o = {};
              if ("string" == typeof e) (r = e), (i = t);
              else {
                if (!e.username) return this.rejectAuthError(v.InvalidUsername);
                void 0 !== t &&
                  Jo.warn(
                    "The password should be defined under the first parameter object!"
                  ),
                  (r = e.username),
                  (i = e.password),
                  (o = e.validationData);
              }
              if (!r) return this.rejectAuthError(v.EmptyUsername);
              var s = new Mi({
                Username: r,
                Password: i,
                ValidationData: o,
                ClientMetadata: n,
              });
              return i
                ? this.signInWithPassword(s)
                : this.signInWithoutPassword(s);
            }),
            (e.prototype.authCallbacks = function (e, t, n) {
              var r = this,
                i = this;
              return {
                onSuccess: function (o) {
                  return w(r, void 0, void 0, function () {
                    var r, s, a, u;
                    return b(this, function (c) {
                      switch (c.label) {
                        case 0:
                          Jo.debug(o),
                            delete e.challengeName,
                            delete e.challengeParam,
                            (c.label = 1);
                        case 1:
                          return (
                            c.trys.push([1, 4, 5, 9]),
                            [4, this.Credentials.clear()]
                          );
                        case 2:
                          return (
                            c.sent(), [4, this.Credentials.set(o, "session")]
                          );
                        case 3:
                          return (
                            (r = c.sent()),
                            Jo.debug("succeed to get cognito credentials", r),
                            [3, 9]
                          );
                        case 4:
                          return (
                            (s = c.sent()),
                            Jo.debug("cannot get cognito credentials", s),
                            [3, 9]
                          );
                        case 5:
                          return (
                            c.trys.push([5, 7, , 8]),
                            [4, this.currentUserPoolUser()]
                          );
                        case 6:
                          return (
                            (a = c.sent()),
                            (i.user = a),
                            Qo(
                              "signIn",
                              a,
                              "A user " +
                                e.getUsername() +
                                " has been signed in"
                            ),
                            t(a),
                            [3, 8]
                          );
                        case 7:
                          return (
                            (u = c.sent()),
                            Jo.error("Failed to get the signed in user", u),
                            n(u),
                            [3, 8]
                          );
                        case 8:
                          return [7];
                        case 9:
                          return [2];
                      }
                    });
                  });
                },
                onFailure: function (t) {
                  Jo.debug("signIn failure", t),
                    Qo(
                      "signIn_failure",
                      t,
                      e.getUsername() + " failed to signin"
                    ),
                    n(t);
                },
                customChallenge: function (n) {
                  Jo.debug("signIn custom challenge answer required"),
                    (e.challengeName = "CUSTOM_CHALLENGE"),
                    (e.challengeParam = n),
                    t(e);
                },
                mfaRequired: function (n, r) {
                  Jo.debug("signIn MFA required"),
                    (e.challengeName = n),
                    (e.challengeParam = r),
                    t(e);
                },
                mfaSetup: function (n, r) {
                  Jo.debug("signIn mfa setup", n),
                    (e.challengeName = n),
                    (e.challengeParam = r),
                    t(e);
                },
                newPasswordRequired: function (n, r) {
                  Jo.debug("signIn new password"),
                    (e.challengeName = "NEW_PASSWORD_REQUIRED"),
                    (e.challengeParam = {
                      userAttributes: n,
                      requiredAttributes: r,
                    }),
                    t(e);
                },
                totpRequired: function (n, r) {
                  Jo.debug("signIn totpRequired"),
                    (e.challengeName = n),
                    (e.challengeParam = r),
                    t(e);
                },
                selectMFAType: function (n, r) {
                  Jo.debug("signIn selectMFAType", n),
                    (e.challengeName = n),
                    (e.challengeParam = r),
                    t(e);
                },
              };
            }),
            (e.prototype.signInWithPassword = function (e) {
              var t = this;
              if (this.pendingSignIn)
                throw new Error("Pending sign-in attempt already in progress");
              var n = this.createCognitoUser(e.getUsername());
              return (
                (this.pendingSignIn = new Promise(function (r, i) {
                  n.authenticateUser(
                    e,
                    t.authCallbacks(
                      n,
                      function (e) {
                        (t.pendingSignIn = null), r(e);
                      },
                      function (e) {
                        (t.pendingSignIn = null), i(e);
                      }
                    )
                  );
                })),
                this.pendingSignIn
              );
            }),
            (e.prototype.signInWithoutPassword = function (e) {
              var t = this,
                n = this.createCognitoUser(e.getUsername());
              return (
                n.setAuthenticationFlowType("CUSTOM_AUTH"),
                new Promise(function (r, i) {
                  n.initiateAuth(e, t.authCallbacks(n, r, i));
                })
              );
            }),
            (e.prototype.getMFAOptions = function (e) {
              return new Promise(function (t, n) {
                e.getMFAOptions(function (e, r) {
                  if (e)
                    return Jo.debug("get MFA Options failed", e), void n(e);
                  Jo.debug("get MFA options success", r), t(r);
                });
              });
            }),
            (e.prototype.getPreferredMFA = function (e, t) {
              var n = this,
                r = this;
              return new Promise(function (i, o) {
                var s = n._config.clientMetadata,
                  a = !!t && t.bypassCache;
                e.getUserData(
                  function (t, s) {
                    return w(n, void 0, void 0, function () {
                      var n, a;
                      return b(this, function (u) {
                        switch (u.label) {
                          case 0:
                            if (!t) return [3, 5];
                            if (
                              (Jo.debug("getting preferred mfa failed", t),
                              !this.isSessionInvalid(t))
                            )
                              return [3, 4];
                            u.label = 1;
                          case 1:
                            return (
                              u.trys.push([1, 3, , 4]),
                              [4, this.cleanUpInvalidSession(e)]
                            );
                          case 2:
                            return u.sent(), [3, 4];
                          case 3:
                            return (
                              (n = u.sent()),
                              o(
                                new Error(
                                  "Session is invalid due to: " +
                                    t.message +
                                    " and failed to clean up invalid session: " +
                                    n.message
                                )
                              ),
                              [2]
                            );
                          case 4:
                            return o(t), [2];
                          case 5:
                            return (a = r._getMfaTypeFromUserData(s))
                              ? (i(a), [2])
                              : (o("invalid MFA Type"), [2]);
                        }
                      });
                    });
                  },
                  { bypassCache: a, clientMetadata: s }
                );
              });
            }),
            (e.prototype._getMfaTypeFromUserData = function (e) {
              var t = null,
                n = e.PreferredMfaSetting;
              if (n) t = n;
              else {
                var r = e.UserMFASettingList;
                r
                  ? 0 === r.length
                    ? (t = "NOMFA")
                    : Jo.debug("invalid case for getPreferredMFA", e)
                  : (t = e.MFAOptions ? "SMS_MFA" : "NOMFA");
              }
              return t;
            }),
            (e.prototype._getUserData = function (e, t) {
              var n = this;
              return new Promise(function (r, i) {
                e.getUserData(function (t, o) {
                  return w(n, void 0, void 0, function () {
                    var n;
                    return b(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if (!t) return [3, 5];
                          if (
                            (Jo.debug("getting user data failed", t),
                            !this.isSessionInvalid(t))
                          )
                            return [3, 4];
                          s.label = 1;
                        case 1:
                          return (
                            s.trys.push([1, 3, , 4]),
                            [4, this.cleanUpInvalidSession(e)]
                          );
                        case 2:
                          return s.sent(), [3, 4];
                        case 3:
                          return (
                            (n = s.sent()),
                            i(
                              new Error(
                                "Session is invalid due to: " +
                                  t.message +
                                  " and failed to clean up invalid session: " +
                                  n.message
                              )
                            ),
                            [2]
                          );
                        case 4:
                          return i(t), [2];
                        case 5:
                          r(o), (s.label = 6);
                        case 6:
                          return [2];
                      }
                    });
                  });
                }, t);
              });
            }),
            (e.prototype.setPreferredMFA = function (e, t) {
              return w(this, void 0, void 0, function () {
                var n,
                  r,
                  i,
                  o,
                  s,
                  a,
                  u = this;
                return b(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return (
                        (n = this._config.clientMetadata),
                        [
                          4,
                          this._getUserData(e, {
                            bypassCache: !0,
                            clientMetadata: n,
                          }),
                        ]
                      );
                    case 1:
                      switch (((r = c.sent()), (i = null), (o = null), t)) {
                        case "TOTP":
                        case "SOFTWARE_TOKEN_MFA":
                          return [3, 2];
                        case "SMS":
                        case "SMS_MFA":
                          return [3, 3];
                        case "NOMFA":
                          return [3, 4];
                      }
                      return [3, 6];
                    case 2:
                      return (o = { PreferredMfa: !0, Enabled: !0 }), [3, 7];
                    case 3:
                      return (i = { PreferredMfa: !0, Enabled: !0 }), [3, 7];
                    case 4:
                      return (
                        (s = r.UserMFASettingList),
                        [4, this._getMfaTypeFromUserData(r)]
                      );
                    case 5:
                      if ("NOMFA" === (a = c.sent()))
                        return [2, Promise.resolve("No change for mfa type")];
                      if ("SMS_MFA" === a)
                        i = { PreferredMfa: !1, Enabled: !1 };
                      else {
                        if ("SOFTWARE_TOKEN_MFA" !== a)
                          return [2, this.rejectAuthError(v.InvalidMFA)];
                        o = { PreferredMfa: !1, Enabled: !1 };
                      }
                      return (
                        s &&
                          0 !== s.length &&
                          s.forEach(function (e) {
                            "SMS_MFA" === e
                              ? (i = { PreferredMfa: !1, Enabled: !1 })
                              : "SOFTWARE_TOKEN_MFA" === e &&
                                (o = { PreferredMfa: !1, Enabled: !1 });
                          }),
                        [3, 7]
                      );
                    case 6:
                      return (
                        Jo.debug("no validmfa method provided"),
                        [2, this.rejectAuthError(v.NoMFA)]
                      );
                    case 7:
                      return [
                        2,
                        new Promise(function (t, r) {
                          e.setUserMfaPreference(i, o, function (i, o) {
                            if (i)
                              return (
                                Jo.debug("Set user mfa preference error", i),
                                r(i)
                              );
                            Jo.debug("Set user mfa success", o),
                              Jo.debug(
                                "Caching the latest user data into local"
                              ),
                              e.getUserData(
                                function (n, i) {
                                  return w(u, void 0, void 0, function () {
                                    var i;
                                    return b(this, function (s) {
                                      switch (s.label) {
                                        case 0:
                                          if (!n) return [3, 5];
                                          if (
                                            (Jo.debug(
                                              "getting user data failed",
                                              n
                                            ),
                                            !this.isSessionInvalid(n))
                                          )
                                            return [3, 4];
                                          s.label = 1;
                                        case 1:
                                          return (
                                            s.trys.push([1, 3, , 4]),
                                            [4, this.cleanUpInvalidSession(e)]
                                          );
                                        case 2:
                                          return s.sent(), [3, 4];
                                        case 3:
                                          return (
                                            (i = s.sent()),
                                            r(
                                              new Error(
                                                "Session is invalid due to: " +
                                                  n.message +
                                                  " and failed to clean up invalid session: " +
                                                  i.message
                                              )
                                            ),
                                            [2]
                                          );
                                        case 4:
                                          return [2, r(n)];
                                        case 5:
                                          return [2, t(o)];
                                      }
                                    });
                                  });
                                },
                                { bypassCache: !0, clientMetadata: n }
                              );
                          });
                        }),
                      ];
                  }
                });
              });
            }),
            (e.prototype.disableSMS = function (e) {
              return new Promise(function (t, n) {
                e.disableMFA(function (e, r) {
                  if (e) return Jo.debug("disable mfa failed", e), void n(e);
                  Jo.debug("disable mfa succeed", r), t(r);
                });
              });
            }),
            (e.prototype.enableSMS = function (e) {
              return new Promise(function (t, n) {
                e.enableMFA(function (e, r) {
                  if (e) return Jo.debug("enable mfa failed", e), void n(e);
                  Jo.debug("enable mfa succeed", r), t(r);
                });
              });
            }),
            (e.prototype.setupTOTP = function (e) {
              return new Promise(function (t, n) {
                e.associateSoftwareToken({
                  onFailure: function (e) {
                    Jo.debug("associateSoftwareToken failed", e), n(e);
                  },
                  associateSecretCode: function (e) {
                    Jo.debug("associateSoftwareToken sucess", e), t(e);
                  },
                });
              });
            }),
            (e.prototype.verifyTotpToken = function (e, t) {
              var n;
              Jo.debug("verification totp token", e, t),
                e &&
                  "function" == typeof e.getSignInUserSession &&
                  (n = e.getSignInUserSession());
              var r = null == n ? void 0 : n.isValid();
              return new Promise(function (n, i) {
                e.verifySoftwareToken(t, "My TOTP device", {
                  onFailure: function (e) {
                    Jo.debug("verifyTotpToken failed", e), i(e);
                  },
                  onSuccess: function (t) {
                    r ||
                      Qo(
                        "signIn",
                        e,
                        "A user " + e.getUsername() + " has been signed in"
                      ),
                      Qo(
                        "verify",
                        e,
                        "A user " + e.getUsername() + " has been verified"
                      ),
                      Jo.debug("verifyTotpToken success", t),
                      n(t);
                  },
                });
              });
            }),
            (e.prototype.confirmSignIn = function (e, t, n, r) {
              var i = this;
              if ((void 0 === r && (r = this._config.clientMetadata), !t))
                return this.rejectAuthError(v.EmptyCode);
              var o = this;
              return new Promise(function (s, a) {
                e.sendMFACode(
                  t,
                  {
                    onSuccess: function (t) {
                      return w(i, void 0, void 0, function () {
                        var n, r, i, a;
                        return b(this, function (u) {
                          switch (u.label) {
                            case 0:
                              Jo.debug(t), (u.label = 1);
                            case 1:
                              return (
                                u.trys.push([1, 4, 5, 10]),
                                [4, this.Credentials.clear()]
                              );
                            case 2:
                              return (
                                u.sent(),
                                [4, this.Credentials.set(t, "session")]
                              );
                            case 3:
                              return (
                                (n = u.sent()),
                                Jo.debug(
                                  "succeed to get cognito credentials",
                                  n
                                ),
                                [3, 10]
                              );
                            case 4:
                              return (
                                (r = u.sent()),
                                Jo.debug("cannot get cognito credentials", r),
                                [3, 10]
                              );
                            case 5:
                              (o.user = e), (u.label = 6);
                            case 6:
                              return (
                                u.trys.push([6, 8, , 9]),
                                [4, this.currentUserPoolUser()]
                              );
                            case 7:
                              return (
                                (i = u.sent()),
                                (e.attributes = i.attributes),
                                [3, 9]
                              );
                            case 8:
                              return (
                                (a = u.sent()),
                                Jo.debug("cannot get updated Cognito User", a),
                                [3, 9]
                              );
                            case 9:
                              return (
                                Qo(
                                  "signIn",
                                  e,
                                  "A user " +
                                    e.getUsername() +
                                    " has been signed in"
                                ),
                                s(e),
                                [7]
                              );
                            case 10:
                              return [2];
                          }
                        });
                      });
                    },
                    onFailure: function (e) {
                      Jo.debug("confirm signIn failure", e), a(e);
                    },
                  },
                  n,
                  r
                );
              });
            }),
            (e.prototype.completeNewPassword = function (e, t, n, r) {
              var i = this;
              if (
                (void 0 === n && (n = {}),
                void 0 === r && (r = this._config.clientMetadata),
                !t)
              )
                return this.rejectAuthError(v.EmptyPassword);
              var o = this;
              return new Promise(function (s, a) {
                e.completeNewPasswordChallenge(
                  t,
                  n,
                  {
                    onSuccess: function (t) {
                      return w(i, void 0, void 0, function () {
                        var n, r;
                        return b(this, function (i) {
                          switch (i.label) {
                            case 0:
                              Jo.debug(t), (i.label = 1);
                            case 1:
                              return (
                                i.trys.push([1, 4, 5, 6]),
                                [4, this.Credentials.clear()]
                              );
                            case 2:
                              return (
                                i.sent(),
                                [4, this.Credentials.set(t, "session")]
                              );
                            case 3:
                              return (
                                (n = i.sent()),
                                Jo.debug(
                                  "succeed to get cognito credentials",
                                  n
                                ),
                                [3, 6]
                              );
                            case 4:
                              return (
                                (r = i.sent()),
                                Jo.debug("cannot get cognito credentials", r),
                                [3, 6]
                              );
                            case 5:
                              return (
                                (o.user = e),
                                Qo(
                                  "signIn",
                                  e,
                                  "A user " +
                                    e.getUsername() +
                                    " has been signed in"
                                ),
                                s(e),
                                [7]
                              );
                            case 6:
                              return [2];
                          }
                        });
                      });
                    },
                    onFailure: function (e) {
                      Jo.debug("completeNewPassword failure", e),
                        Qo(
                          "completeNewPassword_failure",
                          e,
                          i.user + " failed to complete the new password flow"
                        ),
                        a(e);
                    },
                    mfaRequired: function (t, n) {
                      Jo.debug("signIn MFA required"),
                        (e.challengeName = t),
                        (e.challengeParam = n),
                        s(e);
                    },
                    mfaSetup: function (t, n) {
                      Jo.debug("signIn mfa setup", t),
                        (e.challengeName = t),
                        (e.challengeParam = n),
                        s(e);
                    },
                    totpRequired: function (t, n) {
                      Jo.debug("signIn mfa setup", t),
                        (e.challengeName = t),
                        (e.challengeParam = n),
                        s(e);
                    },
                  },
                  r
                );
              });
            }),
            (e.prototype.sendCustomChallengeAnswer = function (e, t, n) {
              var r = this;
              return (
                void 0 === n && (n = this._config.clientMetadata),
                this.userPool
                  ? t
                    ? new Promise(function (i, o) {
                        e.sendCustomChallengeAnswer(
                          t,
                          r.authCallbacks(e, i, o),
                          n
                        );
                      })
                    : this.rejectAuthError(v.EmptyChallengeResponse)
                  : this.rejectNoUserPool()
              );
            }),
            (e.prototype.deleteUserAttributes = function (e, t) {
              var n = this;
              return new Promise(function (r, i) {
                n.userSession(e).then(function (n) {
                  e.deleteAttributes(t, function (e, t) {
                    return e ? i(e) : r(t);
                  });
                });
              });
            }),
            (e.prototype.deleteUser = function () {
              return w(this, void 0, void 0, function () {
                var e,
                  t,
                  n = this;
                return b(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return r.trys.push([0, 2, , 3]), [4, this._storageSync];
                    case 1:
                      return r.sent(), [3, 3];
                    case 2:
                      throw (
                        ((e = r.sent()),
                        Jo.debug("Failed to sync cache info into memory", e),
                        new Error(e))
                      );
                    case 3:
                      return (
                        (t =
                          this._oAuthHandler &&
                          "true" ===
                            this._storage.getItem(
                              "amplify-signin-with-hostedUI"
                            )),
                        [
                          2,
                          new Promise(function (e, r) {
                            return w(n, void 0, void 0, function () {
                              var n,
                                i = this;
                              return b(this, function (o) {
                                if (this.userPool) {
                                  if (!(n = this.userPool.getCurrentUser()))
                                    return (
                                      Jo.debug(
                                        "Failed to get user from user pool"
                                      ),
                                      [2, r(new Error("No current user."))]
                                    );
                                  n.getSession(function (o, s) {
                                    return w(i, void 0, void 0, function () {
                                      var i,
                                        s = this;
                                      return b(this, function (a) {
                                        switch (a.label) {
                                          case 0:
                                            if (!o) return [3, 5];
                                            if (
                                              (Jo.debug(
                                                "Failed to get the user session",
                                                o
                                              ),
                                              !this.isSessionInvalid(o))
                                            )
                                              return [3, 4];
                                            a.label = 1;
                                          case 1:
                                            return (
                                              a.trys.push([1, 3, , 4]),
                                              [4, this.cleanUpInvalidSession(n)]
                                            );
                                          case 2:
                                            return a.sent(), [3, 4];
                                          case 3:
                                            return (
                                              (i = a.sent()),
                                              r(
                                                new Error(
                                                  "Session is invalid due to: " +
                                                    o.message +
                                                    " and failed to clean up invalid session: " +
                                                    i.message
                                                )
                                              ),
                                              [2]
                                            );
                                          case 4:
                                            return [2, r(o)];
                                          case 5:
                                            n.deleteUser(function (i, o) {
                                              if (i) r(i);
                                              else {
                                                Qo(
                                                  "userDeleted",
                                                  o,
                                                  "The authenticated user has been deleted."
                                                ),
                                                  n.signOut(),
                                                  (s.user = null);
                                                try {
                                                  s.cleanCachedItems();
                                                } catch (e) {
                                                  Jo.debug(
                                                    "failed to clear cached items"
                                                  );
                                                }
                                                t
                                                  ? s.oAuthSignOutRedirect(e, r)
                                                  : (Qo(
                                                      "signOut",
                                                      s.user,
                                                      "A user has been signed out"
                                                    ),
                                                    e(o));
                                              }
                                            }),
                                              (a.label = 6);
                                          case 6:
                                            return [2];
                                        }
                                      });
                                    });
                                  });
                                } else
                                  Jo.debug("no Congito User pool"),
                                    r(
                                      new Error(
                                        "Cognito User pool does not exist"
                                      )
                                    );
                                return [2];
                              });
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.updateUserAttributes = function (e, t, n) {
              var r = this;
              void 0 === n && (n = this._config.clientMetadata);
              var i = [],
                o = this;
              return new Promise(function (s, a) {
                o.userSession(e).then(function (o) {
                  for (var u in t)
                    if ("sub" !== u && u.indexOf("_verified") < 0) {
                      var c = { Name: u, Value: t[u] };
                      i.push(c);
                    }
                  e.updateAttributes(
                    i,
                    function (e, n, i) {
                      if (e)
                        return (
                          Qo(
                            "updateUserAttributes_failure",
                            e,
                            "Failed to update attributes"
                          ),
                          a(e)
                        );
                      var o = r.createUpdateAttributesResultList(
                        t,
                        null == i ? void 0 : i.CodeDeliveryDetailsList
                      );
                      return (
                        Qo(
                          "updateUserAttributes",
                          o,
                          "Attributes successfully updated"
                        ),
                        s(n)
                      );
                    },
                    n
                  );
                });
              });
            }),
            (e.prototype.createUpdateAttributesResultList = function (e, t) {
              var n = {};
              return (
                Object.keys(e).forEach(function (e) {
                  n[e] = { isUpdated: !0 };
                  var r =
                    null == t
                      ? void 0
                      : t.find(function (t) {
                          return t.AttributeName === e;
                        });
                  r && ((n[e].isUpdated = !1), (n[e].codeDeliveryDetails = r));
                }),
                n
              );
            }),
            (e.prototype.userAttributes = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                t.userSession(e).then(function (t) {
                  e.getUserAttributes(function (e, t) {
                    e ? r(e) : n(t);
                  });
                });
              });
            }),
            (e.prototype.verifiedContact = function (e) {
              var t = this;
              return this.userAttributes(e).then(function (e) {
                var n = t.attributesToObject(e),
                  r = {},
                  i = {};
                return (
                  n.email &&
                    (n.email_verified
                      ? (i.email = n.email)
                      : (r.email = n.email)),
                  n.phone_number &&
                    (n.phone_number_verified
                      ? (i.phone_number = n.phone_number)
                      : (r.phone_number = n.phone_number)),
                  { verified: i, unverified: r }
                );
              });
            }),
            (e.prototype.isErrorWithMessage = function (e) {
              return (
                "object" == typeof e &&
                Object.prototype.hasOwnProperty.call(e, "message")
              );
            }),
            (e.prototype.isTokenRevokedError = function (e) {
              return (
                this.isErrorWithMessage(e) &&
                "Access Token has been revoked" === e.message
              );
            }),
            (e.prototype.isRefreshTokenRevokedError = function (e) {
              return (
                this.isErrorWithMessage(e) &&
                "Refresh Token has been revoked" === e.message
              );
            }),
            (e.prototype.isUserDisabledError = function (e) {
              return (
                this.isErrorWithMessage(e) && "User is disabled." === e.message
              );
            }),
            (e.prototype.isUserDoesNotExistError = function (e) {
              return (
                this.isErrorWithMessage(e) &&
                "User does not exist." === e.message
              );
            }),
            (e.prototype.isRefreshTokenExpiredError = function (e) {
              return (
                this.isErrorWithMessage(e) &&
                "Refresh Token has expired" === e.message
              );
            }),
            (e.prototype.isSignedInHostedUI = function () {
              return (
                this._oAuthHandler &&
                "true" === this._storage.getItem("amplify-signin-with-hostedUI")
              );
            }),
            (e.prototype.isSessionInvalid = function (e) {
              return (
                this.isUserDisabledError(e) ||
                this.isUserDoesNotExistError(e) ||
                this.isTokenRevokedError(e) ||
                this.isRefreshTokenRevokedError(e) ||
                this.isRefreshTokenExpiredError(e)
              );
            }),
            (e.prototype.cleanUpInvalidSession = function (e) {
              return w(this, void 0, void 0, function () {
                var t = this;
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      e.signOut(), (this.user = null), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]), [4, this.cleanCachedItems()]
                      );
                    case 2:
                      return n.sent(), [3, 4];
                    case 3:
                      return (
                        n.sent(),
                        Jo.debug("failed to clear cached items"),
                        [3, 4]
                      );
                    case 4:
                      return this.isSignedInHostedUI()
                        ? [
                            2,
                            new Promise(function (e, n) {
                              t.oAuthSignOutRedirect(e, n);
                            }),
                          ]
                        : (Qo(
                            "signOut",
                            this.user,
                            "A user has been signed out"
                          ),
                          [2]);
                  }
                });
              });
            }),
            (e.prototype.currentUserPoolUser = function (e) {
              var t = this;
              return this.userPool
                ? new Promise(function (n, r) {
                    t._storageSync
                      .then(function () {
                        return w(t, void 0, void 0, function () {
                          var t,
                            i,
                            o,
                            s,
                            a,
                            u,
                            c = this;
                          return b(this, function (l) {
                            switch (l.label) {
                              case 0:
                                return this.isOAuthInProgress()
                                  ? (Jo.debug(
                                      "OAuth signIn in progress, waiting for resolution..."
                                    ),
                                    [
                                      4,
                                      new Promise(function (e) {
                                        var t = setTimeout(function () {
                                          Jo.debug(
                                            "OAuth signIn in progress timeout"
                                          ),
                                            C.remove("auth", n),
                                            e();
                                        }, 1e4);
                                        function n(r) {
                                          var i = r.payload.event;
                                          ("cognitoHostedUI" !== i &&
                                            "cognitoHostedUI_failure" !== i) ||
                                            (Jo.debug(
                                              "OAuth signIn resolved: " + i
                                            ),
                                            clearTimeout(t),
                                            C.remove("auth", n),
                                            e());
                                        }
                                        C.listen("auth", n);
                                      }),
                                    ])
                                  : [3, 2];
                              case 1:
                                l.sent(), (l.label = 2);
                              case 2:
                                if (!(t = this.userPool.getCurrentUser()))
                                  return (
                                    Jo.debug(
                                      "Failed to get user from user pool"
                                    ),
                                    r("No current user"),
                                    [2]
                                  );
                                l.label = 3;
                              case 3:
                                return (
                                  l.trys.push([3, 7, , 8]),
                                  [4, this._userSession(t)]
                                );
                              case 4:
                                return (
                                  (i = l.sent()),
                                  (o = !!e && e.bypassCache)
                                    ? [4, this.Credentials.clear()]
                                    : [3, 6]
                                );
                              case 5:
                                l.sent(), (l.label = 6);
                              case 6:
                                return (
                                  (s = this._config.clientMetadata),
                                  (void 0 ===
                                  (a = i.getAccessToken().decodePayload().scope)
                                    ? ""
                                    : a
                                  )
                                    .split(" ")
                                    .includes($o)
                                    ? (t.getUserData(
                                        function (e, i) {
                                          return w(
                                            c,
                                            void 0,
                                            void 0,
                                            function () {
                                              var o, s, a, u, c, l, f;
                                              return b(this, function (h) {
                                                switch (h.label) {
                                                  case 0:
                                                    if (!e) return [3, 7];
                                                    if (
                                                      (Jo.debug(
                                                        "getting user data failed",
                                                        e
                                                      ),
                                                      !this.isSessionInvalid(e))
                                                    )
                                                      return [3, 5];
                                                    h.label = 1;
                                                  case 1:
                                                    return (
                                                      h.trys.push([1, 3, , 4]),
                                                      [
                                                        4,
                                                        this.cleanUpInvalidSession(
                                                          t
                                                        ),
                                                      ]
                                                    );
                                                  case 2:
                                                    return h.sent(), [3, 4];
                                                  case 3:
                                                    return (
                                                      (o = h.sent()),
                                                      r(
                                                        new Error(
                                                          "Session is invalid due to: " +
                                                            e.message +
                                                            " and failed to clean up invalid session: " +
                                                            o.message
                                                        )
                                                      ),
                                                      [2]
                                                    );
                                                  case 4:
                                                    return r(e), [3, 6];
                                                  case 5:
                                                    n(t), (h.label = 6);
                                                  case 6:
                                                    return [2];
                                                  case 7:
                                                    for (
                                                      s =
                                                        i.PreferredMfaSetting ||
                                                        "NOMFA",
                                                        a = [],
                                                        u = 0;
                                                      u <
                                                      i.UserAttributes.length;
                                                      u++
                                                    )
                                                      (c = {
                                                        Name: i.UserAttributes[
                                                          u
                                                        ].Name,
                                                        Value:
                                                          i.UserAttributes[u]
                                                            .Value,
                                                      }),
                                                        (l = new go(c)),
                                                        a.push(l);
                                                    return (
                                                      (f =
                                                        this.attributesToObject(
                                                          a
                                                        )),
                                                      Object.assign(t, {
                                                        attributes: f,
                                                        preferredMFA: s,
                                                      }),
                                                      [2, n(t)]
                                                    );
                                                }
                                              });
                                            }
                                          );
                                        },
                                        { bypassCache: o, clientMetadata: s }
                                      ),
                                      [3, 8])
                                    : (Jo.debug(
                                        "Unable to get the user data because the " +
                                          $o +
                                          " is not in the scopes of the access token"
                                      ),
                                      [2, n(t)])
                                );
                              case 7:
                                return (u = l.sent()), r(u), [3, 8];
                              case 8:
                                return [2];
                            }
                          });
                        });
                      })
                      .catch(function (e) {
                        return (
                          Jo.debug("Failed to sync cache info into memory", e),
                          r(e)
                        );
                      });
                  })
                : this.rejectNoUserPool();
            }),
            (e.prototype.isOAuthInProgress = function () {
              return this.oAuthFlowInProgress;
            }),
            (e.prototype.currentAuthenticatedUser = function (e) {
              return w(this, void 0, void 0, function () {
                var t, n, r, i, o;
                return b(this, function (s) {
                  switch (s.label) {
                    case 0:
                      Jo.debug("getting current authenticated user"),
                        (t = null),
                        (s.label = 1);
                    case 1:
                      return s.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return s.sent(), [3, 4];
                    case 3:
                      throw (
                        ((n = s.sent()),
                        Jo.debug("Failed to sync cache info into memory", n),
                        n)
                      );
                    case 4:
                      try {
                        (r = JSON.parse(
                          this._storage.getItem("aws-amplify-federatedInfo")
                        )) && (t = m(m({}, r.user), { token: r.token }));
                      } catch (e) {
                        Jo.debug(
                          "cannot load federated user from auth storage"
                        );
                      }
                      return t
                        ? ((this.user = t),
                          Jo.debug(
                            "get current authenticated federated user",
                            this.user
                          ),
                          [2, this.user])
                        : [3, 5];
                    case 5:
                      Jo.debug("get current authenticated userpool user"),
                        (i = null),
                        (s.label = 6);
                    case 6:
                      return (
                        s.trys.push([6, 8, , 9]),
                        [4, this.currentUserPoolUser(e)]
                      );
                    case 7:
                      return (i = s.sent()), [3, 9];
                    case 8:
                      return (
                        "No userPool" === (o = s.sent()) &&
                          Jo.error(
                            "Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"
                          ),
                        Jo.debug(
                          "The user is not authenticated by the error",
                          o
                        ),
                        [2, Promise.reject("The user is not authenticated")]
                      );
                    case 9:
                      return (this.user = i), [2, this.user];
                  }
                });
              });
            }),
            (e.prototype.currentSession = function () {
              var e = this;
              return (
                Jo.debug("Getting current session"),
                this.userPool
                  ? new Promise(function (t, n) {
                      e.currentUserPoolUser()
                        .then(function (r) {
                          e.userSession(r)
                            .then(function (e) {
                              t(e);
                            })
                            .catch(function (e) {
                              Jo.debug("Failed to get the current session", e),
                                n(e);
                            });
                        })
                        .catch(function (e) {
                          Jo.debug("Failed to get the current user", e), n(e);
                        });
                    })
                  : Promise.reject(
                      new Error("No User Pool in the configuration.")
                    )
              );
            }),
            (e.prototype._userSession = function (e) {
              return w(this, void 0, void 0, function () {
                var t,
                  n,
                  r = this;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!e)
                        return (
                          Jo.debug("the user is null"),
                          [2, this.rejectAuthError(v.NoUserSession)]
                        );
                      (t = this._config.clientMetadata),
                        0 === this.inflightSessionPromiseCounter &&
                          (this.inflightSessionPromise = new Promise(function (
                            n,
                            i
                          ) {
                            e.getSession(
                              function (t, o) {
                                return w(r, void 0, void 0, function () {
                                  var r;
                                  return b(this, function (s) {
                                    switch (s.label) {
                                      case 0:
                                        if (!t) return [3, 5];
                                        if (
                                          (Jo.debug(
                                            "Failed to get the session from user",
                                            e
                                          ),
                                          !this.isSessionInvalid(t))
                                        )
                                          return [3, 4];
                                        s.label = 1;
                                      case 1:
                                        return (
                                          s.trys.push([1, 3, , 4]),
                                          [4, this.cleanUpInvalidSession(e)]
                                        );
                                      case 2:
                                        return s.sent(), [3, 4];
                                      case 3:
                                        return (
                                          (r = s.sent()),
                                          i(
                                            new Error(
                                              "Session is invalid due to: " +
                                                t.message +
                                                " and failed to clean up invalid session: " +
                                                r.message
                                            )
                                          ),
                                          [2]
                                        );
                                      case 4:
                                        return i(t), [2];
                                      case 5:
                                        return (
                                          Jo.debug(
                                            "Succeed to get the user session",
                                            o
                                          ),
                                          n(o),
                                          [2]
                                        );
                                    }
                                  });
                                });
                              },
                              { clientMetadata: t }
                            );
                          })),
                        this.inflightSessionPromiseCounter++,
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, , 3, 4]),
                        [4, this.inflightSessionPromise]
                      );
                    case 2:
                      return (n = i.sent()), (e.signInUserSession = n), [2, n];
                    case 3:
                      return this.inflightSessionPromiseCounter--, [7];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.userSession = function (e) {
              return this._userSession(e);
            }),
            (e.prototype.currentUserCredentials = function () {
              return w(this, void 0, void 0, function () {
                var e,
                  t,
                  n = this;
                return b(this, function (r) {
                  switch (r.label) {
                    case 0:
                      Jo.debug("Getting current user credentials"),
                        (r.label = 1);
                    case 1:
                      return r.trys.push([1, 3, , 4]), [4, this._storageSync];
                    case 2:
                      return r.sent(), [3, 4];
                    case 3:
                      throw (
                        ((e = r.sent()),
                        Jo.debug("Failed to sync cache info into memory", e),
                        e)
                      );
                    case 4:
                      t = null;
                      try {
                        t = JSON.parse(
                          this._storage.getItem("aws-amplify-federatedInfo")
                        );
                      } catch (e) {
                        Jo.debug(
                          "failed to get or parse item aws-amplify-federatedInfo",
                          e
                        );
                      }
                      return t
                        ? [2, this.Credentials.refreshFederatedToken(t)]
                        : [
                            2,
                            this.currentSession()
                              .then(function (e) {
                                return (
                                  Jo.debug("getting session success", e),
                                  n.Credentials.set(e, "session")
                                );
                              })
                              .catch(function () {
                                return (
                                  Jo.debug("getting guest credentials"),
                                  n.Credentials.set(null, "guest")
                                );
                              }),
                          ];
                  }
                });
              });
            }),
            (e.prototype.currentCredentials = function () {
              return (
                Jo.debug("getting current credentials"), this.Credentials.get()
              );
            }),
            (e.prototype.verifyUserAttribute = function (e, t, n) {
              return (
                void 0 === n && (n = this._config.clientMetadata),
                new Promise(function (r, i) {
                  e.getAttributeVerificationCode(
                    t,
                    {
                      onSuccess: function (e) {
                        return r(e);
                      },
                      onFailure: function (e) {
                        return i(e);
                      },
                    },
                    n
                  );
                })
              );
            }),
            (e.prototype.verifyUserAttributeSubmit = function (e, t, n) {
              return n
                ? new Promise(function (r, i) {
                    e.verifyAttribute(t, n, {
                      onSuccess: function (e) {
                        r(e);
                      },
                      onFailure: function (e) {
                        i(e);
                      },
                    });
                  })
                : this.rejectAuthError(v.EmptyCode);
            }),
            (e.prototype.verifyCurrentUserAttribute = function (e) {
              var t = this;
              return t.currentUserPoolUser().then(function (n) {
                return t.verifyUserAttribute(n, e);
              });
            }),
            (e.prototype.verifyCurrentUserAttributeSubmit = function (e, t) {
              var n = this;
              return n.currentUserPoolUser().then(function (r) {
                return n.verifyUserAttributeSubmit(r, e, t);
              });
            }),
            (e.prototype.cognitoIdentitySignOut = function (e, t) {
              return w(this, void 0, void 0, function () {
                var n,
                  r,
                  i = this;
                return b(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 2, , 3]), [4, this._storageSync];
                    case 1:
                      return o.sent(), [3, 3];
                    case 2:
                      throw (
                        ((n = o.sent()),
                        Jo.debug("Failed to sync cache info into memory", n),
                        n)
                      );
                    case 3:
                      return (
                        (r =
                          this._oAuthHandler &&
                          "true" ===
                            this._storage.getItem(
                              "amplify-signin-with-hostedUI"
                            )),
                        [
                          2,
                          new Promise(function (n, o) {
                            if (e && e.global) {
                              Jo.debug("user global sign out", t);
                              var s = i._config.clientMetadata;
                              t.getSession(
                                function (e, s) {
                                  return w(i, void 0, void 0, function () {
                                    var i,
                                      s = this;
                                    return b(this, function (a) {
                                      switch (a.label) {
                                        case 0:
                                          if (!e) return [3, 5];
                                          if (
                                            (Jo.debug(
                                              "failed to get the user session",
                                              e
                                            ),
                                            !this.isSessionInvalid(e))
                                          )
                                            return [3, 4];
                                          a.label = 1;
                                        case 1:
                                          return (
                                            a.trys.push([1, 3, , 4]),
                                            [4, this.cleanUpInvalidSession(t)]
                                          );
                                        case 2:
                                          return a.sent(), [3, 4];
                                        case 3:
                                          return (
                                            (i = a.sent()),
                                            o(
                                              new Error(
                                                "Session is invalid due to: " +
                                                  e.message +
                                                  " and failed to clean up invalid session: " +
                                                  i.message
                                              )
                                            ),
                                            [2]
                                          );
                                        case 4:
                                          return [2, o(e)];
                                        case 5:
                                          return (
                                            t.globalSignOut({
                                              onSuccess: function (e) {
                                                if (
                                                  (Jo.debug(
                                                    "global sign out success"
                                                  ),
                                                  !r)
                                                )
                                                  return n();
                                                s.oAuthSignOutRedirect(n, o);
                                              },
                                              onFailure: function (e) {
                                                return (
                                                  Jo.debug(
                                                    "global sign out failed",
                                                    e
                                                  ),
                                                  o(e)
                                                );
                                              },
                                            }),
                                            [2]
                                          );
                                      }
                                    });
                                  });
                                },
                                { clientMetadata: s }
                              );
                            } else
                              Jo.debug("user sign out", t),
                                t.signOut(function () {
                                  if (!r) return n();
                                  i.oAuthSignOutRedirect(n, o);
                                });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.oAuthSignOutRedirect = function (e, t) {
              k().isBrowser
                ? this.oAuthSignOutRedirectOrReject(t)
                : this.oAuthSignOutAndResolve(e);
            }),
            (e.prototype.oAuthSignOutAndResolve = function (e) {
              this._oAuthHandler.signOut(), e();
            }),
            (e.prototype.oAuthSignOutRedirectOrReject = function (e) {
              this._oAuthHandler.signOut(),
                setTimeout(function () {
                  return e(Error("Signout timeout fail"));
                }, 3e3);
            }),
            (e.prototype.signOut = function (e) {
              return w(this, void 0, void 0, function () {
                var t;
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()]
                      );
                    case 1:
                      return n.sent(), [3, 3];
                    case 2:
                      return (
                        n.sent(),
                        Jo.debug("failed to clear cached items"),
                        [3, 3]
                      );
                    case 3:
                      return this.userPool
                        ? (t = this.userPool.getCurrentUser())
                          ? [4, this.cognitoIdentitySignOut(e, t)]
                          : [3, 5]
                        : [3, 7];
                    case 4:
                      return n.sent(), [3, 6];
                    case 5:
                      Jo.debug("no current Cognito user"), (n.label = 6);
                    case 6:
                      return [3, 8];
                    case 7:
                      Jo.debug("no Cognito User pool"), (n.label = 8);
                    case 8:
                      return (
                        Qo("signOut", this.user, "A user has been signed out"),
                        (this.user = null),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.cleanCachedItems = function () {
              return w(this, void 0, void 0, function () {
                return b(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.Credentials.clear()];
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.changePassword = function (e, t, n, r) {
              var i = this;
              return (
                void 0 === r && (r = this._config.clientMetadata),
                new Promise(function (o, s) {
                  i.userSession(e).then(function (i) {
                    e.changePassword(
                      t,
                      n,
                      function (e, t) {
                        return e
                          ? (Jo.debug("change password failure", e), s(e))
                          : o(t);
                      },
                      r
                    );
                  });
                })
              );
            }),
            (e.prototype.forgotPassword = function (e, t) {
              if (
                (void 0 === t && (t = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(v.EmptyUsername);
              var n = this.createCognitoUser(e);
              return new Promise(function (r, i) {
                n.forgotPassword(
                  {
                    onSuccess: function () {
                      r();
                    },
                    onFailure: function (t) {
                      Jo.debug("forgot password failure", t),
                        Qo(
                          "forgotPassword_failure",
                          t,
                          e + " forgotPassword failed"
                        ),
                        i(t);
                    },
                    inputVerificationCode: function (t) {
                      Qo(
                        "forgotPassword",
                        n,
                        e + " has initiated forgot password flow"
                      ),
                        r(t);
                    },
                  },
                  t
                );
              });
            }),
            (e.prototype.forgotPasswordSubmit = function (e, t, n, r) {
              if (
                (void 0 === r && (r = this._config.clientMetadata),
                !this.userPool)
              )
                return this.rejectNoUserPool();
              if (!e) return this.rejectAuthError(v.EmptyUsername);
              if (!t) return this.rejectAuthError(v.EmptyCode);
              if (!n) return this.rejectAuthError(v.EmptyPassword);
              var i = this.createCognitoUser(e);
              return new Promise(function (o, s) {
                i.confirmPassword(
                  t,
                  n,
                  {
                    onSuccess: function (t) {
                      Qo(
                        "forgotPasswordSubmit",
                        i,
                        e + " forgotPasswordSubmit successful"
                      ),
                        o(t);
                    },
                    onFailure: function (t) {
                      Qo(
                        "forgotPasswordSubmit_failure",
                        t,
                        e + " forgotPasswordSubmit failed"
                      ),
                        s(t);
                    },
                  },
                  r
                );
              });
            }),
            (e.prototype.currentUserInfo = function () {
              return w(this, void 0, void 0, function () {
                var e, t, n, r, i, o, s;
                return b(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (e = this.Credentials.getCredSource()) &&
                        "aws" !== e &&
                        "userPool" !== e
                        ? [3, 9]
                        : [
                            4,
                            this.currentUserPoolUser().catch(function (e) {
                              return Jo.error(e);
                            }),
                          ];
                    case 1:
                      if (!(s = a.sent())) return [2, null];
                      a.label = 2;
                    case 2:
                      return (
                        a.trys.push([2, 8, , 9]), [4, this.userAttributes(s)]
                      );
                    case 3:
                      (t = a.sent()),
                        (n = this.attributesToObject(t)),
                        (r = null),
                        (a.label = 4);
                    case 4:
                      return (
                        a.trys.push([4, 6, , 7]), [4, this.currentCredentials()]
                      );
                    case 5:
                      return (r = a.sent()), [3, 7];
                    case 6:
                      return (
                        (i = a.sent()),
                        Jo.debug(
                          "Failed to retrieve credentials while getting current user info",
                          i
                        ),
                        [3, 7]
                      );
                    case 7:
                      return [
                        2,
                        {
                          id: r ? r.identityId : void 0,
                          username: s.getUsername(),
                          attributes: n,
                        },
                      ];
                    case 8:
                      return (
                        (o = a.sent()),
                        Jo.error("currentUserInfo error", o),
                        [2, {}]
                      );
                    case 9:
                      return "federated" === e
                        ? [2, (s = this.user) || {}]
                        : [2];
                  }
                });
              });
            }),
            (e.prototype.federatedSignIn = function (e, t, n) {
              return w(this, void 0, void 0, function () {
                var r, i, o, s, a, u, c, l, f, h, d;
                return b(this, function (p) {
                  switch (p.label) {
                    case 0:
                      if (
                        !this._config.identityPoolId &&
                        !this._config.userPoolId
                      )
                        throw new Error(
                          "Federation requires either a User Pool or Identity Pool in config"
                        );
                      if (
                        void 0 === e &&
                        this._config.identityPoolId &&
                        !this._config.userPoolId
                      )
                        throw new Error(
                          "Federation with Identity Pools requires tokens passed as arguments"
                        );
                      return _(e) ||
                        ((v = e) &&
                          ["customProvider"].find(function (e) {
                            return v.hasOwnProperty(e);
                          })) ||
                        (function (e) {
                          return (
                            e &&
                            !!["customState"].find(function (t) {
                              return e.hasOwnProperty(t);
                            })
                          );
                        })(e) ||
                        void 0 === e
                        ? ((r = e || { provider: g.Cognito }),
                          (a = _(r) ? r.provider : r.customProvider),
                          _(r),
                          (i = r.customState),
                          this._config.userPoolId &&
                            ((o = A(this._config.oauth)
                              ? this._config.userPoolWebClientId
                              : this._config.oauth.clientID),
                            (s = A(this._config.oauth)
                              ? this._config.oauth.redirectSignIn
                              : this._config.oauth.redirectUri),
                            this._oAuthHandler.oauthSignIn(
                              this._config.oauth.responseType,
                              this._config.oauth.domain,
                              s,
                              o,
                              a,
                              i
                            )),
                          [3, 4])
                        : [3, 1];
                    case 1:
                      a = e;
                      try {
                        (u = JSON.stringify(
                          JSON.parse(
                            this._storage.getItem("aws-amplify-federatedInfo")
                          ).user
                        )) &&
                          Jo.warn(
                            "There is already a signed in user: " +
                              u +
                              " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior."
                          );
                      } catch (e) {}
                      return (
                        (c = t.token),
                        (l = t.identity_id),
                        (f = t.expires_at),
                        [
                          4,
                          this.Credentials.set(
                            {
                              provider: a,
                              token: c,
                              identity_id: l,
                              user: n,
                              expires_at: f,
                            },
                            "federation"
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (h = p.sent()), [4, this.currentAuthenticatedUser()]
                      );
                    case 3:
                      return (
                        (d = p.sent()),
                        Qo(
                          "signIn",
                          d,
                          "A user " + d.username + " has been signed in"
                        ),
                        Jo.debug("federated sign in credentials", h),
                        [2, h]
                      );
                    case 4:
                      return [2];
                  }
                  var v;
                });
              });
            }),
            (e.prototype._handleAuthResponse = function (e) {
              return w(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a, u, c, l, f, h, d, p;
                return b(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (this.oAuthFlowInProgress)
                        return (
                          Jo.debug(
                            "Skipping URL " + e + " current flow in progress"
                          ),
                          [2]
                        );
                      g.label = 1;
                    case 1:
                      if (
                        (g.trys.push([1, , 8, 9]),
                        (this.oAuthFlowInProgress = !0),
                        !this._config.userPoolId)
                      )
                        throw new Error(
                          "OAuth responses require a User Pool defined in config"
                        );
                      if (
                        (Qo(
                          "parsingCallbackUrl",
                          { url: e },
                          "The callback url is being parsed"
                        ),
                        (t = e || (k().isBrowser ? window.location.href : "")),
                        (n = !!((0, No.Qc)(t).query || "")
                          .split("&")
                          .map(function (e) {
                            return e.split("=");
                          })
                          .find(function (e) {
                            var t = S(e, 1)[0];
                            return "code" === t || "error" === t;
                          })),
                        (r = !!((0, No.Qc)(t).hash || "#")
                          .substr(1)
                          .split("&")
                          .map(function (e) {
                            return e.split("=");
                          })
                          .find(function (e) {
                            var t = S(e, 1)[0];
                            return "access_token" === t || "error" === t;
                          })),
                        !n && !r)
                      )
                        return [3, 7];
                      this._storage.setItem(
                        "amplify-redirected-from-hosted-ui",
                        "true"
                      ),
                        (g.label = 2);
                    case 2:
                      return (
                        g.trys.push([2, 6, , 7]),
                        [4, this._oAuthHandler.handleAuthResponse(t)]
                      );
                    case 3:
                      return (
                        (i = g.sent()),
                        (o = i.accessToken),
                        (s = i.idToken),
                        (a = i.refreshToken),
                        (u = i.state),
                        (c = new lo({
                          IdToken: new so({ IdToken: s }),
                          RefreshToken: new ao({ RefreshToken: a }),
                          AccessToken: new io({ AccessToken: o }),
                        })),
                        (l = void 0),
                        this._config.identityPoolId
                          ? [4, this.Credentials.set(c, "session")]
                          : [3, 5]
                      );
                    case 4:
                      (l = g.sent()),
                        Jo.debug("AWS credentials", l),
                        (g.label = 5);
                    case 5:
                      return (
                        (f = /-/.test(u)),
                        (h = this.createCognitoUser(
                          c.getIdToken().decodePayload()["cognito:username"]
                        )).setSignInUserSession(c),
                        window &&
                          void 0 !== window.history &&
                          window.history.replaceState(
                            {},
                            null,
                            this._config.oauth.redirectSignIn
                          ),
                        Qo(
                          "signIn",
                          h,
                          "A user " + h.getUsername() + " has been signed in"
                        ),
                        Qo(
                          "cognitoHostedUI",
                          h,
                          "A user " +
                            h.getUsername() +
                            " has been signed in via Cognito Hosted UI"
                        ),
                        f &&
                          ((d = u.split("-").splice(1).join("-")),
                          Qo(
                            "customOAuthState",
                            d
                              .match(/.{2}/g)
                              .map(function (e) {
                                return String.fromCharCode(parseInt(e, 16));
                              })
                              .join(""),
                            "State for user " + h.getUsername()
                          )),
                        [2, l]
                      );
                    case 6:
                      return (
                        (p = g.sent()),
                        Jo.debug("Error in cognito hosted auth response", p),
                        window &&
                          void 0 !== window.history &&
                          window.history.replaceState(
                            {},
                            null,
                            this._config.oauth.redirectSignIn
                          ),
                        Qo(
                          "signIn_failure",
                          p,
                          "The OAuth response flow failed"
                        ),
                        Qo(
                          "cognitoHostedUI_failure",
                          p,
                          "A failure occurred when returning to the Cognito Hosted UI"
                        ),
                        Qo(
                          "customState_failure",
                          p,
                          "A failure occurred when returning state"
                        ),
                        [3, 7]
                      );
                    case 7:
                      return [3, 9];
                    case 8:
                      return (this.oAuthFlowInProgress = !1), [7];
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.essentialCredentials = function (e) {
              return {
                accessKeyId: e.accessKeyId,
                sessionToken: e.sessionToken,
                secretAccessKey: e.secretAccessKey,
                identityId: e.identityId,
                authenticated: e.authenticated,
              };
            }),
            (e.prototype.attributesToObject = function (e) {
              var t = this,
                n = {};
              return (
                e &&
                  e.map(function (e) {
                    "email_verified" === e.Name ||
                    "phone_number_verified" === e.Name
                      ? (n[e.Name] =
                          t.isTruthyString(e.Value) || !0 === e.Value)
                      : (n[e.Name] = e.Value);
                  }),
                n
              );
            }),
            (e.prototype.isTruthyString = function (e) {
              return (
                "function" == typeof e.toLowerCase && "true" === e.toLowerCase()
              );
            }),
            (e.prototype.createCognitoUser = function (e) {
              var t = { Username: e, Pool: this.userPool };
              t.Storage = this._storage;
              var n = this._config.authenticationFlowType,
                r = new bo(t);
              return n && r.setAuthenticationFlowType(n), r;
            }),
            (e.prototype._isValidAuthStorage = function (e) {
              return (
                !!e &&
                "function" == typeof e.getItem &&
                "function" == typeof e.setItem &&
                "function" == typeof e.removeItem &&
                "function" == typeof e.clear
              );
            }),
            (e.prototype.noUserPoolErrorHandler = function (e) {
              return !e || (e.userPoolId && e.identityPoolId)
                ? v.NoConfig
                : v.MissingAuthConfig;
            }),
            (e.prototype.rejectAuthError = function (e) {
              return Promise.reject(new Go(e));
            }),
            (e.prototype.rejectNoUserPool = function () {
              var e = this.noUserPoolErrorHandler(this._config);
              return Promise.reject(new Wo(e));
            }),
            (e.prototype.rememberDevice = function () {
              return w(this, void 0, void 0, function () {
                var e, t;
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        [4, this.currentUserPoolUser()]
                      );
                    case 1:
                      return (e = n.sent()), [3, 3];
                    case 2:
                      return (
                        (t = n.sent()),
                        Jo.debug(
                          "The user is not authenticated by the error",
                          t
                        ),
                        [2, Promise.reject("The user is not authenticated")]
                      );
                    case 3:
                      return (
                        e.getCachedDeviceKeyAndPassword(),
                        [
                          2,
                          new Promise(function (t, n) {
                            e.setDeviceStatusRemembered({
                              onSuccess: function (e) {
                                t(e);
                              },
                              onFailure: function (e) {
                                "InvalidParameterException" === e.code
                                  ? n(new Go(v.DeviceConfig))
                                  : "NetworkError" === e.code
                                  ? n(new Go(v.NetworkError))
                                  : n(e);
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.forgetDevice = function () {
              return w(this, void 0, void 0, function () {
                var e, t;
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        [4, this.currentUserPoolUser()]
                      );
                    case 1:
                      return (e = n.sent()), [3, 3];
                    case 2:
                      return (
                        (t = n.sent()),
                        Jo.debug(
                          "The user is not authenticated by the error",
                          t
                        ),
                        [2, Promise.reject("The user is not authenticated")]
                      );
                    case 3:
                      return (
                        e.getCachedDeviceKeyAndPassword(),
                        [
                          2,
                          new Promise(function (t, n) {
                            e.forgetDevice({
                              onSuccess: function (e) {
                                t(e);
                              },
                              onFailure: function (e) {
                                "InvalidParameterException" === e.code
                                  ? n(new Go(v.DeviceConfig))
                                  : "NetworkError" === e.code
                                  ? n(new Go(v.NetworkError))
                                  : n(e);
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.fetchDevices = function () {
              return w(this, void 0, void 0, function () {
                var e, t;
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        [4, this.currentUserPoolUser()]
                      );
                    case 1:
                      return (e = n.sent()), [3, 3];
                    case 2:
                      throw (
                        ((t = n.sent()),
                        Jo.debug(
                          "The user is not authenticated by the error",
                          t
                        ),
                        new Error("The user is not authenticated"))
                      );
                    case 3:
                      return (
                        e.getCachedDeviceKeyAndPassword(),
                        [
                          2,
                          new Promise(function (t, n) {
                            var r = {
                              onSuccess: function (e) {
                                var n = e.Devices.map(function (e) {
                                  var t =
                                    e.DeviceAttributes.find(function (e) {
                                      return "device_name" === e.Name;
                                    }) || {};
                                  return { id: e.DeviceKey, name: t.Value };
                                });
                                t(n);
                              },
                              onFailure: function (e) {
                                "InvalidParameterException" === e.code
                                  ? n(new Go(v.DeviceConfig))
                                  : "NetworkError" === e.code
                                  ? n(new Go(v.NetworkError))
                                  : n(e);
                              },
                            };
                            e.listDevices(60, null, r);
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        })(),
        es = new Xo(null);
      h.register(es),
        h.configure({
          Auth: {
            identityPoolId: "us-east-2:71482aac-b3f0-462e-b87e-3050b8fa6743",
            region: "us-east-2",
            userPoolId: "us-east-2_msJcUyPZi",
            userPoolWebClientId: "5mm44lds4fsqcao4kdnp0k68ch",
            mandatorySignIn: !0,
          },
        }),
        es.configure({
          Auth: {
            identityPoolId: "us-east-2:71482aac-b3f0-462e-b87e-3050b8fa6743",
            region: "us-east-2",
            userPoolId: "us-east-2_msJcUyPZi",
            userPoolWebClientId: "6ej3v8r198u7q1nr5l6usg1fqa",
            mandatorySignIn: !0,
          },
        });
      document.addEventListener("DOMContentLoaded", function () {
        es.configure({ authenticationFlowType: "USER_SRP_AUTH" }),
          fetch(
            "https://42hpzstb3l6sxh74xdfdbvepxi0sdpyz.lambda-url.us-east-2.on.aws/"
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return console.log(e);
            });
        var e = document.getElementById("error-message"),
          t = document.getElementById("logout-button"),
          n = document.getElementById("sign-in-form"),
          r = document.getElementById("sign-up-form"),
          i = document.getElementById("confirm-email-form"),
          o = document.getElementById("forgot-form");
        if (n)
          n.addEventListener("submit", function (t) {
            t.preventDefault();
            var n = document.getElementById("username-input").value,
              r = document.getElementById("password-input").value;
            es.signIn(n, r)
              .then(function (e) {
                console.log("Successfully signed in:", e),
                  (window.location.href = "/Main-Page.html");
              })
              .catch(function (t) {
                "UserNotConfirmedException" === t.code &&
                  (window.location.href = "/Confirm-Email.html?username=" + n),
                  (e.style.display = "block");
              });
          });
        else if (r)
          r.addEventListener("submit", function (t) {
            t.preventDefault();
            var n = document.getElementById("username-input").value,
              r = document.getElementById("email-input").value,
              i = document.getElementById("password-input").value;
            i !== document.getElementById("con-password-input").value
              ? (e.style.display = "block")
              : es
                  .signUp({
                    username: n,
                    password: i,
                    attributes: { email: r },
                    autoSignIn: { enabled: !0 },
                  })
                  .then(function (e) {
                    console.log("Successfully signed up:", e),
                      (window.location.href =
                        "/Confirm-Email.html?username=" + n);
                  })
                  .catch(function (t) {
                    e.style.display = "block";
                  });
          });
        else if (t)
          t.addEventListener("click", function (e) {
            e.preventDefault(),
              es
                .signOut()
                .then(function () {
                  window.location.href = "/Login-Page.html";
                })
                .catch(function (e) {
                  console.error("Error signing out:", e);
                });
          });
        else if (i) {
          var s = document.getElementById("resend-code-button"),
            a = window.location.search,
            u = new URLSearchParams(a).get("username");
          s.addEventListener("click", function (e) {
            e.preventDefault(),
              es
                .resendSignUp(u)
                .then(function () {
                  console.log("code sent successfully");
                })
                .catch(function (e) {
                  console.error("error resending code:", e);
                });
          }),
            i.addEventListener("submit", function (e) {
              e.preventDefault();
              var t = document.getElementById("confirm-code-input").value;
              es.confirmSignUp(u, t)
                .then(function () {
                  window.location.href = "Main-Page.html";
                })
                .catch(function (e) {
                  console.error("Error Confirming Email:", e);
                });
            });
        } else if (o) {
          var c = document.getElementById("reset-form");
          o.addEventListener("submit", function (t) {
            t.preventDefault();
            var n = document.getElementById("username-input").value;
            es
              .forgotPassword(n)
              .then(function () {
                (o.style.display = "none"), (c.style.display = "block");
              })
              .catch(function (e) {
                console.error("Error Sending Forgot Password Code:", e);
              }),
              c.addEventListener("submit", function (t) {
                t.preventDefault();
                var r = document.getElementById("code-input").value,
                  i = document.getElementById("password-input").value;
                i != document.getElementById("con-password-input").value
                  ? (console.log("passwords dont match"),
                    (e.innerText = "Passwords Dont Match"),
                    (e.style.display = "block"))
                  : es
                      .forgotPasswordSubmit(n, r, i)
                      .then(function () {
                        console.log("Password is reset"),
                          (window.location.href = "Login-Page.html");
                      })
                      .catch(function (t) {
                        console.log("Invalid Confirmation Code:", t),
                          (e.innerText = "Error Reseting Password"),
                          (e.style.display = "block");
                      });
              });
          });
        } else
          es.currentAuthenticatedUser()
            .then(function (e) {})
            .catch(function (e) {
              window.location.href = "/Login-Page.html";
            });
      });
    })();
})();
