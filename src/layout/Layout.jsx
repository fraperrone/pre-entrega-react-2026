import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Layout() {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
