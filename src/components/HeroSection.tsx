import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 40px 60px;
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 500px;
`;

const TextColumn = styled.div`
  flex: 1 1 0;
  min-width: 370px;
  max-width: 500px;
  margin-right: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BigTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #232b52;
  margin-bottom: 18px;
  line-height: 1.15;
`;

const Description = styled.p`
  color: #9194a8;
  font-size: 1.14rem;
  margin-bottom: 24px;
  line-height: 1.56;
`;

const Buttons = styled.div`
  display: flex;
  gap: 18px;
`;

const PrimaryButton = styled.button`
  background: #232b97;
  color: #fff;
  border: none;
  border-radius: 28px;
  font-weight: 600;
  font-size: 1.09rem;
  padding: 12px 34px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44,45,94,0.06);
  transition: background 0.17s;
  &:hover {
    background: #232b52;
  }
`;

const SecondaryButton = styled.button`
  background: #fff;
  color: #232b97;
  border: 2px solid #232b97;
  border-radius: 28px;
  font-weight: 600;
  font-size: 1.09rem;
  padding: 12px 34px;
  cursor: pointer;
  transition: background 0.17s;
  &:hover {
    background: #f3f4fa;
  }
`;

const VideoColumn = styled.div`
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  background: #f5f7fc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(44,45,94,0.07);
`;

const PlayButton = styled.div`
  width: 70px;
  height: 70px;
  background: #ededfa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(44,45,94,0.09);
  cursor: pointer;
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <TextColumn>
        <BigTitle>
          LadyJustice AI<br />
          your Legal Assistant<br />
          in your pocket
        </BigTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </Description>
        <Buttons>
          <PrimaryButton>call to action →</PrimaryButton>
          <SecondaryButton>call to action</SecondaryButton>
        </Buttons>
      </TextColumn>
      <VideoColumn>
        <PlayButton>
          <span style={{ fontSize: "2.2rem", color: "#7a7bb1" }}>&#9654;</span>
        </PlayButton>
      </VideoColumn>
    </HeroContainer>
  );
}
