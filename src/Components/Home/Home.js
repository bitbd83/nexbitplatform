import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Sections/Header';
import CardSection from '../Sections/CardSection';
import ImageSection2 from '../Image/ImageSection2';
import AdvanceTool from '../Tools/AdvanceTool';
import Digital from '../Digital/Digital';
import DigitalCard from '../DigitalCard/DigitalCard';
import Services from '../DigitalCard/Services';
import ServiceSection from '../DigitalCard/ServiceSection';
import ServiceThird from '../DigitalCard/ServiceThird';
import Trading from '../Tools/Trading';
import Support from '../Support/Support';
import TableHeading from '../Table/TableHeading';
import CustomTable from '../Table/CustomTable';
import Setup from '../Account/Setup';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';
import ImageSection from '../Image/ImageSection';
function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <TableHeading />
      <CustomTable />
      <AdvanceTool />
      <ImageSection />
      <Digital />
      <DigitalCard />
      <Trading />
      <ImageSection2 />
      <Services />
      <ServiceSection />
      <Support />
      <Setup />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
