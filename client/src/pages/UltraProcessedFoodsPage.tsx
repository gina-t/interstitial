import { GradientBackground } from "../components/Gradient";
import GridPattern from "../components/GridPattern";
import ultraprocessed from "../assets/ultraprocessed.jpg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const UltraProcessedFoodsPage = () => {

  const stats = [
    { label: 'Prevalence of Overweight and Obesity in Adults in Australia', value: '66%' },
    { label: 'Prevalence of Diabetes in Australia', value: '5.1%' },
    { label: 'Proportion of ultra-processed foods in modern Australian diet', value: '42%' },
   
  ];
  const resources = [
    {
      title: 'Ultra-processed foods: what they are and how to identify them', 
      href: "https://www.cambridge.org/core/journals/public-health-nutrition/article/ultraprocessed-foods-what-they-are-and-how-to-identify-them/E6D744D714B1FF09D5BCA3E74D53A185"
    },
    {
      title: 'The NOVA Food Classification System', 
      href: "https://educhange.com/wp-content/uploads/2018/09/NOVA-Food-Classification-EduChange.pdf"
    },
    {
      title: 'Ultraprocessed food consumption and dietary nutrient profiles associated with obesity: A multicountry study of children and adolescents', 
      href: 'https://pubmed.ncbi.nlm.nih.gov/34889015/'
    },
    {
      title: 'Diabetes: Australian facts', 
      href: 'https://www.aihw.gov.au/reports/diabetes/diabetes/contents/summary'
    },
    {
      title: 'Overweight and obesity', 
      href: 'https://www.aihw.gov.au/reports/overweight-obesity/overweight-and-obesity/contents/summary'
    },
    {
      title: 'Ultra-processed food consumption and obesity in the Australian adult population',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7719194/'
    },
    {
      title: 'Ultra-Processed Foods: Policy Position Statement', 
      href: 'https://www.phaa.net.au/common/Uploaded%20files/SIG%20documents/FAN%20SIG/PPS%202023/06-19_-_FAN_-_UPF_PPS.pdf'
    },
    {
      title: 'Ultra-processed foods and food additives in gut health and disease', 
      href: 'https://www.nature.com/articles/s41575-024-00893-5'
    },
    {
      title: 'Ultra-processed foods, protein leverage and energy intake in the USA', 
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10260799/pdf/S1368980017001574a.pdf'
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
                  alt="doughnuts"
                  src={ultraprocessed}
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
                    “Always choose whole or minimally processed foods and meals with freshly made ingredients.”
                  </p>
                </blockquote>  
              </figure>

            </div>

            {/* text */}
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600">Ultra-Processed Foods</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    The <strong>NOVA</strong> classification system groups assigns foods to one of four groups based upon the extent and purpose of processing. Food processing is identified as physical, biological, or chemical. 
                  </p> 
                  <p className="mt-8"> 
                    <strong>Group 1</strong> includes unprocessed or minimally processed foods. Unprocessed foods are obtained directly from plants and animals and do not undergo any alteration, for eg. fruits, frseh or frozen vegetables, potatoes, mushrooms, fresh meat, poultry, fish. Minimally processed foods are those submitted to cleaning, removal of inedible parts, grinding, fermentation, pasteurisation and other processes that do not add substances for eg, fruit juices, dried fruits, wheat grains, oats, eggs, milk, yoghurt, flour, pasta, nuts.
                  </p>
                  <p className="mt-8">
                    <strong>Group 2</strong> includes processed culinary ingredients. These are substances obtained directly from group 1 foods or from nature by processes such as pressing, refining, grinding, milling and pulverising, for eg. vegetable oils made from seeds, nuts, or fruits, sugar and molasses obtained from cane or beet, honey, maple syrup, butter, lard, salt. The purpose of processing in group 2 is to make products used in home and restaurant kitchens to prepare, season and cook group 1 foods. Group 2 ingredients are rarely consumed in the absence of group 1 foods. 
                  </p>
                  <p className="mt-8">
                    <strong>Group 3 </strong>includes processed foods. These products are manufactured by industry with the use of sugar, oil, salt, or other group 2 substances added to group 1 foods, to preserve, ferment or make more palatable for eg. canned legumes, fruits or tomatoes, salted nuts, salted or cured meat or fish, cheeses, breads, beer, wine. Processed foods typically contain 3 ingredients. The purpose of processing in group 3 is to increase the durability of group 1 foods, or to modify or enhance their sensory qualities. (4)
                  </p>
                  <p className="mt-8">
                    <strong>Group 4</strong> includes ultra-processed foods. These are industrial formulations typically with five or more cheap ingredients, manufactured entirely from base substances extracted from whole foods, or derived from de-structured constituents, or synthesised in laboratories. Ingredients only found in ultra-processed products include hydrogenated oils, hydrolysed proteins, protein isolates, maltodextrin, invert sugar, high fructose corn syrup, artificial sweeteners, colourants, flavour enhancers, emulsifiers, humectants, sequestrants, and firming, bulking, de-foaming, anti-caking and glazing agents. These substances are not found in your pantry! Additives whose purpose is to imitate sensory qualities of group 1 foods and to disguise undesirable odours, combined with sophisticated, convenient and practical packaging, make ultra-processed (non) foods hyper-palatable and attractive to the consumer. The purpose of processing in group 4 is to manufacture products that are ready to eat, to drink or to heat, hyper-palatable, and to replace freshly prepared traditional meals. Examples of ultra-processed foods are packaged snacks, biscuits, ice cream, confectionery, energy and sports drinks, flavoured milk, instant soups and noodles, flavoured yoghurts, margarines and spreads, packaged pizza and pasta, burgers, sausages, nuggets, bread, cereals, muesli bars, infant formulas, pastries, soft drinks, supermarket ready-to-eat meals, dips.
                  </p>
                  <p className="mt-8">
                    Ultra-processed foods are industrial formulations of substances extracted from whole foods (mono-sourced from corn, wheat, soybean, cane, and remnants of intensive live-stock farming) and fractionated into fructose, lactose, hydrogenated oils,
                    hydrolysed proteins, soy protein isolate, gluten and whey protein. Base substances are subsequently submitted to a series of industrial processing techniques such as hydrolysis and hydrogenation, followed by reassembly using extrusion and moulding, and lastly addition of colours,flavour enhancers, emulsifiers and micro-plastics. Group 1 foods are thus absent from ultra-processed products.
                  </p>
                  <p className="mt-8">
                    Ultra-processed foods comprise 42% of total energy intake in modern Australian eating patterns. Children and adolescents, adults experiencing greater levels of disadvantage, and those with lower levels of education and income are the leading consumers of ultra-processed foods in Australia.
                  </p>
                  <p className="mt-8">
                    Population based studies demonstrate a direct association between ultraprocessed food consumption, poor quality eating patterns and negative health outcomes such as obesity, type 2 diabetes, cardiovascular disease, and increased mortality. A cross-sectional study of Australian adults utilizing dietary data from 2011-2012, concluded that ultra-processed food consumption was significantly associated with higher body mass index and waist circumference, obesity and abdominal obesity. Children and adolescents are the highest consumers of ultra-processed foods in high and middle income countries (68% of total energy intake in adolescents in the UK). Consumption of ultra-processed foods contribute to obesity through a diversity of pathways: <br />
                    <li>
                      High energy density and glycaemic load
                    </li>
                    <li>
                      Low micronutrient and phytosterol profile
                    </li>
                    <li>
                      Low dietary fibre 
                    </li> 
                    <li>
                      Deconstruction of the original food matrix, removal of water
                    </li>
                    <li>
                      Decreased dietary protein density drives energy overconsumption (protein leverage hypothesis)
                    </li>
                    <li>
                      Impaired endocrine function 
                    </li>
                    <li>
                      Impaired gut-brain satiety signalling
                    </li>
                    <li>
                      Altered gut microbiome, intestinal permeability and intestinal inflammation
                    </li>
                    <li>
                      Hyper-palatable and addictive
                    </li>
                  </p>

                </div>
              </div>

              {/* stats */}
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm/6 font-semibold text-indigo-500">{stat.label}</dt>
                    <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              {/* resources */}
              <div className="mt-10 text-base/7 font-semibold text-gray-900">
              {resources.map((resource) => (
                resource.title && resource.href && (
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
              ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default UltraProcessedFoodsPage