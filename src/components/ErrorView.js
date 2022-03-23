import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const ErrorView = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [count, setCount] = useState(6);

    setTimeout(() => {        
        if(count === 0 && location.pathname !== '/'){
            navigate('/');
        }else{
          setCount( count - 1);
        }
    }, 1000);

  return (
    <div className='container-error-view'>
        <Typography variant='h3' className='text-error-view'>Something is wrong :-(</Typography>
        <Typography variant='h4' className='text-error-view'>You will be redirected in {count} seconds</Typography>   
    </div>
  )
}
