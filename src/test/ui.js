define(['pool/util/image'], function (util) {

  util = util && util.hasOwnProperty('default') ? util['default'] : util;

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".footer-setting a,\n.footer-setting img {\n  display: block;\n}\n.footer-setting-wrap {\n  margin: 15px auto 60px;\n  width: 1205px;\n  overflow: hidden;\n}\n.footer-setting-left {\n  float: left;\n}\n.footer-setting-left img {\n  width: 960px;\n  height: 130px;\n}\n.footer-setting-right {\n  float: right;\n}\n.footer-setting-right img {\n  width: 225px;\n  height: 130px;\n}\n";
  styleInject(css);

  var Other = function Other(props) {

    var text = props.text;
    return React.createElement("div", {
      className: "other"
    }, text);
  };

  var UI = function UI(props) {
    var list = props.list;

    var _React$useState = React.useState(list[0].linkUrl),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        leftLink = _React$useState2[0],
        setleftLink = _React$useState2[1];

    var _React$useState3 = React.useState(list[0].picUrl),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        leftUrl = _React$useState4[0],
        setleftUrl = _React$useState4[1];

    var _React$useState5 = React.useState(list[1].linkUrl),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        rightLink = _React$useState6[0],
        setrightLink = _React$useState6[1];

    var _React$useState7 = React.useState(list[1].picUrl),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        rightUrl = _React$useState8[0],
        setrighUrl = _React$useState8[1];

    return React.createElement("div", {
      className: "footer-setting"
    }, React.createElement(Other, {
      text: util
    }), list.length && React.createElement("div", {
      className: "footer-setting-wrap"
    }, leftUrl && React.createElement("div", {
      className: "footer-setting-left"
    }, React.createElement("a", {
      href: leftLink,
      target: "_blank;"
    }, React.createElement("img", {
      src: leftUrl,
      alt: "\u5E7F\u544A\u4F4D"
    }))), rightUrl && React.createElement("div", {
      className: "footer-setting-right"
    }, React.createElement("a", {
      href: rightLink,
      target: "_blank;"
    }, React.createElement("img", {
      src: rightUrl,
      alt: "\u5E7F\u544A\u4F4D"
    })))));
  };

  return UI;

});
