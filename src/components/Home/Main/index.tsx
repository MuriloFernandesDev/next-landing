import Section1Img from '../../../../public/img-section-1.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export function Main() {
    return (
        <div className="mx-auto w-4/5 flex items-center flex-col">
            <div className="flex items-center flex-col md:flex-row">
                <div className="w-full h-auto md:w-2/4">
                    <Image
                        src={Section1Img}
                        layout="responsive"
                        alt="logo"
                        className="object-contain"
                    />
                </div>

                <div className="w-full md:w-2/4 flex flex-col items-center md:items-start">
                    <h1 className="relative font-bold text-slate-200 text-9xl mt-2 md:leading-[120px]">
                        MATCH
                    </h1>
                    <h2 className="relative font-bold text-indigo-loja w-1/2 text-3xl flex text-center md:mt-[-45px]">
                        MAIS DO QUE PERFEITO!
                    </h2>
                    <p className="ml-5 text-indigo-loja">
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
