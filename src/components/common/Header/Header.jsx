import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../assets/icons/icon-search.png';
import { ArrowLeft, MSBtn, MoreIconButton } from '../button/Button';
import Input from '../Input/Input';

export function HeaderBasicNav() {
  return (
    <HeaderBasicNavStyle>
      <ArrowLeft />
      <MoreIconButton />
    </HeaderBasicNavStyle>
  );
}

export function HeaderSearchNav() {
  return (
    <HeaderSearchNavStyle>
      <ArrowLeft />
      <Input />
    </HeaderSearchNavStyle>
  );
}

export function HeaderMainNav() {
  return (
    <HeaderMainNavStyle>
      <h1>니고네고 피드</h1>
      <button type="button">
        <img src={searchIcon} alt="" />
      </button>
    </HeaderMainNavStyle>
  );
}

export function HeaderUploadNav() {
  return (
    <HeaderUploadNavStyle>
      <ArrowLeft />
      <MSBtn />
    </HeaderUploadNavStyle>
  );
}

export function HeaderChatNav() {
  return (
    <HeaderChatNavStyle>
      <ArrowLeft />
      <MoreIconButton />
    </HeaderChatNavStyle>
  );
}

// 상단바 기본 style
const HeaderDefaultStyle = styled.div`
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  height: 4.8rem;
  border-bottom: 1px solid var(--basic-border-color);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBasicNavStyle = styled(HeaderDefaultStyle)``;

const HeaderSearchNavStyle = styled(HeaderDefaultStyle)``;

const HeaderMainNavStyle = styled(HeaderDefaultStyle)`
  h1 {
    font-size: 1.8rem;
  }
`;

const HeaderUploadNavStyle = styled(HeaderDefaultStyle)``;

const HeaderChatNavStyle = styled(HeaderDefaultStyle)``;
