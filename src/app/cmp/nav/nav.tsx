'use client'

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/app/cmp/logo'
import CartModal from '@/app/cmp/modal/cart'
import DialogCmp from '@/app/cmp/modal/dialog'
import { Banner } from '@/app/cmp/nav/banner'
import Flayout from '@/app/cmp/nav/flyout'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  if (pathname === '/signin' || pathname === '/signup') {
    return null
  }

  return (
    <>
      <div className='bg-white'>
        {/* Mobile menu */}
        <DialogCmp open={open} onClose={() => setOpen(false)} />

        <header className='relative bg-white'>
          <Banner />

          <nav
            aria-label='Top'
            className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
          >
            <div className='border-b border-gray-200'>
              <div className='flex h-16 items-center'>
                <button
                  className='relative rounded-md bg-white p-2 text-gray-400 lg:hidden'
                  type='button'
                  onClick={() => setOpen(true)}
                >
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open menu</span>
                  <Bars3Icon aria-hidden='true' className='size-6' />
                </button>
                <Logo />
                <Flayout />
                <div className='ml-auto flex items-center'>
                  <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <Link
                      className='text-sm font-medium text-gray-700 hover:text-gray-800'
                      href='/signin'
                    >
                      ورود
                    </Link>
                    <span aria-hidden='true' className='h-6 w-px bg-gray-200' />
                    <Link
                      className='text-sm font-medium text-gray-700 hover:text-gray-800'
                      href='/signup'
                    >
                      ساخت حساب
                    </Link>
                  </div>

                  {/* Search */}
                  <div className='flex lg:ml-6'>
                    <Link
                      className='p-2 text-gray-400 hover:text-gray-500'
                      href='#'
                    >
                      <span className='sr-only'>جستجو</span>
                      <MagnifyingGlassIcon
                        aria-hidden='true'
                        className='size-6'
                      />
                    </Link>
                  </div>

                  {/* Cart */}
                  <div className='ml-4 cursor-pointer flow-root lg:ml-6'>
                    <div className='group -m-2 flex items-center p-2'>
                      <ShoppingBagIcon
                        aria-hidden='true'
                        className='size-6 shrink-0 text-gray-400 group-hover:text-gray-500'
                        onClick={() => setOpenCart(true)}
                      />
                      <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                        2
                      </span>
                      <span className='sr-only'>سبد خرید</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {openCart && (
        <CartModal
          open={openCart}
          onClose={() => setOpenCart(false)}
          onOpen={() => setOpenCart(true)}
        />
      )}
    </>
  )
}
