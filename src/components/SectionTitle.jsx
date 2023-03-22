import React from 'react'
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
text-align:center;
h2{
    font-family : 'Montserrat Bold';
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-size: 6rem;
} 
@media only screen and (max-width: 768px){
    h2{
        font-size: 3.6rem;
    }
}

`;

function SectionTitle({
    heading = 'This is heading'
}) {
  return (
    <SectionTitleStyle>
          <h2>{ heading }</h2>
    </SectionTitleStyle>
  )
}

export default SectionTitle
