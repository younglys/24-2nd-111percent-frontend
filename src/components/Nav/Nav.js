import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

function Nav() {
  const history = useHistory();
  const location = useLocation();
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogin(false);
    history.push('/');
    alert('로그아웃되었습니다.');
  };

  return (
    <NavBar>
      <Container>
        <Link to="/">
          <CompanyLogo alt="111percent" src="/image/111percent-logo.png" />
        </Link>

        <Wrapper>
          <NavMenuContainer>
            <NavMenu>
              <MenuLink href="#">부동산 투자하기</MenuLink>
            </NavMenu>
            <NavMenu>
              <MenuLink href="#">대출하기</MenuLink>
            </NavMenu>
            <NavMenu>
              <MenuLink href="#">개인신용</MenuLink>
            </NavMenu>
          </NavMenuContainer>

          <BoardBtnContainer>
            <BoardContainer>
              <BoardLink href="#">
                <Notice>
                  공지사항<Notification>N</Notification>
                </Notice>
              </BoardLink>
              <BoardLink href="#">사업공시</BoardLink>
            </BoardContainer>
            {isLogin ? (
              <NavBtnContainer>
                <UserWrapper onClick={() => history.push('/myInfo')}>
                  <UserIcon />
                  <UserName>투자현황</UserName>
                </UserWrapper>
                <Button onClick={handleLogout}>로그아웃</Button>
              </NavBtnContainer>
            ) : (
              <NavBtnContainer>
                <Button onClick={() => history.push('/logIn')}>로그인</Button>
                <Button onClick={() => history.push('/signUp')}>
                  회원가입
                </Button>
              </NavBtnContainer>
            )}
          </BoardBtnContainer>
        </Wrapper>
      </Container>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 10;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

const CompanyLogo = styled.img`
  height: 40px;
`;

const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  width: 100%;
`;

const NavMenuContainer = styled.ul`
  display: inline-block;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.li`
  display: inline-block;
  height: 100%;
  margin: 0 1rem;
  line-height: 3;
`;

const MenuLink = styled.a`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.smallFont};

  &:hover {
    color: ${props => props.theme.purple};
    font-weight: 700;
  }
`;

const BoardBtnContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BoardContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BoardLink = styled.a`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.smallFont};
  margin-right: 1.5rem;
  letter-spacing: -0.05rem;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const UserIcon = styled(FaUser)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.purple};
`;

const UserName = styled.a`
  font-size: ${props => props.theme.smallFont};
  color: ${props => props.theme.black};
  margin-left: 0.5rem;

  &:hover {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const Notice = styled(BoardLink.withComponent('span'))`
  position: relative;
`;

const Notification = styled.span`
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  color: white;
  font-size: 10px;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  top: 0;
  right: -15px;
`;

const NavBtnContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${props => props.theme.purple};
  color: #fff;
  padding: 0.8rem 1rem;
  margin-left: 1rem;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  font-size: ${props => props.theme.smallFont};
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: ${props => props.theme.purple};
  }
`;
