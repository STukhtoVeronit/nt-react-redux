class App extends React.Component {
    constructor(props) {
        super(props);
        this.name = 'Pizdos';
    }
    state = {
        name: "rauhn"
    };
    render() {
        return (
            <div className = "app-content">
                <h3>Profile</h3>
                <p>My name is: {this.state.name}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>submit</button>

                </form>
                <button onClick={this.handleClick}>fire</button>
                <button onMouseOver={this.hoverMe}>be nice with me</button>
                <p onCopy={this.Copy}>What we think, we become</p>
            </div>
        )
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      console.log('form submitted', this.state.name);

    };
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    handleClick = (e) => {
        this.setState({name: 'Joji'});
    };
    hoverMe = (e) => {
        console.log(e.pageX);
    };
    Copy = (e) => {
        console.log('you shitty buster!');
    };
}

ReactDOM.render(<App />, document.getElementById('app'));