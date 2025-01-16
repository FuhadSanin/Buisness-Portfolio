import Footer from "../sections/Footer"
import Navbar from "../sections/Navbar"
import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
