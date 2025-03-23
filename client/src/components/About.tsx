import { LinkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import exercise from '../assets/exercise.jpg';

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-16 sm:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h4 className="text-base/7 font-semibold text-indigo-600">
                Well-Being
              </h4>

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

        {/* image */}
        <div className="p-4 mx-auto sm:p-6 md:p-8 lg:-mt-12 lg:-ml-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="woman weight training"
            src={exercise}
            className="w-full rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem] opacity-50"
          />
        </div>

        {/* list section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-0 space-y-8 text-gray-600">
                {/* ultra-processed foods */}
                <li className="flex gap-x-3">
                  <Link
                    to="/ultraprocessed-foods"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Ultra-Processed Foods"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/ultraprocessed-foods">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Ultra-Processed Foods.
                      </strong>{' '}
                    </Link>
                    <p>
                      Fractionation is an industrial food processing technique
                      that separates whole foods (typically mono-sourced from
                      corn, wheat, soybeans, cane, and remnants of intensive
                      live-stock farming) into base components, for eg.
                      fructose, lactose, hydrogenated oils, hydrolysed proteins,
                      soya protein isolate, gluten and whey protein.
                      Fractionated components do not retain the matrix of the
                      food from which it is milled, or its nutrients.
                    </p>
                    <p>
                      These components, typically not found in your pantry, are
                      submitted to a series of industrial processing techniques
                      such as hydrolysis and hydrogenation, followed by
                      re-assembly using extrusion and moulding, and lastly
                      addition of colours, flavour enhancers, emulsifiers and
                      micro-plastics. These industrial processes result in
                      hyper-palatable products with high calorific and low
                      nutritional value, and extended shelf-lives.
                    </p>
                    <p>
                      Combined with sophisticated and convenient packaging,
                      labels highlighting positive components, ultra-processed
                      foods attract and obfuscate consumers, and promote
                      over-consumption. Ultra-processed foods are contributing
                      to an obesity epidemic and associated morbidities such as
                      type 2 diabetes mellitus, and alarmingly an increase in
                      its prevalence in childern. Furthermore, fractionation of
                      whole foods is resource intensive, promotes loss of
                      biodiversity due to monoculture crops, is unsustainable,
                      and detrimental to the environment.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/ultraprocessed-foods"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>

                {/* accessibility to whole-foods */}
                <li className="flex gap-x-3">
                  <Link
                    to="/whole-foods"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Whole-Foods"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/whole-foods">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Whole Foods.
                      </strong>{' '}
                    </Link>
                    <p>
                    Whole foods are obtained directly from plants and animals and do not undergo any alteration. Minimally processed foods are those submitted to cleaning, removal of inedible parts, grinding, fermentation, pasteurisation and processes that do not add substances. Whole foods or minimally processed foods are more satiating and less hyperglycemic than ultra-processed foods.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/whole-foods"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>

                {/* food labelling */}
                <li className="flex gap-x-3">
                  <Link
                    to="/food-labelling"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Food Labelling"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/food-labelling">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Food labelling.
                      </strong>{' '}
                    </Link>
                    <p>
                      Food labelling is opaque and the manufacturers of
                      ultra-processed foods are not obligated to describe the
                      industrial processes used in production of their products.
                      Furthermore the listing of 5 or more ingredients with
                      chemical names, is not meaningful to the uninformed
                      consumer. Frequently, nutritional information is
                      cryptically written in small print, and food labels
                      promote misleading claims, cherry picking positive
                      nutrients and omitting negative ingredients.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/food-labelling"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>

                {/* marketing strategies */}
                <li className="flex gap-x-3">
                  <Link
                    to="/marketing-strategies"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Big Food"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/marketing-strategies">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Big Food.
                      </strong>{' '}
                    </Link>
                    <p>
                      Big Food employs corporate and political strategies to increase ultr-processed food consumption. These strategies include establishing global production networks, establishing hyperlocal distribution networks, digital marketing benefiting from data harvesting of social media platforms, fostering favourable regulatory policies, funding scientific reseearch, and sponsoring community organisations and sports groups that can lobby for industry positions.  
                    </p>
                    
                    <p>
                      Ultra-processed foods are designed to be convenient and practical, able to be consumed anytime and anywhere, and as snacks replacing regular meals, are accessible, affordable, aggressively marketed (children and adolescents are specifically targeted) and their portion sizes are increasing over time. Labels promoting vibes and energy, false representations of being "organic" with "no artificial colours or flavours", and targeting of positive ingredients (for eg. vitamins in energy drinks) attract and obfuscate consumers as to the nutritional facts of ultra-processed foods. For eg, the front packaging of sliced chicken breast states in green cursive writing that the product contains no artificial colours or flavours. However, the back packaging displays the ingredients as chicken breast, water, modified starch (maize or tapioca), acidity regulators, salt, sugar, soy protein, vegetable gum, natural flavours, preservatives, egg. The consumer does not read the back packaging, and therfore remains ignorant, or does read the back packaging and loses confidence and trust in the industrial food system.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/marketing-strategies"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>

                {/* behavioural economics */}
                <li className="flex gap-x-3">
                  <Link
                    to="/behavioral-economics"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Behavioral Economics"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/behavioral-economics">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Behavioural Economics and the psychology of consumer
                        decision-making.
                      </strong>{' '}
                    </Link>
                    <p>
                      Behavioural economics is about studying patterns of human
                      behaviour, gaining valuable insights. In the context of
                      diet,such insights include knowledge about the effects of
                      social norms, discounting of delayed consequences, neglect
                      of sustainability and health information, and nudging.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/behavioral-economics"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>
                {/* calorie literacy */}
                <li className="flex gap-x-3">
                  <Link
                    to="/calorie-literacy"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Calorie Literacy"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/calorie-literacy">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Calorie Literacy.
                      </strong>{' '}
                    </Link>
                    <p>
                      Know the appropriate calorie intake for your body, age and
                      energy expenditure. Know what constitutes a whole-food
                      diet.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/calorie-literacy"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>

                {/* exercise literacy */}
                <li className="flex gap-x-3">
                  <Link
                    to="/exercise-literacy"
                    className="mt-1 flex-none text-indigo-600 hover:text-indigo-900"
                    aria-label="Learn more about Exercise Literacy"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="mt-1 size-4 flex-none text-indigo-600"
                    />
                  </Link>
                  <span>
                    <Link to="/exercise-literacy">
                      <strong className="font-semibold text-gray-900 hover:text-indigo-600">
                        Exercise literacy.
                      </strong>{' '}
                    </Link>
                    <p>
                      We are increasingly leading sedentary and demanding
                      lifestyles. Dedicating a 20 minute block of exersise
                      duirng a 24 hour period, should be integral and
                      sustainable in our daily lives. It does not necessiatate a
                      gym memebership or specialised equipment, but can entail
                      vigorous walking or body weight exercises. Exercise does
                      not need to be an unattainable goal requiring special
                      effort, but achievable through incorporating small bursts
                      of activity in our daily lives.
                    </p>
                    <span className="ml-1 inline-flex items-center text-indigo-600">
                      <Link
                        to="/exercise-literacy"
                        className="inline-flex items-center hover:text-indigo-900"
                      >
                        Read more
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 ml-1 align-text-bottom"
                        />
                      </Link>
                    </span>
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                Knowledge about the foods we consume, literacy about calories
                and energy expenditure, and incorporating exercise into our
                daily lives, are pathways to maintaining our well-being.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Interstitial Goals
              </h2>
              <p className="mt-6">
                To give you evidence-based information sourced from the National
                Library of Medicine, peer-reviewed journals, and the Australian
                Institute of Health and Welfare, about nutrition and exercise.
                To give you access to an external nutrition API, and total daily
                enery expenditure calculator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
