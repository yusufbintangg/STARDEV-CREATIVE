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
      {/* Hero Section */}
      <section id="Home"
          className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden"
          >
            <HeroContent/>
         </section>
      <section className="background w-full"
      ><CallToAction/>
      </section>
      {/* Services Section */}
      <section id="layanan"
          className="width-full-bg"
        >
          <div className="container mx-auto px-4">
            <LayananCard id="layanan"/>
          </div>
      </section>
      {/* Pricing Page */}
      <section id="pricing">
      <div className="py-6 my-8 mt-0 mb-0 width-full-bg relative overflow-x-hidden"
        >
        <div className="container mx-auto px-4 ">
          <PricingSection />
        </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="w-full py-6 mt-0 mb-0"
        >
        <AboutUs/>
      </section>
      <section id="Support"
        className="width-full-bg"
        >
        <SupportService/>
      </section>
      {/* Workflow Section */}
      <section className="w-full py-6 mt-0 mb-0"
        >
        <WorkFlow/>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio"
      className=" text-white"
        >
        <div className="container mx-auto px-4 ">
          <PortfolioSection/>
        </div>
      </section>
      {/* Contact Section */}
      <section id="kontak"
        className="text-black width-full-bg "
        >
        <div className="w-full">
      <ContactSection/>
      </div>
      </section>
    </div>
  );
}
