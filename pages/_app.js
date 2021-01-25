import { useEffect } from 'react';

//Services
import ApiService from '../services/api.service'
import { TokenService } from '../services/storage.service'

//Context
import AuthContextProvider from '../context/authContext'

import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  useEffect(()=> {
    ApiService.init(process.env.NEXT_PUBLIC_ROOT_API)
    // If token exists set header
    if (TokenService.getToken()) {
      ApiService.setHeader()
    }
  }, [])

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
