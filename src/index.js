
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[],
            item:''
        }
        //الطريقة الثانية لعمل الفانكشن
        this.changeInputVal = this.changeInputVal.bind(this)

        // this.submitForm = this.submitForm.bind(this)
        // this.deleteItem = this.deleteItem.bind(this)

        this.submitForm = (e) =>{
            e.preventDefault();
            let products = [...this.state.products, {
                id: Math.random(),
                name: this.state.item
            }]
            this.setState({
                products,
                item:''
            })
        }
        this.deleteItem = (id) => {
            let products = [...this.state.products]
            let newProducts = products.filter(product => product.id != id)
            this.setState({
                products:newProducts
            })
        }
    }
            
    //الطريقة الثانية لعمل الفانكشن
    changeInputVal(e) {
        this.setState({
            item:e.target.value
        })
    }

    render(){
        console.log(this.state.products)
        return(
            <div className="app">
            {/* {this.state.item} */}
                <Header />
                <ListItems products={this.state.products} removeItem={this.deleteItem}/>
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
        console.log(this.props)
        return(
            <div>
                {
                    this.props.products.map(product =>
                    <Item
                    id={product.id} 
                    item={product.name} 
                    removeItem={this.props.removeItem}/>)
                }
            </div>
            )
    }
}

class Item extends React.Component{
    render(){
        return<div> {this.props.item} <button onClick={() => this.props.removeItem(this.props.id)}>Delete</button> </div>
    }
}


class AddItem extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.saveData}>
                <input type="text" 
                onChange={this.props.changeInput} 
                value={this.props.item}/>
                <input type="submit"/>
            </form>
            )
    }
}


ReactDOM.render(<App/>,document.getElementById("app")) 