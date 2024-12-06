import React, { useEffect, useState } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'


const ProtectRoutes = ({ children, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para la simulación de carga
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  // Simula la validación del usuario (puedes reemplazar esta lógica con una API real)
  useEffect(() => {

    // const simulateAuthCheck = async () => {
    //   setIsLoading(true);
    //   try {
      
    //     await new Promise((resolve) => setTimeout(resolve, 2000));

       
    //     const userIsAuthenticated = false; 
    //     setIsAuthenticated(userIsAuthenticated);
    //   } catch (error) {
    //     console.error('Error durante la validación:', error);
    //   } finally {
    //     setIsLoading(false); // Termina el estado de carga
    //   }
    // };

    simulateAuthCheck();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
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