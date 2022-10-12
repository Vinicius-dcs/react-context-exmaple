import { createContext, useReducer } from 'react';
import { UserType, userInitialState, userReducer } from '../Reducers/userReducer';
import { reducerActionType } from '../Types/reducerActionType';

interface Props {
    children: React.ReactNode;
}

type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}


/* type ContextType = {
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
} */