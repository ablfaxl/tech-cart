import { Suspense } from 'react'
import ProductSearchSkeleton from '@/app/(product)/loading'
import ProductSearch from '@/app/(product)/search'

export const metadata = {
  title: 'Search Products | Your Shop',
  description: 'Search for products in our catalog',
}

export default function SearchPage() {
  return (
    <main className='container mx-auto px-5 py-8 -z-10'>
      <Suspense fallback={<ProductSearchSkeleton />}>
        <ProductSearch />
      </Suspense>
    </main>
  )
}
