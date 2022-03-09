import styled from 'styled-components';

export const Container = styled.div`
  #more-arrows {
    width: 75px;
    height: 65px;

    &:hover {
      cursor: pointer;
      polygon {
        fill: #fff;
        transition: all 0.2s ease-out;

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
    fill: #fff;
    transition: all 0.2s ease-out;

    &.arrow-middle {
      opacity: 0.75;
    }

    &.arrow-top {
      opacity: 0.5;
    }
  }
`;
