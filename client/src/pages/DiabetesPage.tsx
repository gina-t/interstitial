import { GradientBackground } from "../components/Gradient";
import GridPattern from "../components/GridPattern";
import Diabetes from "../components/Diabetes";

const DiabetesPage = () => {
  return (
    <div className="relative min-h-screen">
      <GridPattern />
      <GradientBackground />
      <div className="relative z-0 px-6 py-24">
        <Diabetes />
      </div>
    </div>
  )
}

export default DiabetesPage