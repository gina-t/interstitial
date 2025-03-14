import { ChevronRightIcon } from '@heroicons/react/20/solid';
import logo from '../assets/logo.svg';
import hero from '../assets/hero.jpg';
import { Link } from 'react-router-dom';
import GridPattern from './GridPattern';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      {/* Grid pattern at the bottom layer */}
      <div className="absolute inset-0 z-0">
        <GridPattern />
      </div>

      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-linear-115 from-[#fff1be]/80 from-28% via-[#ee87cb]/80 via-70% to-[#b060ff]/80 sm:bg-linear-145 z-10 mix-blend-multiply">
        {/* No content here */}
      </div>

      {/* Main content on top */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        {/* Rest of your content remains the same */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <img alt="Interstitial logo" src={logo} className="h-12" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link to="/about" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/10 ring-inset whitespace-nowrap">
                A Paradigm for Well-Being
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                <span>Evidence Based</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            Interstitial
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            The compact, continuous space between cells. The infinite space
            between existence and well-being. Interstitial guides you through
            the uncertainty to help you reach your health goals.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Hero image section */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt=""
                src={hero}
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md ring-1 shadow-2xl ring-gray-900/10 opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
