"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"
import { CounterData } from "../CounterData"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-30">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2 mt-[140px]">
                <div className="w-full">
                    <Reveal>
                        <h1 className="text-4xl font-semibold pb-1">
                            Compra y vende tus cripto
                            <span className="block degradedGreen bg-greenLight">
                                al mejor precio
                            </span>
                            de la manera mas segura
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Registrate con nosotros en dos simples pasos:</p>
                        <p className="max-w-md mt-2 ml-2">
                        <span className="degradedGreen bg-greenLight">1.</span> Completa un formulario cifrado.<br/>
                        <span className="degradedGreen bg-greenLight">2.</span> Realiza una videollamada con uno de nuestros asesores.<br/>
                        <span className="degradedGreen bg-greenLight">3.</span> Listo ¡Ya estás listo para comprar o vender tus cripto con nosotros!</p>
                    </Reveal>
                    <Reveal>
                            <div className="my-8">
                                 {/* <Link href="?modal=true"> */}
                            <a href="https://api.whatsapp.com/send?phone=598094221899&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n" target="_blank">
                                    <div className="px-4 py-3 rounded-md bg-greenRadial cursor-pointer">Empieza ahora</div>
                            </a>
                                {/* </Link> */}
                            </div>
                    </Reveal>
                </div>
                <div>
                    <MotionTransition className="flex items-center justify-center">
                        <Image src="/assets/pngwing.com (3).png" alt="Card" width={450} height={450} className="h-auto w-74 md:w-full" />
                    </MotionTransition>
                </div>
                <div className="col-span-2 w-auto">
                    <span className="degradedGreen bg-greenLight font-semibold text-2xl">Comerciantes PRO en Binance P2P:</span><br/>
                    <p className="text-justify">Contamos con la calificación de comerciantes PRO en Binance P2P, un programa exclusivo para exchanges cripto profesionales que garantiza confianza y seguridad a millones de usuarios en todo el mundo. Obtener esta calificación requiere un alto nivel de reputación y experiencia en la plataforma, lo que nos posiciona como líderes en el mercado.</p>

                    </div>
                </div>
            <CounterData />
        </div>
    )
}
