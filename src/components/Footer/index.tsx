import LogoImg from '../../../public/logo.png'
import Image from 'next/image'
export function Footer() {
    return (
        <div className="flex flex-col items-center p-11 text-indigo-loja">
            <div className="w-32 h-auto p-2">
                <Image
                    src={LogoImg}
                    layout="responsive"
                    alt="Logo"
                    className="object-contain"
                />
            </div>
            <div className="flex justify-center p-2">
                <p className="mr-3">Araçatuba - SP, 16.018-000, Brasil</p>
                <p className="mr-3">45.679.637/0001-94</p>
                <p className="mr-3">
                    <a href="https://wa.me/5518997188537">(18) 99718-8537</a>
                </p>
            </div>
            <div className="p-2">
                <p>Copyright © 2022. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}
