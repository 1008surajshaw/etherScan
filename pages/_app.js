import '@/styles/globals.css'

//INTERNAL IMPORT
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {

  return <div>
           <NavBar/>
           <Component {...pageProps} />
           <Footer/>
        </div> 
}
