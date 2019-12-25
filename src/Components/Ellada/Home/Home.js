import React from 'react';
import NavBar from '../NavBar/NavBar';
import BlockChain from '../BlockChain/BlockChain';
import Token from '../Token/Token';
import Whitepaper from '../Whitepaper/Whitepaper';
import Roadmap from '../Roadmap/Roadmap';
import Platform from '../Platform/Platform';
import Offering from '../Offering/Offering';
import Team from '../Team/Team';
import News from '../News/News';
import Faq from '../FAQ/Faq';
import Partner from '../Partners/Partner';
import Fundraising from '../Fundraising/Fundraising';
import Footer from '../../Footer/Footer';
import Copyright from '../../Copyright/Copyright';

function Home() {
  return (
    <div>
      <NavBar />
      <BlockChain />
      <Token />
      <Whitepaper />
      <Roadmap />
      <Platform />
      <Offering />
      <Team />
      <News />
      <Faq />
      <Partner />
      <Fundraising />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
