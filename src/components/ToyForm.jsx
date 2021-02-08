import React, { Component } from 'react';

class ToyForm extends Component {
state = {
  name: "",
  image: ""
}

changeHandler = (e) => {
  console.log("value", e.target.value)
  console.log("name", e.target.name)

  this.setState({
    [e.target.name]: e.target.value
  })
  
}

handleSubmit = (e) => {
  console.log("this form is submitted")
  e.preventDefault()
  //format data
  let newToy = {
    name: this.state.name,
    image: this.state.image,
    likes: 0
  }
  //make request package for fetch
  let reqPackage = {
    headers:{
      "Content-Type":"application/json"
    },
    method: "POST",
    body: JSON.stringify(newToy)
  }
  //make fetch
  fetch('http://localhost:3000/toys', reqPackage)
  .then(res=>res.json())
  .then(postedToy => {
    //send data 'up to App.js'
    this.props.addToy(postedToy)
  })


}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.changeHandler} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.changeHandler} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
