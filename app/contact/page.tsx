import Layout from "@/components/Layout";
import Footer from "../whoweare/components/Footer";
import ContactBanner from "./components/ContactBanner";
import OfficeLocation from "../career/components/OfficeLocation";
import FAQSection from "../services/exchange/components/FAQSection";
import ContactSection from "./components/ContactSection";



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