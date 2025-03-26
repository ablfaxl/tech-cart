import Image from 'next/image'
import Link from 'next/link'

type ICategoryCard = {
  name: string
  image?: string
  slug?: string
}

export default function CategoryCard({ name, image }: ICategoryCard) {
  return (
    <Link className='group' href='/product/1'>
      <div className='relative overflow-hidden rounded-lg aspect-square'>
        <Image
          alt={name}
          className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
          height={200}
          src={image || '/image/t-shirt-1.avif'}
          width={200}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end'>
          <h3 className='text-white font-medium text-lg p-4'>{name}</h3>
        </div>
      </div>
    </Link>
  )
}
