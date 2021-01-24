import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/global/Layout'
import styles from './login.module.scss'


const initialState = {email: "", password: ""};

const Join = () => {

    const [user, setUser] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleField = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.email || !user.password)
            return;


            setIsLoading(true)

        setTimeout(() => {
                console.log('user', user);
                setIsLoading(false)
        }, 1000);
    }

    return ( 
        <Layout location="register" grid="auth">
            <div className={`dh__box ${styles.login}`}>
                <h1 className={styles.title}>Welcome to DevHub Community</h1>
                <p className={styles.intro}>A place with amazing developers</p>

                <form onSubmit={handleSubmit}>
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
                        <button disabled={isLoading} type="submit" className="btn btn-primary w-100">Continue</button>
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

export default Join;