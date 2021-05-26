import { createContext, useContext, useReducer} from "react";

//prepares the data layer
export const BasketContext = createContext();

//wrap our app and provide the data layer
export const BasketContextProvider = ({ reducer, initialState, children }) =>{
    return(
        <BasketContext.Provider value= {useReducer(reducer, initialState)}>
            {children}
        </BasketContext.Provider>
    )
    
}


//pull information from the data layer
export const useStateValue = () =>  useContext(BasketContext); 
