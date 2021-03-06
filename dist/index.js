'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var PropTypes = _interopDefault(require('prop-types'))
var styled = require('styled-components')
var styled__default = _interopDefault(styled)

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }

  return obj
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }

  return _setPrototypeOf(o, p)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }

  return self
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call
  }

  return _assertThisInitialized(self)
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw),
      },
    })
  )
}

var commonjsGlobal =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : {}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports
}

var fuse = createCommonjsModule(function(module, exports) {
  /*!
   * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
   *
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   */
  !(function(e, t) {
    module.exports = t()
  })(commonjsGlobal, function() {
    return (function(e) {
      var t = {}
      function n(r) {
        if (t[r]) return t[r].exports
        var o = (t[r] = { i: r, l: !1, exports: {} })
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }),
        (n.r = function(e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (n.t = function(e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e
          if (4 & t && 'object' == typeof e && e && e.__esModule) return e
          var r = Object.create(null)
          if (
            (n.r(r),
            Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
            2 & t && 'string' != typeof e)
          )
            for (var o in e)
              n.d(
                r,
                o,
                function(t) {
                  return e[t]
                }.bind(null, o)
              )
          return r
        }),
        (n.n = function(e) {
          var t =
            e && e.__esModule
              ? function() {
                  return e.default
                }
              : function() {
                  return e
                }
          return n.d(t, 'a', t), t
        }),
        (n.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (n.p = ''),
        n((n.s = 1))
      )
    })([
      function(e, t) {
        e.exports = function(e) {
          return Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === Object.prototype.toString.call(e)
        }
      },
      function(e, t, n) {
        function r(e) {
          return (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                })(e)
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        var i = n(2),
          a = n(8),
          s = n(0),
          c = (function() {
            function e(t, n) {
              var r = n.location,
                o = void 0 === r ? 0 : r,
                i = n.distance,
                s = void 0 === i ? 100 : i,
                c = n.threshold,
                h = void 0 === c ? 0.6 : c,
                l = n.maxPatternLength,
                u = void 0 === l ? 32 : l,
                f = n.caseSensitive,
                d = void 0 !== f && f,
                v = n.tokenSeparator,
                p = void 0 === v ? / +/g : v,
                g = n.findAllMatches,
                y = void 0 !== g && g,
                m = n.minMatchCharLength,
                k = void 0 === m ? 1 : m,
                S = n.id,
                x = void 0 === S ? null : S,
                b = n.keys,
                M = void 0 === b ? [] : b,
                _ = n.shouldSort,
                L = void 0 === _ || _,
                w = n.getFn,
                A = void 0 === w ? a : w,
                C = n.sortFn,
                I =
                  void 0 === C
                    ? function(e, t) {
                        return e.score - t.score
                      }
                    : C,
                O = n.tokenize,
                j = void 0 !== O && O,
                P = n.matchAllTokens,
                F = void 0 !== P && P,
                T = n.includeMatches,
                z = void 0 !== T && T,
                E = n.includeScore,
                K = void 0 !== E && E,
                $ = n.verbose,
                J = void 0 !== $ && $
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
                (this.options = {
                  location: o,
                  distance: s,
                  threshold: h,
                  maxPatternLength: u,
                  isCaseSensitive: d,
                  tokenSeparator: p,
                  findAllMatches: y,
                  minMatchCharLength: k,
                  id: x,
                  keys: M,
                  includeMatches: z,
                  includeScore: K,
                  shouldSort: L,
                  getFn: A,
                  sortFn: I,
                  verbose: J,
                  tokenize: j,
                  matchAllTokens: F,
                }),
                this.setCollection(t)
            }
            var t, n
            return (
              (t = e),
              (n = [
                {
                  key: 'setCollection',
                  value: function(e) {
                    return (this.list = e), e
                  },
                },
                {
                  key: 'search',
                  value: function(e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { limit: !1 }
                    this._log('---------\nSearch pattern: "'.concat(e, '"'))
                    var n = this._prepareSearchers(e),
                      r = n.tokenSearchers,
                      o = n.fullSearcher,
                      i = this._search(r, o),
                      a = i.weights,
                      s = i.results
                    return (
                      this._computeScore(a, s),
                      this.options.shouldSort && this._sort(s),
                      t.limit &&
                        'number' == typeof t.limit &&
                        (s = s.slice(0, t.limit)),
                      this._format(s)
                    )
                  },
                },
                {
                  key: '_prepareSearchers',
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : '',
                      t = []
                    if (this.options.tokenize)
                      for (
                        var n = e.split(this.options.tokenSeparator),
                          r = 0,
                          o = n.length;
                        r < o;
                        r += 1
                      )
                        t.push(new i(n[r], this.options))
                    return {
                      tokenSearchers: t,
                      fullSearcher: new i(e, this.options),
                    }
                  },
                },
                {
                  key: '_search',
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      t = arguments.length > 1 ? arguments[1] : void 0,
                      n = this.list,
                      r = {},
                      o = []
                    if ('string' == typeof n[0]) {
                      for (var i = 0, a = n.length; i < a; i += 1)
                        this._analyze(
                          { key: '', value: n[i], record: i, index: i },
                          {
                            resultMap: r,
                            results: o,
                            tokenSearchers: e,
                            fullSearcher: t,
                          }
                        )
                      return { weights: null, results: o }
                    }
                    for (var s = {}, c = 0, h = n.length; c < h; c += 1)
                      for (
                        var l = n[c], u = 0, f = this.options.keys.length;
                        u < f;
                        u += 1
                      ) {
                        var d = this.options.keys[u]
                        if ('string' != typeof d) {
                          if (
                            ((s[d.name] = { weight: 1 - d.weight || 1 }),
                            d.weight <= 0 || d.weight > 1)
                          )
                            throw new Error('Key weight has to be > 0 and <= 1')
                          d = d.name
                        } else s[d] = { weight: 1 }
                        this._analyze(
                          {
                            key: d,
                            value: this.options.getFn(l, d),
                            record: l,
                            index: c,
                          },
                          {
                            resultMap: r,
                            results: o,
                            tokenSearchers: e,
                            fullSearcher: t,
                          }
                        )
                      }
                    return { weights: s, results: o }
                  },
                },
                {
                  key: '_analyze',
                  value: function(e, t) {
                    var n = e.key,
                      r = e.arrayIndex,
                      o = void 0 === r ? -1 : r,
                      i = e.value,
                      a = e.record,
                      c = e.index,
                      h = t.tokenSearchers,
                      l = void 0 === h ? [] : h,
                      u = t.fullSearcher,
                      f = void 0 === u ? [] : u,
                      d = t.resultMap,
                      v = void 0 === d ? {} : d,
                      p = t.results,
                      g = void 0 === p ? [] : p
                    if (null != i) {
                      var y = !1,
                        m = -1,
                        k = 0
                      if ('string' == typeof i) {
                        this._log('\nKey: '.concat('' === n ? '-' : n))
                        var S = f.search(i)
                        if (
                          (this._log(
                            'Full text: "'
                              .concat(i, '", score: ')
                              .concat(S.score)
                          ),
                          this.options.tokenize)
                        ) {
                          for (
                            var x = i.split(this.options.tokenSeparator),
                              b = [],
                              M = 0;
                            M < l.length;
                            M += 1
                          ) {
                            var _ = l[M]
                            this._log('\nPattern: "'.concat(_.pattern, '"'))
                            for (var L = !1, w = 0; w < x.length; w += 1) {
                              var A = x[w],
                                C = _.search(A),
                                I = {}
                              C.isMatch
                                ? ((I[A] = C.score),
                                  (y = !0),
                                  (L = !0),
                                  b.push(C.score))
                                : ((I[A] = 1),
                                  this.options.matchAllTokens || b.push(1)),
                                this._log(
                                  'Token: "'
                                    .concat(A, '", score: ')
                                    .concat(I[A])
                                )
                            }
                            L && (k += 1)
                          }
                          m = b[0]
                          for (var O = b.length, j = 1; j < O; j += 1) m += b[j]
                          ;(m /= O), this._log('Token score average:', m)
                        }
                        var P = S.score
                        m > -1 && (P = (P + m) / 2),
                          this._log('Score average:', P)
                        var F =
                          !this.options.tokenize ||
                          !this.options.matchAllTokens ||
                          k >= l.length
                        if (
                          (this._log('\nCheck Matches: '.concat(F)),
                          (y || S.isMatch) && F)
                        ) {
                          var T = v[c]
                          T
                            ? T.output.push({
                                key: n,
                                arrayIndex: o,
                                value: i,
                                score: P,
                                matchedIndices: S.matchedIndices,
                              })
                            : ((v[c] = {
                                item: a,
                                output: [
                                  {
                                    key: n,
                                    arrayIndex: o,
                                    value: i,
                                    score: P,
                                    matchedIndices: S.matchedIndices,
                                  },
                                ],
                              }),
                              g.push(v[c]))
                        }
                      } else if (s(i))
                        for (var z = 0, E = i.length; z < E; z += 1)
                          this._analyze(
                            {
                              key: n,
                              arrayIndex: z,
                              value: i[z],
                              record: a,
                              index: c,
                            },
                            {
                              resultMap: v,
                              results: g,
                              tokenSearchers: l,
                              fullSearcher: f,
                            }
                          )
                    }
                  },
                },
                {
                  key: '_computeScore',
                  value: function(e, t) {
                    this._log('\n\nComputing score:\n')
                    for (var n = 0, r = t.length; n < r; n += 1) {
                      for (
                        var o = t[n].output, i = o.length, a = 1, s = 1, c = 0;
                        c < i;
                        c += 1
                      ) {
                        var h = e ? e[o[c].key].weight : 1,
                          l = (1 === h ? o[c].score : o[c].score || 0.001) * h
                        1 !== h
                          ? (s = Math.min(s, l))
                          : ((o[c].nScore = l), (a *= l))
                      }
                      ;(t[n].score = 1 === s ? a : s), this._log(t[n])
                    }
                  },
                },
                {
                  key: '_sort',
                  value: function(e) {
                    this._log('\n\nSorting....'), e.sort(this.options.sortFn)
                  },
                },
                {
                  key: '_format',
                  value: function(e) {
                    var t = []
                    if (this.options.verbose) {
                      var n = []
                      this._log(
                        '\n\nOutput:\n\n',
                        JSON.stringify(e, function(e, t) {
                          if ('object' === r(t) && null !== t) {
                            if (-1 !== n.indexOf(t)) return
                            n.push(t)
                          }
                          return t
                        })
                      ),
                        (n = null)
                    }
                    var o = []
                    this.options.includeMatches &&
                      o.push(function(e, t) {
                        var n = e.output
                        t.matches = []
                        for (var r = 0, o = n.length; r < o; r += 1) {
                          var i = n[r]
                          if (0 !== i.matchedIndices.length) {
                            var a = {
                              indices: i.matchedIndices,
                              value: i.value,
                            }
                            i.key && (a.key = i.key),
                              i.hasOwnProperty('arrayIndex') &&
                                i.arrayIndex > -1 &&
                                (a.arrayIndex = i.arrayIndex),
                              t.matches.push(a)
                          }
                        }
                      }),
                      this.options.includeScore &&
                        o.push(function(e, t) {
                          t.score = e.score
                        })
                    for (var i = 0, a = e.length; i < a; i += 1) {
                      var s = e[i]
                      if (
                        (this.options.id &&
                          (s.item = this.options.getFn(
                            s.item,
                            this.options.id
                          )[0]),
                        o.length)
                      ) {
                        for (
                          var c = { item: s.item }, h = 0, l = o.length;
                          h < l;
                          h += 1
                        )
                          o[h](s, c)
                        t.push(c)
                      } else t.push(s.item)
                    }
                    return t
                  },
                },
                {
                  key: '_log',
                  value: function() {
                    var e
                    this.options.verbose &&
                      (e = console).log.apply(e, arguments)
                  },
                },
              ]) && o(t.prototype, n),
              e
            )
          })()
        e.exports = c
      },
      function(e, t, n) {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        var o = n(3),
          i = n(4),
          a = n(7),
          s = (function() {
            function e(t, n) {
              var r = n.location,
                o = void 0 === r ? 0 : r,
                i = n.distance,
                s = void 0 === i ? 100 : i,
                c = n.threshold,
                h = void 0 === c ? 0.6 : c,
                l = n.maxPatternLength,
                u = void 0 === l ? 32 : l,
                f = n.isCaseSensitive,
                d = void 0 !== f && f,
                v = n.tokenSeparator,
                p = void 0 === v ? / +/g : v,
                g = n.findAllMatches,
                y = void 0 !== g && g,
                m = n.minMatchCharLength,
                k = void 0 === m ? 1 : m
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
                (this.options = {
                  location: o,
                  distance: s,
                  threshold: h,
                  maxPatternLength: u,
                  isCaseSensitive: d,
                  tokenSeparator: p,
                  findAllMatches: y,
                  minMatchCharLength: k,
                }),
                (this.pattern = this.options.isCaseSensitive
                  ? t
                  : t.toLowerCase()),
                this.pattern.length <= u &&
                  (this.patternAlphabet = a(this.pattern))
            }
            var t, n
            return (
              (t = e),
              (n = [
                {
                  key: 'search',
                  value: function(e) {
                    if (
                      (this.options.isCaseSensitive || (e = e.toLowerCase()),
                      this.pattern === e)
                    )
                      return {
                        isMatch: !0,
                        score: 0,
                        matchedIndices: [[0, e.length - 1]],
                      }
                    var t = this.options,
                      n = t.maxPatternLength,
                      r = t.tokenSeparator
                    if (this.pattern.length > n) return o(e, this.pattern, r)
                    var a = this.options,
                      s = a.location,
                      c = a.distance,
                      h = a.threshold,
                      l = a.findAllMatches,
                      u = a.minMatchCharLength
                    return i(e, this.pattern, this.patternAlphabet, {
                      location: s,
                      distance: c,
                      threshold: h,
                      findAllMatches: l,
                      minMatchCharLength: u,
                    })
                  },
                },
              ]) && r(t.prototype, n),
              e
            )
          })()
        e.exports = s
      },
      function(e, t) {
        var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
        e.exports = function(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : / +/g,
            o = new RegExp(t.replace(n, '\\$&').replace(r, '|')),
            i = e.match(o),
            a = !!i,
            s = []
          if (a)
            for (var c = 0, h = i.length; c < h; c += 1) {
              var l = i[c]
              s.push([e.indexOf(l), l.length - 1])
            }
          return { score: a ? 0.5 : 1, isMatch: a, matchedIndices: s }
        }
      },
      function(e, t, n) {
        var r = n(5),
          o = n(6)
        e.exports = function(e, t, n, i) {
          for (
            var a = i.location,
              s = void 0 === a ? 0 : a,
              c = i.distance,
              h = void 0 === c ? 100 : c,
              l = i.threshold,
              u = void 0 === l ? 0.6 : l,
              f = i.findAllMatches,
              d = void 0 !== f && f,
              v = i.minMatchCharLength,
              p = void 0 === v ? 1 : v,
              g = s,
              y = e.length,
              m = u,
              k = e.indexOf(t, g),
              S = t.length,
              x = [],
              b = 0;
            b < y;
            b += 1
          )
            x[b] = 0
          if (-1 !== k) {
            var M = r(t, {
              errors: 0,
              currentLocation: k,
              expectedLocation: g,
              distance: h,
            })
            if (((m = Math.min(M, m)), -1 !== (k = e.lastIndexOf(t, g + S)))) {
              var _ = r(t, {
                errors: 0,
                currentLocation: k,
                expectedLocation: g,
                distance: h,
              })
              m = Math.min(_, m)
            }
          }
          k = -1
          for (
            var L = [],
              w = 1,
              A = S + y,
              C = 1 << (S <= 31 ? S - 1 : 30),
              I = 0;
            I < S;
            I += 1
          ) {
            for (var O = 0, j = A; O < j; ) {
              r(t, {
                errors: I,
                currentLocation: g + j,
                expectedLocation: g,
                distance: h,
              }) <= m
                ? (O = j)
                : (A = j),
                (j = Math.floor((A - O) / 2 + O))
            }
            A = j
            var P = Math.max(1, g - j + 1),
              F = d ? y : Math.min(g + j, y) + S,
              T = Array(F + 2)
            T[F + 1] = (1 << I) - 1
            for (var z = F; z >= P; z -= 1) {
              var E = z - 1,
                K = n[e.charAt(E)]
              if (
                (K && (x[E] = 1),
                (T[z] = ((T[z + 1] << 1) | 1) & K),
                0 !== I && (T[z] |= ((L[z + 1] | L[z]) << 1) | 1 | L[z + 1]),
                T[z] & C &&
                  (w = r(t, {
                    errors: I,
                    currentLocation: E,
                    expectedLocation: g,
                    distance: h,
                  })) <= m)
              ) {
                if (((m = w), (k = E) <= g)) break
                P = Math.max(1, 2 * g - k)
              }
            }
            if (
              r(t, {
                errors: I + 1,
                currentLocation: g,
                expectedLocation: g,
                distance: h,
              }) > m
            )
              break
            L = T
          }
          return {
            isMatch: k >= 0,
            score: 0 === w ? 0.001 : w,
            matchedIndices: o(x, p),
          }
        }
      },
      function(e, t) {
        e.exports = function(e, t) {
          var n = t.errors,
            r = void 0 === n ? 0 : n,
            o = t.currentLocation,
            i = void 0 === o ? 0 : o,
            a = t.expectedLocation,
            s = void 0 === a ? 0 : a,
            c = t.distance,
            h = void 0 === c ? 100 : c,
            l = r / e.length,
            u = Math.abs(s - i)
          return h ? l + u / h : u ? 1 : l
        }
      },
      function(e, t) {
        e.exports = function() {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n = [],
              r = -1,
              o = -1,
              i = 0,
              a = e.length;
            i < a;
            i += 1
          ) {
            var s = e[i]
            s && -1 === r
              ? (r = i)
              : s ||
                -1 === r ||
                ((o = i - 1) - r + 1 >= t && n.push([r, o]), (r = -1))
          }
          return e[i - 1] && i - r >= t && n.push([r, i - 1]), n
        }
      },
      function(e, t) {
        e.exports = function(e) {
          for (var t = {}, n = e.length, r = 0; r < n; r += 1)
            t[e.charAt(r)] = 0
          for (var o = 0; o < n; o += 1) t[e.charAt(o)] |= 1 << (n - o - 1)
          return t
        }
      },
      function(e, t, n) {
        var r = n(0)
        e.exports = function(e, t) {
          return (function e(t, n, o) {
            if (n) {
              var i = n.indexOf('.'),
                a = n,
                s = null
              ;-1 !== i && ((a = n.slice(0, i)), (s = n.slice(i + 1)))
              var c = t[a]
              if (null != c)
                if (s || ('string' != typeof c && 'number' != typeof c))
                  if (r(c))
                    for (var h = 0, l = c.length; h < l; h += 1) e(c[h], s, o)
                  else s && e(c, s, o)
                else o.push(c.toString())
            } else o.push(t)
            return o
          })(e, t, [])
        }
      },
    ])
  })
})

