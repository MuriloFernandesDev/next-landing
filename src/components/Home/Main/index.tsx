import Section1Img from '../../../../public/img-section-1.png'
import Image from 'next/image'
import styles from './styles.module.css'

export function Main() {
    return (
        <div
            className="mx-auto w-4/5 flex items-center flex-col min-h-screen justify-center pb-10 pt-10"
            id="Main"
        >
            <div className="flex items-center flex-col md:flex-row">
                <div className="w-full h-auto md:w-2/4">
                    <Image
                        src={Section1Img}
                        layout="responsive"
                        placeholder="blur"
                        alt="logo"
                        className="object-contain"
                    />
                </div>

                <div className="w-full flex flex-col items-center md:items-start md:w-2/4">
                    <h1 className="relative font-bold text-indigo-loja opacity-5 text-[9vw] mt-2 md:leading-[120px]">
                        MATCH
                    </h1>
                    <h2 className="relative font-bold text-indigo-loja w-1/2 text-[4vw] flex text-center md:mt-[-45px] md:text-left md:text-[2vw] md:ml-5">
                        MAIS DO QUE PERFEITO!
                    </h2>
                    <p className="text-center text-indigo-loja md:text-left md:ml-5">
                        Nós conectamos com um match, quem deseja comprar
                        produtos da marca Apple com quem deseja vender. O
                        comprador economiza até 30% e o associado ganha dinheiro
                        com seus pontos!
                    </p>

                    <div className={styles.ButtonAcess}>
                        <a target="_blank" href="https://loja.buyphone.com.br/">
                            Acessar loja
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
