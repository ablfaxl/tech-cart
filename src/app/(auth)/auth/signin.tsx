import Link from 'next/link'
import Logo from '@/app/cmp/logo'

export default function Signin() {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className={'w-full flex items-center justify-center'}>
            <Logo size={'size-10'} />
          </div>
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            ورود به حساب کاربری
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form action='#' className='space-y-6' method='POST'>
            <div>
              <label
                className='block text-sm/6 font-medium text-gray-900'
                htmlFor='email'
              >
                ایمیل
              </label>
              <div className='mt-2'>
                <input
                  required
                  autoComplete='email'
                  className={'input'}
                  id='email'
                  name='email'
                  type='email'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  className='block text-sm/6 font-medium text-gray-900'
                  htmlFor='password'
                >
                  رمز عبور
                </label>
                <div className='text-sm'>
                  <Link
                    className='font-semibold text-slate-950 hover:text-slate-600 duration-300'
                    href='#'
                  >
                    فراموشی رمز عبور؟
                  </Link>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  required
                  autoComplete='current-password'
                  className={'input'}
                  id='password'
                  name='password'
                  type='password'
                />
              </div>
            </div>

            <div>
              <button
                className='flex w-full cursor-pointer justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-700 duration-300  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
                type='submit'
              >
                ورود
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            هنوز عضو نیستید?{' '}
            <Link
              className='font-semibold text-slate-950 hover:text-slate-500'
              href='/signup'
            >
              همین حالا ثبت نام کن
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
