import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Pendu } from './views/Pendu';
import Navbar from './componentes/Navbar';
import { Footer } from './componentes/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Pendu />
      <Footer />
    </div>
  );
}

export default App;