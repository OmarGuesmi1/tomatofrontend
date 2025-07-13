import { createContext } from 'react'
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {



    const contexteValue ={

    }
    return(
        <StoreContext.Provider value={contexteValue}>
            {props.children}
        </StoreContext.Provider>
    )
}