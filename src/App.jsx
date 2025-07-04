import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MediaItem from './components/MediaItem'
import About from './components/About'
function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <MediaItem />
          <Footer />
        </>
      )
    },
    {
      path: '/About',
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      )
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
