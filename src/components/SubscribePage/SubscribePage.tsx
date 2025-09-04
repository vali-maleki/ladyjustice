import React, { useState } from "react";
import styled from "styled-components";

/* -------- Layout -------- */
const PageWrap = styled.div`
  background: #fff;
`;

const Heading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1.9rem;
  font-weight: 800;
  color: #232b97;
  margin: 34px 0 22px 0;
  letter-spacing: 0.01em;
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px 56px 16px;
  display: grid;
  grid-template-columns: 1fr 452px; /* matches figma width */
  gap: 28px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }
`;

/* -------- Left form -------- */
const FormBox = styled.div`
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ebeaf5;
  padding: 16px;
`;

const TabRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  min-width: 120px;
  padding: 10px 14px;
  background: ${({ $active }) => ($active ? "#f7f8fe" : "#fff")};
  color: ${({ $active }) => ($active ? "#232b97" : "#232b52")};
  border-radius: 10px;
  border: 1.5px solid ${({ $active }) => ($active ? "#bfc8ff" : "#ebeaf5")};
  font-weight: 600;
  cursor: pointer;
  font-size: 0.98rem;
  letter-spacing: 0.01em;
  outline: none;
  transition: background 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s;
  box-shadow: ${({ $active }) => ($active ? "0 0 0 3px #e8ebff" : "none")};
`;

const Field = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-size: 0.86rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: #2b2f44;
  display: block;
`;

const InputRow = styled.div`
  display: flex;
  gap: 12px;
`;

const Input = styled.input`
  background: #fff;
  border: 1px solid #dbe3ed;
  border-radius: 10px;
  padding: 11px 12px;
  font-size: 0.98rem;
  width: 100%;
  color: #232b52;
  outline: none;
  transition: border 0.12s, box-shadow 0.12s;
  &:focus {
    border-color: #9aa8ff;
    box-shadow: 0 0 0 3px #e8ebff;
  }
`;

const Select = styled.select`
  background: #fff;
  border: 1px solid #dbe3ed;
  border-radius: 10px;
  padding: 11px 12px;
  font-size: 0.98rem;
  width: 100%;
  color: #232b52;
  outline: none;
  transition: border 0.12s, box-shadow 0.12s;
  &:focus {
    border-color: #9aa8ff;
    box-shadow: 0 0 0 3px #e8ebff;
  }
`;

const CardIconsRow = styled.div`
  margin-top: -4px;
  margin-bottom: 6px;
  img {
    margin-right: 6px;
    height: 18px;
    vertical-align: middle;
    filter: saturate(0.9);
  }
`;

/* -------- Right summary (configured to match screenshot/specs) -------- */
const PaymentBox = styled.aside`
  width: 452px;        /* exact width from screenshot panel */
  min-width: 452px;
  max-width: 452px;
  height: 519px;       /* exact height */
  background: #eeedf8; /* light lavender fill like screenshot */
  border: 1px solid #d6d7ee; /* thin stroke */
  border-radius: 16px; /* rounded corners */
  box-shadow: 0 2px 14px rgba(44, 45, 94, 0.05);
  padding: 22px 22px 18px 22px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    height: auto; /* allow natural height on small screens */
  }
`;

const PayHeader = styled.div`
  margin-bottom: 6px;
`;

const PayTitle = styled.div`
  color: #7b81a0;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 2px;
`;

const Subscription = styled.h3`
  margin: 0;
  color: #1e285f;
  font-size: 1.18rem;
  font-weight: 800;
`;

const Divider = styled.div`
  height: 2px;
  border-radius: 2px;
  background: #cfd2e7; /* slightly darker line like in shot */
  margin: 18px 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 1rem;
  color: #2a2f4a;
  margin-top: 4px;

  strong {
    color: #232b97;
    font-size: 1.06rem;
  }
