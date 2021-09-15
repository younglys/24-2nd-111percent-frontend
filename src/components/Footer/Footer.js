import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <SiteContainer>
            <FooterList>
              <Site>
                <SiteLink href="#">이용안내</SiteLink>
              </Site>
              <Site>
                <SiteLink href="#">인재채용</SiteLink>
              </Site>
              <Site>
                <SiteLink href="#">기술블로그</SiteLink>
              </Site>
            </FooterList>
            <FooterList>
              <Site>
                <SiteLink href="#">윤리강령</SiteLink>
              </Site>
              <Site>
                <SiteLink href="#">이용약관</SiteLink>
              </Site>
              <Site>
                <SiteLink href="#">
                  <PrivacyPolicy>개인정보 처리 방침</PrivacyPolicy>
                </SiteLink>
              </Site>
            </FooterList>
            <FooterList>
              <Site>
                <SiteLink href="#">전자금융거래 약관</SiteLink>
              </Site>
            </FooterList>
          </SiteContainer>

          <ContactContainer>
            <FooterList>
              <ContactTerm>고객센터</ContactTerm>
              <ContactDesc>평일 10시 ~ 18시 (점심 12시 ~ 13시)</ContactDesc>
            </FooterList>
            <FooterList>
              <Contact>
                <ContactTerm>전화</ContactTerm>
                <ContactDesc>02-2055-1188</ContactDesc>
              </Contact>
              <Contact>
                <ContactTerm>팩스</ContactTerm>
                <ContactDesc>02-6442-2288</ContactDesc>
              </Contact>
            </FooterList>
            <FooterList>
              <Contact>
                <ContactTerm>대표메일</ContactTerm>
                <ContactDesc>
                  <ContactLink href="#">ask@8percent.kr</ContactLink>
                </ContactDesc>
              </Contact>
              <Contact>
                <ContactTerm>사업제휴</ContactTerm>
                <ContactDesc>
                  <ContactLink href="#">partner@8percent.kr</ContactLink>
                </ContactDesc>
              </Contact>
            </FooterList>
          </ContactContainer>

          <SocialList>
            <Link to="#">
              <Logo alt="facebook" src="/image/facebook-logo.png" />
            </Link>
            <Link to="#">
              <Logo alt="naverBlog" src="/image/naverblog-logo.png" />
            </Link>
            <Link to="#">
              <Logo alt="brunch" src="/image/brunch-logo.png" />
            </Link>
            <Link to="#">
              <Logo alt="naverPost" src="/image/naverpost-logo.png" />
            </Link>
          </SocialList>
        </Content>

        <CompanyInfo>
          <CompanyName>(주)에잇퍼센트 | 대표 이효진</CompanyName>
          법인등록번호 110111-5562601 | 온라인투자연계금융업 2021-금융위원회-2 |
          서울특별시 영등포구 의사당대로 83 오투타워 16층, 19층
        </CompanyInfo>

        <Precautions>
          대출금리: 연 20% 이내 대출 실행시 플랫폼수수료 및 기타 부대비용이
          발생할 수 있습니다. 중도상환은 전액상환만 가능하며 계약조건에 따라
          중도상환금액의 최대 2.0% 이내의 수수료가 부과되거나 면제될 수
          있습니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시
          귀하의 개인신용평점이 하락할 수 있습니다. 에잇퍼센트는 투자상품에 대한
          충분한 정보를 제공할 의무가 있으며, 에잇퍼센트가 제공하는 정보를
          확인한 후 투자하시기 바랍니다. 에잇퍼센트는 투자원금과 수익을 보장하지
          않으며, 투자손실에 대한 책임은 모두 투자자에게 있습니다. 투자
          플랫폼이용료는 최대 연1.2% 입니다.
        </Precautions>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #242424;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 50px 20px;
  max-width: 1120px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FooterList = styled.ul`
  display: flex;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Site = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const SiteLink = styled.a`
  font-size: ${props => props.theme.smallFont};
  color: #b2b2b2;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const PrivacyPolicy = styled(SiteLink.withComponent('span'))`
  font-weight: 700;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Contact = styled.span`
  display: flex;
  margin-right: 5px;
`;

const ContactTerm = styled.span`
  margin-right: 5px;
  color: #8a8a8a;
  font-size: ${props => props.theme.smallFont};
`;

const ContactLink = styled.a`
  color: #606060;
  font-size: ${props => props.theme.smallFont};
`;

const ContactDesc = styled(ContactLink.withComponent('span'))`
  &:after {
    content: ' | ';
    color: ${props => props.theme.gray};
  }
`;

const SocialList = styled.div`
  height: 100px;
`;

const Logo = styled.img`
  max-width: 30px;
  width: 20%;
  margin: 3px;
  border-radius: 50%;
  background-color: white;
`;

const CompanyInfo = styled.div`
  color: #606060;
  font-size: 1.2rem;
  border-top: 1px solid lightGray;
  padding: 30px 0;
`;

const CompanyName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: 20px;
`;

const Precautions = styled.div`
  color: #b2b2b2;
  font-size: 1.8rem;
  line-height: 26px;
`;

export default Footer;
