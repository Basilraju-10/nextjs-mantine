import Layout from "@/components/Layout";
import Footer from "@/features/components/Footer";
import ExchangeLatestNews from "../../features/components/ExchangeLatestNews";
import ExchangeFAQSection from "../../features/components/ExchangeFAQSection";
import ExchangeBanner from "../../features/components/ExchangeBanner";
import ExchangeUnlockingValue from "../../features/components/ExchangeUnlockingValue";
import ExchangeAviationParts from "../../features/components/ExchangeAviationParts";




export default function ExchangePage() {
  return (
    <Layout>
      <ExchangeBanner/>
      <ExchangeUnlockingValue/> 
      <ExchangeAviationParts/> 
      <ExchangeFAQSection/>
     < ExchangeLatestNews/>
     < Footer/>
    </Layout>
  );
}