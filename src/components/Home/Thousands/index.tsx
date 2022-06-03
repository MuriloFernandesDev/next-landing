import AirImg from '../../../../public/img-machine.svg'
import CuboImg from '../../../../public/img-cubo.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export function Thousands() {
    return (
        <div className="w-full bg-white pt-20 pb-8">
            <div className="w-4/5 mx-auto items-center flex">
                <div className="flex flex-col w-2/3">
                    <h2 className="relative font-bold leading-10 text-9xl text-slate-300">
                        MILHEIROS
                    </h2>
                    <h1 className="text-3xl text-indigo-loja font-bold uppercase w-5/6 ml-4 pb-4 relative">
                        ACELERE SUAS MILHAS E PONTOS DO CARTÃO DE CRÉDITO E
                        AJUDE OUTRAS PESSOAS A TEREM SEU IPHONE TÃO DESEJADO.
                    </h1>
                    <span className="text-indigo-loja text-xl font-normal w-5/6">
                        Usamos a tecnologia para aproximar a negociação de quem
                        deseja comprar com quem deseja vender. Nós cuidamos de
                        tudo, você só precisa se preocupar em fazer o pedido do
                        produto e cadastrar nosso endereço para entrega.
                    </span>

                    <ul className="text-indigo-loja pt-4 ml-7">
                        <li>● Acesso a lista de pedidos de nossos clientes.</li>
                        <li>
                            ● Condições de parcelamento atrativas ao consumidor.
                        </li>
                        <li>
                            ● Receba seu dinheiro da venda em 30 dias <br />
                            <i className="text-gray-400">
                                (independente do parcelamento por conta do
                                cliente)
                            </i>
                        </li>
                    </ul>
                    <div className="flex mt-4 ml-10">
                        <a
                            className="inline-block text-center font-bold uppercase p-4 ml-1 text-white bg-indigo-loja rounded-xl"
                            href="https://pedidos.buyphone.com.br/login"
                            target="_blank"
                        >
                            Cadastre-se
                        </a>
                    </div>
                </div>
                <div className="w-2/5 h-auto">
                    <Image src={AirImg} layout="responsive" alt="cubo png" />
                </div>
            </div>
        </div>
    )
}
