"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"

export function HowMake() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="howMake">
            {/* <BackgroundRadialLeft /> */}
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    <Image src="/assets/pngwing.com.png" alt="Control Business" width="380" height={411} className="w-full h-auto" />
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold block degradedGreen bg-greenLight">
                            Como lo hacemos?
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10 text-justify">Proporcionamos un servicio personalizado, atendido por los propios dueños de la empresa, enfocados en satisfacer las necesidades específicas de cada cliente. Nuestra atención directa y compromiso nos permite brindar soluciones rápidas y eficientes.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
