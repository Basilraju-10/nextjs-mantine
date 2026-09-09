import Layout from "@/components/Layout";
import CareerBanner from "../../features/components/CareerBanner";
import Opening from "../../features/components/Opening";
import OfficeLocation from "../../features/components/OfficeLocation";
import FAQSection from "../../features/components/ExchangeFAQSection";
import Footer from "../../features/components/Footer";



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