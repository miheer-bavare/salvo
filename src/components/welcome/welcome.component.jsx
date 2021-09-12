import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './welcome.css';

function Welcome() {
  return (
    <div className='welcome-container'>
      <h1>Sancus</h1>
      <p>A new way to handle transactions</p>
      <div className='welcome-btns'>
        <CustomButton type='submit'> Sign Up </CustomButton>
      </div>
    </div>
  );
}

export default Welcome;