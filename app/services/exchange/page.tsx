import Layout from "@/components/layout/Layout";
import Footer from "@/components/ui/Footer";
import ExchangeLatestNews from "../../../features/components/service/ExchangePage/ExchangeLatestNews";
import ExchangeFAQSection from "../../../features/components/service/ExchangePage/ExchangeFAQSection";
import ExchangeBanner from "../../../features/components/service/ExchangePage/ExchangeBanner";
import ExchangeUnlockingValue from "../../../features/components/service/ExchangePage/ExchangeUnlockingValue";
import ExchangeAviationParts from "../../../features/components/service/ExchangePage/ExchangeUnlockingValue";




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