"use client"

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Line } from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState } from "react"
import { MotionTransition } from "../MotionTransition/"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked: boolean) => {
      setDarkMode(checked);
    };
  
    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center xl:justify-start justify-between w-full shadow-sm fixed left-0 top-0 bg-white z-50 bg-opacity-50 backdrop-blur-lg">
                <Link href="/" className="flex items-center">
                    <Image src="/assets/Nex negro.png" width="180" height="10" alt="Logo Nex"/>
                </Link>
                <div className="text-3xl mr-6 flex xl:hidden">
                    <RiMenu3Line className="cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                    <DarkModeSwitch
                        className="ml-5"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                </div>
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full xl:block xl:w-auto`}>
                    <div className="hidden xl:flex flex-col p-4 mt-4 md:p-0 sm:flex-row md:space-x-3 md:mt-0 md:border-0">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                                <Link href={idLink} className="text-lg hover:text-secondary [text-shadow:_2px_3px_2px_rgb(0_0_0_/_20%)]">{name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <DarkModeSwitch
                    className=" hidden xl:block ml-36"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={30}
                />
            </nav>
        </MotionTransition>
    )
}
