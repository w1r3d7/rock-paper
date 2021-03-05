import React from 'react';
import {AiFillWarning} from 'react-icons/ai';


const ErrorIndicator = () => (
    <div className="text-center w-1/3 m-auto flex flex-col justify-center items-center">
      <AiFillWarning size={60} color="red"/>
      <h2>Sorry, we had some technical problems. Please try later.</h2>
    </div>
);

export default ErrorIndicator;
