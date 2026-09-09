import Layout from "@/components/Layout";

import Footer from "@/features/components/Footer";
import Banner from "../../features/components/ExchangeBanner";
import UnlockingValue from "../../features/components/ExchangeUnlockingValue";
import AviationParts from "../../features/components/ExchangeAviationParts";
import LatestNews from "../../features/components/ExchangeLatestNews";
import FAQSection from "../../features/components/ExchangeFAQSection";

export default function InventorySalesPage() {
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