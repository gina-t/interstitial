import ResourceCard from "../components/ResourceCard"
import GridPattern from "../components/GridPattern"
import { GradientBackground } from "../components/Gradient"

const ResourcesPage = () => {
  return (
    <div className='relative min-h-screen'>
      <GridPattern />
      <GradientBackground />
      <div className='relative z-0 px-6 py-24'>
        <ResourceCard />
      </div> 
    </div>
  )
}

export default ResourcesPage

