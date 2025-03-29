import LearnMoreCard from "../components/LearnMoreCard"
import GridPattern from "../components/GridPattern"
import { GradientBackground } from "../components/Gradient"

const LearnMorePage = () => {
  return (
    <div className='relative min-h-screen'>
      <GridPattern />
      <GradientBackground />
      <div className='relative z-0 px-6 py-24'>
        <LearnMoreCard />
      </div> 
    </div>
  )
}

export default LearnMorePage