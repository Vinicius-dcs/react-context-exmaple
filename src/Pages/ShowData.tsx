import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Contexts/Context';

export const ShowData = () => {
    const {name, age} = useContext(Context);

    return (
        <div>
            Tela ShowData {name}
            <br />
            <Link to="/">Ir para SignUp</Link>
        </div>
    )
}