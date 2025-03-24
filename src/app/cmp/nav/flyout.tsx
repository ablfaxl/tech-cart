import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import Image from 'next/image';
import { navigation } from '@/data/nav';

export default function Flayout() {
  return (
    <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation.categories.map((category) => (
          <Popover className="flex" key={category.name}>
            <div className="relative flex">
              <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                {category.name}
              </PopoverButton>
            </div>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-white shadow"
              />

              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                      {category.featured.map((item) => (
                        <div
                          className="group relative text-base sm:text-sm"
                          key={item.name}
                        >
                          <Image
                            unoptimized
                            alt={item.imageAlt}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                            height={200}
                            src={item.imageSrc}
                            width={200}
                          />
                          <a
                            className="mt-6 block font-medium text-gray-900"
                            href={item.href}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            className="font-medium text-gray-900"
                            id={`${section.name}-heading`}
                          >
                            {section.name}
                          </p>
                          <ul
                            aria-labelledby={`${section.name}-heading`}
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            role="list"
                          >
                            {section.items.map((item) => (
                              <li className="flex" key={item.name}>
                                <a
                                  className="hover:text-gray-800"
                                  href={item.href}
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        ))}

        {navigation.pages.map((page) => (
          <a
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
            href={page.href}
            key={page.name}
          >
            {page.name}
          </a>
        ))}
      </div>
    </PopoverGroup>
  );
}
