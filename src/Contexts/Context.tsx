import { createContext } from 'react';

type ContextType = {
    name: string;
    age: number;
}

interface IContextProps {
    children: React.ReactNode;
}

const initialState = {
    name: 'Vinicius',
    age: 21
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<IContextProps> = ({children}) => {
    return (
        <Context.Provider value={initialState}>{children}</Context.Provider>
    )
}