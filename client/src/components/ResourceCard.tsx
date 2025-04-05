import { ChevronRightIcon } from "@heroicons/react/20/solid"

const resources = [
  
  {
    title: 'Total Daily Energy Expenditure Calculator Australia', 
    href: 'https://tdeecalculator.com.au/'
  },
  {
    title: 'Total Daily Energy Expenditure Calculator', 
    href: 'https://tdeecalculator.net/'
  },
  
]

export default function ResourceCard() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-16 sm:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h4 className="text-lg/7 font-semibold text-indigo-600">
                Total Daily Energy Expenditure Calculator
              </h4>

              <div className="mt-3 max-w-xl text-base/7 text-gray-700">
                <p>
                  Total daily energy expenditure (TDEE) is the number of calories your body needs to maintain your current weight. It is an estimate of the number of calories you burn per day, and is calculated by factoring your basal metabolic rate at rest, physical activity and thermic qualities of food consumed.
                </p>
              </div>
    

              {resources.map((resource) => (
                resource.title && resource.href && (
                  <div key={resource.title} className="mt-3 text-sm/6">
                    <a 
                      href={resource.href}
                      className="font-semibold text-gray-900 hover:text-gray-500"
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
  )
}

// <div className="bg-white shadow-sm sm:rounded-lg">
    //   <div className="px-4 py-5 sm:p-6">
    //     <h3 className="text-base font-semibold text-gray-900">Nutrition and Exercise Resources</h3>
    //     <div className="mt-2 max-w-xl text-sm text-gray-500">
    //       <p>
    //         Explore these evidence-based articles to understand more about the multitude of factors contributing to your choices around nutrition, exercise and well-being.
    //       </p>
    //     </div>