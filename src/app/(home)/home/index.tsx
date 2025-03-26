import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/app/(product)/card'
import CategoryCard from '@/app/(product)/category/card'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-br from-slate-50 to-purple-50 py-20 px-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              خرید مطمئن
            </h1>
            <p className='text-gray-600 text-lg mb-8 max-w-lg'>
              مجموعه انتخاب شده ای از محصولات ممتاز را کشف کنید. کیفیت مواد، طرح
              های بی انتها، و طرح های استثنایی.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-slate-950 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors'>
                الان خرید کن
              </button>
              <button className='text-gray-700 px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-100 transition-colors'>
                دیدن همه کالکشن ها
              </button>
            </div>
          </div>
          <div className='hidden md:block'>
            <Image
              alt='Featured product'
              className='rounded-lg shadow-lg object-cover h-full w-full'
              height={400}
              src='/image/t-shirt-1.avif'
              width={500}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>
          خرید بر اساس دسته بندی
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <CategoryCard image='/image/t-shirt-1.avif' name='لباس' />
          <CategoryCard image='/image/cup-black.avif' name='اکسسوری' />
          <CategoryCard image='/image/t-shirt-1.avif' name='کفش' />
          <CategoryCard image='/image/cup-black.avif' name='دکوری' />
        </div>
      </div>

      {/* Featured Products */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold text-gray-900'>محصولات محبوب</h2>
            <Link
              className='text-slate-600 hover:text-slate-800 font-medium'
              href='#'
            >
              دیدن همه ←{' '}
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <ProductCard
              image='/image/cup-black.avif'
              name='تیشرت کتان'
              price={29.99}
              rating={4.5}
            />
            <ProductCard
              image='/image/t-shirt-1.avif'
              name='کیف چرمی (چرم تبریز)'
              price={89.99}
              rating={4.7}
            />
            <ProductCard
              image='/image/cup-black.avif'
              name='شلوار مام استایل'
              price={59.99}
              rating={4.8}
            />

            <ProductCard
              image='/image/t-shirt-1.avif'
              name='ساعت هوشمند اپل'
              price={129.99}
              rating={4.9}
            />
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className='bg-slate-950 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>فروش بهاره</h2>
            <p className='text-indigo-100 text-lg mb-6 max-w-2xl mx-auto'>
              از تخفیف 50 درصدی بر روی اقلام انتخابی برخوردار شوید. پیشنهاد زمان
              محدود
            </p>
            <button className='bg-white text-slate-960 px-6 py-3 rounded-md font-medium hover:bg-slate-50 transition-colors'>
              خرید
            </button>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl font-bold text-gray-900'>جدیدترین ها</h2>
          <Link
            className='text-slate-950 hover:text-slate-800 font-medium'
            href='/search'
          >
            دیدن همه ←{' '}
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <ProductCard
            isNew
            image='/image/t-shirt-1.avif'
            name='تیشرت بگ'
            price={79.99}
            rating={4.6}
          />
          <ProductCard
            isNew
            image='/image/t-shirt-1.avif'
            name='شلوار مام فیت'
            price={64.99}
            rating={4.3}
          />
          <ProductCard
            isNew
            image='/image/t-shirt-1.avif'
            name='ایرپاد بلوتوثی'
            price={119.99}
            rating={4.7}
          />
          <ProductCard
            isNew
            image='/image/t-shirt-1.avif'
            name='ماگ طرح ace'
            price={34.99}
            rating={4.5}
          />
        </div>
      </div>

      {/* Newsletter */}
      <div className='bg-gray-100 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-xl mx-auto text-center'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              در خبرنامه ما عضو شوید
            </h2>
            <p className='text-gray-600 mb-6'>
              آخرین به روز رسانی ها را در مورد محصولات جدید و فروش های آینده
              دریافت کنید.
            </p>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input
                className='flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-slate-950'
                placeholder='ایمیل خود را وارد کنید'
                type='email'
              />
              <button className='bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-slate-950  transition-colors'>
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-900 text-white pt-16 pb-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-lg font-bold mb-4'>Tech Cart</h3>
              <p className='text-gray-400 mb-4'>
                Premium quality products for your everyday needs.
              </p>
              <div className='flex space-x-4'>
                <Link className='text-gray-400 hover:text-white' href='#'>
                  <span className='sr-only'>Facebook</span>
                  <svg
                    aria-hidden='true'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      clipRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      fillRule='evenodd'
                    />
                  </svg>
                </Link>
                <Link className='text-gray-400 hover:text-white' href='#'>
                  <span className='sr-only'>Instagram</span>
                  <svg
                    aria-hidden='true'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      clipRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      fillRule='evenodd'
                    />
                  </svg>
                </Link>
                <Link className='text-gray-400 hover:text-white' href='#'>
                  <span className='sr-only'>Twitter</span>
                  <svg
                    aria-hidden='true'
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className='text-lg font-bold mb-4'>فروشگاه</h3>
              <ul className='space-y-2'>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    همه محصولات
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    جدیدترین ها
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    محبوب ترین ها
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    پر فروش ترین ها
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-bold mb-4'>خدمات</h3>
              <ul className='space-y-2'>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    حمل و نقل و برگشت
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    راهنمای سایز
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-bold mb-4'>تک کارت | Tech Cart</h3>
              <ul className='space-y-2'>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    داستان ما
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className='text-gray-400 hover:text-white' href='#'>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-12 pt-8'>
            <p className='text-gray-400 text-center'>
              © 2025 Tech Cart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
