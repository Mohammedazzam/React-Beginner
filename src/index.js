
// StateFull Comp
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            name:'',
            option:''
        }
        this.handleInputChange = this.handleInputChange.bind(this) //عائدة عليها thisوخلي ال bind هذا من خلالها بغير الكونتيكست من خلال ال
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    handleInputChange(e){
        this.setState({
            name:e.target.value
        })
    }
    handleSelectChange(e){
        this.setState({
            option:e.target.value
        })
    }
    render(){
        console.log(this.state)
        return(
            <div className="app">
                <form>
                    <input type="text" onChange={this.handleInputChange}/>
                    <select onChange={this.handleSelectChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

// StateLess
const Item = () => {
    return (<div>Item Function Component</div>)
}

ReactDOM.render(<App/>,document.getElementById("app")) 