'use client'

import ProductGrid from './product-grid'

export default function ProductSearch() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col space-y-6 '>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
            {/* Product grid */}
            <div className='lg:col-span-4'>
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
