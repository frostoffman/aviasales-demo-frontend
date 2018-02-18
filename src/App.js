import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Destination from './Popular';
import Prices from './Prices';
import Slider from './Slider';
import Follow from './Follow';
import Offers from './Offers';
import About from './About';
import Application from './Application';
import Footer from './Footer';

const Wrapper = styled.div`
  min-height: 100%;
  overflow: hidden;
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Destination />
        <Prices />
        <Slider />
        <Follow />
        <Offers />
        <About />
        <Application />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
