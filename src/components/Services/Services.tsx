"use client"
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Reveal } from "../Reveal"
import { MotionTransition } from "../MotionTransition";
import { dataService } from "./Services.data";

export function Services() {
    return (
        <div className="relative px-6 py-20 mt-20 md:py-32" id="services">
            {/* <BackgroundRadialRight /> */}
            <div className="w-full flex justify-center flex-col items-center">
                <h2 className="text-5xl font-semibold pb-2 text-center">
                    <span className="block degradedGreen bg-greenLight">Nuestros Servicios</span>
                    Nexchange
                </h2>
            </div>
            <div className="block max-w-5xl mx-auto h-auto">
                {dataService.map(({ id, title, firstDescription, description }) => (
                    <Reveal key={id} >
                        <div className="px-4 py-5 ml-10 mt-5 rounded-3xl group bg-greenRadial box-feature text-left md:min-w-[1000px]">
                            <span className="font-bold">{title}</span>
                            <div className="text-justify ml-4">
                                {description.split('\n').map((line, index) => (<p key={index}>{line}</p>))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    )
}
