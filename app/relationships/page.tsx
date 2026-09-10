
import Layout from "@/components/layout/Layout";
import Footer from "../../features/components/AogDeskPage/Footer";
import RelastionshipBanner from "../../features/components/RealtionshipsPage/RelationshipBanner";
import RelationshipSection from "../../features/components/RealtionshipsPage/RealtionshipSection";
import RelationshipCertificateSection from "../../features/components/RealtionshipsPage/RelationshipCertificateSection";



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