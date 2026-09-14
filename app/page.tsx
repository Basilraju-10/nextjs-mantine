"use client";

import FeaturedProducts from "@/components/ui/home/FeaturedProducts";
import Layout from "@/components/layout/Layout";
import SearchLanding from "@/components/ui/components/SearchLanding";
import ServicesSection from "../features/components/WhowearePage/MainServicesSection";
import Footer from "../features/components/AogDeskPage/Footer";
import AboutUs from "./AboutUs";
import ClientsSection from "@/components/ui/components/ClientsSection";
import LatestNews from "@/components/ui/components/LatestNews";

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