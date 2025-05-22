import './App.css';

import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';

function App() {
  return (
    <>
      <Modal />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
