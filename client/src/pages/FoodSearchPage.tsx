import { GradientBackground } from '../components/Gradient'
import GridPattern from '../components/GridPattern'
import FoodSearch from '../components/FoodSearch'

const FoodSearchPage = () => {
  return (
    <div className='relative min-h-screen'>
      <GridPattern />
      <GradientBackground />
      <div className='relative z-0 px-6 py-16'>
        <FoodSearch />
      </div> 
    </div>
  )
}

export default FoodSearchPage