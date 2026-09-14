import Layout from "@/components/layout/Layout";
import Footer from "../../../components/ui/Footer";
import CareerBanner from "../../../features/components/more/CareerPage/CareerBanner";
import Opening from "../../../features/components/more/CareerPage/Opening";
import OfficeLocation from "../../../features/components/more/CareerPage/OfficeLocation";
import FAQSection from "../../../features/components/service/AogDeskPage/FAQSection";

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