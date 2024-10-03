"use client"

import Image from "next/image"

export function FloatingButton() {
    return (
        <div className="w-12 h-12 fixed bottom-28 right-8 z-50">
            <a href="https://p2p.binance.com/es/advertiserDetail?advertiserNo=s528c43ce52e733d2859d6a3ae5131f7d" target="_blank">
                <div className="mb-5 float-button cursor-pointer">
                    <Image src={`/assets/binance-logo.png`} alt='binance-logo' width={100} height={100} />
                </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=598094221899&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n" target="_blank">
                <div className="float-button">
                    <Image src={`/assets/ws logo.png`} alt='ws-logo' width={100} height={100} />
                </div>
            </a>
        </div>
    )
}
