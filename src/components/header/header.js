'use client'
import React from "react"

import Burger from "./burger"
import Menu from "./menu"
import Links from "./links"


export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <header className="p-3 flex flex-col md:flex-row place-content-between bg-zinc-900 fixed z-20 w-full shadow-md md:items-center">
            <div className="flex flex-row place-content-between w-full md:w-fit items-center">
                <h2 className="text-xl md:text-2xl">
                    Nicolò Spampatti
                </h2>
                <Burger
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>

            <div className="hidden md:flex flex-row flex-grow md:flex-grow-0 place-content-between md:gap-4 xl:gap-8 text-base md:text-xl">
                <Links />
            </div>
            {
                isOpen && <Menu setIsOpen={setIsOpen} />
            }
        </header>
    )
}