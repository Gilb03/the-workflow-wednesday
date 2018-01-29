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

var _jsxFileName = '/Users/fox/src/hillman-fridays/components/layout.js';


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
    css: 'body{font-family:"franklin-gothic-urw"}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV1QixBQUcyQyxtQ0FBTyIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZm94L3NyYy9oaWxsbWFuLWZyaWRheXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVHlwZWtpdCBmcm9tICdyZWFjdC10eXBla2l0JztcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57J0hpbGxtYW4gRnJpZGF5cyd9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjQuMy9jc3MvYnVsbWEuY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lDR1VHODhZVmlNMmhfck1xQTJZV0RoaXRwN0dvb1hRN2dcIj48L3NjcmlwdD5cbiAgICAgIDxUeXBla2l0IGtpdElkPVwiZ3pjN3hpeVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogXCJmcmFua2xpbi1nb3RoaWMtdXJ3XCI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=components/layout.js */'
  }));
};

exports.default = Layout;