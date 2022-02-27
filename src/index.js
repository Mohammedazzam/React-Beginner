
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[],
            item:''
        }
        this.changeInputVal = (e) =>{
            this.setState({
                item:e.target.value
            })
        }

        this.submitForm = (e) =>{
            e.preventDefault();
            let products = [...this.state.products, this.state.item]
            this.setState({
                products,
                item:''
            })
        }
    }
    render(){
        // console.log(this.state.products)
        return(
            <div className="app">
            {/* {this.state.item} */}
                <Header />
                <ListItems products={this.state.products}/>
                <AddItem
                    changeInput={this.changeInputVal} 
                    saveData={this.submitForm}
                    item = {this.state.item}
                    />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <header>
                Header
            </header>
        )
    }
}


class ListItems extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.products.map(product => <Item item={product}/>)
                }
            </div>
            )
    }
}

class Item extends React.Component{
    render(){
        return<div> {this.props.item} </div>
    }
}


class AddItem extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.saveData}>
                <input type="text" onChange={this.props.changeInput} value={this.props.item}/>
                <input type="submit"/>
            </form>
            )
    }
}


ReactDOM.render(<App/>,document.getElementById("app")) 