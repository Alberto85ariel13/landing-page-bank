"use client"
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Reveal } from "../Reveal"
import { MotionTransition } from "../MotionTransition";
import { dataService } from "./Services.data";

export function Services() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="services">
            <BackgroundRadialRight />
            <div className="w-full flex justify-center">
                <h2 className="text-5xl font-semibold pb-2 text-center">
                    <span className="block degradedGreen bg-greenLight">Nuestros Servicios</span>
                    NeXchange
                </h2>
            </div>
            <div className="block max-w-5xl mx-auto md:grid md:grid-cols-3 mt-10">
            {dataService.map(({ id, title, firstDescription, description }) => (
                <Reveal key={id} >
                    <div className="px-4 py-2 ml-10 mt-5 rounded-3xl group bg-greenRadial box-feature text-center h-[260px]">
                        <span className="font-bold [text-shadow:_2px_3px_3px_rgb(0_0_0_/_40%)]">{title}</span><br />
                        <span className="font-semibold [text-shadow:_2px_3px_2px_rgb(255_255_255_/_20%)]">{firstDescription}</span><br />
                        <div className="text-left ml-4 mt-5">
                            {description.split('\n').map((line, index) => (<p key={index}>{line}</p>))}
                        </div>
                    </div>
                </Reveal>
            ))}
            </div>
        </div>
    )
}
