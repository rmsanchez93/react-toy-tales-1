import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  console.log('ToyContainer')
  return(
    <div id="toy-collection">
      {console.log('toycontainer in RETURN')}
      {/* {console.log(props.toys)} */}
      {props.toys.map((toy)=> <ToyCard toy={toy}  donateToy={props.donateToy}/>)}
    </div>
  );
}

export default ToyContainer;