var Fuse = unwrapExports(fuse)
var fuse_1 = fuse.Fuse

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  font-size: ',
    ';\n  padding: 10px 20px;\n  height: ',
    ';\n  border: 1px solid ',
    ';\n  border-radius: 5px;\n  color: ',
    ';\n\n  &:focus {\n    outline: none;\n  }\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}
var StyledInput = styled__default.input(
  _templateObject(),
  function(props) {
    return props.inputBoxFontSize
  },
  function(props) {
    return props.inputBoxHeight
  },
  function(props) {
    return props.inputBoxBorderColor
  },
  function(props) {
    return props.inputBoxFontColor
  }
)

var InputBox =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(InputBox, _Component)

    function InputBox() {
      _classCallCheck(this, InputBox)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(InputBox).apply(this, arguments)
      )
    }

    _createClass(InputBox, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var autoFocus = this.props.autoFocus
          /**
           * Focusses on the input box if the autoFocus prop is true.
           */

          !!autoFocus && this.input.focus()
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this = this

          var _this$props = this.props,
            placeholder = _this$props.placeholder,
            value = _this$props.value,
            onChange = _this$props.onChange,
            onFocus = _this$props.onFocus,
            onKeyPress = _this$props.onKeyPress,
            inputBoxFontColor = _this$props.inputBoxFontColor,
            inputBoxBorderColor = _this$props.inputBoxBorderColor,
            inputBoxFontSize = _this$props.inputBoxFontSize,
            inputBoxHeight = _this$props.inputBoxHeight
          return React__default.createElement(StyledInput, {
            type: 'text',
            placeholder: placeholder,
            value: value,
            onChange: onChange,
            onKeyPress: onKeyPress,
            onFocus: onFocus,
            ref: function ref(input) {
              _this.input = input
            },
            inputBoxFontColor: inputBoxFontColor,
            inputBoxBorderColor: inputBoxBorderColor,
            inputBoxFontSize: inputBoxFontSize,
            inputBoxHeight: inputBoxHeight,
          })
        },
      },
    ])

    return InputBox
  })(React.Component)

