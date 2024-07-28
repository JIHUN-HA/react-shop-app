import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
