import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  text: string
}

const MainPageHeader = styled('h1')`
  font-size: 30px;
`;

export default function MainHeader({ text }: Props): ReactElement {
  return (
    <MainPageHeader>
      {text}
    </MainPageHeader>
  )
}
