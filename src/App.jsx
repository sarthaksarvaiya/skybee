import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
// import ProblemsSolutions from "./components/ProblemsSolutions.jsx";
// import Offerings from "./components/Offerings.jsx";
// import Market from "./components/Market.jsx";
// import SocialImpact from "./components/SocialImpact.jsx";
// import RevenueModel from "./components/RevenueModel.jsx";
// import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        {/* <ProblemsSolutions /> */}
        {/* <Offerings /> */}
        {/* <Market /> */}
        {/* <SocialImpact /> */}
        {/* <RevenueModel /> */}
        {/* <Team /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
