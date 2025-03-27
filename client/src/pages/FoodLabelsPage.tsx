import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import fries from '../assets/food-labels-1.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const FoodLabelsPage = () => {
  const stats = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' },
  ];
  const resources = [
    {
      title: 'Ultra-processed foods: what they are and how to identify them',
      href: 'https://www.cambridge.org/core/journals/public-health-nutrition/article/ultraprocessed-foods-what-they-are-and-how-to-identifythem/E6D744D714B1FF09D5BCA3E74D53A185',
    },
    {
      title: 'How Promising Are “Ultraprocessed” Front-of-Package Labels? A Formative Study with US Adults',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11013171/',
    },
    {
      title: 'Policy statement on front-of-pack labelling',
      href: 'https://www.foodregulation.gov.au/resources/publications/policy-statement-front-pack-labelling',
    },
    {
      title: 'Evaluating Nutrient-Based Indices against Food- and Diet-Based Indices to Assess the Health Potential of Foods: How Does the Australian Health Star Rating System Perform after Five Years?',
      href: 'https://www.mdpi.com/2072-6643/12/5/1463',
    },
    {
      title: '',
      href: '',
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
                  alt=''
                  src={fries}
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
                  <p>
                    "Front-of-package labels are not currently legislated to include degree of food processing in Australia"
                  </p>
                </blockquote>
              </figure>

            </div>

            {/* text */}
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600">
                  Front-of-package labels and Health Star Rating.
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    The Australian government's policy statement for <strong>front-of-package labels (FOPL)</strong> published in 2009, was designed to:
                    <li>
                      Support consumers to identify healthier food choices
                    </li>
                    <li>
                      Be consistent with Australian Dietary Guidelines
                    </li>
                    <li>
                      Modify the environment in which consumers make choices
                    </li>  
                  </p>
                  <p>
                    The current legislation mandates the inclusion of a nutrition information panel describing the amount of nutrients (energy, protein, total fat and saturated fat, carbohydrates, sugars and sodium) in 100g or 100ml and per serve of a product specified by the manufacturer. However, manufactureres typically display nutrition information panels back-of-package in small font, and in a format that can not be readily interpreted. The Health Star Rating System was developed and endorsed by the Australian governement (2014) but not mandated to the food industry. The system is a voluntary front-of-pack labelling system that rates the overall nutritional profile of packaged and processed food and assigns it a rating from 0.5 to 5 stars. The nutritional profile is determined by an algorithm. The purpose is to help consumers gain a snapshot and compare the nutritional profile of the product. However, the Health Star Rating is failing to curb ultra-processed food consumption because:
                    <li>
                      It does not include degree of industrial food processing.
                    </li> 
                    <li>
                      Is voluntary. 
                    </li>
                    <li>
                      Is being exploited by Big Food to create a 'health halo' for ultra-processed foods, thereby misleading consumers. Big Food is manipulating the composition of their food products to meet the requirements of the nutrient-based algorithm and use the Health Star Rating label as a marketing strategy to promote ultra-processed foods.
                    </li>
                    <li>
                      The Health Star Rating system is interpetive only and does not include an informative element for eg. calories, staurtaed fat, sugars, sodium.
                    </li>

                  </p>
                  <p>
                    A study published in 2024 suggets that include the degree of industrail processing in FOPL 
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

export default FoodLabelsPage;
