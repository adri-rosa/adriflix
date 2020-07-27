import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid #643173;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  a {
    color:#643173
  } 
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
