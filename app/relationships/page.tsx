
import Layout from "@/components/Layout";
import Footer from "../../features/components/Footer";
import RelastionshipBanner from "../../features/components/RelationshipBanner";
import RelationshipSection from "../../features/components/RealtionshipSection";
import RelationshipCertificateSection from "../../features/components/RelationshipCertificateSection";



export default function RelationshipsPage() {
  return (
    <Layout>
      <RelastionshipBanner/>
      <RelationshipSection/>
      <RelationshipCertificateSection/>
      <Footer/>
    </Layout>
  );
}