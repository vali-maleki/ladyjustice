import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 0 48px 0;
  background: #fff;
`;

const Title = styled.h2`
  text-align: center;
  color: #232b52;
  font-size: 2.04rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #8b8ea9;
  font-size: 1.12rem;
  margin-bottom: 36px;
`;

const FaqContainer = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 15px rgba(44,45,94,0.04);
  border: 1px solid #ebeaf5;
  padding: 12px 0 0 0;
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #ebeaf5;
  padding: 0;
`;

const FaqQuestionRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 22px 30px 0 30px;
  min-height: 70px;
`;

const FaqQuestion = styled.span`
  color: #232b52;
  font-size: 1.19rem;
  font-weight: 700;
  flex: 1;
`;

const Icon = styled.span`
  font-size: 1.4rem;
  color: #a9adc2;
  user-select: none;
`;

const FaqAnswer = styled.div`
  color: #8b8ea9;
  font-size: 1.07rem;
  padding: 7px 30px 24px 30px;
  line-height: 1.62;
`;

const FAQ_HEADER = "Frequently Asked Questions";
const FAQ_SUBTITLE = "Here are the most frequently asked questions.";

const faqs = [
  {
    q: "What is the difference between the 'Free' and 'Once-off' plans? ?",
    a: "The Free plan gives you access to all analytics features but limits you to 10 questions per month and does not allow for disputes. The Once-off plan provides unlimited questions, allows for one dispute, and includes everything in the Free plan, making it ideal for a focused, short-term project.",
  },
  {
    q: "How does snowLEX ensure my data and privacy are protected?",
    a: "We employ industry-standard encryption protocols and strict access controls to protect your information. Your data is never shared with third parties without your explicit consent. For more details, please refer to our full Privacy Policy under the 'About' section.",
  },
  {
    q: "Can I upgrade or downgrade my plan at any time?",
    a: "Yes, absolutely! You can upgrade from the Free or Once-off plan to the Monthly plan at any time through your account dashboard. Downgrades or cancellations for the Monthly plan can also be processed anytime, and the change will take effect at the end of your current billing cycle.",
  },
  {
    q: " What does 'unlimited disputes' mean in the Monthly plan?",
    a: "The unlimited disputes feature allows you to flag any analysis or finding within the application that you believe is incorrect or needs further review. Our support and analyst teams will then prioritize investigating and resolving these issues as often as you need, without any limitation.",
  },
  {
    q: " Is there a mobile application available for snowLEX?",
    a: "Yes, both the Once-off and Monthly plans include access to our dedicated mobile app, available on both iOS and Android. This allows you to monitor your key metrics, ask questions, and check on disputes while you're away from your desktop.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState(0); // 0 means first item open by default

  return (
    <Section>
      <Title>{FAQ_HEADER}</Title>
      <Subtitle>{FAQ_SUBTITLE}</Subtitle>
      <FaqContainer>
        {faqs.map((faq, idx) => (
          <FaqItem key={idx}>
            <FaqQuestionRow onClick={() => setOpen(open === idx ? -1 : idx)}>
              <FaqQuestion>{faq.q}</FaqQuestion>
              <Icon>{open === idx ? '\u2013' : '+'}</Icon>
            </FaqQuestionRow>
            {open === idx && <FaqAnswer>{faq.a}</FaqAnswer>}
          </FaqItem>
        ))}
      </FaqContainer>
    </Section>
  );
}
