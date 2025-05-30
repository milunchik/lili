import './App.css';

import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { WorkBook } from './pages/WorkBook/WorkBook';

function App() {
  return (
    <>
      <Home />
      <WorkBook />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
