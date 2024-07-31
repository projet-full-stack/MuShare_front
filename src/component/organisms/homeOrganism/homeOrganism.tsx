import Wrapper from "@/component/atoms/Container/Wrapper"
import HomeMolecule from "@/component/molecules/homeMolecule/homeMolecule"
import RecentMusicsMolecule from "@/component/molecules/recentMusicsMolecule/RecentMusicsMolecule"
import ReaderOrganisme from "../readerOrganism/readerOrganism"

function HomeOrganism() {
    return (
        <>
          <RecentMusicsMolecule />
          <ReaderOrganisme/>

        </>
    )
}

export default HomeOrganism