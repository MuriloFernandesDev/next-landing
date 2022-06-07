import LogoImg from '../../../public/logo.png'
import Image from 'next/image'
import styles from './styles.module.css'

import { useState } from 'react' // import state

export function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false
    return (
        <div className="bg-white shadow-lg h-20 flex fixed w-full z-10">
            <div className="mx-auto w-4/5 flex items-center justify-between">
                <div className="w-28 h-auto">
                    <Image
                        src={LogoImg}
                        layout="responsive"
                        placeholder="blur"
                        alt="logo"
                        className="object-contain"
                    />
                </div>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div
                            className={
                                isNavOpen ? 'showMenuNav' : 'hideMenuNav'
                            }
                        >
                            {' '}
                            {/* // toggle class based on isNavOpen state // toggle
                            class based on isNavOpen state */}
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className="mr-6">
                                    <a
                                        className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                        href="#Main"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a
                                        className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                        href="#Embed"
                                    >
                                        Quem Somos
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a
                                        className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                        href="#Clients"
                                    >
                                        Clientes
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a
                                        className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                        href="#Resellers"
                                    >
                                        Revendedores
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a
                                        className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                        href="#Thousands"
                                    >
                                        Milheiros
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a
                                        className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                        href="#Testimonials"
                                    >
                                        Depoimentos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li className="mr-6">
                            <a
                                className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                href="#Main"
                            >
                                Home
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                href="#Embed"
                            >
                                Quem Somos
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                href="#Clients"
                            >
                                Clientes
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                href="#Resellers"
                            >
                                Revendedores
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                href="#Thousands"
                            >
                                Milheiros
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-indigo-loja font-medium text-lg hover:text-blue-500"
                                href="#Testimonials"
                            >
                                Depoimentos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    )
}
