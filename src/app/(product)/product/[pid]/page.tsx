'use client'

import { Radio, RadioGroup } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useState } from 'react'
import { pId } from '@/constants/products'

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SinglepId() {
  const [selectedColor, setSelectedColor] = useState(pId.colors[0])
  const [selectedSize, setSelectedSize] = useState(pId.sizes[2])

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
            role='list'
          >
            {pId.breadcrumbs.map(breadcrumb => (
              <li key={breadcrumb.id}>
                <div className='flex items-center'>
                  <Link
                    className='mr-2 text-sm font-medium text-gray-900'
                    href={breadcrumb.href}
                  >
                    {breadcrumb.name}
                  </Link>
                  <svg
                    aria-hidden='true'
                    className='h-5 w-4 text-gray-300 -rotate-x-180'
                    fill='currentColor'
                    height={20}
                    viewBox='0 0 16 20'
                    width={16}
                  >
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
            ))}
            <li className='text-sm'>
              <Link
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
                href={pId.href}
              >
                {pId.name}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <img
            alt={pId.images[0].alt}
            className='hidden size-full rounded-lg object-cover lg:block'
            src={pId.images[0].src}
          />
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <img
              alt={pId.images[1].alt}
              className='aspect-[3/2] w-full rounded-lg object-cover'
              src={pId.images[1].src}
            />
            <img
              alt={pId.images[2].alt}
              className='aspect-[3/2] w-full rounded-lg object-cover'
              src={pId.images[2].src}
            />
          </div>
          <img
            alt={pId.images[3].alt}
            className='aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto'
            src={pId.images[3].src}
          />
        </div>

        {/* pId info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {pId.name}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>pId information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>{pId.price}</p>

            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only'>نظرات</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      aria-hidden='true'
                      className={classNames(
                        reviews.average > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'size-5 shrink-0'
                      )}
                      key={rating}
                    />
                  ))}
                </div>
                <p className='sr-only'>{reviews.average} </p>
                <a
                  className='ml-3 text-sm font-medium text-slate-950 hover:text-slate-800'
                  href={reviews.href}
                >
                  {reviews.totalCount} نظر
                </a>
              </div>
            </div>

            <form className='mt-10'>
              {/* Colors */}
              <div>
                <h3 className='text-sm font-medium text-gray-900'>رنگ</h3>

                <fieldset aria-label='Choose a color' className='mt-4'>
                  <RadioGroup
                    className='flex items-center gap-x-3'
                    value={selectedColor}
                    onChange={setSelectedColor}
                  >
                    {pId.colors.map(color => (
                      <Radio
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1'
                        )}
                        key={color.name}
                        value={color}
                      >
                        <span
                          aria-hidden='true'
                          className={classNames(
                            color.class,
                            'size-8 rounded-full border border-black/10'
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>Size</h3>
                  <a
                    className='text-sm font-medium text-slate-600 hover:text-slate-500'
                    href='#'
                  >
                    راهنمای سایز
                  </a>
                </div>

                <fieldset aria-label='Choose a size' className='mt-4'>
                  <RadioGroup
                    className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'
                    value={selectedSize}
                    onChange={setSelectedSize}
                  >
                    {pId.sizes.map(size => (
                      <Radio
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-slate-500 sm:flex-1 sm:py-6'
                        )}
                        disabled={!size.inStock}
                        key={size.name}
                        value={size}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden='true'
                            className='pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-slate-500'
                          />
                        ) : (
                          <span
                            aria-hidden='true'
                            className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                          >
                            <svg
                              className='absolute inset-0 size-full stroke-2 text-gray-200'
                              preserveAspectRatio='none'
                              stroke='currentColor'
                              viewBox='0 0 100 100'
                            >
                              <line
                                vectorEffect='non-scaling-stroke'
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-950 duration-300 px-8 py-3 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                type='submit'
              >
                اضافه کردن به سبد خرید
              </button>
            </form>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>{pId.description}</p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>مشخصات</h3>

              <div className='mt-4'>
                <ul className='list-disc space-y-2 pl-4 text-sm' role='list'>
                  {pId.highlights.map(highlight => (
                    <li className='text-gray-400' key={highlight}>
                      <span className='text-gray-600'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>جزئیات</h2>

              <div className='mt-4 space-y-6'>
                <p className='text-sm text-gray-600'>{pId.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
