'use client'
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type IProductCard = {
  name: string
  price: number
  rating: number
  image?: string
  isNew?: boolean
}

export default function ProductCard({
  name,
  price,
  rating,
  image,
  isNew = false,
}: IProductCard) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    // eslint-disable-next-line no-alert
    alert('add to cart')
  }
  return (
    <Link
      className='group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow'
      href={'/product/1'}
    >
      {isNew && (
        <div className='absolute top-2 left-2 z-10'>
          <span className='bg-slate-600 text-white text-xs font-bold px-2 py-1 rounded'>
            جدید
          </span>
        </div>
      )}
      <div className='relative aspect-square overflow-hidden'>
        <Image
          unoptimized
          alt={name}
          className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
          height={200}
          src={image || '/image/t-shirt-1.avif'}
          width={200}
        />
        <button
          className='absolute bottom-0 left-0 right-0 bg-slate-950 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-full group-hover:translate-y-0 duration-300'
          onClick={handleAddToCart}
        >
          اضافه کردن به سبد خرید
        </button>
      </div>
      <div className='p-4'>
        <h3 className='text-gray-900 font-medium'>{name}</h3>
        <div className='flex items-center mt-1'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-black' : 'text-gray-300'
                }`}
                key={i}
              />
            ))}
          </div>
          <span className='text-xs text-gray-500 ml-1'>{rating}</span>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <span className='text-gray-900 font-bold'>﷼{price.toFixed(2)}</span>
          <button className='text-gray-400 hover:text-slate-600'>
            <HeartIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </Link>
  )
}
