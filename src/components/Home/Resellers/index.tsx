import ResellersImg from '../../../../public/img-resellers.svg'
import CuboImg from '../../../../public/cubo-sombra.png'
import CuboImg2 from '../../../../public/img-cubo.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export function Resellers() {
    return (
        <div className="bg-indigo-loja w-full">
            <div className="w-5/6 flex items-center flex-col-reverse text-center mx-auto pt-16 pb-16 md:flex-row md:text-left md:pt-28 md:pb-28">
                <div className="w-4/5 flex justify-center">
                    <div className="w-4/5 h-auto">
                        <Image
                            src={ResellersImg}
                            layout="responsive"
                            alt="Notebook"
                        />
                    </div>
                </div>
                <div className="w-full pl-10">
                    <div className="w-full flex flex-col text-white relative">
                        <h1 className="uppercase relative leading-[90px] text-[8vw] font-bold text-resellers pb-10 md:leading-none md:pb-0">
                            reven
                            <br />
                            dendores
                        </h1>
                        <h2 className="relative -mt-8 font-bold text-2xl ml-2 md:mt-0">
                            SE CADASTRE NA BUYPHONE E COMPRE IPHONES COM PREÇOS
                            DIFERENCIADOS.
                        </h2>
                        <span className="text-xl">
                            Seja um parceiro revendedor e tenha acesso a um
                            canal de pedidos exclusivos para comprar iPhones
                            ainda mais baratos. Fale com o nosso time agora
                            mesmo e faça uma avaliação para não ficar de fora
                            dessa inovação na compra de produtos Apple.
                        </span>
                        <div className={styles.content_resellers}>
                            <a
                                href="https://lojistas.buyphone.com.br/p/home"
                                target="_blank"
                            >
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
