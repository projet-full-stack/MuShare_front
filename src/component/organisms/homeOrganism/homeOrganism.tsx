import Wrapper from "@/component/atoms/Container/Wrapper"
import HomeMolecule from "@/component/molecules/homeMolecule/homeMolecule"
import ReaderMolecule from "@/component/molecules/readerMolecule/readerMolecule"
import RecentMusicsMolecule from "@/component/molecules/recentMusicsMolecule/RecentMusicsMolecule"

function HomeOrganism() {
    return (
        <>
          <HomeMolecule />
          <RecentMusicsMolecule />
          <ReaderMolecule/>

        </>
    )
}

export default HomeOrganism