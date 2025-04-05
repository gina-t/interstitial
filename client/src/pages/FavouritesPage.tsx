import Favourites from '../components/Favourites'
import GridPattern from '../components/GridPattern'
import { GradientBackground } from '../components/Gradient'
import CalorieTracker from '../components/CalorieTracker'

const FavouritesPage = () => {
  return (
    <div className='relative min-h-screen'>
      <GridPattern />
      <GradientBackground />
      <div className='relative z-0 px-6 py-16'>
        <Favourites />
        <CalorieTracker />
      </div> 
    </div>
  )
}

export default FavouritesPage