_defineProperty(InputBox, 'propTypes', {
  /**
   * placeholder: The placeholder text for the input box.
   * value: The value of the input box.
   * onChange: A function which acts as a callback when the input value is changed.
   * onFocus: A function which acts as a callback when the input is focussed.
   * inputBoxFontColor: Color of the text in the input box.
   * inputBoxBorderColor: Color of the border of the input box.
   * inputBoxFontSize: Size of the font of the input box.
   * inputBoxHeight: Height of the input box.
   */
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  inputBoxFontColor: PropTypes.string,
  inputBoxBorderColor: PropTypes.string,
  inputBoxFontSize: PropTypes.string,
  inputBoxHeight: PropTypes.string,
})

function _templateObject$1() {
  var data = _taggedTemplateLiteral([
    '\n  margin: 10px 0 0;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 0, rgba(0, 0, 0, 0.1) 0px 4px 11px;\n  border-radius: 5px;\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    > li {\n      padding: 10px 20px;\n      background-color: #fff;\n      border: 1px solid ',
    ';\n      height: 40px;\n      display: flex;\n      align-items: center;\n\n      &:hover {\n        background-color: ',
    ';\n        cursor: pointer;\n      }\n\n      &:first-child {\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n      }\n\n      &:last-child {\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n      }\n\n      &:not(:first-child) {\n        border-top: 0;\n      }\n    }\n  }\n',
  ])

  _templateObject$1 = function _templateObject() {
    return data
  }

  return data
}
var StyledDropdown = styled__default.div(
  _templateObject$1(),
  function(props) {
    return props.dropDownBorderColor
  },
  function(props) {
    return props.dropDownHoverColor
  }
)

