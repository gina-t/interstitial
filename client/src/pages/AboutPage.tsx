import { GradientBackground } from '../components/Gradient';
import About from '../components/About';
import GridPattern from '../components/GridPattern';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <GridPattern />
      <GradientBackground />
      <div className="relative z-0 px-6 py-16">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
