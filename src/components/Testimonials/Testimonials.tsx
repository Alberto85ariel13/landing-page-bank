"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Testimonials() {
    return (
        <div className="relative p-8 md:py-48" id="testimonial">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold  degradedGreen bg-greenLight">
                        Qué dicen los clientes de nosotros
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-justify">Cerca de 300 clientes.<br/> Más de 650 operaciones.<br/>
                        Comerciantes verificados p2p en binance.<br/> 250 valoraciones positivas.</p>
                    </div>
                </Reveal>
            </div>

            <Slide />
        </div>
    )
}
