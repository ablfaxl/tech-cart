'use client'

import {
  Button,
  Dialog,
  Disclosure,
  Field,
  Input,
  Transition,
} from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import ProductGrid from './product-grid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'electronics', label: 'Electronics', checked: false },
      { value: 'clothing', label: 'Clothing', checked: false },
      { value: 'home', label: 'Home & Garden', checked: false },
      { value: 'sports', label: 'Sports & Outdoors', checked: false },
      { value: 'beauty', label: 'Beauty & Personal Care', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'apple', label: 'Apple', checked: false },
      { value: 'samsung', label: 'Samsung', checked: false },
      { value: 'nike', label: 'Nike', checked: false },
      { value: 'adidas', label: 'Adidas', checked: false },
      { value: 'sony', label: 'Sony', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'under-25', label: 'Under $25', checked: false },
      { value: '25-50', label: '$25 to $50', checked: false },
      { value: '50-100', label: '$50 to $100', checked: false },
      { value: '100-200', label: '$100 to $200', checked: false },
      { value: 'over-200', label: 'Over $200', checked: false },
    ],
  },
]

export default function ProductSearch() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='bg-white'>
      {/* Mobile filter dialog */}
      <Transition as={Fragment} show={mobileFiltersOpen}>
        <Dialog
          as='div'
          className='relative z-40 lg:hidden'
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                <div className='flex items-center justify-between px-4'>
                  <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                  <button
                    className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400'
                    type='button'
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                  </button>
                </div>

                {/* Filters */}
                <form className='mt-4 border-t border-gray-200'>
                  {filters.map(section => (
                    <Disclosure
                      as='div'
                      className='border-t border-gray-200 px-4 py-6'
                      key={section.id}
                    >
                      {({ open }) => (
                        <>
                          <h3 className='-mx-2 -my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                <ChevronDownIcon
                                  aria-hidden='true'
                                  className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-6'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  className='flex items-center'
                                  key={option.value}
                                >
                                  <input
                                    className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                                    defaultChecked={option.checked}
                                    defaultValue={option.value}
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type='checkbox'
                                  />
                                  <label
                                    className='ml-3 min-w-0 flex-1 text-gray-500'
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col space-y-6 '>
          {/* Search input */}
          <div className='flex w-full hidden items-end justify-center gap-3'>
            <div className='w-full  max-w-sm'>
              <Field>
                <Input
                  className={clsx(
                    'mt-3 block w-full rounded-lg border border-indigo-600 bg-indigo-50/5 py-1.5 px-3 text-sm/6 ',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-indigo-400/25'
                  )}
                  placeholder='Search products...'
                  type='text'
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                />
              </Field>
            </div>
            <Button className='rounded bg-indigo-600 py-2 px-4 text-sm text-white data-[hover]:bg-indigo-500 data-[active]:bg-indigo-700'>
              Search
            </Button>
          </div>

          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
            {/* Filters */}
            <div className='hidden'>
              <h3 className='sr-only'>Categories</h3>

              {filters.map(section => (
                <Disclosure
                  as='div'
                  className='border-b border-gray-200 py-6'
                  key={section.id}
                >
                  {({ open }) => (
                    <>
                      <h3 className='-my-3 flow-root'>
                        <Disclosure.Button className='flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500'>
                          <span className='font-medium text-gray-900'>
                            {section.name}s
                          </span>
                          <span className='ml-6 flex items-center'>
                            <ChevronDownIcon
                              aria-hidden='true'
                              className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
                            />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className='pt-6'>
                        <div className='space-y-4'>
                          {section.options.map((option, optionIdx) => (
                            <div
                              className='flex items-center'
                              key={option.value}
                            >
                              <input
                                className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                                defaultChecked={option.checked}
                                defaultValue={option.value}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type='checkbox'
                              />
                              <label
                                className='ml-3 text-sm text-gray-600'
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>

            {/* Product grid */}
            <div className='lg:col-span-4'>
              <ProductGrid searchQuery={searchQuery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
