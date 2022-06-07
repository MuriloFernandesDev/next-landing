import AirImg from '../../../../public/img-machine.svg'
import Image from 'next/image'

export function Thousands() {
    return (
        <div
            className="w-full bg-white pt-40 pb-28 min-h-screen"
            id="Thousands"
        >
            <div className="w-4/5 mx-auto items-center flex flex-col text-center md:flex-row md:text-left">
                <div className="flex items-center flex-col w-full md:w-2/3 md:items-start">
                    <h2 className="font-bold text-[9vw] text-slate-300 md:relative md:leading-10">
                        MILHEIROS
                    </h2>
                    <h1 className="text-3xl text-indigo-loja font-bold uppercase w-5/6 ml-4 pb-4 pt-4 relative md:pt-0">
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
                            className="inline-block text-center font-bold uppercase p-4 ml-1 text-white bg-indigo-loja rounded-xl hover:opacity-80"
                            href="https://pedidos.buyphone.com.br/login"
                            target="_blank"
                        >
                            Cadastre-se
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto inline md:w-2/5">
                    <Image src={AirImg} layout="responsive" alt="cubo png" />
                </div>
            </div>
        </div>
    )
}
