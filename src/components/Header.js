import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon
} from '@heroicons/react/20/solid';
import Link from 'next/link'
import Image from 'next/image'; 

const aboutus = [
  { name: "What's Enactus UBC?", href: '/about' },
  // { name: 'Our Team', href: '/executives' },
  { name: 'Competitions', href: '/competitions' }
];
const projects = [
  { name: 'Ennovate', href: '/ennovate' },
  { name: 'Enspire', href: '/enspire' },
  { name: 'Seeder', href: '/seeder' },
];
const joinourteam = [
  { name: 'Join Our Team', href: 'joinus' },
  { name: 'Sponsors', href: '/sponsors' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-[#29476D]'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
        <Link href='/' className=''>
        <Image
          className='h-12 w-auto'
          src='/Logo.png'
          alt='Enactus UBC Logo'
          width={201}
          height={130}
          />
        </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover  className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#FFC220]'>
              About Us
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5'>
                {aboutus.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#FBFCFD]'>
              Projects
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5'>
                {projects.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#FBFCFD]'>
              Get Involved
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5'>
                {joinourteam.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden '
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#29476D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
          <a href='#' className='-m-1.5 p-1.5'>
            <Image
              className='h-12 w-auto'
              src='/Logo.png'
              alt='Enactus UBC Logo'
              width={201}
              height={130}
            />
          </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-[#FBFCFD]'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#FFC220]'>
                        About Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {aboutus.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#FFC220] '
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className=' mt-4 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#FBFCFD]'>
                        Projects
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {projects.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#FBFCFD]'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='mt-4  flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#FBFCFD] '>
                        Join our Team
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {joinourteam.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#FBFCFD]'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
