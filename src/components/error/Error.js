import React from 'react';
import './Error.css';

function Error({ element, texto }) {
  return <div>{element ? <small>{texto}</small> : null}</div>;
}

export default Error;
