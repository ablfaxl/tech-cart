import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Fragment } from 'react';
import { navigation } from '@/data/nav';

type IDialog = {
  open: boolean;
  onClose: () => void;
};

export default function DialogCmp({ open, onClose }: IDialog) {
  return (
    <Dialog className="relative z-40 lg:hidden" open={open} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <div className="flex px-4 pb-2 pt-5">
            <button
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              type="button"
              onClick={onClose}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Links */}
          <TabGroup className="mt-2">
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8 px-4">
                {navigation.categories.map((category) => (
                  <Tab
                    className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    key={category.name}
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>
            </div>
            <TabPanels as={Fragment}>
              {navigation.categories.map((category) => (
                <TabPanel
                  className="space-y-10 px-4 pb-8 pt-10"
                  key={category.name}
                >
                  <div className="grid grid-cols-2 gap-x-4">
                    {category.featured.map((item) => (
                      <div className="group relative text-sm" key={item.name}>
                        <Image
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
                  {category.sections.map((section) => (
                    <div key={section.name}>
                      <p
                        className="font-medium text-gray-900"
                        id={`${category.id}-${section.id}-heading-mobile`}
                      >
                        {section.name}
                      </p>
                      <ul
                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                        className="mt-6 flex flex-col space-y-6"
                        role="list"
                      >
                        {section.items.map((item) => (
                          <li className="flow-root" key={item.name}>
                            <a
                              className="-m-2 block p-2 text-gray-500"
                              href={item.href}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {navigation.pages.map((page) => (
              <div className="flow-root" key={page.name}>
                <a
                  className="-m-2 block p-2 font-medium text-gray-900"
                  href={page.href}
                >
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
                Sign in
              </a>
            </div>
            <div className="flow-root">
              <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
                Create account
              </a>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
