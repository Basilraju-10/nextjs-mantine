"use client";

import FeaturedProducts from "@/components/home/FeaturedProducts";
import Layout from "@/components/Layout";
import SearchLanding from "@/components/SearchLanding";
import ServicesSection from "./whoweare/components/ServicesSection";
import Footer from "./whoweare/components/Footer";

export default function HomePage() {
  return (
    <Layout>
      <SearchLanding />

      <FeaturedProducts/>
       <ServicesSection/>
       <Footer/>
    </Layout>
  );
}