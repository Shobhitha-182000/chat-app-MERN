// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Home from './components/pages/Home/Home';
import Chat from './components/Conversations/Chat';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext, AuthContextProvider } from './context/AuthContext';
import './index.css';

function App() {
    const { authUser } = useAuthContext();

    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
                <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <Signup />} />
                <Route path='/chat' element={authUser ? <Chat /> : <Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    );
}

const AppWrapper = () => (
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);

export default AppWrapper;
