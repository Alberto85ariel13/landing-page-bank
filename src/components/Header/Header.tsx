"use client"

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Line } from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState, useEffect, useRef } from "react"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { } from "react";
import * as THREE from "three";

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [isDarkMode, setDarkMode] = useState(true);
    const toggleDarkMode = (checked: boolean) => {
        if (checked) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
        setDarkMode(checked);
    };
    return (
        <nav className={`flex flex-wrap items-center xl:justify-start justify-between w-full shadow-sm fixed left-0 top-0 ${isDarkMode ? 'bg-black' : 'bg-white'} z-50 bg-opacity-50 backdrop-blur-lg`}>
            <Link href="/" className="flex items-center">
                {isDarkMode ?
                    <Image className="ml-6 mr-6 mt-4 mb-4" src="/assets/logo.png" width="140" height="10" alt="Logo Nex" /> :
                    <Image src="/assets/Nex negro.png" width="180" height="10" alt="Logo Nex" />}
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
            <div className={`hidden w-full xl:block xl:w-auto`}>
                <div className="hidden xl:flex flex-col p-4 mt-4 md:p-0 sm:flex-row md:space-x-3 md:mt-0 md:border-0">
                    {dataHeader.map(({ id, name, idLink }) => (
                        <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                            <Link href={idLink} className={`text-lg hover:text-secondary  ${isDarkMode ? '[text-shadow:_2px_3px_2px_rgb(255_255_255_/_20%)]' : '[text-shadow:_2px_3px_2px_rgb(0_0_0_/_20%)]'}`}>{name}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <DarkModeSwitch
                className=" hidden xl:block ml-36 fixed top-4 right-4"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
            />
            <div className={`transition-width-height block fixed top-16 w-auto h-44 ${openMobileMenu ? 'right-8' : '-right-56'}  ${isDarkMode ? 'bg-black border-gray-900' : 'bg-white border-gray-50'} z-50 bg-opacity-90 backdrop-blur-lg rounded-md border-solid border-2  shadow-lg`}>
                {dataHeader.map(({ id, name, idLink }) => (
                    <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                        <Link onClick={() => setOpenMobileMenu(false)} href={idLink} className={`text-lg hover:text-secondary  ${isDarkMode ? '[text-shadow:_2px_3px_2px_rgb(255_255_255_/_20%)]' : '[text-shadow:_2px_3px_2px_rgb(0_0_0_/_20%)]'}`}>{name}</Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}
