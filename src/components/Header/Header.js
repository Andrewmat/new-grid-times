import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { FAMILIES, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ContentAreaWrapper>
          <ContentArea>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ContentArea>
        </ContentAreaWrapper>
        <Logo />
        <UserAreaWrapper>
          <UserArea>
            <SubscribeButton>Subscribe</SubscribeButton>
            <LoginLink href="#">Already a subscriber?</LoginLink>
          </UserArea>
        </UserAreaWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const ContentAreaWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
`;

const UserAreaWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-self: end;
`;

const ContentArea = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 20px;
  }
`;

const UserArea = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const SubscribeButton = styled(Button)``;

const LoginLink = styled.a`
  color: var(--gray-900);
  font-family: ${FAMILIES.serif};
  font-size: ${14 / 16}rem;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  text-decoration: underline;
`;

export default Header;
