import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIWorkflow from './components/AIWorkflow';

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-[-1] bg-brand-dark overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <AIWorkflow />
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
