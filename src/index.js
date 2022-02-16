
// class Hello extends React.Component {
//     render(){
//         return <div>Hello Component</div>
//     }
// }

// class Header extends React.Component {
//     render(){
//         return <div>Header Component</div>
//     }
// }


// class Footer extends React.Component {
//     render(){
//         return(
//         <div>
//             Footer Component 
//             <span>MOHAMMED</span>
//         </div>
//         )
//     }
// }


class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Header/>
                <ListItems/>
                <AddItem/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return <header>Header Tag</header>
    }
}


class ListItems extends React.Component{
    render(){
        return(
            <div>
            ListItems Component
                <Item/>
            </div>
            )
    }
}

class Item extends React.Component{
    render(){
        return <div>Item</div>
    }
}


class AddItem extends React.Component{
    render(){
        return(
            <form>
                <input type="text"/>
                <input type="submit"/>
            </form>
            )
    }
}


// let content = (
//     <div className=''>
//         <p>THIS IS P</p>
//         <Hello/>
//         <Header/>
//         <Footer/>   
//     </div>
// );

// ReactDOM.render(content,document.getElementById("app")) 
ReactDOM.render(<App/>,document.getElementById("app")) 