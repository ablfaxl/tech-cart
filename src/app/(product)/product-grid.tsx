'use client'

import { useEffect, useState } from 'react'
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
    name: 'Premium Wireless Headphones',
    price: 199.99,
    category: 'electronics',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 2,
    name: 'Slim Fit T-shirt',
    price: 29.99,
    category: 'clothing',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 3,
    name: 'Smart Watch Series 5',
    price: 299.99,
    category: 'electronics',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 89.99,
    category: 'sports',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 5,
    name: 'Ceramic Coffee Mug',
    price: 19.99,
    category: 'home',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 79.99,
    category: 'electronics',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 7,
    name: 'Moisturizing Face Cream',
    price: 24.99,
    category: 'beauty',
    image: '/image/t-shirt-1.avif',
  },
  {
    id: 8,
    name: 'Denim Jacket',
    price: 59.99,
    category: 'clothing',
    image: '/image/t-shirt-1.avif',
  },
]

export default function ProductGrid({ searchQuery }: { searchQuery: string }) {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(mockProducts)

  useEffect(() => {
    if (searchQuery) {
      const filtered = mockProducts.filter(
        product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(mockProducts)
    }
  }, [searchQuery])

  return (
    <div className='mt-6'>
      {filteredProducts.length === 0 ? (
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
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
          {filteredProducts.map(product => (
            <ProductCard
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
