import Layout from "@/components/Layout";
import CareerBanner from "./components/CareerBanner";
import Opening from "./components/Opening";
import OfficeLocation from "./components/OfficeLocation";
import FAQSection from "../exchange/components/FAQSection";
import Footer from "../whoweare/components/Footer";



export default function ExchangePage() {
  return (
    <Layout>
      <CareerBanner/>
      <Opening/>
      <OfficeLocation/>
      <FAQSection/>
      <Footer/>
    </Layout>
  );
}