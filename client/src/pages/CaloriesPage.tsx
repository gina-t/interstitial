import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import calories from '../assets/calories.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const CaloriesPage = () => {
  const stats = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' },
  ];
  const resources = [
    {
      title: 'Dietary Guidelines for Americans, 2020-2025',
      href: 'https://www.dietaryguidelines.gov/sites/default/files/2021-03/Dietary_Guidelines_for_Americans-2020-2025.pdf',
    },
    {
      title: 'WHO: Obesity and overweight',
      href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
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
                  alt="waist measurement"
                  src={calories}
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
                    "Knowledge about the number of calories in a food product
                    helps the consumer manage their weight"
                  </p>
                </blockquote>
              </figure>
            </div>

            {/* Main text container */}
            <div>
              <div className="text-base/7 text-gray-900 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Calorie Literacy
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    <strong className="text-indigo-600">Calorie or kilocalorie</strong> is a unit of energy
                    defined as the amount of energy needed to increase the
                    temperature of 1 litre of water by 1 degree celcius. In a
                    nutritional context, a calorie is a unit of energy derived
                    from metabolising a quantity of food. The metric unit
                    equivalent is a kilojoule. One kilocalorie is the same
                    amount of energy as 4.18 kilojoules. 
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Your daily energy
                    requirements</strong> vary depending upon height, weight, gender,
                    age, body composition, pregnancy and breast feeding, and
                    physical activity. You can measure your total daily energy
                    expenditure using the <strong className="text-indigo-600">TDEE calculator</strong> referenced in the Resources
                    page. You can choose from five activity levels: sedentary,
                    light activity (1-2 days a week), moderate activity (3-5 days a week), vigorous activity (6-7 days a week), and athlete (twice daily). 
                  </p>
                  <p className="mt-8"> 
                    After determining your total daily energy expenditure, you can measure the number of calories you consume per day to maintain, gain, or lose weight. A <strong className="text-indigo-600">calorie tracker</strong> is avaialble in the Food Search page to monitor the number
                    of calories you consume and to determine the amount of
                    calories typically present in your favourite foods. An <strong className="text-indigo-600">average adult female</strong> (age 21 to 60) who does moderate activity may require around 1800 to 2200 calories per day, and an <strong className="text-indigo-600">average adult male</strong> (age 21 to 60) who does moderate actvity may require around 2400 to 2800 calories per day. Learning
                    about calories and your daily energy expenditure is
                    important for managing your weight.
                  </p>

                  {/* Calorie Needs Table */}
                  <div className="mt-10 overflow-x-auto pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Estimated Calorie Needs per Day, by Age, Sex, and Physical Activity Level, Ages 21 and Older</h3>
                    
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0">Age</th>
                          <th scope="col" colSpan={3} className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#FCC5C0]">
                            Females
                          </th>
                          <th scope="col" colSpan={3} className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#C3AED6]">
                            Males
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"></th>
                          <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#FCC5C0]">Sedentary</th>
                          <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#FCC5C0]">Moderately Active</th>
                          <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#FCC5C0]">Very Active</th>
                          <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#C3AED6]">Sedentary</th>
                          <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#C3AED6]">Moderately Active</th>
                          <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 bg-[#C3AED6]">Very Active</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Age 21-25 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">21-25</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,000</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">3,000</td>
                        </tr>
                        {/* Age 26-30 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">26-30</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,000</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,600</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">3,000</td>
                        </tr>
                        {/* Age 31-35 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">31-35</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,000</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,600</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">3,000</td>
                        </tr>
                        {/* Age 36-40 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">36-40</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,000</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,600</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,800</td>
                        </tr>
                        {/* Age 41-45 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">41-45</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,000</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,600</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,800</td>
                        </tr>
                        {/* Age 46-50 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">46-50</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,000</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,800</td>
                        </tr>
                        {/* Age 51-55 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">51-55</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,600</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,800</td>
                        </tr>
                        {/* Age 56-60 */}
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">56-60</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,600</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">1,800</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#FCC5C0]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,200</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,400</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 bg-[#C3AED6]">2,600</td>
                        </tr>
                      </tbody>
                    </table>
  
                    <p className="mt-2 text-xs text-gray-500 italic">
                      Source: <a href="https://www.dietaryguidelines.gov/sites/default/files/2021-03/Dietary_Guidelines_for_Americans-2020-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                        Dietary Guidelines for Americans 2020-2025
                      </a>
                    </p>
                  </div>

                  <p className="mt-8">
                    Becoming familiar with calories is only one aspect of the managing weight equation: 
                    <li><strong className="text-indigo-600">Waist circumference</strong> Measuring your waist once a month tracks abdominal obesity. Abdominal obesity is defined as WC ≥88 cm for women and ≥102 cm for men.
                    </li>   
                    <li><strong className="text-indigo-600">Weighing yourself with digital scales</strong> once a week, upon waking, after toileting and prior to consuming food, is a useful tool in managing your weight. The very act of measuring positively influences your weight goals. 
                    </li>
                    <li><strong className="text-indigo-600">Body mass index</strong> For adults, the WHO defines overweight as a BMI ≥ 25 and obesity is defined as a BMI ≥ 30.
                    </li>
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

export default CaloriesPage;
