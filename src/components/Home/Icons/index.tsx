import styles from './styles.module.css'
import CuboImg from '../../../../public/img-cubo.png'
import HeadingImg from '../../../../public/heading-line-dec.png'
import Section1Img from '../../../../public/service-icon-01.png'
import Section2Img from '../../../../public/service-icon-02.png'
import Section3Img from '../../../../public/service-icon-03.png'
import Section4Img from '../../../../public/service-icon-04.png'
import Image from 'next/image'

export function Icons() {
    return (
        <>
            <div
                className="mx-auto flex items-center flex-col relative pt-10"
                id="Icons"
            >
                <div className="absolute w-24 h-auto ml-96 -mt-8 hidden md:inline">
                    <Image
                        src={CuboImg}
                        placeholder="blur"
                        layout="responsive"
                        alt="cubo png"
                        className="object-contain"
                    />
                </div>

                <div className="w-full items-center mt-10">
                    <h1 className="upercase text-3xl text-center mt-10 font-bold text-indigo-loja">
                        POR QUE ESCOLHER A BUYPHONE?
                    </h1>
                </div>
                <div className="w-full h-auto flex items-center justify-center p-10">
                    <Image
                        src={HeadingImg}
                        layout="fixed"
                        alt="traço png"
                        placeholder="blur"
                    />
                </div>
                <p className="text-blue-400 w-1/2 text-center">
                    Acreditamos que com inovação podemos democratizar o mercado
                    de produtos proporcionando aos envolvidos liberdade e
                    economia!
                </p>
            </div>
            <div className="w-4/5 mx-auto pt-24 flex flex-col justify-between gap-12 md:flex-row md:gap-0">
                <div className={styles.service_item}>
                    <div className={styles.icon}>
                        <Image
                            src={Section1Img}
                            quality={100}
                            placeholder="blur"
                            layout="fixed"
                            alt="icon 1"
                        />
                    </div>
                    <div className="pt-12">
                        <h1>Segurança</h1>
                        <p>
                            Garantimos a segurança nas transações entre usuários
                            e privacidade de dados entre todos os envolvidos.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.icon}>
                        <Image
                            src={Section2Img}
                            quality={100}
                            placeholder="blur"
                            layout="fixed"
                            alt="ticon 2"
                        />
                    </div>
                    <div className="pt-12">
                        <h1>Melhor preço</h1>
                        <p>
                            O melhor de tudo isso, é que conseguimos SEMPRE
                            cobrir os preços das principais lojas do Brasil com
                            condições de pagamentos personalizadas.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.icon}>
                        <Image
                            src={Section3Img}
                            quality={100}
                            placeholder="blur"
                            layout="fixed"
                            alt="icon 3"
                        />
                    </div>
                    <div className="pt-12">
                        <h1>Facilidade</h1>
                        <p>
                            Nossa forma de comprar é inovadora, porém super
                            intuitiva. Contamos com plataformas web e mobile
                            muito simples de se utilizar.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.icon}>
                        <Image
                            src={Section4Img}
                            quality={100}
                            placeholder="blur"
                            layout="fixed"
                            alt="icon 4"
                        />
                    </div>
                    <div className="pt-12">
                        <h1>Suporte</h1>
                        <p>
                            Oferecemos suporte acessível com atendimento
                            humanizado através dos canais de comunicação mais
                            utilizados.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
