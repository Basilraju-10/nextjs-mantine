import Layout from "@/components/layout/Layout";
import Footer from "../../../components/ui/Footer";
import ContactBanner from "../../../features/components/more/ContactPage/ContactBanner";
import OfficeLocation from "../../../features/components/more/CareerPage/OfficeLocation";
import FAQSection from "../../../features/components/service/ExchangePage/ExchangeFAQSection";
import ContactSection from "../../../features/components/more/ContactPage/ContactSection";



export default function ExchangePage() {
  return (
    <Layout>
        <ContactBanner/>
        <ContactSection/>
        <OfficeLocation/>
        <FAQSection/>   
        <Footer/>
    </Layout>
  );
}