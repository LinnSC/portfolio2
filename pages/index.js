import Layout from "../components/layout/Layout";
import HeroSection from "../components/Sections/HeroSection";
import ProjectSection from "../components/Sections/ProjectSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
    </Layout>
  );
}
