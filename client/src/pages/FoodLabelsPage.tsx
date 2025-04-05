import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import fries from '../assets/food-labels-1.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const FoodLabelsPage = () => {
  const stats = [
    { label: 'Perecentage of ultra-processed foods displaying a HSR of ≥ 2.5', value: '73%' },
    { label: 'Percentage of discretionary foods displaying a HSR of ≥ 2.5', value: '52.8%' },
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
      title: 'Australian guide to healthy eating',
      href: 'https://www.eatforhealth.gov.au/guidelines/australian-guide-healthy-eating',
    },
    {
      title: 'Australian Dietary Guidelines',
      href: 'https://www.eatforhealth.gov.au/sites/default/files/2022-09/n55_australian_dietary_guidelines.pdf',
    },
    {
      title: 'Consumer choice and the role of front-of-pack labelling: the Health Star Rating system',
      href: 'https://www.phrp.com.au/issues/march-2019-volume-29-issue-1/consumer-choice-and-the-role-of-front-of-pack-labelling-the-health-star-rating-system/',
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
                  alt='fries'
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
                <blockquote className="text-base/7 font-medium text-gray-900 sm:text-lg/8">
                  <p>
                    "Front-of-package labels are not currently legislated to include degree of food processing in Australia"
                  </p>
                </blockquote>
              </figure>
            </div>

            {/* Main text container */}
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Front-of-package labels and Health Star Rating.
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    The Australian Government's policy statement for <strong className="text-indigo-600">front-of-package labels (FOPL)</strong> published in 2009, was designed to:
                    <li>
                      Guide consumer choice.
                    </li>
                    <li>
                      Be consistent with the Australian Dietary Guidelines. 
                    </li>
                    <li>
                      Modify the environment in which consumers make choices for eg. layout of supermarkets, marketing strategies, whole food availability across demographics, food prices.
                    </li>  
                  </p>
                  <p className="mt-8">
                    The current legislation mandates the inclusion of a <strong className="text-indigo-600">nutrition information panel</strong> describing the amount of nutrients (energy, protein, total fat and saturated fat, carbohydrates, sugars and sodium) in 100g or 100ml and per serve of a product specified by the manufacturer. However, manufacturers typically display nutrition information panels back-of-package in small font, and in a format that can not be readily interpreted. 
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">The Health Star Rating (HSR)</strong> system was developed and endorsed by the Australian governement (2014) but not mandated to the food industry. The HSR system is a voluntary front-of-pack labelling system that rates the overall nutritient profile of packaged and processed food and assigns it a rating from 0.5 to 5 stars.  The nutritent profile is determined by an algorithm. The purpose is to help consumers gain a snapshot and compare the nutritional profile of the product. The HSR system utilises an algorithm to assign eligible packaged foods a star rating between 0.5 and 5 determined by the content of selected 'beneficial' and 'risk' nutrients and food components. 
                  </p> 
                  <p className="mt-8">
                    The <strong className="text-indigo-600">five year review report</strong> of the HSR sytem (2019) recommended: 
                      <li>Fruits and vegetables that are fresh, frozen or canned (with no additions) should
                      automatically receive an HSR of 5.
                      </li> 
                      <li>Total sugars should be more strongly penalised.</li> 
                      <li>Sodium sensitivity should be improved. 
                      </li>
                      <li>Dairy categories should be redefined to increase the HSRs of Four/Five Food Group (FFG) dairy foods
                      (such as cheeses and yoghurts) and decrease the HSRs of some dairy desserts and other chilled dairy
                      products, improving comparability between dairy products. 
                      </li>
                      <li>Jellies and water-based ice confections should be recategorised to decrease their HSRs. 
                      </li>
                      <li>Changes to discern water from high energy drinks.
                      </li>
                  </p>
                  <p className="mt-8">
                    Despite these recommendations, the HSR system is <strong className="text-indigo-600">widely criticised</strong> in its failure to discourage ultra-processed food consumption:
                    <li>
                      It does not reflect the degree of industrial food processing.
                    </li> 
                    <li>
                      It is voluntary and therefore inherently biased. The most frequently displayed rating is 4 stars, representing 22.7% of products, followed by 3.5 stars, representing 17.6% of products. The rating of 1 star is displayed least frequently, 3.9% of products. Ultra-processed foods are scoring misaligned values of ≥ 2.5 stars.
                    </li>
                    <li>
                      Defines total sugar and not added sugar as a 'risk' nutrient.
                    </li>
                    <li>
                      Weighting of 'beneficial' nutrients outscores 'risk' nutrients.
                    </li>
                    <li>
                      Discretionary foods are not differentiated from nutritious foods.
                    </li>
                    <li>
                      The physical structure of the food matrix and how it impacts a nutrient's absorption is not considered.
                    </li>
                    <li>
                      Is being exploited by Big Food to create a 'health halo' for ultra-processed foods, thereby misleading consumers. 73% of ultra-processed foods, and 52.8% of discretionary foods displayed a Health Star Rating of ≥ 2.5 (Dickie et al, 2020). Big Food is manipulating the composition of their food products to meet the requirements of the nutrient-based algorithm and use the Health Star Rating label as a marketing strategy to promote ultra-processed foods.
                    </li>
                    <li>
                      Although the interpretive format of the HSR is easily understood, it does not include an informative element for eg. calories, saturated fat, sugars, sodium.
                    </li>
                    <li>
                      Consumer trust in the HSR system is diminishing.
                    </li>

                  </p>
                  <p className="mt-8">
                    A study (Campos et al, 2024) comparing three front-of-package labels (control label, 'ultraprocessed' label, and 'ultraprocessed' label combined with 'high in sugar' label), found that the <strong className="text-indigo-600">'ultraprocessed and high in sugar'</strong> label discouraged participants from selecting ultra-processed foods. It is incumbent upon front-of-package labelling schemes to enforce transparency around the degree of industrial food processing, and include an informative element.
                  </p>
                
                  <p className="mt-8">
                    The <strong className="text-indigo-600">Australian Dietary Guidelines</strong> (2013) recommend water and a selection of foods from the following five groups: vegetables and legumes/beans, fruit, wholegrains and/or high cereal fibre varieties, lean meats and poultry, fish, eggs, tofu, nuts and seeds, and legumes/beans, and milk, yoghurt, cheese and/or alternatives. These guidelines are <strong className="text-indigo-600">outdated</strong> and do not reflect the emerging evidence of negative health outcomes associated with ultra-processed food consumption.
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
