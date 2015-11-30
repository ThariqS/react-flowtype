"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var FlowType = (function (_React$Component) {
	_inherits(FlowType, _React$Component);

	function FlowType() {
		_classCallCheck(this, FlowType);

		_get(Object.getPrototypeOf(FlowType.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(FlowType, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.updateSettings();
			this.updateWidthFont();
			window.addEventListener("resize", this.updateWidthFont.bind(this));
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps() {
			this.updateSettings();
			this.updateFontSize();
		}
	}, {
		key: "updateSettings",
		value: function updateSettings() {
			this.settings = {
				maximum: this.props.maximum || 9999,
				minimum: this.props.minimum || 1,
				maxFont: this.props.maxFont || 9999,
				minFont: this.props.minFont || 1,
				fontRatio: this.props.fontRatio
			};
		}
	}, {
		key: "updateWidthFont",
		value: function updateWidthFont() {
			this.elemWidth = this.refs.textBody.getDOMNode().offsetWidth;
			this.updateFontSize();
		}
	}, {
		key: "updateFontSize",
		value: function updateFontSize() {
			var settings = this.settings;
			var elw = this.elemWidth;
			var width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw;
			var fontBase = width / settings.fontRatio;
			var fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
			fontSize = Math.round(fontSize);
			this.setState({ fontSize: fontSize });
		}
	}, {
		key: "render",
		value: function render() {
			var fontSize = this.state && this.state.fontSize;

			if (isNaN(fontSize)) fontSize = this.props["default"] || null;

			var divStyle = fontSize ? { "fontSize": fontSize + 'px' } : {};

			return _react2["default"].createElement(
				"div",
				{ style: divStyle, ref: "textBody" },
				this.props.children
			);
		}
	}]);

	return FlowType;
})(_react2["default"].Component);

FlowType.propTypes = {
	"default": _react.PropTypes.number,
	fontRatio: _react.PropTypes.number.isRequired,
	maximum: _react.PropTypes.number,
	minimum: _react.PropTypes.number,
	minFont: _react.PropTypes.number,
	maxFont: _react.PropTypes.number
};

exports["default"] = FlowType;
module.exports = exports["default"];