var DropDown =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(DropDown, _Component)

    function DropDown() {
      _classCallCheck(this, DropDown)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(DropDown).apply(this, arguments)
      )
    }

    _createClass(DropDown, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            matchedRecords = _this$props.matchedRecords,
            _onClick = _this$props.onClick,
            dropDownHoverColor = _this$props.dropDownHoverColor,
            dropDownBorderColor = _this$props.dropDownBorderColor,
            onKeyPress = _this$props.onKeyPress
          return React__default.createElement(
            StyledDropdown,
            {
              className: 'react-search-box-dropdown',
              dropDownHoverColor: dropDownHoverColor,
              dropDownBorderColor: dropDownBorderColor,
            },
            React__default.createElement(
              'ul',
              null,
              matchedRecords.map(function(record) {
                return React__default.createElement(
                  'li',
                  {
                    key: record.key,
                    className: 'react-search-box-dropdown-list-item',
                    onClick: function onClick() {
                      return _onClick(record)
                    },
                  },
                  record.value
                )
              })
            )
          )
        },
      },
    ])

    return DropDown
  })(React.Component)

_defineProperty(DropDown, 'propTypes', {
  /**
   * onClick: A function which acts as a callback when any record is selected. It
   * is triggered once a dropdown item is clicked.
   * matchedRecords: An array of matched records.
   * dropDownHoverColor: Background color on hover of the dropdown list items.
   * dropDownBorderColor: Border color of the dropdown.
   */
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  matchedRecords: PropTypes.array,
  dropDownHoverColor: PropTypes.string,
  dropDownBorderColor: PropTypes.string,
})

