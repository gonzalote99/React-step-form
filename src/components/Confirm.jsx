import React from 'react';

export default function Confirm(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: {email, firstName, lastName, age}, } = props;

  return(
    <>
    <h1>confirm you data</h1>
      <span>e-mail: {email}</span>
      <span>first name: {firstName}</span>     
      <span>last name: {lastName}</span>
      <span>age: {age}</span>
       <div>
       <button className='btn' onClick={back}>back</button>       <button className='btn' onClick={next}>submit</button>

       </div>
    </>
  );
}