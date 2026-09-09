import Layout from "@/components/Layout";
import QualityBanner from "../../features/components/QualityBanner";
import QualitySection from "../../features/components/QualitySection";
import CertificateSection from "../../features/components/QualityCertificateSection";
import Footer from "../../features/components/Footer";



export default function QualityPage() {
  return (
    <Layout>
      <QualityBanner/>
      <QualitySection/>
      <CertificateSection/>
      <Footer/>
    </Layout>
  );
}