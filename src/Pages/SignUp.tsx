import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Costa'
            }
        })
    }

    return (
        <div>
            Tela SignUp de {state.user.name} que tem {state.user.age} anos.
            <button onClick={handleChangeName}>Trocar nome para Costa</button>
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    )
}