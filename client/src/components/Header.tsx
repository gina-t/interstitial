import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Food Search', href: '/foodsearch' },
  { name: 'Favourites', href: '/favourites' },
  { name: 'Diabetes Mellitus', href: '/diabetes' },
  { name: 'Resources', href: '/resources' },
]

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isActive = (path:string) => location.pathname === path;

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" 
            className="-m-1.5 p-1.5">
            <span className="sr-only">Interstitial</span>
            <img
              alt="butterfly logo"
              src={logo}
              className="h-12 w-auto animate-pulse"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          {/* Desktop navigation links */}
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`text-sm/6 font-semibold ${isActive(item.href) ? 'text-indigo-600' : 'text-gray-900'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="flex items-center text-sm/6 font-semibold text-gray-900">
            Login <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo link in mobile menu */}
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Interstitial</span>
              <img
                alt="butterfly logo"
                src={logo}
                className="h-12 w-auto animate-pulse"
              />
            </Link>
            {/* Close button in mobile menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>

          </div>

          {/* Mobile navigation links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${isActive(item.href) ? 'text-indigo-600' : 'text-gray-900'}`} 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
