import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Carousels from "./components/Carousels";
import Menu from "./components/Menu";
import LoginLabel from './components/LoginLabel';
import Hotel from './components/Hotel';
import PenawaranSpesialText from './components/PenawaranSpesialText';
import PenawaranSpesialSlide from './components/PenawaranSpesialSlide';
import WhyTiketCom from "./components/WhyTiketCom";
import Footer from "./components/Footer";
import SurabayaPesona from "./components/SurabayaPesona";
import PartnerMaskapai from "./components/PartnerMaskapai";
import PartnerHotel from "./components/PartnerHotel";
import PartnerKereta from "./components/PartnerKereta";
import PartnerSewaMobil from "./components/PartnerSewaMobil";
import PartnerEntertainment from "./components/PartnerEntertainment";
import UnduhAplikasi from "./components/UnduhAplikasi";
import Copyright from './components/Copyright';
import IconSocial from "./components/IconSocial";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousels/>
        <Menu/>
        <Hotel/>
        <LoginLabel/>
        <PenawaranSpesialText/>
        <PenawaranSpesialSlide/>
        <SurabayaPesona/>
        <WhyTiketCom/>
        <PartnerMaskapai/>
        <PartnerHotel/>
        <PartnerKereta/>
        <PartnerSewaMobil/>
        <PartnerEntertainment/>
        <UnduhAplikasi/>
        <IconSocial/>
        <Copyright/>
        <Footer/>
      </div>
    );
  }
}

export default App;