_defineProperty(DropDown, 'defaultProps', {
  /**
   * Set matchedRecords prop as an empty array in case it's not passed.
   */
  matchedRecords: [],
})

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-direction: column;\n',
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral([
    '\n  * {\n    box-sizing: border-box;\n  }\n',
  ])

  _templateObject$2 = function _templateObject() {
    return data
  }

  return data
}
var GlobalStyle = styled.createGlobalStyle(_templateObject$2())
var StyledContainer = styled__default.div(_templateObject2())

var ReactSearchBox =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(ReactSearchBox, _Component)

    function ReactSearchBox(props) {
      var _this

      _classCallCheck(this, ReactSearchBox)

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(ReactSearchBox).call(this, props)
      )

      _defineProperty(_assertThisInitialized(_this), 'state', {
        /**
         * 'matchedRecords' stores the items when the input box's value
         * matches with any item from the 'data' prop.
         */
        value: _this.props.value ? _this.props.value : '',
        matchedRecords: [],
      })

      _defineProperty(
        _assertThisInitialized(_this),
        'handleInputChange',
        function(e) {
          var onChange = _this.props.onChange
          /**
           * This function is responsible for checking if any items from the input
           * box's value matches with any item form the 'data' prop. If any item matches,
           * then that matched object is pushed into the 'matchedRecords' state. That
           * state is responsible for populating the dropdown.
           */

          var value = e.target.value
          /**
           * Check all the values from 'data' array whose 'value' matches with
           * 'value' using Fuse plugin.
           */

          var matchedRecords = _this.fuse.search(value)
          /**
           * Update 'value' state with the value from the input box.
           * Update 'matchedRecords' state with the matched records from the data array.
           */

          _this.setState({
            value: value,
            matchedRecords: matchedRecords,

            /**
             * Show the dropdown onChange of the input.
             */
            showDropdown: true,
          })
          /**
           * Trigger the 'onChange' prop once the input's value changes.
           */

          !!onChange && onChange(value)
        }
      )

      _defineProperty(_assertThisInitialized(_this), 'inputNode', function() {
        /**
         * This function is responsible for rendering the input box.
         * The input box acts as a source of entry for the data from the user.
         * Once the user enters the value, it's checked if that value matches
         * with any value which is present in the 'data' prop. If any value
         * matches with the input, then that matched item appears in the dropdown.
         */
        var _this$props = _this.props,
          placeholder = _this$props.placeholder,
          onFocus = _this$props.onFocus,
          autoFocus = _this$props.autoFocus,
          inputBoxFontColor = _this$props.inputBoxFontColor,
          inputBoxBorderColor = _this$props.inputBoxBorderColor,
          inputBoxFontSize = _this$props.inputBoxFontSize,
          inputBoxHeight = _this$props.inputBoxHeight
        var value = _this.state.value
        return React__default.createElement(InputBox, {
          type: 'text',
          placeholder: placeholder,
          value: value,
          onChange: _this.handleInputChange,
          onKeyPress: _this.props.onKeyPress,
          autoFocus: autoFocus ? autoFocus : undefined,
          onFocus: onFocus ? onFocus : undefined,
          inputBoxFontColor: inputBoxFontColor,
          inputBoxBorderColor: inputBoxBorderColor,
          inputBoxFontSize: inputBoxFontSize,
          inputBoxHeight: inputBoxHeight,
        })
      })

      _defineProperty(
        _assertThisInitialized(_this),
        'handleDropdownItemClick',
        function(record) {
          /**
           * This function is responsible for updating the value inside the
           * input box when any dropdown item is clicked.
           *
           * The 'value' state is updated with the clicked record's value.
           */
          var value = record.value
          var _this$props2 = _this.props,
            onSelect = _this$props2.onSelect,
            onChange = _this$props2.onChange

          _this.setState({
            value: value,

            /**
             * Hide the dropdown once any dropdown item is clicked.
             */
            showDropdown: false,
          })
          /**
           * Trigger the 'onSelect' prop once everything is done if it's passed.
           */

          !!onSelect && onSelect(record)
          /**
           * Trigger the 'onChange' prop since the value of the input box also changes.
           */

          !!onChange && onChange(value)
        }
      )

      _defineProperty(
        _assertThisInitialized(_this),
        'dropdownNode',
        function() {
          /**
           * This function is responsible for rendering the dropdown.
           * When any value from the input box matches with any value from the
           * 'data' prop, that matched object from the 'data' array shows up
           * in the dropdown's li. The matched values are stored in the
           * 'matchedRecords' state.
           */
          var _this$state = _this.state,
            matchedRecords = _this$state.matchedRecords,
            showDropdown = _this$state.showDropdown
          var _this$props3 = _this.props,
            dropDownHoverColor = _this$props3.dropDownHoverColor,
            dropDownBorderColor = _this$props3.dropDownBorderColor
          /**
           * If there is no value present in the input box, then the dropdown
           * shouldn't appear.
           */

          if (!showDropdown) return false
          return React__default.createElement(DropDown, {
            matchedRecords: matchedRecords,
            onClick: _this.handleDropdownItemClick,
            dropDownHoverColor: dropDownHoverColor,
            dropDownBorderColor: dropDownBorderColor,
          })
        }
      )

      var data = props.data,
        fuseConfigs = props.fuseConfigs
      /**
       * These configs are from Fuse plugin. Check out http://fusejs.io/
       * for more details.
       */

      _this.defaultFuseConfigs = {
        /**
         * At what point does the match algorithm give up. A threshold of 0.0
         * requires a perfect match (of both letters and location), a threshold
         * of 1.0 would match anything.
         */
        threshold: 0.05,

        /**
         * Determines approximately where in the text is the pattern expected to be found.
         */
        location: 0,

        /**
         * Determines how close the match must be to the fuzzy location
         * (specified by location). An exact letter match which is distance
         * characters away from the fuzzy location would score as a complete
         * mismatch. A distance of 0 requires the match be at the exact
         * location specified, a distance of 1000 would require a perfect
         * match to be within 800 characters of the location to be found
         * using a threshold of 0.8.
         */
        distance: 100,

        /**
         * When set to include matches, only the matches whose length exceeds this
         * value will be returned. (For instance, if you want to ignore single
         * character index returns, set to 2).
         */
        minMatchCharLength: 1,

        /**
         * List of properties that will be searched. This supports nested properties,
         * weighted search, searching in arrays of strings and objects.
         */
        keys: ['value'],
      }
      /**
     this.Override defaultFuseConfigs with fuseConfigs prop
     */

      var configs = Object.assign({}, _this.defaultFuseConfigs, fuseConfigs)
      _this.fuse = new Fuse(data, configs)
      return _this
    }

    _createClass(ReactSearchBox, [
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          var _this$props4 = this.props,
            data = _this$props4.data,
            fuseConfigs = _this$props4.fuseConfigs,
            showDropdown = _this$props4.showDropdown

          if (prevProps.data !== data) {
            /**
             * Override defaultFuseConfigs with fuseConfigs prop
             */
            var configs = Object.assign(
              {},
              this.defaultFuseConfigs,
              fuseConfigs
            )
            this.fuse = new Fuse(data, configs)
          }

          if (prevProps.showDropdown !== showDropdown) {
            this.setState({
              showDropdown: this.props.showDropdown,
            })
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          return React__default.createElement(
            StyledContainer,
            null,
            React__default.createElement(GlobalStyle, null),
            this.inputNode(),
            this.dropdownNode()
          )
        },
      },
    ])

    return ReactSearchBox
  })(React.Component)

