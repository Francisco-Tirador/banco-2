import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch,Redirect } from 'react-router-dom'
import loanding from '../assets/icons/loading.png'


const ProtectRoutes = ({ children, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const User=useSelector((slice)=>slice.usuario)

  useEffect(() => {
    console.log(User)
    const simulateAuthCheck = async () => {
      setIsLoading(true); 
      try {
      
        await new Promise((resolve) => setTimeout(resolve, 1000));

       
        const userIsAuthenticated = User?true:false; 
      
        setIsAuthenticated(userIsAuthenticated);
      } catch (error) {
        console.error('Error durante la validación:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    simulateAuthCheck();
  }, []);

  if (isLoading) {
    return <div className='w-full h-[100vh] flex justify-center items-center'>
        <img src={loanding} className='animate-spin' alt="spinner carga" />
    </div>;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : ( 
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};


export default ProtectRoutes