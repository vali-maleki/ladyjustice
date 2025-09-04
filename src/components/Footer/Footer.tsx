import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const FooterSection = styled.footer`
  width: 100%;
  background: #141111ff;
  border-top: 1px solid #d4d2e3;
  padding: 48px 0 0 0;
`;

const Container = styled.div`
  width: 1220px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 44px;
`;

const LogoCol = styled.div`
  flex: 0 0 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.13rem;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.22rem;
  margin-bottom: 16px;
  color: #e7e8eeff;
`;

const LogoDesc = styled.div`
  color: #8b8ea9;
  font-size: 1.03rem;
  margin-bottom: 22px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
`;

const SocialIcon = styled.a`
  color: #8b8ea9;
  font-size: 1.38rem;
  transition: color 0.15s;
  &:hover {
    color: #232b97;
  }
`;

const Col = styled.div`
  flex: 1;
  min-width: 140px;
  margin-right: 18px;
`;

const ColHeading = styled.div`
  font-weight: 600;
  color: #232b52;
  margin-bottom: 17px;
  font-size: 1.06rem;
`;

// Styled Link for React Router navigation ONLY for Contact us
const RouterLink = styled(Link)`
  display: block;
  color: #8b8ea9;
  font-size: 1.045rem;
  margin-bottom: 11px;
  text-decoration: none;
  transition: color 0.15s;
  &:hover {
    color: #232b97;
  }
`;

// Regular anchor for external links/other placeholders
const ColLink = styled.a`
  display: block;
  color: #8b8ea9;
  font-size: 1.045rem;
  margin-bottom: 11px;
  text-decoration: none;
  transition: color 0.15s;
  &:hover {
    color: #232b97;
  }
`;

