// import { createContext, useContext } from 'react';

// export const Session = createContext();
// // export const [session, setSession] = useState({isLogged: false});

// export const useSession = () => {
//   return useContext(Session); // Utiliza "Session" en lugar de "SessionContext"
// };


import { createContext, useContext, useState } from 'react';

export const Empresa = createContext();

export const useSession = () => {
  return useContext(Empresa);
};

export const EmpresaProvider = ({ children }) => {
  const [empresas, setEmpresas] = useState({
    isLogged: false,
    user: null, // Define el objeto user como null inicialmente
  });

  return (
    <Empresa.Provider value={{ session, setSession }}>
      {children}
    </Empresa.Provider>
  );
};
