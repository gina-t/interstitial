import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import exercise from '../assets/exercise-unsplash.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const ExercisePage = () => {
  const stats = [
    { label: 'Global estimate of physical inactivity in adults', value: '27.5%' },
    { label: 'Global estimate of physical inactivity in adolescents', value: '81%' },
    { label: 'Minutes per week of moderate-intensity physical activity recommended by WHO', value: '150-300' },
  ];
  const resources = [
    {
      title: 'Exercise sustains the hallmarks of health',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9923435/#:~:text=Exercise%20impacts%20the%20major%20hallmarks,well%20as%20repair%20and%20regeneration.',
    },
    {
      title: '2020 WHO guidelines on physical activity and sedentary behaviour',
      href: 'https://iris.who.int/bitstream/handle/10665/336656/9789240015128-eng.pdf?sequence=1',
    },
    {
      title: 'Vigorous physical activity, incident heart disease, and cancer: how little is enough?',
      href: 'https://academic.oup.com/eurheartj/article/43/46/4801/6771381',
    },
  ];

  return (
    <div className="relative min-h-screen">
      <GridPattern />
      <GradientBackground />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">

              {/* image */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  alt="bodybuilder"
                  src={exercise}
                  className="absolute inset-0 size-full object-cover brightness-100 object-center"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gray-900/30 mix-blend-soft-light" />
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                >
                </div>
              </div>

              {/* quote */}
              <figure className="mt-6 lg:max-w-lg">
                <blockquote className="text-base/7 font-bold text-gray-900 sm:text-lg/8">
                  <p>"Regular exercise is essentially considered a non-pharmacological polypill for patients with certain comorbidities."</p>
                </blockquote>
              </figure>
            </div>

            {/* Main text container */}
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Exercise
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                     The World Health Organisation (WHO) defines <strong className="text-indigo-600">physical activity</strong> as any bodily movement produced by skeletal muscles that requires energy expenditure. The energy expenditure can be measured in calories. Physical activity in daily life can be categorized into occupational, sports, conditioning, household chores, or other activities. <strong className="text-indigo-600">Exercise</strong> is a subset of physical activity that is planned, structured, and repetitive, with an objective to improve physical fitness. Levels of physical activity are described as sedentary, light, moderate, vigorous and athlete. 
                  </p>
                  <p className="mt-8">  
                    Globally, we are leading <strong className="text-indigo-600">increasingly sedentary lifestyles</strong> due to the rise of technology (screen time) and urbanization (motorised transport). Sedentary behaviour is associated with obesity, type 2 diabetes, cardiovascular disease, and increased mortality rates. Incorporating scheduled exercise may appear burdensome to our demanding lifestyles, but we can achieve physical activity through short bouts without specialised equipment or expensive gym memeberships. Walking 5000 steps per day (about 3km) or a 20 minute bout of body weight exercises can be sufficient to achieve the recommended levels of physical activity to improve our health and well-being.
                  </p>
                  <p className="mt-8">
                    For substantial health benefits in adults aged 18-64 years, WHO recommends at least: 
                    <li>
                      <strong className="text-indigo-600">150 to 300 minutes</strong> of moderate intensity aerobic physical activity throughout the week;
                    </li>
                    or
                    <li>
                      <strong className="text-indigo-600">75 to 150 minutes</strong> of vigorous intensity aerobic physical activity throughout the week;
                    </li>
                    or
                    <li>
                      <strong className="text-indigo-600">equivalent combination</strong> of moderate and vigorous intensity activity; 
                    </li>
                    </p>
                    <p className="mt-8">
                     For additional health benefits, adults should also do <strong className="text-indigo-600">muscle strengthening activities</strong> at moderate or vigorous intensity that involve major muscle groups, for 2 or more days a week. 
                  </p>
                  <p className="mt-8">
                    The <strong className="text-indigo-600">biological mechanisms</strong> through which regular moderate-intensity exercise sustains the major hallmarks of health was investigated by Qiu et al (2022). 
                    <li>
                      Protects the integrity of barriers: organelles (mitochondria and nuclei) cell membranes, internal barriers (blood-brain), and external barriers (intestinal, respiratory, skin).
                    </li>
                    <li>
                      Contributes to the maintenance of local and systemic homeostasis (promotes wound healing, decreases risk of infection, anti-inflammatory, modulates innate and adaptive immune responses, decreases risk of certain cancers ).
                    </li>
                    <li>
                      Benefits recycling and turnover of cells, organelles and proteins (cellular remodelling, turnover of dysfunctional organelles ).
                    </li>
                    <li>
                      Stimulates coordination and adaptation of intracellular (metaboloic changes) and systemic (endocrine) circuitries.
                    </li>
                    <li>
                      Modulates circadian rhythms: a nonphotic cue capable of restoring the transiently disturbed clock.
                    </li>
                    <li>
                      Promotes homeostatic resilience and beneficial adapations in response to stress: modifies neural mechanisms, increases mobilisation of substrates, increases insulin sensitivity, enhances immunosurveillance and immunocompetence, alters intestinal microbiome.
                    </li>
                    <li>
                      Benefits hormetic regulation. Hormesis is the concept of an adaptive biphasic dose response that may be applied to various fields including biology. At low doses, a stimulus can positively promote or regulate the physiological functions of organisms, and at high doses disrupts balance and leads to harmful effects.
                    </li>
                    <li>
                      Modulates cellular repair and regeneration: enhances oxidative DNA damage repair, promotes proteostasis in skeletal and cardiac muscle, decreases endoplasmic reticulum stress, stimulates mitochondrial remodelling.
                    </li>
                    
                  </p>
                  <p className="mt-8">
                    A <strong className="text-indigo-600">prospective UK cohort study</strong> of 71 893 adults (median age 62.5 years; 55.9% female), found that the adjusted 5-year absolute mortality risk was 4.17% for no vigorous physical ativity, compared to 1.10% for vigorous physical activity of ≥60 min/week. The study concluded that vigorous physical activity of 15-20 min/week is associated with a 16-40% lower mortality hazard ratio, with further decreases up to 50-57 min/week. 'These findings suggest reduced health risks may be attainable through relatively modest amounts of vigorous physical activity accrued in short bouts across the week'.
                  </p>
                </div>
              </div>

              {/* stats */}
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm/6 font-semibold text-indigo-500">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* resources */}
              <div className="mt-10 text-base/7 font-semibold text-gray-900">
                {resources.map(
                  (resource) =>
                    resource.title &&
                    resource.href && (
                      <div key={resource.title} className="mt-3 text-sm/6">
                        <a
                          href={resource.href}
                          className="  hover:text-indigo-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {resource.title}
                          <ChevronRightIcon className="h-4 w-4 inline-block" />
                        </a>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
