import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import diabetes from '../assets/diabetes.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const DiabetesPage = () => {
  const stats = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' },
  ];
  const resources = [
    {
      title: 'Behavioral approaches to nutrition and eating patterns for managing type 2 diabetes: A review',
      href: 'https://www.sciencedirect.com/science/article/pii/S2667036423000043',
    },
    {
      title: 'The State of Diabetes Mellitus in Australia in 2024',
      href: 'https://westernsydneydiabetes.com.au/uploads/2024/07/The-State-of-Diabetes-Mellitus-in-Australia-in-2024.pdf',
    },
    {
      title: 'Diabetes: Australian facts',
      href: 'https://www.aihw.gov.au/reports/diabetes/diabetes/contents/how-common-is-diabetes/type-2-diabetes#_Toc97889422',
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
                  alt='assorted pills'
                  src={diabetes}
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
                <blockquote className="text-base/8 font-bold text-gray-900 sm:text-lg/8">
                  <p>
                  "Over 1.3 million people were newly diagnosed (incidence) with type 2 diabetes between 2000 and 2021. This is approximately 60,400 people each year, an average of 165 newly diagnosed people a day."
                  </p>
                </blockquote>
              </figure>
              
            </div>

            {/* text */}
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600">
                  Diabetes Mellitus
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    <strong>Type 2 Diabetes Mellitus</strong> 
                     
                  </p>
                  <p className="mt-8">
                   {' '}
                    <strong>Ultra-processed foods and type 2 diabetes</strong> 
                  </p>
                  <p className="mt-8">
                    <strong>Behavioural approaches to managing type 2 diabetes</strong> 
                  </p>
                  <p></p>
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

export default DiabetesPage;
