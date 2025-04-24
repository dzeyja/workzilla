'use client'

import Link from "next/link"
import { ReactNode, useState } from "react"

export interface DropItem {
    content: ReactNode
    link?: string
}

interface DropdownProps {
    children: ReactNode
    className?: string
    items?: DropItem[]
}

export const Dropdown = (props: DropdownProps) => {
    const { children, items } = props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative inline-block text-left">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {children}
            </div>

            {isOpen && (
                <div className="absolute p-2 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in" >
                    {items?.map((item, index) => (
                        <div key={index}>
                            {item.link ? (
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    href={item.link}
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                    {item.content}
                                </Link>
                            ) : (
                                <div className="block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                    {item.content}
                                </div>
                            )
                            }
                        </div>
                    ))} 
                </div>
            )}
        </div>
  )
}
