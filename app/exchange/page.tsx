import Layout from "@/components/layout/Layout";
import Footer from "@/features/components/AogDeskPage/Footer";
import ExchangeLatestNews from "../../features/components/ExchangePage/ExchangeLatestNews";
import ExchangeFAQSection from "../../features/components/ExchangePage/ExchangeFAQSection";
import ExchangeBanner from "../../features/components/ExchangePage/ExchangeBanner";
import ExchangeUnlockingValue from "../../features/components/ExchangePage/ExchangeUnlockingValue";
import ExchangeAviationParts from "../../features/components/ExchangePage/ExchangeUnlockingValue";




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