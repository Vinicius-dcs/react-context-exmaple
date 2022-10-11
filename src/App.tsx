import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowData } from './Pages/ShowData';
import { SignUp } from './Pages/SignUp';
import { ContextProvider } from './Contexts/Context';

const App = () => {
    return (
        <ContextProvider>
            <BrowserRouter>
                <h1>Título da Página</h1>
                <hr />

                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/exibir" element={<ShowData />} />
                </Routes>
        </BrowserRouter>
        </ContextProvider>
    )
}

export default App;