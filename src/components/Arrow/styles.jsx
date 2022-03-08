import styled from 'styled-components';

export const Container = styled.div`
  #more-arrows {
width: 75px;
  height: 65px;
  
  &:hover {
    
    polygon {
      fill: #FFF;
      transition: all .2s ease-out;

      &.arrow-bottom {
        transform: translateY(-18px);
      }

      &.arrow-top {
        transform: translateY(18px);
      }
      
    }
  
  }
  
}

polygon {
  fill: #FFF;
  transition: all .2s ease-out;
    
  &.arrow-middle {
  opacity: 0.75;
}

&.arrow-top {
  opacity: 0.5
}
 
}
`;
