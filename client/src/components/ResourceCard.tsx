import { ChevronRightIcon } from "@heroicons/react/20/solid"

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
    title: 'The State of Diabetes Mellitus in Australia in 2024', 
    href: 'https://westernsydneydiabetes.com.au/uploads/2024/07/The-State-of-Diabetes-Mellitus-in-Australia-in-2024.pdf'
  },
  {
    title: 'Total Daily Energy Expenditure Calculator Australia', 
    href: 'https://tdeecalculator.com.au/'
  },
  {
    title: 'Total Daily Energy Expenditure Calculator', 
    href: 'https://tdeecalculator.net/'
  },
  {
    title: 'Ultraprocessed food consumption and dietary nutrient profiles associated with obesity: A multicountry study of children and adolescents', 
    href: 'https://pubmed.ncbi.nlm.nih.gov/34889015/'
  },
  {
    title: 'Australian Government: Australian Institute of Health and Welfare', 
    href: 'https://www.aihw.gov.au/'
  },
]

export default function ResourceCard() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-16 sm:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h4 className="text-base/7 font-semibold text-indigo-600">
                Nutrition and Exercise Resources
              </h4>

              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                Explore these evidence-based articles to understand more about the multitude of factors contributing to your choices around nutrition, exercise and well-being.
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