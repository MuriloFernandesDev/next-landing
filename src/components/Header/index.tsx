import LogoImg from '../../../public/logo.png'
import Image from 'next/image'
import { Menu } from './Menu'

export function Header() {
    return (
        <div className="bg-white shadow-lg h-20 flex">
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
                <Menu />
            </div>
        </div>
    )
}
