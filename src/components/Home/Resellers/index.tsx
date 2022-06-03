import ResellersImg from '../../../../public/img-resellers.svg'
import CuboImg from '../../../../public/cubo-sombra.png'
import CuboImg2 from '../../../../public/img-cubo.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export function Resellers() {
    return (
        <div className="bg-indigo-loja w-full">
            <div className="absolute w-60 h-auto ml-72 -mt-32">
                <Image
                    src={CuboImg}
                    layout="responsive"
                    alt="cubo png"
                    className="object-contain"
                />
            </div>

            <div className="w-4/5 items-center justify-start mx-auto flex pt-44">
                <div className="w-3/5 h-auto">
                    <Image
                        src={ResellersImg}
                        layout="responsive"
                        alt="Notebook"
                    />
                </div>
                <div className="relative w-full">
                    <h1 className="uppercase absolute text-[8vw] leading-[110px] ml-28 -mt-44 font-bold text-resellers">
                        reven
                        <br />
                        dendores
                    </h1>
                    <div className="absolute w-52 h-auto ml-96 -mt-80">
                        <Image
                            src={CuboImg}
                            layout="responsive"
                            alt="cubo png"
                            className="object-contain"
                        />
                    </div>

                    <div className="w-full flex flex-col pl-32 pr-20 text-white relative">
                        <h2 className="font-bold text-2xl ml-2">
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
                        <div className="absolute w-24 h-auto mt-80 ml-40">
                            <Image
                                src={CuboImg2}
                                layout="responsive"
                                alt="cubo png"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
