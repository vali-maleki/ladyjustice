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
const FAQ_SUBTITLE = "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.";

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipiscing eli ?",
    a: "Pellentesque ac velit facilisis, gravida neque sed, accumsan ipsum. Etiam suscipit elit nec dictum hendrerit.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur ?",
    a: "Integer at diam pretium, venenatis enim a, bibendum nulla. Vivamus ut pulvinar justo.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipiscing eli dictum ?",
    a: "Donec consequat justo vel accumsan aliquam. Ut lacinia efficitur neque, nec porttitor ipsum.",
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
