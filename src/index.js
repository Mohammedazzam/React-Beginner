
// StateFull Comp
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            name:'',
            option:'',
            submit:false
        }
        this.handleChange = this.handleChange.bind(this) //عائدة عليها thisوخلي ال bind هذا من خلالها بغير الكونتيكست من خلال ال
        this.handleSubmit = this.handleSubmit.bind(this) //عائدة عليها thisوخلي ال bind هذا من خلالها بغير الكونتيكست من خلال ال
    }

    handleChange(e){
        this.setState({
            [e.target.id]:e.target.value,
            submit:false  
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            submit:true
        })
    }
    render(){
        console.log(this.state)
        return(
            <div className="app">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} id="name"/>
                    <select onChange={this.handleChange} id="option">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="submit"/>
                    {this.state.submit && <div>
                        {this.state.name}
                        {this.state.option}
                    </div>}
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