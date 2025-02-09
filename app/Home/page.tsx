import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import MobileView from "../Components/mobile/MobileView";

export default function Example() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <header className="bg-white w-64 h-screen fixed left-0 top-0 overflow-y-auto">
        <nav
          aria-label="Global"
          className="flex flex-col justify-between h-full p-6"
        >
          <div>
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Star-Software</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <PopoverGroup className="flex flex-col gap-y-4 mt-6">
              <Link href="/Components/Products" className="text-sm/6 font-semibold text-gray-900 hover:">
                Products
              </Link>
              <Link href="Components/Sales" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                Sales
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                Purchases
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                Contacts
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                Product Setting
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                Report
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                Setting
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            </PopoverGroup>
          </div>
        </nav>
      </header>

      <MobileView/>
    </div>
  );
}