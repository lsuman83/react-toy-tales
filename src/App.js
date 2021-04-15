import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleSubmit = (event) => {
    <ToyContainer />
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })

    this.handleSubmit()
  }

  componentDidMount() {
    return fetch('http://localhost:3001/toys')
            .then(resp => resp.json())
            .then(data => {
              this.setState({
                toys: data
              })
            })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
              <ToyForm handleClick={this.handleClick.bind(this)}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} />
      </>
    );
  }

}

export default App;
