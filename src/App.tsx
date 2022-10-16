import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowData } from './Pages/ShowData';
import { SignUp } from './Pages/SignUp';
import { Context } from './Contexts/Context';

const App = () => {
    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        if (state.theme.status === 'light') {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: 'dark'
                }
            });
        } else {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: 'light'
                }
            });

        }
    }

    return (
        <BrowserRouter>
            <div style={{
                    backgroundColor: state.theme.status === 'light' ? '#FFF' : '#000',
                    color: state.theme.status === 'light' ? '#000' : '#FFF'}}>
                <h1>Título da Página</h1>
                Tema: {state.theme.status}
                <hr />
                <button onClick={handleSwitchTheme}>Switch Theme</button>

                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/exibir" element={<ShowData />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;