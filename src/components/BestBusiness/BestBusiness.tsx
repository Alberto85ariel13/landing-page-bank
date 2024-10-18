"use client"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="features">
            {/* <BackgroundRadialLeft /> */}
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold pb-2">
                            <span className="block degradedGreen bg-greenLight">Quiénes somos</span>
                            Nexchange
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10 text-justify">Somos una empresa dedicada a ofrecer liquidez y soluciones en el mundo cripto, con servicios de compras y ventas.</p>
                    </Reveal>
                    <Reveal>
                        <a href="https://p2p.binance.com/es/advertiserDetail?advertiserNo=s528c43ce52e733d2859d6a3ae5131f7d" target="_blank">
                            <div className="my-4 text-center w-[350px] binance-box cursor-pointer md:w-[450px]">
                                Para operar con nosotros a través de binance hacé click acá
                                <Image src={`/assets/binance.png`} alt='binance' width={400} height={200} />
                                Desde donde podes operar con nosotros, ver los comentarios de nuestros clientes y revisar nuestras estadísticas.
                            </div>
                        </a>
                    </Reveal>
                </div>

                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-3 px-4 py-5 mb-4 rounded-3xl group bg-greenRadial box-feature">
                                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="font-bold">{title}</h4>
                                    <p className="text-justify">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
