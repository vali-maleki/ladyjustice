import styled from "styled-components";

const ProcessContainer = styled.section`
  width: 100%;
  padding: 52px 0 38px 0;
  background: #fff;
  text-align: center;
`;

const SmallTitle = styled.div`
  font-size: 1.04rem;
  color: #a9adc2;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 2px;
`;

const BigTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  color: #232b52;
  margin: 0 0 14px 0;
`;

const Subtitle = styled.p`
  color: #9194a8;
  max-width: 590px;
  margin: 0 auto;
  font-size: 1.15rem;
  line-height: 1.57;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 74px;
  margin-top: 52px;
`;

const Card = styled.div`
  flex: 1 1 220px;
  max-width: 280px;
  min-width: 220px;
  text-align: center;
`;

const IconCircle = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: #f4f7fb;
  margin: 0 auto 18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.div`
  font-weight: 700;
  color: #232b52;
  font-size: 1.22rem;
  margin-bottom: 8px;
`;

const CardDesc = styled.p`
  color: #a9adc2;
  font-size: 1.07rem;
  line-height: 1.47;
`;

export default function ProcessSection() {
  return (
    <ProcessContainer>
      <SmallTitle>OUR PROCESS</SmallTitle>
      <BigTitle>Get started as easy as 1, 2, 3</BigTitle>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem
        vulputate etiam facilisis pellentesque ut quis.
      </Subtitle>
      <Row>
        <Card>
          <IconCircle>
            {/* Replace with your own SVG icon if needed */}
            <span role="img" aria-label="icon" style={{fontSize: "2.8rem", color: "#c5c9e6"}}>📷</span>
          </IconCircle>
          <CardTitle>Key Words</CardTitle>
          <CardDesc>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus hac.
          </CardDesc>
        </Card>
        <Card>
          <IconCircle>
            <span role="img" aria-label="icon" style={{fontSize: "2.8rem", color: "#c5c9e6"}}>📷</span>
          </IconCircle>
          <CardTitle>Keys Words</CardTitle>
          <CardDesc>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus hac.
          </CardDesc>
        </Card>
        <Card>
          <IconCircle>
            <span role="img" aria-label="icon" style={{fontSize: "2.8rem", color: "#c5c9e6"}}>📷</span>
          </IconCircle>
          <CardTitle>Key Words</CardTitle>
          <CardDesc>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus hac.
          </CardDesc>
        </Card>
      </Row>
    </ProcessContainer>
  );
}
