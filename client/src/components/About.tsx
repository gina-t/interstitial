import { HeartIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import exercise from '../assets/exercise.jpg';

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Well-Being
              </p>
              <h1 className="mt-2 text-base/7 font-semibold tracking-tight text-pretty text-gray-900 sm:text-base/8">
                Well-being describes a complex homeostatsis of biological,
                psychological and social factors. It is not merely an absence of
                disease, but as described by the WHO, a state in which a person
                realises their own abilities, can cope with the normal stressors
                of life, can work productively and fruitfully, and can
                contribute meaningfully to ther community. Diet and exercise are
                important pathways to maintaining your well-being.
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Learn about the multitude of factors contributing to your
                choices around nutrition and exercise.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="woman weight training"
            src={exercise}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] opacity-50"
          />
        </div> */}

        <div className="p-4 mx-auto sm:p-6 md:p-8 lg:-mt-12 lg:-ml-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="woman weight training"
            src={exercise}
            className="w-full rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem] opacity-50"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              {/* list section */}
              <ul role="list" className="mt-0 space-y-8 text-gray-600">
                {/* ultra-processed foods */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Ultra-Processed Foods.
                    </strong>{' '}
                    Fractionation is an industrial food processing technique that separates whole foods (typically mono-sourced from corn, wheat, soybeans, cane, and remnants of intensive live-stock farming) into base components, for eg. fructose, lactose, hydrogenated oils, hydrolysed proteins, soya protein isolate, gluten and whey protein. Fractionated components do not retain the matrix of the food from which it is milled, or its nutrients. These components, typically not found in your pantry, are submitted to a series of industrial processing techniques such as hydrolysis and hydrogenation, followed by re-assembly using extrusion and moulding, and lastly addition of colours, flavour enhancers, emulsifiers and micro-plastics. These industrial processes result in hyper-palatable products with high calorific and low nutritional value, and are combined with sophisticated packaging and labels highlighting positive components, to attract and obfuscate consumers. Ultra-processed foods are contributing to an obesity epidemic and associated morbidities such as type 2 diabetes mellitus, and alarmingly an increase in its prevalence in childern. Furthermore, fractionation of whole foods is resource intensive, promotes loss of biodiversity due to monoculture crops, is unsustainable, and detrimental to the environment.
                    <Link
                      to="/ultraprocessed-foods"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>
                {/* accessibility to whole foods */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Accessibility to whole foods.
                    </strong>{' '}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                    <Link
                      to="/accessibility-to-whole-foods"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>
                {/* food labelling */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Food labelling.
                    </strong>{' '}
                    Food labelling is opaque and the manufacturers of
                    ultra-processed foods are not obligated to describe the
                    industrial processes used in production of their products.
                    Furthermore the listing of 5 or more ingredients with
                    chemical names, is not meaningful to the uninformed
                    consumer. Frequently, nutritional information is cryptically
                    written in small print, and food labels promote misleading
                    claims, cherry picking positive nutrients and omitting
                    negative ingredients.
                    <Link
                      to="/food-deserts"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>
                {/* marketing strategies */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Marketing strategies that promote food with high density
                      calories and low nutrient quality.
                    </strong>{' '}
                    Sophicticated packaging with vibrant colours and campaigns
                    promoting convenience, vibes, energy, and targeting of
                    positive nutrients (for eg. vitamins) are cleverly designed
                    to attract and confuse consumers as to the reality of
                    ultra-processed foods.
                    <Link
                      to="/marketing-strategies"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>

                {/* behavioural economics */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Behavioural Economics and the psychology of consumer
                      decision-making.
                    </strong>{' '}
                    Behavioural economics is about studying patterns of human
                    behaviour, gaining valuable insights. In the context of
                    diet,such insights include knowledge about the effects of
                    social norms, discounting of delayed consequences, neglect
                    of sustainability and health information, and nudging.
                    <Link
                      to="/behavioral-economics"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>
                {/* health literacy */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Calorie Literacy and dietary guidelines.
                    </strong>{' '}
                    Know the appropriate calorie intake for your body, age and
                    energy expenditure. Know what constitutes a whole-food diet.
                    <Link
                      to="/health-literacy"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>
                {/* exercise literacy */}
                <li className="flex gap-x-3">
                  <HeartIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Exercise literacy.
                    </strong>{' '}
                    We are increasingly leading sedentary and demanding
                    lifestyles. Dedicating a 20 minute block of exersise duirng
                    a 24 hour period, should be integral and sustainable in our
                    daily lives. It does not necessiatate a gym memebership or
                    specialised equipment, but can entail vigorous walking or
                    body weight exercises. Exercise does not need to be an
                    unattainable goal requiring special effort, but achievable
                    through incorporating small bursts of activity in our daily
                    lives.
                    <Link
                      to="/exercise-literacy"
                      className="ml-2 inline-flex items-center text-indigo-600 hover:text-indigo-900"
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-4 flex-none align-bottom relative bottom-[-4px]"
                      />
                    </Link>
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                Knowledge about the ingredients of foods we consume and
                incorporating exercise in our daily lives, are pathways to
                maintaining our well-being.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Interstitial Goals
              </h2>
              <p className="mt-6">
                To give you evidence-based information sourced from the National
                Library of Medicine, helping you understand the factors around
                food choices and exercise. To give you access to an external
                nutrition API, including bar-code scanning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
