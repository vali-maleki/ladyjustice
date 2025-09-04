import styled from "styled-components";

const CategoriesSection = styled.section`
  width: 100%;
  padding: 48px 0;
  background: #fff;
`;

const Container = styled.div`
  width: 1220px;
  max-width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #232b52;
  font-size: 2.08rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  text-align: left; // fixed alignment
`;

const Subtitle = styled.p`
  color: #8b8ea9;
  font-size: 1.08rem;
  margin-bottom: 34px;
  text-align: left; // fixed alignment
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 28px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  border: 1px solid #d4d2e3; // Stroke as in screenshot
  box-shadow: 0 2px 6px rgba(47,49,114,0.04);
  padding: 36px 18px 26px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 160px;
  transition: box-shadow .17s;
  &:hover {
    box-shadow: 0 4px 18px rgba(47,49,114,0.16);
  }
`;

const IconCircle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #f4f7fb;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #232b52;
  margin-bottom: 7px;
`;

const CardDesc = styled.p`
  color: #8b8ea9;
  font-size: 1.03rem;
  line-height: 1.38;
  text-align: center;
  margin-bottom: 0;
`;

export default function Categories() {
  return (
    <CategoriesSection>
      <Container>
        <Title>Legal Categories</Title>
        <Subtitle>
          6 categories with 1721 services to find exactly what you are looking for.
        </Subtitle>
        <CardGrid>
          <Card>
            <IconCircle>
              {/* Replace with your SVG or emoji */}
              <span role="img" aria-label="icon" style={{fontSize: "1.6rem", color: "#c2c6db"}}>🗂️</span>
            </IconCircle>
            <CardTitle>KELA</CardTitle>
            <CardDesc>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.</CardDesc>
          </Card>
          <Card>
            <IconCircle>
              <span role="img" aria-label="icon" style={{fontSize: "1.6rem", color: "#c2c6db"}}>🏠</span>
            </IconCircle>
            <CardTitle>Supported Housing</CardTitle>
            <CardDesc>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.</CardDesc>
          </Card>
          <Card>
            <IconCircle>
              <span role="img" aria-label="icon" style={{fontSize: "1.6rem", color: "#c2c6db"}}>🎓</span>
            </IconCircle>
            <CardTitle>Student Housing</CardTitle>
            <CardDesc>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.</CardDesc>
          </Card>
          <Card>
            <IconCircle>
              <span role="img" aria-label="icon" style={{fontSize: "1.6rem", color: "#c2c6db"}}>⚖️</span>
            </IconCircle>
            <CardTitle>Disputes</CardTitle>
            <CardDesc>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.</CardDesc>
          </Card>
          <Card>
            <IconCircle>
              <span role="img" aria-label="icon" style={{fontSize: "1.6rem", color: "#c2c6db"}}>👨‍💼</span>
            </IconCircle>
            <CardTitle>For Landlord</CardTitle>
            <CardDesc>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.</CardDesc>
          </Card>
          <Card>
            <IconCircle>
              <span role="img" aria-label="icon" style={{fontSize: "1.6rem", color: "#c2c6db"}}>🏡</span>
            </IconCircle>
            <CardTitle>For Tenant</CardTitle>
            <CardDesc>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.</CardDesc>
          </Card>
        </CardGrid>
      </Container>
    </CategoriesSection>
  );
}
