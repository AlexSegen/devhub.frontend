import Link from 'next/link'
import Layout from '../components/global/Layout'

const Unauthorized = () => {

    return ( 
        <Layout grid="auth">
            <div className="p-5 text-center">
                <h2>Hold up!</h2>
                <p>You must log in first</p>
                <Link href="/login">
                    <a className="btn btn-primary">Log in</a>
                </Link>
            </div>
        </Layout>
     );
}

export default Unauthorized;