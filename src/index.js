// var title = "test";

// var ele = (
//     <div>
//         <h2>This Is {title ? title : "Title"} item</h2>
//         <span>{title && "Yes"}</span>
//     </div>
// )


var number = 0;

var increse = () =>{
    number++;
    console.log("number", number)
    render()
}

function render(){
    var ele = (
        <div>
            The Number {number}
            <button onClick={increse}>Add One</button>
        </div>
    )


ReactDOM.render(ele, document.getElementById("app"))
}

render();
