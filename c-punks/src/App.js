import React, { Component } from 'react';
import './App.css';
import Header from "./Header";

class App extends Component {

    constructor( props ){
        super( props );
        this.state = { show : false };

        this.toggleDiv = this.toggleDiv.bind(this);
        this.toggleDivTwo = this.toggleDivTwo.bind(this);
        this.toggleDivThree = this.toggleDivThree.bind(this);
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    };

    toggleDivTwo = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    };

    toggleDivThree = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    };

    render() {
        return (
            <div className="App">
                <Header />
                <button onClick={ this.toggleDiv }>Toggle div 1</button>
                { this.state.show && <Box /> }
                <button onClick={ this.toggleDivTwo }>Toggle div 2</button>
                { this.state.show && <BoxTwo /> }
                <button onClick={ this.toggleDivThree }>Toggle div 3</button>
                { this.state.show && <BoxThree /> }
            </div>
        );
    }
}

class Box extends Component{
    render(){
        return(
            <div>
              <h1><span>We<br/></span> Make.<br/><span>Digital<br/></span> Products.</h1>
            </div>
        )
    }
}

class BoxTwo extends Component{
    render(){
        return(
            <div>
                <h2><span>About us.<br/></span> MakeReign is a design studio. We focus on delivering digital products that work beautifully. Simple.</h2>
            </div>
        )
    }
}

class BoxThree extends Component{
    render(){
        return(
            <div>
                <h2><span>Featured.<br/></span> We`ve made a few thing, check out our favorites.</h2>
            </div>
        )
    }
}

export default App;