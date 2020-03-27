import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
}

const MainPageHeader = styled('h1')`
  font-size: 30px;
`;

export default function MainHeader({ children }: Props): ReactElement {
  return (
    <MainPageHeader>
      {children}
    </MainPageHeader>
  )
}
