import Layout from "@/components/Layout";
import Footer from "../../features/components/Footer";
import ContactBanner from "../../features/components/ContactBanner";
import OfficeLocation from "../../features/components/OfficeLocation";
import FAQSection from "../../features/components/ExchangeFAQSection";
import ContactSection from "../../features/components/ContactSection";



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