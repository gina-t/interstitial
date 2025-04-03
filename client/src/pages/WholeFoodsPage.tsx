import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import wholefoods from '../assets/wholefoods-1.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const WholeFoodsPage = () => {
  const stats = [
    { label: 'Neighbourhoods in Western Sydney where fast food and alcohol outlets outnumber greengrocers and supermarkets', value: '28%' },
    { label: '', value: '' },
    { label: '', value: '' },
  ];
  const resources = [
    {
      title: 'Minimally processed foods are more satiating and less hyperglycemic than ultraprocessed foods: a preliminary study with 98 ready-to-eat foods',
      href: 'https://pubmed.ncbi.nlm.nih.gov/27125637/',
    },
    {
      title: 'A satiety index of common foods',
      href: 'https://pubmed.ncbi.nlm.nih.gov/7498104/',
    },
    {
      title: 'Geographic inequity in healthy food environment and type 2 diabetes: can we please turn off the tap?',
      href: 'https://www.mja.com.au/journal/2015/203/6/geographic-inequity-healthy-food-environment-and-type-2-diabetes-can-we-please',
    },
    {
      title: 'Western Sydney Diabetes: Food Deserts and Mapping',
      href: 'https://www.westernsydneydiabetes.com.au/western-sydney/food-deserts-and-mapping/',
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
                  alt='broccoli, kale, cabbage'
                  src={wholefoods}
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
                <blockquote className="text-base/7 font-medium text-gray-900 sm:text-lg/8">
                  <p>
                    "Takeaway and alcohol outlets outnumber greengrocers and supermarkets in Western Sydney neighbourhoods."
                  </p>
                </blockquote>
              </figure>    
            </div>

            {/* Main text container*/}
            <div>
              <div className="text-lg/7 text-gray-700 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Whole Foods
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    <strong className="text-indigo-600">Food structure or matrix</strong> contributes to satiety and glycaemic responses. Whole foods or minimally processed foods (NOVA Group 1) maintain their original structure and water content. Ultra-processed foods (NOVA Group 4) are industrially assembled from multiple fractionated substances and additives, with the matrix of the original food, including water, entirely replaced or depleted. A study by Fardet (2016) found that <strong className="text-indigo-600">highly deconstructed foods register higher glycaemic responses,</strong> measured through glycaemic index (related to carbohydrates), glycaemic load (related to amount of food consumed) and glycaemic glucose equivalent (GGE). GGE is a newer concept that can be used quantitatively and is explained as follows: if a serving of food contributes 15 GGE (g per 100 g), it is equivalent to consuming 15 grams of glucose. 
                    </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Higher glycaemic responses</strong> produce a 'sugar high', release of insulin, followed by a 'sugar crash', resulting in a cyclical increase in hunger and decrease in satiety. The GGE is significantly and positively correlated with the processing group, and significantly and inversely correlated with the satiety index. Raw and minimally proceessed foods are associated with decreased GGE, and increased satiety index, compared to ultra-processed foods. 
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">The Mapping Food Inequalities in Australian Localities (MEAL) Project</strong> was initiated in 2014 to explore geographical inequities in food environment in metropolitan Sydney. The researches investigated the number of greengrocers, supermarkets, takeaway outlets and alcohol outlets in Western Sydney compared with North Sydney and unsurprisingly found that:
                    <li>
                      In Western Sydney neighbourhoods, access to a greengrocer or supermarket (defined as 1.6 km from a person's home, or walking distance), was restricted.
                    </li>
                    <li> 
                      In Western Sydney neighbourhoods, fast food and alcohol outlets outnumbered greengrocers and supermarkets.
                    </li>
                    The reasearches conclude that there is a geographic disparity to access of whole foods in Western Sydney, a notable hotspot for type 2 diabetes, social disadvantage, and poor public transport.
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

export default WholeFoodsPage;
