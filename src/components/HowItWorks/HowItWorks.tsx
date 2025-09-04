import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: #fff;
  padding: 58px 0 46px 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftCard = styled.div`
  width: 574px;               // W 574 from config
  height: 240px;              // H 240 from config
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(44,45,94,0.02);
  padding: 38px 24px 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 28px;
`;

const Title = styled.h2`
  font-size: 2.28rem;
  font-weight: 700;
  color: #232b97;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-family: 'DM Sans', sans-serif;
  line-height: 46px;                  // matches config
`;

const Description = styled.p`
  color: #8b8ea9;
  font-size: 1.13rem;
  line-height: 1.68;
  margin-bottom: 12px;
  font-family: 'DM Sans', sans-serif;
`;

const RightCard = styled.div`
  width: 329.47px;           // W 329.47 from config
  height: 317px;             // H 317 from config
  border-radius: 18px;
  background: #f9f9ff;
  padding: 44px 22px 0 22px;
  box-shadow: 0 2px 8px rgba(44,45,94,0.02);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageCircle = styled.div`
  width: 220px;
  height: 220px;
  background: #f4f7fb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageIcon = styled.div`
  font-size: 4.8rem;
  color: #c5c9e6;
  opacity: 0.6;
`;

export default function HowItWorks() {
  return (
    <Wrapper>
      <LeftCard>
        <Title>How does it work?</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </Description>
      </LeftCard>
      <RightCard>
        <ImageCircle>
          <ImageIcon>🖼️</ImageIcon>
        </ImageCircle>
      </RightCard>
    </Wrapper>
  );
}
