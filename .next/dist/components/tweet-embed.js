'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/taronfoxworth/src/hillman-fridays/components/tweet-embed.js';


var callbacks = [];

function addScript(src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = function () {
      return callbacks.forEach(function (cb) {
        return cb();
      });
    };
    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

var TweetEmbed = function (_React$Component) {
  (0, _inherits3.default)(TweetEmbed, _React$Component);

  function TweetEmbed() {
    (0, _classCallCheck3.default)(this, TweetEmbed);

    return (0, _possibleConstructorReturn3.default)(this, (TweetEmbed.__proto__ || (0, _getPrototypeOf2.default)(TweetEmbed)).apply(this, arguments));
  }

  (0, _createClass3.default)(TweetEmbed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var renderTweet = function renderTweet() {
        window.twttr.ready().then(function (_ref) {
          var widgets = _ref.widgets;
          var _props = _this2.props,
              options = _props.options,
              onTweetLoadSuccess = _props.onTweetLoadSuccess,
              onTweetLoadError = _props.onTweetLoadError;

          widgets.createTweetEmbed(_this2.props.id, _this2._div, options).then(onTweetLoadSuccess).catch(onTweetLoadError);
        });
      };

      if (!window.twttr) {
        var isLocal = window.location.protocol.indexOf('file') >= 0;
        var protocol = isLocal ? this.props.protocol : '';

        addScript(protocol + '//platform.twitter.com/widgets.js', renderTweet);
      } else {
        renderTweet();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { className: this.props.className, ref: function ref(c) {
          _this3._div = c;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      });
    }
  }]);

  return TweetEmbed;
}(_react2.default.Component);

TweetEmbed.propTypes = {
  id: _propTypes2.default.string,
  options: _propTypes2.default.object,
  protocol: _propTypes2.default.string,
  onTweetLoadSuccess: _propTypes2.default.func,
  onTweetLoadError: _propTypes2.default.func,
  className: _propTypes2.default.string
};

TweetEmbed.defaultProps = {
  protocol: 'https:',
  options: {},
  className: null
};

exports.default = TweetEmbed;