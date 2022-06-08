import styles from './styles.module.css'
import Image from 'next/image'
import CLyviaImg from '../../../public/client_lyvia.png'
import CGabrielImg from '../../../public/client_gabriel.png'
import CLuizImg from '../../../public/client_luiz.png'
import CIgorImg from '../../../public/client_igor.png'
import CAmandaImg from '../../../public/client_amanda.png'
import QuoteImg from '../../../public/quote.png'
export function Testimonials() {
    return (
        <div className="w-full bg-indigo-loja pb-16" id="Testimonials">
            <div className="text-center pt-36 pb-36 flex flex-col gap-5 justify-center md:gap-0 md:block">
                <h1 className="text-white opacity-5 relative text-[9vw] uppercase font-bold leading-none md:leading-10">
                    Depoimentos
                </h1>
                <h2 className="text-white text-2xl relative uppercase font-bold mt-0 md:-mt-5">
                    Nossos clientes 100% satisfeitos
                </h2>
            </div>

            <div className="flex flex-col mx-auto w-5/6 gap-28 ">
                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className={styles.effect_border}>
                                <div className="w-[130px] h-auto">
                                    <Image
                                        className="rounded-full"
                                        placeholder="blur"
                                        src={CLyviaImg}
                                        layout="fill"
                                        alt="Lyvia perfil"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <h1 className="text-white text-xl font-normal">
                                    Lyvia Nagib Fulanetti
                                </h1>
                                <h2 className="text-white text-lg">
                                    Fisioterapeuta
                                </h2>
                                <a
                                    className="text-white opacity-50 hover:brightness-50"
                                    target="_blank"
                                    href="https://www.instagram.com/lyvianagib/"
                                >
                                    @lyvianagib
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col pt-6 pb-4 md:pb-0">
                            <div className="absolute w-10 h-auto text-white">
                                <Image
                                    src={QuoteImg}
                                    layout="responsive"
                                    alt="aspas image"
                                    placeholder="blur"
                                />
                            </div>
                            <p className="absolte text-white ml-2 mt-2">
                                “Comprei dois celulares, um pra mim e um pra
                                minha irmã, dois iPhones 11. O preço é muito
                                abaixo. Vale muito a pena!”
                            </p>
                        </div>
                    </div>
                    <div className={styles.box_embed}>
                        <div className={styles.embed_depoiments}>
                            <div className={styles.embed_dep}>
                                <iframe
                                    placeholder="blur"
                                    loading="lazy"
                                    src="https://www.youtube.com/embed/Npmw1UcMnxM"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className={styles.effect_border}>
                                <div className="w-[130px] h-auto">
                                    <Image
                                        className="rounded-full"
                                        placeholder="blur"
                                        src={CGabrielImg}
                                        layout="fill"
                                        alt="Gabriel perfil"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <h1 className="text-white text-xl font-normal">
                                    Gabriel Martins
                                </h1>
                                <h2 className="text-white text-lg">
                                    Empresário
                                </h2>
                                <a
                                    className="text-white opacity-50 hover:brightness-50"
                                    target="_blank"
                                    href="https://www.instagram.com/gabrielpessoamartins/"
                                >
                                    @gabrielpessoamartins
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col pt-6 pb-4 md:pb-0">
                            <div className="absolute w-10 h-auto text-white">
                                <Image
                                    src={QuoteImg}
                                    placeholder="blur"
                                    layout="responsive"
                                    alt="aspas image"
                                />
                            </div>
                            <p className="absolte text-white ml-2 mt-2">
                                “Celular zero, lacrado na caixa! Pesquisei
                                bastante em vários lugares e o preço deles é bem
                                abaixo do mercado.”
                            </p>
                        </div>
                    </div>
                    <div className={styles.box_embed}>
                        <div className={styles.embed_depoiments}>
                            <div className={styles.embed_dep}>
                                <iframe
                                    placeholder="blur"
                                    loading="lazy"
                                    src="https://www.youtube.com/embed/w1Sv0QIFxyA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className={styles.effect_border}>
                                <div className="w-[130px] h-auto">
                                    <Image
                                        className="rounded-full"
                                        placeholder="blur"
                                        src={CLuizImg}
                                        layout="fill"
                                        alt="Gabriel perfil"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <h1 className="text-white text-xl font-normal">
                                    Luiz Henrique Puertas
                                </h1>
                                <h2 className="text-white text-lg">
                                    Vendas de sistemas fotovoltaicos
                                </h2>
                                <a
                                    className="text-white opacity-50 hover:brightness-50"
                                    target="_blank"
                                    href="https://www.instagram.com/luizpuertas/"
                                >
                                    @luizpuertas
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col pt-6 pb-4 md:pb-0">
                            <div className="absolute w-10 h-auto text-white">
                                <Image
                                    src={QuoteImg}
                                    layout="responsive"
                                    placeholder="blur"
                                    alt="aspas image"
                                />
                            </div>
                            <p className="absolte text-white ml-2 mt-2">
                                “Um preço muito bom, paguei muito barato no
                                Iphone original lacrado!”
                            </p>
                        </div>
                    </div>
                    <div className={styles.box_embed}>
                        <div className={styles.embed_depoiments}>
                            <div className={styles.embed_dep}>
                                <iframe
                                    placeholder="blur"
                                    loading="lazy"
                                    src="https://www.youtube.com/embed/t3U1o2I9WvI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className={styles.effect_border}>
                                <div className="w-[130px] h-auto">
                                    <Image
                                        className="rounded-full"
                                        placeholder="blur"
                                        src={CIgorImg}
                                        layout="fill"
                                        alt="Gabriel perfil"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <h1 className="text-white text-xl font-normal">
                                    Igor Fortin
                                </h1>
                                <h2 className="text-white text-lg">Advogado</h2>
                                <a
                                    className="text-white opacity-50 hover:brightness-50"
                                    target="_blank"
                                    href="https://www.instagram.com/igorfortin/"
                                >
                                    @igorfortin
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col pt-6 pb-4 md:pb-0">
                            <div className="absolute w-10 h-auto text-white">
                                <Image
                                    src={QuoteImg}
                                    layout="responsive"
                                    placeholder="blur"
                                    alt="aspas image"
                                />
                            </div>
                            <p className="absolte text-white ml-2 mt-2">
                                “IPhone 12 que adquiri na BuyPhone, perfeito!
                                Novo, com ótimas condições de preço e
                                parcelamento.”
                            </p>
                        </div>
                    </div>
                    <div className={styles.box_embed}>
                        <div className={styles.embed_depoiments}>
                            <div className={styles.embed_dep}>
                                <iframe
                                    placeholder="blur"
                                    loading="lazy"
                                    src="https://www.youtube.com/embed/vH0EjiMyZaQ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className={styles.effect_border}>
                                <div className="w-[130px] h-auto">
                                    <Image
                                        className="rounded-full"
                                        placeholder="blur"
                                        src={CAmandaImg}
                                        layout="fill"
                                        alt="Gabriel perfil"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <h1 className="text-white text-xl font-normal">
                                    Amanda L. Prado
                                </h1>
                                <h2 className="text-white text-lg">🧿</h2>
                                <a
                                    className="text-white opacity-50 hover:brightness-50"
                                    target="_blank"
                                    href="https://www.instagram.com/_amandalprado/"
                                >
                                    @_amandalprado
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col pt-6 pb-4 md:pb-0">
                            <div className="absolute w-10 h-auto text-white">
                                <Image
                                    src={QuoteImg}
                                    layout="responsive"
                                    placeholder="blur"
                                    alt="aspas image"
                                />
                            </div>
                            <p className="absolte text-white ml-2 mt-2">
                                “A Amanda adorou o produto que comprou na
                                BuyPhone”
                            </p>
                        </div>
                    </div>
                    <div className={styles.box_embed}>
                        <div className={styles.embed_depoiments}>
                            <div className={styles.embed_dep}>
                                <iframe
                                    placeholder="blur"
                                    loading="lazy"
                                    src="https://www.youtube.com/embed/xzX8LJv7VuQ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
