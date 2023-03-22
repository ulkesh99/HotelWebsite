import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
    max-width:500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3rem;
    color: white;
    @media only screen and (max-width: 768px){
        font-size: 1.4rem;
    }
`;

function Ptext({children}) {
  return (
    <PStyle>
          <p>{children}</p>
    </PStyle>
  )
}

export default Ptext
