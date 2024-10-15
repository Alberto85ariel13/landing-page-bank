"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"

export function WhatMake() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="whatMake">
            {/* <BackgroundRadialLeft /> */}
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold block degradedGreen bg-greenLight">
                            ¿Qué hacemos?
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-6 text-justify">
                            Atendemos personalmente las necesidades de nuestros clientes, ya sea para enviar dinero de un lugar a otro, comprar cripto para inversiones, o resolver consultas sobre el mundo cripto. Nos aseguramos de ofrecer un servicio personalizado y adaptado a cada cliente.                        </p>
                    </Reveal>
                </div>
                <MotionTransition className="flex-1 p-6 md:p-8">
                    <Image src="/assets/pngwing.com (7).png" alt="Control Business" width="380" height={411} className="w-full h-auto" />
                </MotionTransition>
            </div>
        </div>
    )
}
