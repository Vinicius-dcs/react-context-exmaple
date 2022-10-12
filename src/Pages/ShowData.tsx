import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Contexts/Context';

export const ShowData = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h3>Tela ShowData</h3>

            {state.user.name &&
                <>
                    Seu nome é: {state.user.name}.
                    <br />
                    Você tem: {state.user.age} anos.
                </>
            }

            {!state.user.name &&
                'Sem informações preenchidas!'
            }

            <br />
            <br />

            <Link to="/">Ir para SignUp</Link>
        </div>
    )
}