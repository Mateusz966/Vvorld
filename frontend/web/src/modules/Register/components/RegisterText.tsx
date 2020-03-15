import React from 'react';
import styled from 'styled-components';


const MainText = styled('h3')`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const RegisterText: React.FC = () => {
  return (
    <React.Fragment>
      <MainText>
        Sign up on vWorld
      </MainText>
      <p>
        Create free account and enter to better <span>V</span>orld
      </p>
    </React.Fragment>
  );
};

export default RegisterText;
