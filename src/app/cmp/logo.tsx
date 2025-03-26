import Link from 'next/link'

export default function Logo({ size }: { size?: string }) {
  return (
    <div className='ml-4 flex'>
      <Link href='/'>
        <span className='sr-only'>Tech Cart</span>
        <svg
          aria-label='Tech Cart'
          className={`${size ? size : 'h-4 w-4'}  fill-black`}
          viewBox='0 0 32 28'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z'></path>
          <path d='M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z'></path>
        </svg>
      </Link>
    </div>
  )
}
