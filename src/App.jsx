import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ProblemsSolutions from "./components/ProblemsSolutions.jsx";
import Offerings from "./components/Offerings.jsx";
import Market from "./components/Market.jsx";
import SocialImpact from "./components/SocialImpact.jsx";
import RevenueModel from "./components/RevenueModel.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <ProblemsSolutions />
        <Offerings />
        <Market />
        <SocialImpact />
        <RevenueModel />
        <Team />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 mt-10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Bisbee Technology India Private Limited.
        All rights reserved.
      </footer>
    </div>
  );
}

export default App;
