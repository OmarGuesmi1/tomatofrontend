import { createContext } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const contexteValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contexteValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
