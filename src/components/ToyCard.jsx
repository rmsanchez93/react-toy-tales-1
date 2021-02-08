import React, { Component } from 'react';

class ToyCard extends Component {

  componentDidMount(){
    console.log('component did mount ToyCard')
  }
  render() {
    console.log('ToyCard in render')
    let {name,  image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button onClick={()=>this.props.donateToy(this.props.toy)}className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
