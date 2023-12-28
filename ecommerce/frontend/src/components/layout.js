import React from "react"
import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout


