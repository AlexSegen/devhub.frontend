import { useEffect } from 'react';

//Services
import ApiService from '../services/api.service'
import { TokenService } from '../services/storage.service'

//Context
import AuthContextProvider from '../context/authContext'
import BlogContextProvider from '../context/blogContext'

import '../styles/main.scss'

ApiService.init(process.env.NEXT_PUBLIC_ROOT_API)

function MyApp({ Component, pageProps }) {
  useEffect(()=> {
    // If token exists set header
    if (TokenService.getToken()) {
      ApiService.setHeader()
    }
  }, [])

  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <Component {...pageProps} />
      </BlogContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
