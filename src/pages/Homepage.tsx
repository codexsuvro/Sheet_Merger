import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from "../components/Footer"

const Homepage = () => {
    return (
        <div className='h-screen overflow-hidden flex flex-col'>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default Homepage
