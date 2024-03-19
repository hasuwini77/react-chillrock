import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ChillMainContent from './components/ChillMainContent';
import ChillHeader from './components/ChillHeader';
import ChillFooter from './components/ChillFooter';
import RockMainContent from './components/RockMainContent';
import RockFooter from './components/RockFooter';

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
          <ChillMainContent updatePage={setMyPage} />
          <ChillFooter />
        </>
      )}
      {myPage === 'Rock Music' && (
        <>
          <ChillHeader headerTitle={'ROCK n ROLL BABY'} subTitle={'Let\'s GET IT!'} />
          <RockMainContent updatePage={setMyPage} />
          <RockFooter />
        </>
      )}
    </>
  );
}

export default App;
