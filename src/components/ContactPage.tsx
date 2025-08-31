import styled from "styled-components";

const Section = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 70px 0 56px 0;
  display: flex;
  align-items: flex-start;
  gap: 44px;
  background: #fff;
`;

const InfoPanel = styled.div`
  flex: 0 0 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Headline = styled.h2`
  color: #232b52;
  font-size: 2.04rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: left;
`;

const Subtitle = styled.p`
  color: #8b8ea9;
  font-size: 1.07rem;
  margin-bottom: 34px;
  text-align: left;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  color: #232b52;
  font-size: 1.08rem;
  gap: 11px;
`;

const InfoIcon = styled.span`
  font-size: 1.15rem;
  color: #232b97;
  margin-bottom: 1px;
`;

const FormCard = styled.form`
  flex: 1;
  min-width: 0;
  background: #f2f1fa;
  border-radius: 20px;
  border: 1px solid #d4d2e3;
  box-shadow: 0 2px 6px rgba(47,49,114,0.04);
  padding: 42px 36px 32px 36px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const TwoCol = styled.div`
  display: flex;
  gap: 18px;
`;

const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Label = styled.label`
  color: #232b52;
  font-size: 1.01rem;
  font-weight: 600;
`;

const Input = styled.input`
  height: 44px;
  border-radius: 12px;
  border: 1px solid #ececf3;
  background: #fff;
  font-size: 1.05rem;
  color: #232b52;
  padding: 0 14px;
  box-shadow: 0 1px 2px rgba(44,45,94,0.04);
  &:focus {
    outline: 2px solid #232b97;
    background: #f7f7fc;
  }
`;

const TextArea = styled.textarea`
  border-radius: 12px;
  border: 1px solid #ececf3;
  background: #fff;
  color: #232b52;
  min-height: 92px;
  font-size: 1.05rem;
  padding: 13px 14px;
  resize: vertical;
  box-shadow: 0 1px 2px rgba(44,45,94,0.04);
  &:focus {
    outline: 2px solid #232b97;
    background: #f7f7fc;
  }
`;

const Button = styled.button`
  background: #232b97;
  color: #fff;
  border: none;
  border-radius: 26px;
  font-size: 1.09rem;
  font-weight: 600;
  margin-top: 6px;
  width: 167px;
  padding: 13px 0;
  align-self: flex-end;
  cursor: pointer;
  transition: background 0.18s;
  box-shadow: 0 2px 8px rgba(44,45,94,0.07);
  &:hover {
    background: #262cdd;
  }
`;

export default function ContactPage() {
  return (
    <Section>
      <InfoPanel>
        <Headline>Get in touch today</Headline>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
        </Subtitle>
        <InfoList>
          <InfoRow>
            <InfoIcon>📧</InfoIcon>
            Justice4.0@info.com
          </InfoRow>
          <InfoRow>
            <InfoIcon>📞</InfoIcon>
            +358 6790356
          </InfoRow>
          <InfoRow>
            <InfoIcon>📍</InfoIcon>
            794 Mcallister St<br />Helsinki, 94102
          </InfoRow>
        </InfoList>
      </InfoPanel>
      <FormCard>
        <TwoCol>
          <FieldGroup>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="John Carter" required />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="example@email.com" required />
          </FieldGroup>
        </TwoCol>
        <TwoCol>
          <FieldGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(123) 456 - 789" />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" type="text" placeholder="Facebook" />
          </FieldGroup>
        </TwoCol>
        <FieldGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" placeholder="Please type your message here..." required />
        </FieldGroup>
        <Button type="submit">Send message</Button>
      </FormCard>
    </Section>
  );
}
