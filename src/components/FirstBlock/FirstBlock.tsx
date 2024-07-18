"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"
import { CounterData } from "../CounterData"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-30 -z-50">
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
                        <span className="degradedGreen bg-greenLight">1.</span> Envía una selfie sosteniendo tu cédula<br/>
                        <span className="degradedGreen bg-greenLight">2.</span> Uno de nuestros asesores se comunicará para realizar una breve videollamada<br/>
                        <span className="degradedGreen bg-greenLight">3.</span> Listo ¡Ya estás listo para comprar o vender tus cripto con nosotros!</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-greenRadial">Empieza ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/pngwing.com (3).png" alt="Card" width={450} height={450} className="h-auto w-74 md:w-full" />
                </MotionTransition>
            </div>
            <CounterData />
        </div>
    )
}
