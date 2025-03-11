import { GradientBackground } from "../components/Gradient";
import GridPattern from "../components/GridPattern";
import ultraprocessed from "../assets/ultraprocessed.jpg";

const UltraProcessedFoodsPage = () => {
  const stats = [
    { label: 'Obesity', value: '' },
    { label: 'Type 2 Diabetes', value: '' },
    { label: 'Proportion of ultra-processed foods in typical Australian diet', value: '' },
   
  ];
  return (
    <div>
      <GradientBackground />
      <GridPattern />
      {/* image */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
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
                <figure className="relative isolate">
                  <blockquote className="mt-6 text-xl/8 font-bold text-gray-950">
                    <p>
                      “Always choose natural or minimally processed foods and meals with freshly made ingredients.”
                    </p>
                  </blockquote>  
                </figure>
              </div>
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
                    <strong>Group 1</strong> includes unprocessed or minimally processed foods. Unprocessed foods are obtained directly from plants and animals and do not undergo any alteration, for eg. fruits, frseh or frozen vegetables, potatoes, mushrooms, poultry, fish. Minimally processed foods are those submitted to cleaning, removal of inedible parts, fractioning, grinding, fermentation, pasteurisation and other processes that do not add substances for eg, fruit juices, wheat grains, oats, eggs, milk, yoghurt, flour, pasta, nuts.
                  </p>
                  <p className="mt-8">
                    <strong>Group 2</strong> includes processed culinary ingredients. These are substances obtained directly from group 1 foods or from nature by processes such as pressing, grinding, milling and pulverising, for eg. vegetable oils made from seeds, nuts, or fruits, sugar and molasses obtained from cane or beet, honey, maple syrup, butter, lard, salt.
                  </p>
                  <p className="mt-8">
                    <strong>Group 3 </strong>includes processed foods. Processed Foods are
                    products manufactured by industry with the use of salt, sugar, oil or other  (Group 2) substances added to natural or minimally processed foods (Group
                    1) to preserve or make more palatable, for eg. canned legumes, fruits or tomatoes, salted nuts, salted or cured meat or fish, cheeses, breads, beer, wine.
                  </p>
                  <p className="mt-8">
                    <strong>Group 4</strong> includes ultra-processed foods. These are industrial formulations typically with five or more ingredients, made entirely from base substances extracted from whole foods, or derived from decomposed constituents, or synthesised in laboratories. Ingredients only found in ultra-processed products include hydrogenated oils, hydrolysed proteins, protein isolates, maltodextrin, invert sugar, high fructose corn syrup, artificial sweeteners, colourants, flavour enhancers, emulsifiers, humectants, sequestrants, and firming, bulking, de-foaming, anti-caking and glazing agents.
                    These substances are not found in your pantry! Additives whose purpose is to imitate sensorial qualities of unprocessed foods and to disguise undesirable odours, combined with sophisticated packaging, make ultra-processed (non) foods hyper-palatble and attractive to the consumer. Examples of ultra-processed foods are packaged snacks, biscuits, ice cream, confectionery, energy and sports drinks, flavoured milk, instant soups and noodles, flavoured yoghurts, margarines and spreads, packaged pizza and pasta, burgers, sausages, nuggets, bread, cereals, muesli bars, infant formulas, pastries.
                  </p>
                  <p className="mt-8">
                    Ultra-processed foods ae derived from ingredients tahat undergo fractionation of whole foods (typically mono-sourced from corn, wheat, soya, cane, and
                    remnants of intensive live-stock farming) into base
                    subtances such as fructose, lactose, hydrogenated oils,
                    hydrolysed proteins, soya protein isolate, gluten and whey
                    protein. Base substances are subsequently submitted to
                    a series of industrial processing techniques such as
                    hydrolysis and hydrogenation, followed by reassembly using
                    extrusion and moulding, and lastly addition of colours,
                    flavour enhancers, emulsifiers and micro-plastics.
                  </p>
                  <p className="mt-8">
                    Check food labels and be cautious of an excessive number of ingredients that you do not recognise. 
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm/6 font-semibold text-gray-600">{stat.label}</dt>
                    <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex">
                <a href="https://www.cambridge.org/core/journals/public-health-nutrition/article/ultraprocessed-foods-what-they-are-and-how-to-identify-them/E6D744D714B1FF09D5BCA3E74D53A185" className="text-base/7 font-semibold text-indigo-600">
                Ultra-processed foods: what they are and how to identify them
                <span aria-hidden="true">&rarr;</span>
                </a>  
              </div>
              <div className="mt-10 flex">
                <a href="https://educhange.com/wp-content/uploads/2018/09/NOVA-Food-Classification-EduChange.pdf" className="text-base/7 font-semibold text-indigo-600">
                The NOVA Food Classification System
                <span aria-hidden="true">&rarr;</span>
                </a>  
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default UltraProcessedFoodsPage