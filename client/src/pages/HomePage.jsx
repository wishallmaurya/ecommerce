import React from 'react'
import Layout from '../components/Layout/Layout'
import {useAuth} from '../context/auth'
import { Link } from 'react-router-dom'

const HomePage = () => {
 const [auth,setAuth]=useAuth();
 
  return (
    <Layout>
      Home Page
      <pre>{JSON.stringify(auth,null,4)} </pre>
      <Link to="/dashboard">Go to Dashboard</Link>
    </Layout>

  )
}

export default HomePage
