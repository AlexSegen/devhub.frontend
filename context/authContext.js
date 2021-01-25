import React, { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router'
import { authService } from "../services/auth.service";
import { TokenService, SetUser } from '../services/storage.service'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const router = useRouter()

    const [user, setUser] = useState({ first_name: "" });
    const [token, setToken] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const Login = ({ email, password }) => {

        setLoading(true);
        setError(false);

        authService.login(email, password).then(data => {
            setLoading(false);
            setUser(data.user);
            setToken(data.token);
            setAuthenticated(true);
            router.push('/');

        }).catch(err => {
            setLoading(false);

            if (err.response) {
                setError(err.response.data.message)
                return;
            }

            setError(err.message)
        });

    };

    const Register = ({ first_name, last_name, email, password }) => {

        setLoading(true)
        setError(false)

        authService.register({ first_name, last_name, email, password }).then(() => {
            setLoading(false)
            router.push("/login")

        }).catch(error => {
            setLoading(false);

            if (error.data && error.data.data && error.data.data.length > 0) {
                setError(error.data.data[0].msg);
                return;
            }

            setError(error.message)

        });

    };

   const Logout = () => {
        TokenService.removeToken();
        SetUser.removeUser();
        setAuthenticated(false);
        router.push("/")
    }

    useEffect(() => {
        setAuthenticated(!!TokenService.getToken());
        setUser(SetUser.getUser())
        setToken(TokenService.getToken())
    }, [])


    return (
        <AuthContext.Provider value={{ Login, Logout, Register, isAuthenticated, user, token, loading, error }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;