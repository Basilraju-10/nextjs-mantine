"use client";

import FeaturedProducts from "@/components/home/FeaturedProducts";
import Layout from "@/components/Layout";
import SearchLanding from "@/components/SearchLanding";
import ServicesSection from "../features/components/MainServicesSection";
import Footer from "../features/components/Footer";
import AboutUs from "./AboutUs";
import ClientsSection from "@/components/ClientsSection";
import LatestNews from "@/components/LatestNews";

export default function HomePage() {
  return (
    <Layout>
      <SearchLanding />

      <FeaturedProducts/>
      <AboutUs/>
      <ClientsSection/>
       <ServicesSection/>
       <LatestNews/>
       <Footer/>
       
    </Layout>
  );
}