_defineProperty(ReactSearchBox, 'propTypes', {
  /**
   * placeholder: The placeholder text for the input box.
   * data: An array of objects which acts as teh source of data for the dropdown.
   * fuseConfigs: Configs to override default Fuse configs.
   * onSelect: A function which acts as a callback when any record is selected. It
   * is triggered once a dropdown item is clicked.
   * autoFocus: Focus on the input box once the component is mounted.
   * onFocus: A function which acts as a callback when the input is focussed.
   * onChange: A function which acts as a callback when the input value is changed.
   * inputBoxFontColor: Color of the text in the input box.
   * inputBoxBorderColor: Color of the border of the input box.
   * inputBoxFontSize: Size of the font of the input box.
   * inputBoxHeight: Height of the input box.
   * dropDownHoverColor: Background color on hover of the dropdown list items.
   * dropDownBorderColor: Border color of the dropdown.
   */
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  fuseConfigs: PropTypes.object,
  autoFocus: PropTypes.bool,
  onSelect: PropTypes.func,
  onKeyPress: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  inputBoxFontColor: PropTypes.string,
  inputBoxBorderColor: PropTypes.string,
  inputBoxFontSize: PropTypes.string,
  inputBoxHeight: PropTypes.string,
  dropDownHoverColor: PropTypes.string,
  dropDownBorderColor: PropTypes.string,
})

_defineProperty(ReactSearchBox, 'defaultProps', {
  /**
   * Set data prop as an empty array in case it's not passed.
   */
  data: [],

  /**
   * Don't focus on the input box when the component is mounted by default
   */
  autoFocus: false,

  /**
   * Set the placeholder as empty text by default
   */
  placeholder: '',
  inputBoxFontColor: '#000',
  inputBoxBorderColor: '#cacaca96',
  inputBoxFontSize: '14px',
  inputBoxHeight: '40px',
  dropDownHoverColor: '#ccc',
  dropDownBorderColor: '#cacaca96',
})

module.exports = ReactSearchBox
//# sourceMappingURL=index.js.map
