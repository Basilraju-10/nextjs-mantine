"use client";

import FeaturedProducts from "@/features/components/MainPage/FeaturedProducts";
import Layout from "@/components/layout/Layout";
import SearchLanding from "@/features/components/MainPage/SearchLanding";
import ServicesSection from "../features/components/WhowearePage/MainServicesSection";
import Footer from "../components/ui/Footer";
import AboutUs from "./AboutUs";
import ClientsSection from "@/features/components/MainPage/ClientsSection";
import LatestNews from "@/components/ui/LatestNews";

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