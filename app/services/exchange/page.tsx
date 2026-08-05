import Layout from "@/components/Layout";
import Banner from "./components/Banner";
import UnlockingValue from "./components/UnlockingValue";
import AviationParts from "./components/AvationParts";
import LatestNews from "./components/LatestNews";
import Footer1 from "./components/Footer1";
import FAQSection from "./components/FAQSection";




export default function ExchangePage() {
  return (
    <Layout>
      <Banner/>
      <UnlockingValue/> 
      <AviationParts/> 
      <FAQSection/>
     < LatestNews/>
     < Footer1/>
    </Layout>
  );
}