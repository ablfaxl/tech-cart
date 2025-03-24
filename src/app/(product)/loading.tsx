export default function ProductSearchSkeleton() {
  return (
    <div className='w-full'>
      <div className='flex w-full mb-6 animate-pulse'>
        <div className='h-10 bg-gray-200 rounded w-full'></div>
        <div className='h-10 bg-gray-200 rounded w-24 ml-2'></div>
      </div>

      <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
        {/* Filters skeleton */}
        <div className='hidden lg:block'>
          {[1, 2, 3].map(i => (
            <div className='border-b border-gray-200 py-6' key={i}>
              <div className='h-6 bg-gray-200 rounded w-1/2 mb-6'></div>
              <div className='space-y-4'>
                {[1, 2, 3, 4, 5].map(j => (
                  <div className='flex items-center' key={j}>
                    <div className='h-4 w-4 bg-gray-200 rounded'></div>
                    <div className='h-4 bg-gray-200 rounded w-24 ml-3'></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Product grid skeleton */}
        <div className='lg:col-span-3'>
          <div className='flex items-center justify-between border-b border-gray-200 pb-6 pt-1'>
            <div className='h-5 bg-gray-200 rounded w-20'></div>
          </div>

          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div className='group animate-pulse' key={i}>
                <div className='aspect-w-1 aspect-h-1 w-full h-60 bg-gray-200 rounded-md'></div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <div className='h-4 bg-gray-200 rounded w-36 mb-2'></div>
                    <div className='h-3 bg-gray-200 rounded w-24'></div>
                  </div>
                  <div className='h-4 bg-gray-200 rounded w-16'></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
