import Layout from "@/components/layout/Layout";

import Footer from "@/features/components/AogDeskPage/Footer";
import Banner from "@/features/components/AogDeskPage/Footer";
import UnlockingValue from "@/features/components/AogDeskPage/Footer";
import AviationParts from "@/features/components/AogDeskPage/Footer";
import FAQSection from "@/features/components/AogDeskPage/Footer";
import LatestNews from "@/features/components/AogDeskPage/Footer";




export default function ExchangePage() {
  return (
    <Layout>
      <Banner/>
      <UnlockingValue/> 
      <AviationParts/> 
      <FAQSection/>
     < LatestNews/>

     < Footer/>
    </Layout>
  );
}