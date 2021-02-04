
import {useEffect} from 'react';
import Link from 'next/link'
import Layout from '../components/global/Layout'
import Router from 'next/router';

const login = '/login?redirected=true'; // Define your login route address.

const Redirect = () => {

    useEffect(() => {
        Router.replace(login);
    }, [])

    return ( 
        <Layout grid="auth">
            <div className="text-center">
                <h4>Hold on!</h4>
                <p>You are now being redirected. If it doesn't work, please <Link href="/"><a>click here</a></Link></p>
            </div>
        </Layout>
     );
}

export default Redirect;