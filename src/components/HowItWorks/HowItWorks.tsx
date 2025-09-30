import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 574px; 
  /* REMOVED: height: 240px; - This allows the card to grow with the content. */
  min-height: 240px; /* Optional: Keep a minimum height for consistency */
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(44,45,94,0.02);
  /* Adjusted vertical padding for better spacing top/bottom */
  padding: 24px 24px 24px 24px; 
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
  /* Slightly reduced line-height for better fit */
  line-height: 1.5; 
  /* Reduced margin-bottom to save vertical space */
  margin-bottom: 15px; 
  font-family: 'DM Sans', sans-serif;

  /* Target the list items and remove their default bottom margin */
  ul {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 20px;
  }
  
  /* Make list items slightly smaller for compactness */
  li {
    font-size: 1.05rem; 
    margin-bottom: 8px; /* Space between list items */
  }
`;

const RightCard = styled.div`
  width: 329.47px;           // W 329.47 from config
  height: 317px;             // H 317 from config
  border-radius: 18px;
  background: #fff;
  padding: 44px 22px 0 22px;
  box-shadow: 0 2px 8px rgba(44,45,94,0.02);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageCircle = styled.div`
  width: 220px;
  height: 220px;
  background: #fff;
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
          <p>Getting reliable legal guidance doesn't have to be complicated or expensive. Our app is designed to give you quick, 
          actionable clarity on your legal questions in just a few simple steps.</p>
          <ol>
            <li>Ask Your Question: Simply log in and type your legal question directly into the app. Our powerful system immediately analyzes your query.</li>
            <li>Get an Instant Overview: Within seconds, you'll receive a clear, concise initial response that addresses the core of your question. 
              This free guidance gives you the basic information you need to understand your situation.</li>
              <li>Unlock the Details: Need more than the basics? If you require a detailed, comprehensive solution, including deeper analysis, 
                relevant legal precedents, and step-by-step guidance, simply subscribe to unlock our full premium features.</li>
          </ol>
        </Description>
      </LeftCard>
      <RightCard>
        <ImageCircle>
          <img src="/SnowLEXimages/ladyjustice3xb.png" alt="Smart search" />
        </ImageCircle>
      </RightCard>
    </Wrapper>
  );
}
