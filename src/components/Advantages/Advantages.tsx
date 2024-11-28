"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./Advantages.data"
import Atropos from "atropos/react"

export function Advantages() {
    return (
        <div className="relative px-6 py-20 md:py-30" id="advantages">
            {/* <BackgroundRadialLeft /> */}
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <Reveal>
                    <div className="max-w-sm mt-24">
                        <MotionTransition className="flex-1 p-6 md:p-8">
                            <Atropos shadow={false} highlight={false}>
                                <Image src="/assets/pngwing.com (9).png" alt="Control Business" width="380" height={411} className="w-full h-auto" />
                            </Atropos>
                        </MotionTransition>
                        <div className="px-6 py-5 mt-16 rounded-3xl group bg-greenRadial box-feature">
                            <h4 className="font-bold">Reconocimiento como comerciantes PRO en Binance.</h4><p>
                                Todos nuestros clientes nos vuelven a elegir, reflejando la calidad y confianza de nuestros servicios.</p>
                        </div>
                    </div>
                </Reveal>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <div className="flex">
                            <h2 className="text-4xl font-semibold block degradedGreen bg-greenLight">
                                Ventajas de Nex
                            </h2>
                            <h2 className="text-4xl font-semibold block degradedGreen bg-greenLight">
                                change
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="grid items-center py-5 md:p-8">
                            {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
                                <Reveal key={id}>
                                    <div className="grid grid-flow-col gap-3 px-6 py-5 mb-4 rounded-3xl group bg-greenRadial box-feature">
                                        <Atropos shadow={false} highlight={false}>
                                            <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                        </Atropos>
                                        <div>
                                            <h4 className="font-bold">{title}</h4>
                                            <p className="text-justify">{description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
