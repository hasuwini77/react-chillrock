import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ChillMainContent from './components/ChillMainContent';
import ChillHeader from './components/ChillHeader';

function App() {
  const [myPage, setMyPage] = useState(null);

  return (
    <>
      {myPage === null && (
        <>
          <Header />
          <MainContent updatePage={setMyPage} />
          <Footer />
        </>
      )}
      {myPage === 'Chill Beats' && (
        <>
          <ChillHeader headerTitle={'Chill Beats Dude'} subTitle={'The Best lofi beats'} />
          <ChillMainContent />
        </>
      )}
    </>
  );
}

export default App;
