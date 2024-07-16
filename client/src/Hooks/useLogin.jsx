// Hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/user/login', { email, password }, { withCredentials: true });
            setAuthUser(response.data.user);
            localStorage.setItem('chat-user', JSON.stringify(response.data.user));
            toast.success('Successfully logged in!');
            console.log(response.data)
            navigate('/home');
        } catch (error) {
            toast.error(`Error: ${error.response ? error.response.data.message : error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;
