"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"

export function HowMake() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="howMake">
            <BackgroundRadialLeft />
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
                        <p className="max-w-md mt-10 text-justify">De una manera segura, rápida, eficiente y confiable.<br />
                            <span className="font-semibold">- Ventajas de tu producto que otros no tienen?</span><br />
Más de 600 operaciones realizadas, 100% de reacciones positivas.<br/> Brindamos seguridad, transparencia y confianza, todo lo necesario para que realices tus operaciones con tranquilidad.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
