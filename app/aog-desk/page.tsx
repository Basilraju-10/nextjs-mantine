import Layout from "@/components/Layout";
import Banner from "../../features/components/Banner";
import UnlockingValue from "../../features/components/UnlockingValue";
import AviationParts from "../../features/components/AvationParts";
import LatestNews from "../../features/components/LatestNews";
import FAQSection from "../../features/components/FAQSection";
import Footer from "@/features/components/Footer";




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