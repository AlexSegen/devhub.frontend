import Link from 'next/link'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext';

import Layout from '../components/global/Layout'
import styles from './login.module.scss'

const initialState = {email: "", password: ""};

const Login = () => {

    const [user, setUser] = useState(initialState);

    const { Register, loading, error } = useContext(AuthContext);

    const handleField = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /* if (!user.email || !user.password || !user.first_name || !user.last_name)
            return; */

        Register(user);

    }

    return ( 
        <Layout location="login" grid="auth">
            <div className={`dh__box ${styles.login}`}>
                <h1 className={styles.title}>Welcome to DevHub Community</h1>
                <p className={styles.intro}>A place with amazing developers</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input onChange={handleField} className="form-control" type="text" name="first_name" id="first_name"/>
                        <span className="help-text"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input onChange={handleField} className="form-control" type="text" name="last_name" id="last_name"/>
                        <span className="help-text"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleField} className="form-control" type="email" name="email" id="email"/>
                        <span className="help-text"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleField} className="form-control" type="password" name="password" id="password"/>
                        <span className="help-text"></span>
                    </div>
                    <div className="form-group text-center">
                        <button disabled={loading} type="submit" className="btn btn-primary w-100">Continue</button>
                    </div>

                    {
                        error && <div className="alert alert-danger text-center">
                                    {error}
                                </div>
                    }

                </form>

            </div>
        </Layout>
     );
}

export default Login;