'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import LayananCard from '@/components/Service';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import HeroContent from '@/components/HeroContent';
import PortfolioSection from '@/components/Portfolio';
import SupportService from '@/components/SupportService';
import WorkFlow from '@/components/WorkFlow';

export default function WebsiteServiceLandingPage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section id="Home"
          className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden"
          >
            <HeroContent/>
         </section>
      <section className="background w-full"
                style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
        <CallToAction/>
        </motion.div>
      </section>
      {/* Services Section */}
      <section id="layanan" 
          className="width-full-bg"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <motion.div
            className="container mx-auto px-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <LayananCard id="layanan"/>
          </motion.div>
      </section>
      {/* Pricing Page */}
      <div className="py-6 my-8 mt-0 mb-0 width-full-bg background-texture-light"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes3.jpg) ', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <section id="pricing">
        <motion.div
          className="container mx-auto px-4 "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <PricingSection />
        </motion.div>
      </section>
            </div>
      <section id="Support"
        className="width-full-bg"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <SupportService/>
      </section>
      {/* Workflow Section */}
      <section className="w-full bg-primary py-6 mt-0 mb-0"
        style={{ backgroundImage: 'url(/background/kualikjg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <WorkFlow/>
        </motion.div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" 
      className=" text-white bg-primary"
        style={{ backgroundImage: 'url(/background/3d-background-with-white-cubes5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
          className="container mx-auto px-4 "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <PortfolioSection/>
          </motion.div>
      </section>
      {/* Contact Section */}
      <section id="kontak"
        className="text-black width-full-bg "
        style={{ backgroundImage: 'url(/background/kualikjg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.div
          className="w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
      <ContactSection/>
      </motion.div>
      </section>
    </div>
  );
}
