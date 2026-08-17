import Layout from "@/components/Layout";
import Banner from "./components/Banner";
import UnlockingValue from "./components/UnlockingValue";
import AviationParts from "./components/AvationParts";
import LatestNews from "./components/LatestNews";
import FAQSection from "./components/FAQSection";
import Footer from "@/app/whoweare/components/Footer";




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