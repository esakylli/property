module.exports = (function () {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.location = location;
    this.name = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
      parser = this,
      peg$FAILED = {},
      peg$startRuleFunctions = { start: peg$parsestart },
      peg$startRuleFunction = peg$parsestart,
      peg$c0 = /^[a-z]/i,
      peg$c1 = { type: "class", value: "[a-z]i", description: "[a-z]i" },
      peg$c2 = /^[0-9]/,
      peg$c3 = { type: "class", value: "[0-9]", description: "[0-9]" },
      peg$c4 = /^[a-z0-9]/i,
      peg$c5 = { type: "class", value: "[a-z0-9]i", description: "[a-z0-9]i" },
      peg$c6 = ".",
      peg$c7 = { type: "literal", value: ".", description: '"."' },
      peg$c8 = "_",
      peg$c9 = { type: "literal", value: "_", description: '"_"' },
      peg$c10 = '"',
      peg$c11 = { type: "literal", value: '"', description: '"\\""' },
      peg$c12 = "-",
      peg$c13 = { type: "literal", value: "-", description: '"-"' },
      peg$c14 = ":",
      peg$c15 = { type: "literal", value: ":", description: '":"' },
      peg$c16 = function (root) {
        return root;
      },
      peg$c17 = "|",
      peg$c18 = { type: "literal", value: "|", description: '"|"' },
      peg$c19 = function (e, i) {
        return i;
      },
      peg$c20 = function (e, e2) {
        e2.unshift(e);
        return e2.length == 1 ? e2[0] : callbacks.createOrExpr(e2);
      },
      peg$c21 = "&",
      peg$c22 = { type: "literal", value: "&", description: '"&"' },
      peg$c23 = function (e, e2) {
        e2.unshift(e);
        return e2.length == 1 ? e2[0] : callbacks.createAndExpr(e2);
      },
      peg$c24 = "(",
      peg$c25 = { type: "literal", value: "(", description: '"("' },
      peg$c26 = ")",
      peg$c27 = { type: "literal", value: ")", description: '")"' },
      peg$c28 = function (e1) {
        return e1;
      },
      peg$c29 = function (e2) {
        return e2;
      },
      peg$c30 = ">=",
      peg$c31 = { type: "literal", value: ">=", description: '">="' },
      peg$c32 = "<=",
      peg$c33 = { type: "literal", value: "<=", description: '"<="' },
      peg$c34 = ">",
      peg$c35 = { type: "literal", value: ">", description: '">"' },
      peg$c36 = "<",
      peg$c37 = { type: "literal", value: "<", description: '"<"' },
      peg$c38 = function (lh, c, rh) {
        var opType = stringToComparisonOperationType(c);
        return callbacks.createComparisonExpr(lh, opType, rh);
      },
      peg$c39 = "=",
      peg$c40 = { type: "literal", value: "=", description: '"="' },
      peg$c41 = "!=",
      peg$c42 = { type: "literal", value: "!=", description: '"!="' },
      peg$c43 = ",",
      peg$c44 = { type: "literal", value: ",", description: '","' },
      peg$c45 = function (lh, c, r1, r) {
        return r;
      },
      peg$c46 = function (lh, c, r1, r2) {
        var opType = stringToEqualsOperationType(c);
        r2.unshift(r1);
        return callbacks.createEqualsExpr(lh, opType, r2);
      },
      peg$c47 = function (comp) {
        return comp[1];
      },
      peg$c48 = "~",
      peg$c49 = { type: "literal", value: "~", description: '"~"' },
      peg$c50 = function (v1, v) {
        return v;
      },
      peg$c51 = function (v1, v2) {
        if (v2) return callbacks.createValueRangeExpr(v1, v2);
        else return callbacks.createValueRangeExpr(v1, v1);
      },
      peg$c52 = "+",
      peg$c53 = { type: "literal", value: "+", description: '"+"' },
      peg$c54 = function (lh, o, rh) {
        var opType = stringToAddSubOperationType(o);
        return callbacks.createAddExpr(lh, opType, rh);
      },
      peg$c55 = "*",
      peg$c56 = { type: "literal", value: "*", description: '"*"' },
      peg$c57 = "/",
      peg$c58 = { type: "literal", value: "/", description: '"/"' },
      peg$c59 = function (lh, o, rh) {
        var opType = stringToMulDivOperationType(o);
        return callbacks.createMulExpr(lh, opType, rh);
      },
      peg$c60 = function (val) {
        return callbacks.createUnaryExpr("negative", val);
      },
      peg$c61 = "null",
      peg$c62 = { type: "literal", value: "null", description: '"null"' },
      peg$c63 = function () {
        return callbacks.createNullExpr();
      },
      peg$c64 = function (i1, i) {
        return i;
      },
      peg$c65 = function (i1, i2) {
        //console.log("ValueExpr", i1, i2)
        if (i2) return callbacks.createIdentifierAsExpr(i2, i1);
        else return callbacks.createIdentifierExpr(i1);
      },
      peg$c66 = function (val) {
        return callbacks.createValueExpr(val);
      },
      peg$currPos = 0,
      peg$savedPos = 0,
      peg$posDetailsCache = [{ line: 1, column: 1, seenCR: false }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + '".');
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
        p,
        ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line: details.line,
          column: details.column,
          seenCR: details.seenCR,
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) {
              details.line++;
            }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column,
        },
        end: {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column,
        },
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) {
        return;
      }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function (a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
          }

          return s
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .replace(/\x08/g, "\\b")
            .replace(/\t/g, "\\t")
            .replace(/\n/g, "\\n")
            .replace(/\f/g, "\\f")
            .replace(/\r/g, "\\r")
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
              return "\\x0" + hex(ch);
            })
            .replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
              return "\\x" + hex(ch);
            })
            .replace(/[\u0100-\u0FFF]/g, function (ch) {
              return "\\u0" + hex(ch);
            })
            .replace(/[\u1000-\uFFFF]/g, function (ch) {
              return "\\u" + hex(ch);
            });
        }

        var expectedDescs = new Array(expected.length),
          expectedDesc,
          foundDesc,
          i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc =
          expected.length > 1
            ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1]
            : expectedDescs[0];

        foundDesc = found ? '"' + stringEscape(found) + '"' : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, location);
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsePropertyFilter();

      return s0;
    }

    function peg$parseletter() {
      var s0;

      if (peg$c0.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c1);
        }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c2.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c3);
        }
      }

      return s0;
    }

    function peg$parseany() {
      var s0;

      if (peg$c4.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c5);
        }
      }

      return s0;
    }

    function peg$parseidentletter() {
      var s0;

      s0 = peg$parseletter();
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s0 = peg$c6;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c7);
          }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 95) {
            s0 = peg$c8;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c9);
            }
          }
        }
      }

      return s0;
    }

    function peg$parseident() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseidentletter();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseidentletter();
        if (s4 === peg$FAILED) {
          s4 = peg$parsedigit();
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseidentletter();
          if (s4 === peg$FAILED) {
            s4 = peg$parsedigit();
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }

      return s0;
    }

    function peg$parsepropval() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseany();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseany();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s4 = peg$c10;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c11);
            }
          }
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c12;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c13);
          }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsedigit();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parsedigit();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 46) {
              s5 = peg$c6;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c7);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parsedigit();
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parsedigit();
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 58) {
                s6 = peg$c14;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c15);
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseletter();
                if (s8 !== peg$FAILED) {
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parseletter();
                  }
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  s6 = [s6, s7];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s2 = [s2, s3, s4, s5];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsePropertyFilter() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseOrExpr();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c16(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseOrExpr() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseAndExpr();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 124) {
          s4 = peg$c17;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c18);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseAndExpr();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c19(s1, s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 124) {
            s4 = peg$c17;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c18);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseAndExpr();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c19(s1, s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c20(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAndExpr() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseExpr();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 38) {
          s4 = peg$c21;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c22);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpr();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c19(s1, s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 38) {
            s4 = peg$c21;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c22);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpr();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c19(s1, s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c23(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c24;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c25);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseOrExpr();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 41) {
            s3 = peg$c26;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c27);
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c28(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseComparisonExpr();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c29(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseComparisonExpr() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseAddExpr();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c30) {
          s4 = peg$c30;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c31);
          }
        }
        if (s4 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c32) {
            s4 = peg$c32;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c33);
            }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 62) {
              s4 = peg$c34;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c35);
              }
            }
            if (s4 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 60) {
                s4 = peg$c36;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c37);
                }
              }
            }
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseAddExpr();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c38(s2, s4, s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 61) {
            s4 = peg$c39;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c40);
            }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c41) {
              s4 = peg$c41;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c42);
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseValueRangeExpr();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s8 = peg$c43;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c44);
                }
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseValueRangeExpr();
                if (s9 !== peg$FAILED) {
                  peg$savedPos = s7;
                  s8 = peg$c45(s2, s4, s5, s9);
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 44) {
                  s8 = peg$c43;
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c44);
                  }
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseValueRangeExpr();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c45(s2, s4, s5, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c46(s2, s4, s5, s6);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseValueRangeExpr() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseAddExpr();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 126) {
          s3 = peg$c48;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c49);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAddExpr();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c50(s1, s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c51(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseAddExpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseMultiplyExpr();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 43) {
          s2 = peg$c52;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c53);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s2 = peg$c12;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c13);
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseAddExpr();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c54(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseMultiplyExpr();
      }

      return s0;
    }

    function peg$parseMultiplyExpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseUnaryExpr();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s2 = peg$c55;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c56);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 47) {
            s2 = peg$c57;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMultiplyExpr();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c59(s1, s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseUnaryExpr();
      }

      return s0;
    }

    function peg$parseUnaryExpr() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c12;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c13);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseValueExpr();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c60(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseValueExpr();
      }

      return s0;
    }

    function peg$parseValueExpr() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c61) {
        s1 = peg$c61;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c62);
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c63();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseident();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c14;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c15);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseident();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s2;
              s3 = peg$c64(s1, s4);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c65(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsepropval();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c66(s1);
          }
          s0 = s1;
        }
      }

      return s0;
    }

    var callbacks = options.callbacks;

    // Helpers
    function stringToComparisonOperationType(str) {
      if (str == ">") return "greater"; //ComparisonOperationType.Greater;
      if (str == "<") return "less"; //ComparisonOperationType.Less;
      if (str == ">=") return "greaterOrEqual"; //ComparisonOperationType.GreaterOrEqual;
      return "lessOrEqual"; //ComparisonOperationType.LessOrEqual;
    }

    function stringToEqualsOperationType(str) {
      if (str == "=") return "equals"; //EqualsOperationType.Equals;
      return "notEquals"; //EqualsOperationType.NotEquals;
    }

    function stringToAddSubOperationType(str) {
      if (str == "+") return "add";
      return "subtract";
    }

    function stringToMulDivOperationType(str) {
      if (str == "*") return "multiply";
      return "divide";
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse,
  };
})();
