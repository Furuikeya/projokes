import React from 'react';
import 'tachyons';


const JokeBox = ({ joke, setup, delivery }) => {
	return (
		<div className='joke f3 bg-gold'>
          <div>{joke}</div>
          <div>{setup}</div>
          <div>{delivery}</div>  
        </div>
	)
}

export default JokeBox;