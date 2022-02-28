'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// StateFull Comp
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: '',
            option: ''
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this); //عائدة عليها thisوخلي ال bind هذا من خلالها بغير الكونتيكست من خلال ال
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleInputChange',
        value: function handleInputChange(e) {
            this.setState({
                name: e.target.value
            });
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(e) {
            this.setState({
                option: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state);
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(
                    'form',
                    null,
                    React.createElement('input', { type: 'text', onChange: this.handleInputChange }),
                    React.createElement(
                        'select',
                        { onChange: this.handleSelectChange },
                        React.createElement(
                            'option',
                            { value: '1' },
                            '1'
                        ),
                        React.createElement(
                            'option',
                            { value: '2' },
                            '2'
                        ),
                        React.createElement(
                            'option',
                            { value: '3' },
                            '3'
                        )
                    ),
                    React.createElement('input', { type: 'submit' })
                )
            );
        }
    }]);

    return App;
}(React.Component);

// StateLess


var Item = function Item() {
    return React.createElement(
        'div',
        null,
        'Item Function Component'
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
