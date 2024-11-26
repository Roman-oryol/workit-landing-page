import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Footer from '../layout/Footer/Footer';
import './App.scss';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header>Title</Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
