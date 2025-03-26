'use client'

import ProductCard from '@/app/(product)/card'

type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
}
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'هدفون بیسیم sonny',
    price: 199.99,
    category: 'electronics',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 2,
    name: 'تیشرت جذب',
    price: 29.99,
    category: 'clothing',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 3,
    name: 'ساعت هوشمند سری ۵',
    price: 299.99,
    category: 'electronics',
    image: '/image/cup-black.avif',
  },
  {
    id: 4,
    name: 'کفش ورزشی',
    price: 89.99,
    category: 'sports',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 5,
    name: 'ماگ طرح بتمن',
    price: 19.99,
    category: 'home',
    image: '/image/cup-black.avif',
  },
  {
    id: 6,
    name: 'اسپیکر بلوتوثی',
    price: 79.99,
    category: 'electronics',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 7,
    name: 'کرم ضد آفتاب',
    price: 24.99,
    category: 'beauty',
    image: '/image/cup-black.avif',
  },
  {
    id: 8,
    name: 'کاپشن Fendi',
    price: 59.99,
    category: 'clothing',
    image: '/image/t-shirt-1.avif',
  },
]

export default function ProductGrid() {
  return (
    <div className='mt-6'>
      {mockProducts.length === 0 ? (
        <div className='text-center py-12'>
          <h3 className='text-lg font-medium text-gray-900'>
            No products found
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            Try adjusting your search or filter to find what you&#39;re looking
            for.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 false-slide-animate'>
          {mockProducts.map(product => (
            <ProductCard
              image={product.image}
              isNew={!!(product.id % 2)}
              key={product.id}
              name={product.name}
              price={product.price}
              rating={product.id * 1.5}
            />
          ))}
        </div>
      )}
    </div>
  )
}
