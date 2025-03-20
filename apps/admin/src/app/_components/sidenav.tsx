import { GlobeAltIcon, PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './navlink';

function AcmeLogo() {
  return (
    <div
      className={` font-serif flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px] ">Acme</p>
    </div>
  );
}
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-center justify-start rounded-md bg-indigo-600 p-4 md:h-40">
        <div className="w-32 text-white md:w-40 flex items-center justify-center">
          {/* <code className="font-bold text-2xl h-20">Tech Cart</code> */}
          <AcmeLogo />
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
