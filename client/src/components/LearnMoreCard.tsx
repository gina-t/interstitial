import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Ultra-Processed Foods',
    href: '/ultraprocessed-foods',
  },
  {
    title: 'Big Food',
    href: '/marketing-strategies',
  },
  {
    title: 'Whole Foods',
    href: '/whole-foods',
  },
  {
    title: 'Food Labels',
    href: '/food-labels',
  },
  {
    title: 'Behavioural Economics',
    href: '/behavioural-economics',
  },
  {
    title: 'Calorie Literacy',
    href: '/calories',
  },
  {
    title: 'Exercise',
    href: '/exercise',
  },
  {
    title: 'Diabetes Mellitus',
    href: '/diabetes',
  },
];

export default function ResourceCard() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent px-6 py-16 sm:py-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h4 className="text-base/7 font-semibold text-indigo-600">
                Learn more about specific topics
              </h4>

              {resources.map(
                (resource) =>
                  resource.title &&
                  resource.href && (
                    <div key={resource.title} className="mt-3 text-sm/6">
                      <Link
                        to={resource.href}
                        className="font-semibold text-gray-900 hover:text-gray-500 inline-flex items-center"
                      >
                        {resource.title}
                        <ChevronRightIcon className="h-4 w-4 ml-0.5" />
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