`;

const TermsWrap = styled.div`
  margin-top: 10px;
  color: #8b8ea9;
  font-size: 0.86rem;
  line-height: 1.28;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Checkbox = styled.input`
  margin-top: 2px;
  accent-color: #6166d5;
  width: 16px;
  height: 16px;
`;

const ButtonSpacer = styled.div`
  margin-top: auto; /* pushes button to bottom */
`;

const PayButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 12px 0;
  border-radius: 22px;
  background: ${({ disabled }) => (disabled ? "#c8cbea" : "#5d5a88")};
  color: #fff;
  font-weight: 700;
  font-size: 1.02rem;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 10px rgba(44, 45, 94, 0.06);
  transition: background 0.18s;
  &:hover {
    background: ${({ disabled }) => (disabled ? "#c8cbea" : "#1e285f")};
  }
`;

export default function SubscribePage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [agree, setAgree] = useState<boolean>(false);

  return (
    <PageWrap>
      <Heading>Subscribe to LadyJustice AI</Heading>

      <Section>
        {/* Left form */}
        <FormBox>
          <TabRow>
            <TabButton $active={activeTab === 0} onClick={() => setActiveTab(0)}>
              Card
            </TabButton>
            <TabButton $active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Apple Pay
            </TabButton>
            <TabButton $active={activeTab === 2} onClick={() => setActiveTab(2)}>
              Google Pay
            </TabButton>
          </TabRow>

          {activeTab === 0 && (
            <>
              <Field>
                <Label>Card number</Label>
                <Input type="text" placeholder="1234 1234 1234 1234" />
                <CardIconsRow>
                  <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" />
                  <img src="https://img.icons8.com/color/32/mastercard.png" alt="Mastercard" />
                  <img src="https://img.icons8.com/color/32/amex.png" alt="Amex" />
                </CardIconsRow>
              </Field>

              <InputRow>
                <Field style={{ flex: 1 }}>
                  <Label>Expiry</Label>
                  <Input type="text" placeholder="MM / YY" />
                </Field>
                <Field style={{ flex: 1 }}>
                  <Label>CVC</Label>
                  <Input type="text" placeholder="CVC" />
                </Field>
              </InputRow>

              <Field>
                <Label>Name on Card</Label>
                <Input type="text" placeholder="Saimi Ollen" />
              </Field>

              <InputRow>
                <Field style={{ flex: 1 }}>
                  <Label>Country</Label>
                  <Select defaultValue="Finland">
                    <option>Finland</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>India</option>
                  </Select>
                </Field>
                <Field style={{ flex: 1 }}>
                  <Label>Postal code</Label>
                  <Input type="text" placeholder="90210" />
                </Field>
              </InputRow>

              <Field>
                <Label>Contact information</Label>
                <Input type="text" placeholder="Name" />
              </Field>

              <InputRow>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
              </InputRow>
            </>
          )}

          {activeTab === 1 && (
            <div style={{ marginTop: 24, color: "#232b52", fontSize: "1.02rem" }}>
              Apple Pay checkout coming soon.
            </div>
          )}

          {activeTab === 2 && (
            <div style={{ marginTop: 24, color: "#232b52", fontSize: "1.02rem" }}>
              Google Pay checkout coming soon.
            </div>
          )}
        </FormBox>

        {/* Right summary configured to spec */}
        <PaymentBox>
          <PayHeader>
            <PayTitle>SUBSCRIBE TO</PayTitle>
            <Subscription>LadyJustice AI Once – off</Subscription>
          </PayHeader>

          <Divider />
          <Divider />
          <TotalRow>
            <span>Total</span>
            <strong>$199</strong>
          </TotalRow>

          <TermsWrap>
            <Checkbox
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree">
              I agreed to the Terms and Conditions
              <br />
              and Terms of use & Privacy Policy
            </label>
          </TermsWrap>

          <ButtonSpacer />
          <PayButton disabled={!agree}>Pay & Subscribe</PayButton>
        </PaymentBox>
      </Section>
    </PageWrap>
  );
}
