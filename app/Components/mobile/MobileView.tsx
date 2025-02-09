"use client"

import React from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { DialogPanel } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const MobileView = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter(); // Initialize useRouter
    return (
        <div>
            {/* Main Content */}
            <main className="flex-1 ml-64">

            {/* Mobile Menu Dialog */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Star Software</span>
                    <img
                        alt=""
                        // src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                    />
                    </a>
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        <Link 
                        href="/Components/Products" 
                        className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Products
                        </Link>
                        <Link
                        href="/Components/Sales"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Sales
                        </Link>
                        <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Purchases
                        </Link>
                        <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Contacts
                        </Link>
                        <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Product Setting
                        </Link>
                        <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Report
                        </Link>
                        <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Settings
                        </Link>
                        <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        Log in
                        </Link>
                    </div>
                    </div>
                </div>
                </DialogPanel>
            </Dialog>
            </main>
        </div>
  )
}

export default MobileView