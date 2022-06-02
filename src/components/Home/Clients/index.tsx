import BagImg from '../../../../public/bag.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export function Clients() {
    return (
        <div className="w-4/5 mx-auto pt-24 pb-10 flex items-start">
            <div className="w-2/3 flex flex-col">
                <h1 className="uppercase absolute text-8xl font-bold text-slate-300">
                    Clientes
                </h1>
                <h2 className="text-indigo-loja relative font-bold text-3xl w-4/5 uppercase mt-12">
                    COMPRE IPHONES COM O MELHOR PREÇO DO MERCADO.
                </h2>
                <p className="text-xl font-normal mt-7">
                    Aqui na BuyPhone você consegue comprar produtos Apple com
                    milhas e pontos de nossos associados e economizar até 30%.
                    Cadastre seu desejo de compra, aguarde seu match e
                    economize.
                </p>
                <div className={styles.button}>
                    <a href="https://loja.buyphone.com.br" target="_blank">
                        Acessar Loja
                    </a>
                </div>
            </div>
            <div className="w-80 h-auto">
                <Image src={BagImg} layout="responsive" alt="Bag" />
            </div>
        </div>
    )
}
