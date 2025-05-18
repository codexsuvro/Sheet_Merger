import Navbar from '../components/Navbar'
import EntityTable from '../components/OnlyPreview'

const OnlyPreviewPage = () => {
    return (
        <div className={`h-screen overflow-hidden flex flex-col`}>
            <Navbar />
            <EntityTable />
        </div>
    )
}

export default OnlyPreviewPage
