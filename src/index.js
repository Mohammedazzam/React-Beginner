
// StateFull Comp
class App extends React.Component{
    render(){
        return(
            <div className="app">
                App
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