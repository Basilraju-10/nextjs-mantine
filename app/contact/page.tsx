import Layout from "@/components/layout/Layout";
import Footer from "../../components/ui/Footer";
import ContactBanner from "../../features/components/ContactPage/ContactBanner";
import OfficeLocation from "../../features/components/CareerPage/OfficeLocation";
import FAQSection from "../../features/components/ExchangePage/ExchangeFAQSection";
import ContactSection from "../../features/components/ContactPage/ContactSection";



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