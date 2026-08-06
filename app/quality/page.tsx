import Layout from "@/components/Layout";
import QualityBanner from "./components/QualityBanner";
import QualitySection from "./components/QualitySection";
import CertificateSection from "./components/CertificateSection";
import Footer from "../whoweare/components/Footer";



export default function ExchangePage() {
  return (
    <Layout>
      <QualityBanner/>
      <QualitySection/>
      <CertificateSection/>
      <Footer/>
    </Layout>
  );
}