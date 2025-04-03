import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import diabetes from '../assets/diabetes.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const DiabetesPage = () => {
  const stats = [
    {
      label:
        'Number of Australians living with diagnosed type 2 diabetes (prevalence, 2021)',
      value: '1.2 million',
    },
    {
      label:
        'Number of Aboriginal and Torres Strait Islanders living with type 2 diabetes (2019)',
      value: '51,900',
    },
    {
      label:
        'Number of Australians newly diagnosed with type 2 diabetes (incidence, 2021)',
      value: '45,700 or 125 a day',
    },
    {
      label:
        'Number of hospitalisations associated with type 2 diabetes (2021-2022)',
      value: '1.1 million',
    },
  ];
  const resources = [
    {
      title: 'The State of Diabetes Mellitus in Australia in 2024',
      href: 'https://westernsydneydiabetes.com.au/uploads/2024/07/The-State-of-Diabetes-Mellitus-in-Australia-in-2024.pdf',
    },
    {
      title: 'Report: The State of Diabetes Mellitus in Australia in 2024',
      href: 'https://www.aph.gov.au/Parliamentary_Business/Committees/House/Health_Aged_Care_and_Sport/Inquiry_into_Diabetes/Report'
    },
    {
      title: 'Diabetes: Australian facts',
      href: 'https://www.aihw.gov.au/reports/diabetes/diabetes/contents/how-common-is-diabetes/type-2-diabetes#_Toc97889422',
    },
    {
      title: 'Australian Bureau of Statistics: Diabetes',
      href: 'https://www.abs.gov.au/statistics/health/health-conditions-and-risks/diabetes/latest-release',
    },
    {
      title: 'Australian Bureau of Statistics: Socioeconomic Indexes for Areas (SEIFA)',
      href: 'https://www.abs.gov.au/statistics/people/people-and-communities/socio-economic-indexes-areas-seifa-australia/latest-release',
    },
    {
      title: 'AIHW: Type 2 diabetes prevalence—variation by Primary Health Network (PHN) Adults 18+ years, 2018',
      href: 'https://www.arcgis.com/apps/dashboards/cc511c075a474b2dbc07cc8d6d6b2edf',
    },
    {
      title: 'Western Sydney Hotspot',
      href: 'https://westernsydneydiabetes.com.au/western-sydney/western-sydney-hotspot/',
    },
    {
      title:
        'The House of Representatives Standing Committee inquiry into the state of diabetes in Australia 2024',
      href: 'https://www.aph.gov.au/Parliamentary_Business/Committees/House/Health_Aged_Care_and_Sport/Inquiry_into_Diabetes/Report',
    },
    {
      title:
        'Behavioral approaches to nutrition and eating patterns for managing type 2 diabetes',
      href: 'https://www.sciencedirect.com/science/article/pii/S2667036423000043',
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
                  alt="assorted pills"
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
                <blockquote className="text-base/7 font-bold text-gray-900 sm:text-lg/8">
                  <p>
                    'Modifiable risk factors for type 2 diabetes in Australia
                    are: overweight, obesity, physical inactivity,
                    ultra-processed food consumption, cigarette smoking,
                    hypertension, and dyslipidaemia.'
                  </p>
                </blockquote>
              </figure>
            </div>

            {/* Main text container */}
            <div>
              <div className="text-lg/7 text-gray-700 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Diabetes Mellitus
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    <strong className="text-indigo-600">Diabetes Mellitus (diabetes)</strong> is a chronic
                    metabolic disease characterised by elevated blood glucose
                    due to an inability to produce insulin, or to use insulin
                    effectively, or both. The primary types of diabetes are:
                    <li>
                      <strong className="text-indigo-600">Type 1 diabetes</strong> An autoimmnune disease that destroys the
                      insulin-producing beta cells in the pancreas, leading to
                      absolute insulin deficiency. Typically diagnosed under the age of 30.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Type 2 diabetes</strong> A progressive disease characterised by insulin resistance and relative insulin deficiency. Typically diagnosed over the age of 30.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Gestational diabetes</strong> Diagnosed during pregnancy.
                    </li>
                    Type 2 accounts for 87.6% of diabetes and type 1 for 9.6% (ABS 2022). The information henceforth is about type 2 diabetes in Australia.
                  </p>
                  <p className="mt-8">
                    Type 2 diabetes is associated with <strong className="text-indigo-600">modifiable risk factors</strong>:
                    <li>Overweight and obesity</li>
                    <li>Physical inactivity</li>
                    <li>Ultra-processed food consumption</li> 
                    <li>Cigarette smoking</li> 
                    <li>Hypertension</li>
                    <li>Dyslipidaemia</li> 
                    Risk factors that are not modifiable are:
                    <li>Age (≥40 years)</li>
                    <li>Family history of diabetes</li> 
                    <li>Ethnicity of Aboriginal and Torres Strait Islander, Pacific Islander, Indian subcontinent, Southeast Asian </li>
                    <li>Medical history of gestational diabetes or
                    polycystic ovarian syndrome</li>
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Burden of disease</strong> is a measure of the years of
                    healthy life lost from living with, or dying from disease. In 2024, type 2 diabetes was responsible for 128,000 years of healthy life lost and accounted for 2.2% of total disease burden. Equity of access to diabetes educators, podiatrists, dietitians, general practitioners, endocrinologists, ophthalmologists and community outreach services is variable, with outer metropolitan, rural and regional areas being problematic.
                  </p>
                  <p className="mt-8">
                    The highest rates of type 2 diabetes by <strong className="text-indigo-600">primary health network</strong> are found in Country South Australia, Western Queensland, South Western Sydney, Gippsland, Western New South Wales, Northern Territory, Murrumbidgee, Western Sydney, Murray, Darling Downs and Moreton, correlating with areas of most disadvantage (AIHW, 2018).
                  </p>
                  <p className="mt-8">
                    Data from the ABS (2022) reports that people with diabetes are more likely to be :
                    <li>Male</li>
                    <li>
                      Live in araes of most disadvantage (many households with low
                      income, many people without qualifications, or many people
                      in low skilled occupations)
                    </li>
                    <li>Live with disability</li>
                    <li>Not be employed</li>
                    <li>Attained year 10 or below in education</li>
                    <li>
                      Measured waist circumference that increases risk of
                      disease (≥94 cm for males, ≥80 cm for females)
                    </li>
                  </p>
                  <p className="mt-8">
                    The House of Representatives Standing Committee inquiry into <strong className="text-indigo-600">the state of diabetes in Australia 2024</strong> submitted 23 <strong>recommendations</strong> including:
                    <li>
                    That the NHMRC expedites a review of the Australian Dietary Guidelines, and ensures that the revised guidelines include adequate information for Australians living with diabetes.
                    </li>
                    <li>
                    That the Australian Government implements food labelling reforms targeting added sugar to allow consumers to clearly identify the content of added sugar from front-of-package labelling.
                    </li>
                    <li>
                    That the Australian Government implements a levy on sugar-sweetened beverages, graduated according to the sugar content.
                    </li>
                    <li>
                    That the Australian Government considers regulating the marketing and advertising of unhealthy food to children.
                    </li>
                    <li>
                    That the Australian Government develops a best practice framework to tackle the problem of obesogenic environments, including through thoughtful urban planning and the development of physical activity initiatives, and supports efforts to increase access to regular exercise in schools and neighbourhoods as a matter of urgency.
                    </li>
                    <li>
                    That the Australian Government funds the development of education-based obesity screening information and resources.
                    </li>
                  </p>
                  <p className="mt-8">
                    <strong>Ultra-processed food consumption</strong> is correlated with overweight, obesity and type 2 diabetes.
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/ultraprocessed-foods"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Ultra-Processed Foods
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Behavioural approaches</strong> for managing type 2 diabetes (Salvia et al 2023) subscribe to a patient centred model:
                    <li>Treatment plans are individualized and respectful of cultural, social, economic, and environmental factors.</li>
                    <li>Continuing support and education to adopt lifestyle behaviours that promote well-being.</li>
                    <li>Expansion of the team surrounding the client to include diabetes educators, dieticians, mental health providers.</li>
                    <li>A balanced eating pattern emphasizing fiber-rich plant foods (legumes, nuts, seeds, herbs), a diversity of non-starchy vegetables, nutrient-dense carbohydrate foods (whole grains), fish, and unsaturated vegetable oils.</li>
                    <li>Physical activity is encouraged.</li>
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

export default DiabetesPage;
