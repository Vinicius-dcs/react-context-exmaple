import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowData } from './Pages/ShowData';
import { SignUp } from './Pages/SignUp';

const App = () => {
    return (
        <BrowserRouter>
            <h1>Título da Página</h1>
            <hr />

            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/exibir" element={<ShowData />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;