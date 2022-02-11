"use strict";

// var title = "test";

// var ele = (
//     <div>
//         <h2>This Is {title ? title : "Title"} item</h2>
//         <span>{title && "Yes"}</span>
//     </div>
// )


var number = 0;

var increse = function increse() {
    number++;
    console.log("number", number);
    render();
};

function render() {
    var ele = React.createElement(
        "div",
        null,
        "The Number ",
        number,
        React.createElement(
            "button",
            { onClick: increse },
            "Add One"
        )
    );

    ReactDOM.render(ele, document.getElementById("app"));
}

render();
