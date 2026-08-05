import Layout from "@/components/Layout";
import QualityBanner from "./components/QualityBanner";
import QualitySection from "./components/QualitySection";
import CertificateSection from "./components/CertificateSection";
import Footer2 from "./components/Footer2";



export default function ExchangePage() {
  return (
    <Layout>
      <QualityBanner/>
      <QualitySection/>
      <CertificateSection/>
      <Footer2/>
    </Layout>
  );
}