const CopyrightBar = styled.div`
  width: 1220px;
  max-width: 100%;
  margin: 33px auto 0 auto;
  padding: 18px 0 10px 0;
  border-top: 1px solid #ebeaf5;
  color: #8b8ea9;
  font-size: 0.97rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <LogoCol>
          <Logo><img src="/SnowLEXlogo/LogoBlack.png" alt="Snowlex logo" /></Logo>
          <LogoDesc>Lorem ipsum dolor sit amet consectetur adipising elit aliquam mauris sed mo</LogoDesc>
          <SocialRow>
            <SocialIcon href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="1.38em" height="1.38em" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.326 
              24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 
              2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467
              3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0"/></svg>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg width="1.38em" height="1.38em" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.816 9.816 0 0 1-2.828.775A4.932 
              4.932 0 0 0 23.337 3.56a9.864 9.864 0 0 1-3.127 1.195A4.92 
              4.92 0 0 0 16.616.797c-2.788 0-5.05 2.26-5.05 5.049 0 
              .396.044.783.13 1.153C7.728 6.823 4.1 4.926 1.671 1.905a5.014
              5.014 0 0 0-.686 2.539c0 1.752.893 3.297 2.25 4.199A4.904
              4.904 0 0 1 .964 7.921v.062c0 2.448 1.742 4.49 4.056 4.955a4.938
              4.938 0 0 1-2.224.085c.627 1.956 2.444 3.377 4.6 3.416A9.867
              9.867 0 0 1 0 21.543a13.924 13.924 0 0 0 7.548 2.211c9.052 0
              14.006-7.496 14.006-13.984 0-.213-.005-.426-.014-.637A9.935
              9.935 0 0 0 24 4.557z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="1.38em" height="1.38em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 
              1.366.062 2.633.315 3.608 1.29.975.974 1.228 2.241 
              1.29 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 
              4.85c-.062 1.366-.315 2.633-1.29 3.608-.974.975-2.241 
              1.228-3.608 1.29-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07
              c-1.366-.062-2.633-.315-3.608-1.29-.975-.974-1.228-2.241-1.29-3.608
              C2.175 15.797 2.163 15.417 2.163 12s.012-3.584.07-4.85c.062-1.366.315-2.633
              1.29-3.608.974-.975 2.241-1.228 3.608-1.29C8.416 2.175 8.796 2.163 12 
              2.163zm0-2.163C8.74 0 8.332.015 7.052.072 5.771.128 4.825.396 4.025 
              1.195c-.799.8-1.067 1.746-1.123 3.027C2.015 8.33 2 8.74 2 12c0 
              3.26.015 3.668.072 4.948.056 1.281.324 2.228 1.123 3.027.8.799 1.746 
              1.067 3.027 1.123C8.33 21.985 8.74 22 12 22c3.26 0 3.668-.015 
              4.948-.072 1.281-.056 2.228-.324 3.027-1.123.799-.8 1.067-1.746 
              1.123-3.027C21.985 15.668 22 15.26 22 12c0-3.26-.015-3.668-.072-4.948
              -.056-1.281-.324-2.228-1.123-3.027-.8-.799-1.746-1.067-3.027-1.123C15.668
              2.015 15.26 2 12 2zm0 5.838a6.162 6.162 0 1 0 0 12.324
              6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998
              3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881
              1.44 1.44 0 0 0 0-2.881z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="1.38em" height="1.38em" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554V14.75
              c0-1.361-.027-3.116-1.898-3.116-1.899 0-2.189 1.482-2.189 
              3.008v5.809H9.354V9h3.414v1.561h.049c.477-.901 
              1.637-1.847 3.37-1.847 3.602 0 4.268 2.369 4.268 
              5.455v6.283zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07
              0-1.144.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 
              1.143-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452zM22.225
              0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451
              C23.206 24 24 23.229 24 22.272V1.723C24 .771 23.206 0 22.225 0z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="1.38em" height="1.38em" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.966 2.966 0 0 0-2.09-2.09
              C19.095 3.524 12 3.524 12 3.524s-7.095 0-9.408
              .572A2.966 2.966 0 0 0 .502 6.186C0 8.5 0 12 
              0 12s0 3.5.502 5.814a2.966 2.966 0 0 0 2.09 2.09
              C4.905 20.476 12 20.476 12 20.476s7.095 0 9.408
              -.572a2.966 2.966 0 0 0 2.09-2.09C24 15.5 24 12 
              24 12s0-3.5-.502-5.814zm-13.46 9.541V8.273l6.545
              3.727-6.545 3.727z"/></svg>
            </SocialIcon>
          </SocialRow>
        </LogoCol>
        <Col>
          <ColHeading>Product</ColHeading>
          <ColLink href="#">Features</ColLink>
          <ColLink href="#">Pricing</ColLink>
          <ColLink href="#">Case studies</ColLink>
          <ColLink href="#">Reviews</ColLink>
          <ColLink href="#">Updates</ColLink>
        </Col>
        <Col>
          <ColHeading>Company</ColHeading>
          {/* This enables internal navigation! */}
          <RouterLink to="/contact">Contact us</RouterLink>
          <ColLink href="#">About</ColLink>
          <ColLink href="#">Careers</ColLink>
          <ColLink href="#">Culture</ColLink>
          <ColLink href="#">Blog</ColLink>
        </Col>
        <Col>
          <ColHeading>Support</ColHeading>
          <ColLink href="#">Getting started</ColLink>
          <ColLink href="#">Help center</ColLink>
          <ColLink href="#">Server status</ColLink>
          <ColLink href="#">Report a bug</ColLink>
          <ColLink href="#">Chat support</ColLink>
        </Col>
        <Col>
          <ColHeading>Download</ColHeading>
          <ColLink href="#">iOS</ColLink>
          <ColLink href="#">Android</ColLink>
          <ColLink href="#">Mac</ColLink>
          <ColLink href="#">Windows</ColLink>
          <ColLink href="#">Chrome</ColLink>
        </Col>
      </Container>
      <CopyrightBar>
        Copyright © 2024 Justice 4.0 | All Rights Reserved | Terms and Conditions | Privacy Policy
      </CopyrightBar>
    </FooterSection>
  );
}
