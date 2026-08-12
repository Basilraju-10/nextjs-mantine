
import Layout from "@/components/Layout";
import Footer from "../whoweare/components/Footer";
import RelastionshipBanner from "./components/RelationshipBanner";
import RelationshipSection from "./components/RealtionshipSection";
import RelationshipCertificateSection from "./components/RelationshipCertificateSection";



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