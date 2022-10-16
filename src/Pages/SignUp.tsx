import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: event.target.value
            }
        });
    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: event.target.value
            }
        });
    }

    return (
        <div>
            <h3>Tela SignUp (Tema: {state.theme.status})</h3>

            <input type="text" placeholder='Digite um nome' value={state.user.name} onChange={handleNameChange} />
            <input type="text" placeholder='Digite uma idade' value={state.user.age} onChange={handleAgeChange} />

            <br />

            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    )
}