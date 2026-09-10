import Layout from "@/components/layout/Layout";
import QualityBanner from "../../features/components/QualityPage/QualityBanner";
import QualitySection from "../../features/components/QualityPage/QualitySection";
import CertificateSection from "../../features/components/QualityPage/QualityCertificateSection";
import Footer from "../../features/components/AogDeskPage/Footer";



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