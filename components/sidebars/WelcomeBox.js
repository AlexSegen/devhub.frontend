import Link from 'next/link';
import { useContext} from 'react'

import { AuthContext } from '../../context/authContext';

const WelcomeBox = () => {

    const { Logout, user, isAuthenticated } = useContext(AuthContext);

    return (
        <div className={`dh__box`}>
            <h6><strong><span className="text-primary">DevHub Community</span> is a community with amazing developers</strong></h6>
            <p>We're a place where coders share, stay up-to-date and grow their careers.</p> 

            {
                !isAuthenticated && (

                    <div>
                        <Link href="/create-account">
                            <a className="btn btn-primary d-block mb-2">Create Account</a>
                        </Link>
                        <Link href="/login">
                            <a className="btn btn-link text-primary d-block">Log in</a>
                        </Link>
                    </div>

                )
            }

        </div>
            
    )
}

export default WelcomeBox;