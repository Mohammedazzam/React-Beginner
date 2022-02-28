
// StateFull Comp
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            items:[
                {id:1, name:'product1'},
                {id:2, name:'product2'},
                {id:3, name:'product3'}
            ]
        }
    }
    render(){
        return(
            <div className="app">
                {this.state.items.map(item =><div key={item.id} > {item.name}</div>)}
                <Item/>
            </div>
        )
    }
}

// StateLess
const Item = () => {
    return (<div>Item Function Component</div>)
}

ReactDOM.render(<App/>,document.getElementById("app")) 