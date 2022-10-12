import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Contexts/Context';

export const ShowData = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <div>
            Tela ShowData {state.user.name}
            <br />
            <Link to="/">Ir para SignUp</Link>
        </div>
    )
}