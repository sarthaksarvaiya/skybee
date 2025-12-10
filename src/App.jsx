import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Project.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      {/* <main className="pt-16"> */}
      <main>
        <Hero />
        <About />
        <Product />
        <Contact />
      </main>
    </div>
  );
}

export default App;
