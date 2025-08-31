import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: #fff;
  padding: 56px 0 64px 0;
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
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #8b8ea9;
  font-size: 1.13rem;
  text-align: center;
  margin-bottom: 38px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 44px;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  border: 1px solid #eaeaf3;
  box-shadow: 0 2px 6px rgba(47,49,114,0.04);
  width: 320px;
  padding: 38px 24px 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  background: #f4f7fb;
  border-radius: 50%;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #d5d9ec;
`;

const Name = styled.div`
  font-size: 1.18rem;
  font-weight: 700;
  color: #232b52;
  margin-bottom: 6px;
`;

const Role = styled.div`
  color: #8b8ea9;
  font-size: 1.04rem;
  margin-bottom: 16px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 0;
`;

const SocialIcon = styled.a`
  color: #232b52;
  font-size: 2.1rem;    // Much larger, solid and accessible
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.17s;
  &:hover {
    color: #262cdd;     // Strong vibrant blue on hover
  }
`;

// SVGs use fill="currentColor" for instant high contrast
function FacebookIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.675 0h-21.35C.594 0 0 .594 0 1.326v21.348C0 
      23.406.594 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413
      c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24
      l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 
      3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326
      C24 .594 23.406 0 22.675 0"/>
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 4.557a9.816 9.816 0 0 1-2.828.775A4.932
      4.932 0 0 0 23.337 3.56a9.864 9.864 0 0 1-3.127 1.195A4.92
      4.92 0 0 0 16.616.797c-2.788 0-5.05 2.26-5.05 5.049
      0 .396.044.783.13 1.153C7.728 6.823 4.1 4.926 1.671
      1.905a5.014 5.014 0 0 0-.686 2.539c0 1.752.893 3.297
      2.25 4.199A4.904 4.904 0 0 1 .964 7.921v.062c0
      2.448 1.742 4.49 4.056 4.955a4.938 4.938 0 0 1-2.224.085
      c.627 1.956 2.444 3.377 4.6 3.416A9.867 9.867 0 0
      1 0 21.543a13.924 13.924 0 0 0 7.548 2.211c9.052 0
      14.006-7.496 14.006-13.984 0-.213-.005-.426-.014-.637A9.935
      9.935 0 0 0 24 4.557z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07
      1.366.062 2.633.315 3.608 1.29.975.974 1.228
      2.241 1.29 3.608.058 1.266.07 1.646.07 4.85s-.012
      3.584-.07 4.85c-.062 1.366-.315 2.633-1.29
      3.608-.974.975-2.241 1.228-3.608 1.29-1.266
      .058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366
      -.062-2.633-.315-3.608-1.29-.975-.974-1.228-2.241
      -1.29-3.608C2.175 15.797 2.163 15.417 2.163 12s.012-3.584
      .07-4.85c.062-1.366.315-2.633 1.29-3.608.974-.975
      2.241-1.228 3.608-1.29C8.416 2.175 8.796 2.163 12
      2.163zm0-2.163C8.74 0 8.332.015 7.052.072 5.771.128
      4.825.396 4.025 1.195c-.799.8-1.067 1.746-1.123
      3.027C2.015 8.33 2 8.74 2 12c0 3.26.015 3.668.072
      4.948.056 1.281.324 2.228 1.123 3.027.8.799 1.746
      1.067 3.027 1.123C8.33 21.985 8.74 22 12 22c3.26
      0 3.668-.015 4.948-.072 1.281-.056 2.228-.324
      3.027-1.123.799-.8 1.067-1.746 1.123-3.027C21.985
      15.668 22 15.26 22 12c0-3.26-.015-3.668-
      .072-4.948-.056-1.281-.324-2.228-1.123-3.027
      -.8-.799-1.746-1.067-3.027-1.123C15.668 2.015
      15.26 2 12 2zm0 5.838a6.162 6.162 0 1 0 0
      12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999
      3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406
      -11.845a1.44 1.44 0 1 0 0 2.881 1.44
      1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554V14.75c0-1.361-.027-
      3.116-1.898-3.116-1.899 0-2.189 1.482-2.189
      3.008v5.809H9.354V9h3.414v1.561h.049c.477
      -.901 1.637-1.847 3.37-1.847 3.602 0 4.268
      2.369 4.268 5.455v6.283zM5.337 7.433c-1.144
      0-2.07-.927-2.07-2.07 0-1.144.926-2.07
      2.07-2.07s2.07.926 2.07 2.07c0 1.143-.926
      2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953
      v11.452zM22.225 0H1.771C.792 0 0 .771 0
      1.723v20.549C0 23.229.792 24 1.771 24h20.451
      C23.206 24 24 23.229 24 22.272V1.723C24
      .771 23.206 0 22.225 0z"/>
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a2.966 2.966 0 0 0-2.09-2.09C19.095
      3.524 12 3.524 12 3.524s-7.095 0-9.408.572A2.966
      2.966 0 0 0 .502 6.186C0 8.5 0 12 0 12s0 3.5.502
      5.814a2.966 2.966 0 0 0 2.09 2.09C4.905 20.476 12
      20.476 12 20.476s7.095 0 9.408-.572a2.966 2.966
      0 0 0 2.09-2.09C24 15.5 24 12 24 12s0-3.5-.502
      -5.814zm-13.46 9.541V8.273l6.545 3.727-6.545
      3.727z"/>
    </svg>
  );
}

export default function TeamSection() {
  return (
    <Section>
      <Container>
        <Title>Meet our team members</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.</Subtitle>
        <CardRow>
          <Card>
            <Avatar>👤</Avatar>
            <Name>Frederick Kyle</Name>
            <Role>CEO & Co-Founder</Role>
            <SocialRow>
              <SocialIcon href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></SocialIcon>
              <SocialIcon href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></SocialIcon>
              <SocialIcon href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></SocialIcon>
              <SocialIcon href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></SocialIcon>
              <SocialIcon href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></SocialIcon>
            </SocialRow>
          </Card>
          <Card>
            <Avatar>👤</Avatar>
            <Name>Natasha De Koker</Name>
            <Role>CEO & Co-Founder</Role>
            <SocialRow>
              <SocialIcon href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></SocialIcon>
              <SocialIcon href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></SocialIcon>
              <SocialIcon href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></SocialIcon>
              <SocialIcon href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></SocialIcon>
              <SocialIcon href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></SocialIcon>
            </SocialRow>
          </Card>
          <Card>
            <Avatar>👤</Avatar>
            <Name>Pietri Makkonen</Name>
            <Role>CTO</Role>
            <SocialRow>
              <SocialIcon href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></SocialIcon>
              <SocialIcon href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon /></SocialIcon>
              <SocialIcon href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></SocialIcon>
              <SocialIcon href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></SocialIcon>
              <SocialIcon href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></SocialIcon>
            </SocialRow>
          </Card>
        </CardRow>
      </Container>
    </Section>
  );
}
