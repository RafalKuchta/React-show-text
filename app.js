class App extends React.Component {
    state = {
        value: ""
    }

    inpChange = (e) => {
        this.setState({
            value: e.target.value
        })
  
    }

    btnChange = () => {
        this.setState({
            value: ""
        })
    }

    render(){
        return (
    <>
        <input value={this.state.value} onChange={this.inpChange} type="text"/>
        <button onClick={this.btnChange}>Reset</button>
        <h1>{this.state.value.toUpperCase()}</h1>
    </>
        )}
}

ReactDOM.render(<App/>, document.getElementById("root"))