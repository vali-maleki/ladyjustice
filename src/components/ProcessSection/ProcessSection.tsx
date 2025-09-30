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
  /* Increased width and height */
  width: 120px; 
  height: 120px;
  border-radius: 50%;
  background: #f4f7fb;
  margin: 0 auto 18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Optional: Add overflow: hidden; just in case, though object-fit should handle it */
  overflow: hidden; 
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
        Navigating legal issues shouldn't be complicated. We've streamlined our platform into three easy steps so you can quickly find the guidance you need, 
        understand your options, and take action with confidence.
      </Subtitle>
      <Row>
        <Card>
          <IconCircle>
            {/* Replace with your own SVG icon if needed ... <span role="img" aria-label="icon" style={{fontSize: "2.8rem", color: "#c5c9e6"}}>📷</span>*/}
           
             <img src="/SnowLEXimages/ladyjustice3xf.jpg" style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}}/>
          </IconCircle>
          <CardTitle>Search by Key Term</CardTitle>
          <CardDesc>
            Find the right legal guidance instantly. Use keywords, browse categories, or select a legal area like "Tenant" or "Disputes" to narrow your focus and find relevant services.
          </CardDesc>
        </Card>
        <Card>
          <IconCircle>
             <img src="/SnowLEXimages/ladyjustice3xj.jpg" style={{maxWidth: "120%", maxHeight: "100%", objectFit: "contain"}}/>
          </IconCircle>
          <CardTitle>Read Our Expert Guides</CardTitle>
          <CardDesc>
            Access articles, Q&As, and step-by-step guides written by our team of experienced lawyers. Understand the law and your next steps without the jargon.
          </CardDesc>
        </Card>
        <Card>
          <IconCircle>
             <img src="/SnowLEXimages/ladyjustice3xh.png" style={{maxWidth: "150%", maxHeight: "100%", objectFit: "contain"}}/>
          </IconCircle>
          <CardTitle>Connect with Resources</CardTitle>
          <CardDesc>
            Find the right external resources, forms, or contact details for organizations that can help you implement the solution or follow up on your issue.
          </CardDesc>
        </Card>
      </Row>
    </ProcessContainer>
  );
}
