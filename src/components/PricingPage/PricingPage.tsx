import styled from "styled-components";

const Section = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 78px 0 64px 0;
  background: #fff;
`;

const Label = styled.div`
  color: #8b8ea9;
  font-size: 1.03rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 11px;
`;

const Title = styled.h2`
  text-align: center;
  color: #232b52;
  font-size: 2.34rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #8b8ea9;
  font-size: 1.12rem;
  margin-bottom: 44px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`;

const Cards = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: stretch;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 22px;
  border: 1px solid #ebeaf5;
  box-shadow: 0 2px 16px rgba(44,45,94,0.06);
  flex: 1;
  min-width: 310px;
  max-width: 352px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px 30px 32px;
`;

const PriceLabel = styled.div`
  color: #232b52;
  font-size: 1.07rem;
  font-weight: 600;
  margin-bottom: 18px;
`;

const Price = styled.div`
  color: #232b52;
  font-size: 2.75rem;
  font-weight: 800;
`;

const PriceSubtext = styled.div`
  color: #8b8ea9;
  font-size: 1rem;
  margin-bottom: 30px;
`;

const Button = styled.button<{ current?: boolean }>`
  background: ${({ current }) => (current ? "#fff" : "#232b97")};
  color: ${({ current }) => (current ? "#232b97" : "#fff")};
  border: 2px solid #232b97;
  border-radius: 26px;
  font-weight: 700;
  font-size: 1.12rem;
  padding: 12px 0;
  margin-bottom: 34px;
  margin-top: 8px;
  width: 180px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  box-shadow: 0 1px 4px rgba(44,45,94,0.05);
  &:hover {
    background: ${({ current }) => (current ? "#f5f8fd" : "#182275")};
    color: #fff;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  color: #232b52;
  font-size: 1.05rem;
  font-weight: 400;
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.span`
  font-size: 1.08rem;
  margin-right: 11px;
  color: #232b97;
`;

export default function PricingPage() {
  return (
    <Section>
      <Label>PRICING</Label>
      <Title>Affordable pricing plans</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
      </Subtitle>
      <Cards>
        <Card>
          <PriceLabel>Free</PriceLabel>
          <Price>$0</Price>
          <PriceSubtext>Billed monthly</PriceSubtext>
          <Button current>Current</Button>
          <Features>
            <Feature><Icon>✔️</Icon>All analytics features</Feature>
            <Feature><Icon>✔️</Icon>No disputes</Feature>
            <Feature><Icon>✔️</Icon>Limit to 10 questions</Feature>
            <Feature><Icon>✔️</Icon>Mobile app</Feature>
            <Feature><Icon>✔️</Icon>Something else</Feature>
          </Features>
        </Card>
        <Card>
          <PriceLabel>Once – off</PriceLabel>
          <Price>$199</Price>
          <PriceSubtext>Billed monthly</PriceSubtext>
          <Button>Get started</Button>
          <Features>
            <Feature><Icon>✔️</Icon>Everything on Basic plan</Feature>
            <Feature><Icon>✔️</Icon>One dispute</Feature>
            <Feature><Icon>✔️</Icon>Unlimited questions</Feature>
            <Feature><Icon>✔️</Icon>Mobile app</Feature>
            <Feature><Icon>✔️</Icon>Something else</Feature>
          </Features>
        </Card>
        <Card>
          <PriceLabel>Monthly</PriceLabel>
          <Price>$399</Price>
          <PriceSubtext>Billed monthly</PriceSubtext>
          <Button>Get started</Button>
          <Features>
            <Feature><Icon>✔️</Icon>Everything on once-off plan</Feature>
            <Feature><Icon>✔️</Icon>Unlimited disputes</Feature>
            <Feature><Icon>✔️</Icon>Unlimited questions</Feature>
            <Feature><Icon>✔️</Icon>Mobile app</Feature>
            <Feature><Icon>✔️</Icon>Something else</Feature>
          </Features>
        </Card>
      </Cards>
    </Section>
  );
}
