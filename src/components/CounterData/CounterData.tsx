"use client"
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
    return (
        <MotionTransition className="max-w-5xl py-10 mx-auto md:py-10">
            <div className="justify-between md:flex">
                {dataCounter.map(({ id, startNumber, endNumber, text }) => (
                    <div key={id} className="py-5 text-[16px] text-center md:text-left">
                        +
                        <CountUp start={startNumber} end={endNumber} duration={1.5} enableScrollSpy />
                        {" "}
                        <span className="degradedGreen bg-greenLight">{text}</span>
                    </div>
                ))}
            </div>
        </MotionTransition>
    )
}
