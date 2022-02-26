import { createContext, useState } from 'react';

export let LoginContext = createContext(null)

 const ContextProvider = ({children}) => {

    const [ account, setaccount ] = useState('')
    
    return (
        <LoginContext.Provider value={{ account, setaccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider

