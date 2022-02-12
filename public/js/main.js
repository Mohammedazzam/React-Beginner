"use strict";

// class Hello extends React.Component {
//     render(){
//         //return JSX
//         return <div>Hello Component</div>
//     }
// }

// class Header extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Header Component</h1>
//                 <span>Header 1</span>
//                 <span>Header 2</span>
//             </div>
//         )
//     }
// }

// let content  = (
//     <div className= "">
//         <Hello/>
//         <p>This Is P</p>
//         <Header/>
//     </div>
// )

// ReactDOM.render(content, document.getElementById("app"))

/****************************************/

var number = 0;

var increse = function increse() {
    number++;
    // console.log(number)
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
            " add one"
        )
    );
    ReactDOM.render(ele, document.getElementById("app"));
}
render();
