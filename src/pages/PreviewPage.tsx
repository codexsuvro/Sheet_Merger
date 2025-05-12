import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TablePart from '../components/TablePart'

const PreviewPage = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar />
      <TablePart />
      <Footer />
    </div>
  )
}

export default PreviewPage
