'use client';

import { useState } from 'react';
import LayananCard from '@/components/Service';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import HeroContent from '@/components/HeroContent';
import PortfolioSection from '@/components/Portfolio';
import SupportService from '@/components/SupportService';
import WorkFlow from '@/components/WorkFlow';
import AboutUs from '@/components/AboutUs';

export default function WebsiteServiceLandingPage() {

  return (
    <div className="min-h-screen ">
      <body class="overflow-x-hidden">

      {/* Hero Section */}
      <section id="Home"
          className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden"
          >
            <HeroContent/>
         </section>
      <section className="background w-full"
                style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <CallToAction/>
      </section>
      {/* Services Section */}
      <section id="layanan"
          className="width-full-bg"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto px-4">
            <LayananCard id="layanan"/>
          </div>
      </section>
      {/* Pricing Page */}
      <div className="py-6 my-8 mt-0 mb-0 width-full-bg bg-gray-200 relative overflow-x-hidden"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section id="pricing">
        <div className="container mx-auto px-4 ">
          <PricingSection />
        </div>
      </section>
            </div>
      {/* About Us Section */}
      <section className="w-full bg-primary py-6 mt-0 mb-0"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <AboutUs/>
      </section>
      <section id="Support"
        className="width-full-bg"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <SupportService/>
      </section>
      {/* Workflow Section */}
      <section className="w-full bg-primary py-6 mt-0 mb-0"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <WorkFlow/>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio"
      className=" text-white bg-primary"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 ">
          <PortfolioSection/>
        </div>
      </section>
      {/* Contact Section */}
      <section id="kontak"
        className="text-black width-full-bg "
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full">
      <ContactSection/>
      </div>
      </section>
      </body>
    </div>
  );
}
