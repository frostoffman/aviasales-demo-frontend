import React from 'react';
import styled from 'styled-components';

const Offer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  background: #cd2027;
  align-items: center;
  position: relative;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #ffffff;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 22px 16px;
`;

const Logo = styled.img`
  flex: 0 0 auto;
  padding-right: 10px;
`;

const Info = styled.div`
  padding: 18px 8px;
  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const Picture = styled.img`
  width: 125px;
  height: 30px;

  @media (min-width: 768px) {
    width: 100px;
    height: 25px;
  }
`;

const OfferPrice = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
`;

const Price = styled.div`
  margin-bottom: 10px;
`;

const PriceFrom = styled.span`
  line-height: 16px;
  font-size: 12px;
  color: #5c5c5c;
  margin-right: 4px;
`;

const Left = styled.div`
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
  white-space: nowrap;
`;

const Description = styled.p`
  line-height: 16px;
  font-size: 12px;
  color: #242424;
  margin-bottom: 44px;
`;

const Link = styled.a`
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  color: #d93533;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export default props => {
  return (
    <Offer>
      <Head>
        <Title>{props.title}</Title>
        <Logo src={props.logo} alt="" />
      </Head>
      <Info>
        <Content>
          <Picture src={props.img} alt="logo" />
          <OfferPrice>
            <Price>
              <PriceFrom>от</PriceFrom>
              {props.price}
            </Price>
            <Left>Осталось {props.left} дней</Left>
          </OfferPrice>
        </Content>
        <Description>{props.desc}</Description>
        <Link href="">Узнать подробности</Link>
      </Info>
    </Offer>
  );
};
