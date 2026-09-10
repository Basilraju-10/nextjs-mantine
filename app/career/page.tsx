import Layout from "@/components/layout/Layout";
import Footer from "../../features/components/AogDeskPage/Footer";
import CareerBanner from "../../features/components/CareerPage/CareerBanner";
import Opening from "../../features/components/CareerPage/Opening";
import OfficeLocation from "../../features/components/CareerPage/OfficeLocation";
import FAQSection from "../../features/components/AogDeskPage/FAQSection";

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