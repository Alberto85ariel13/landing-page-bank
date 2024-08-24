import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";


export function Footer() {
    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 ">
            <div className="border-[#3F3E45] border-[1px] my-7" />

            <div className="items-center justify-between md:flex">
                <div className="my-3">
                    <Reveal>
                        NeXchange SAS All Right Reserved
                    </Reveal>
                </div>
                <div className="flex gap-5">
                    {footerSocialNetworks.map(({ id, icon, link }) => (
                        <Link key={id} href={link} className="text-2xl">
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-10 border-t border-[#3F3E45] pt-6">
                <h2 className="text-xl font-bold mb-4">Conoce al Equipo:</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Mario Core:</strong> Director General y Fundador de Nexchange.</li>
                    <li><strong>Rocío Massari:</strong> Gerente de Operaciones y Fundadora de Nexchange.</li>
                    <li><strong>Julieta Massari:</strong> Líder de Proyecto.</li>
                    <li><strong>Milagros Massari:</strong> Administración y Facturación.</li>
                    <li><strong>Virginia González:</strong> Marketing y Redes.</li>
                </ul>
            </div>
        </div>
    )
} 
