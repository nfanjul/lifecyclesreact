import React from 'react';

import './Picture.css';

const picture = (props) => {
  return (
    <div className="Picture">
      <img src={props.picture} alt="Person"/>
    </div>
  )
}

export default picture;