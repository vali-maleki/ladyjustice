import styled from "styled-components";

const PromoContainer = styled.section`
  width: 100%;
  background: #f7f7fc;
  padding: 46px 0;
  display: flex;
  justify-content: center;
`;

// No outer white box!
const Left = styled.div`
  padding: 34px 38px;
  flex: 1 1 68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent; // ← flush with outer gray!
`;

const Headline = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #232b52;
  margin-bottom: 22px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px 44px;
  margin-bottom: 38px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #232b52;
  font-size: 1.08rem;
`;

const CheckMark = styled.span`
  display: inline-block;
  color: #262cdd;
  font-size: 1.3rem;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-top: 6px;
`;

const GetStartedBtn = styled.button`
  background: #232b97;
  color: #fff;
  font-size: 1.11rem;
  font-weight: 600;
  padding: 11px 44px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44,45,94,0.07);
  transition: background 0.17s;
  &:hover {
    background: #182275;
  }
`;

const SeeOtherBtn = styled.button`
  background: #fff;
  color: #232b97;
  font-size: 1.08rem;
  font-weight: 600;
  padding: 11px 32px;
  border: 2px solid #232b97;
  border-radius: 24px;
  cursor: pointer;
  transition: background 0.17s;
  &:hover {
    background: #f4f7fb;
  }
`;

const Right = styled.div`
  flex: 1 1 32%;
  min-width: 260px;
  background: #fff; // If you want only the image block boxed!
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(44,45,94,0.07);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderImg = styled.div`
  width: 120px;
  height: 120px;
  background: #e7e9f7;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #b6b9e3;
`;

const Layout = styled.div`
  display: flex;
  width: 1040px;
  max-width: 96vw;
  gap: 0;
  /* No white background here, just layout */
`;

export default function SignupPromo() {
  return (
    <PromoContainer>
      <Layout>
        <Left>
          <Headline>
            Create your account today<br />and get started for free!
          </Headline>
          <FeaturesGrid>
            <Feature><CheckMark>✔️</CheckMark> Text</Feature>
            <Feature><CheckMark>✔️</CheckMark> Text</Feature>
            <Feature><CheckMark>✔️</CheckMark> Text</Feature>
            <Feature><CheckMark>✔️</CheckMark> Text</Feature>
          </FeaturesGrid>
          <ButtonRow>
            <GetStartedBtn>Get started</GetStartedBtn>
            <SeeOtherBtn>See other plans</SeeOtherBtn>
          </ButtonRow>
        </Left>
        <Right>
          <PlaceholderImg>
            {/* Replace with your actual image if needed */}
            <span role="img" aria-label="promo-img">🖼️</span>
          </PlaceholderImg>
        </Right>
      </Layout>
    </PromoContainer>
  );
}
