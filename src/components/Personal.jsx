import React from 'react';

export default function Personal(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();

    
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const {values, handleChange} = props;

  return(
    <>
    <h1>enter personal details</h1>
      <div className='input-field'>
      <label htmlFor='firstName'>first name</label>
        <input
          type='text'
          id='firstName'
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          />
      </div>
      <div className='input-field'>
      <label htmlFor='lastName'>last name</label>
        <input
          type='text'
          id='lastName'
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          />
      </div>
      <div className='input-field'>
      <label htmlFor='age'>age</label>
        <input
           type='number'
          id='age'
          onChange={handleChange('age')}
          defaultValue={values.age}
          />
      </div>
      <button className='btn' onClick={back}>back</button>      
       <button className='btn' onClick={next} >next</button>

      
    </>
  )
}