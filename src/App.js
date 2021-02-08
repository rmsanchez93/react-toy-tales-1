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

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    //react function already created for you 
    //similar to DOMContentLoaded 
    console.log('App in ComponentDidMount')

    fetch('http://localhost:3000/toys')
    .then(res=> res.json())
    .then(data => {

      this.setState({
        toys: data
      })

    })

  }

  // fetchBefore = () =>{
  // }

  addToy = (toy) => {
    //logic for adding toy to state
    console.log('toy is "added"', toy)
    this.setState({
      toys: [...this.state.toys, toy]
    })
  }

  donateToy = (donatedToy) => {
    console.log("toy was donated", donatedToy)
    fetch('http://localhost:3000/toys/'+donatedToy.id, {method: 'DELETE'})
    .then(res=>res.json())
    .then(()=>{
      this.setState({
        toys: this.state.toys.filter((toy)=> toy != donatedToy )
      })
    })
  }

  render(){
    console.log('start of render in App')
    // this.fetchBefore()
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} donateToy={this.donateToy}/>
      </>
    );
  }

}

export default App;
