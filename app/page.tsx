import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from "lucide-react";
import { Navbar } from "@/app/components/ui/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Skills from "@/app/components/Skills";
import ProjectsSection from "@/app/components/ProjectsSection";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <ContactIco /> },
];

const Homepage = () => {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection />
        <Skills />
        <ProjectsSection />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
