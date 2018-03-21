'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactTypekit = require('react-typekit');

var _reactTypekit2 = _interopRequireDefault(_reactTypekit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/taronfoxworth/src/hillman-fridays/components/layout.js';


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('title', {
    'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Hillman Fridays'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css', 'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCGUG88YViM2h_rMqA2YWDhitp7GooXQ7g', 'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_reactTypekit2.default, { kitId: 'gzc7xiy', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 259862895,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), children, _react2.default.createElement(_style2.default, {
    styleId: 259862895,
    css: 'body{font-family:"franklin-gothic-urw"}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV1QixBQUcyQyxtQ0FBTyIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGFyb25mb3h3b3J0aC9zcmMvaGlsbG1hbi1mcmlkYXlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFR5cGVraXQgZnJvbSAncmVhY3QtdHlwZWtpdCc7XG5cbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eydIaWxsbWFuIEZyaWRheXMnfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC40LjMvY3NzL2J1bG1hLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5Q0dVRzg4WVZpTTJoX3JNcUEyWVdEaGl0cDdHb29YUTdnXCI+PC9zY3JpcHQ+XG4gICAgICA8VHlwZWtpdCBraXRJZD1cImd6Yzd4aXlcIiAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPC9IZWFkPlxuICAgIHsgY2hpbGRyZW4gfVxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiZnJhbmtsaW4tZ290aGljLXVyd1wiO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=components/layout.js */'
  }));
};

exports.default = Layout;