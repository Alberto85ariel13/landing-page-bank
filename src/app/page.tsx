import { BestBusiness } from "@/components/BestBusiness";
import { Services } from "@/components/Services";
import { HowMake } from "@/components/HowMake";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Testimonials } from "@/components/Testimonials";
import { WhatMake } from "@/components/WhatMake";
import { Advantages } from "@/components/Advantages";

export default function Home() {

  return (
    <>
      <Header />
      <FirstBlock />
      <BestBusiness />
      <Services />
      <HowMake/>
      <WhatMake/>
      <Advantages />
      <Testimonials />
      <Footer />
    </>
  )
}
