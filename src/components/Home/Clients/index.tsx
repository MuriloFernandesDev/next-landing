import BagImg from '../../../../public/bag.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export function Clients() {
    return (
        <div
            className="w-4/5 mx-auto min-h-screen items-center flex flex-col-reverse md:flex-row pb-10 pt-10"
            id="Clients"
        >
            <div className="w-full flex flex-col items-center text-center pt-10 md:w-2/3 md:items-start md:text-left md:p-0">
                <h1 className="uppercase relative text-[9vw] leading-10 font-bold text-indigo-loja opacity-10">
                    Clientes
                </h1>
                <h2 className="text-indigo-loja relative font-bold text-3xl w-4/5 pt-10 uppercase md:pt-0">
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
            <div className="w-64 h-auto items-center mx-auto md:mx-0 md:w-80">
                <Image src={BagImg} layout="responsive" alt="Bag" />
            </div>
        </div>
    )
}
