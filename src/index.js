
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


// var number = 0;
// var increse = () => {
//     number++
//     // console.log(number)
//     render()
// }

// function render(){
//     var ele =(
//         <div>
//             The Number {number}
//             <button onClick={increse}> add one</button>
//         </div>
//     )
//     ReactDOM.render(ele, document.getElementById("app"))
// }
// render()


/****************************************/

// var myInputVal;

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(myInputVal)
// };

// var obj ={
//     name:"test",
//     size:12,
// }


// let counter = (
//     <div>
//         <form onSubmit={handelFormSubmit}>
//             <input type="text" onChange={HandelInputChange} />
//             <input type="submit" />
//         </form>
//         {obj.name + obj.size}
//     </div>
// )

// ReactDOM.render(counter,document.getElementById("app"))





/******************************/

// var myInputVal;

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(myInputVal)
// };


// let counter = (
//     <div>
//         <form onSubmit={handelFormSubmit}>
//             <input type="text" onChange={HandelInputChange} />
//             <input type="submit" />
//         </form>

//     </div>
// )

// ReactDOM.render(counter,document.getElementById("app"))






/*************************/

// var myInputVal;

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(myInputVal)
// };


// var myarr = [1,2,3]
// myarr.map((ele) => {
//     console.log(ele)
// })
// let counter = (
//     <div>
//         <form onSubmit={handelFormSubmit}>
//             <input type="text" onChange={HandelInputChange} />
//             <input type="submit" />
//         </form>

//     </div>
// )

// ReactDOM.render(counter,document.getElementById("app"))



/**********************/

// var myInputVal;

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(myInputVal)
// };


// var myarr = [1,2,3]
// myarr.map((ele) => {
//     console.log(ele)
// })
// let counter = (
//     <div>
//         <form onSubmit={handelFormSubmit}>
//             <input type="text" onChange={HandelInputChange} />
//             <input type="submit" />
//         </form>
//     {
//         myarr.map((ele) => {
//     console.log(ele)
// })
//     }

//     </div>
// )

// ReactDOM.render(counter,document.getElementById("app"))



/**************es6 تعامل الاوبجكت في ال **************/

// var myInputVal;

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(myInputVal)
// };


// var obj ={
//     name:"test",
//     size:12
// }
// let counter = (
//     <div>
//         <form onSubmit={handelFormSubmit}>
//             <input type="text" onChange={HandelInputChange} />
//             <input type="submit" />
//         </form>
//     {obj.name + obj.size}
//     </div>
// )

// ReactDOM.render(counter,document.getElementById("app"))


/*****************************/


// var myInputVal;
// // var allItems = [1,2,3];
// var allItems = [];

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     // console.log(myInputVal)
//     allItems.push(myInputVal);
//     // console.log(allItems)
//     render()
// };

// function render(){
//     let counter = (
//         <div>
//             <form onSubmit={handelFormSubmit}>
//                 <input type="text" onChange={HandelInputChange} />
//                 <input type="submit" />
//             </form>
    
//         <ul>
//             {allItems.length ? allItems.map( (item) => <li> {item} </li>) : ''}
//         </ul>
    
//         </div>
//     )
    
//     ReactDOM.render(counter,document.getElementById("app"))
    
// }
// render()


/***********************/


// var myInputVal;
// // var allItems = [1,2,3];
// var allItems = [];

// var HandelInputChange = (e) => {
//     myInputVal = e.target.value
//     // console.log(e.target.value)
// }

// var handelFormSubmit = (e) => {
//     e.preventDefault();
//     // console.log(myInputVal)
//     allItems.push(myInputVal);
//     // console.log(allItems)
//     e.target.elements[0].value = "" //هذا مسسؤول عن تفريغ الانبوت
//     render()
// };

// function render(){
//     let counter = (
//         <div>
//             <form onSubmit={handelFormSubmit}>
//                 <input type="text" onChange={HandelInputChange} />
//                 <input type="submit" />
//             </form>
    
//         <ul>
//             {allItems.length ? allItems.map( (item) => <li> {item} </li>) : ''}
//         </ul>
    
//         </div>
//     )
    
//     ReactDOM.render(counter,document.getElementById("app"))
    
// }
// render()





/******************مثال جديد******************/

let toggle = false;
// let toggle = true;

var toggleText = () => {
    toggle = !toggle;
    render();
};

function render(){
    console.log(toggle)
    let counter = (
        <div>
            <button onClick = {toggleText}>Toggle Text</button>
            {toggle ? <p>This Is Text</p> : ""}
        </div>
    )
    
    ReactDOM.render(counter,document.getElementById("app"))
    
}
render()