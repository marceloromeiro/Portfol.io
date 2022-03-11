import styled from 'styled-components';

export const Container = styled.div`
 margin:0px;
  text-align:center;
  color:#fff;
  font-family:'Roboto';
  font-size:36px;
  font-weight:100;
  overflow:hidden;

.dropping-texts {
  display: inline-block;
  width: 180px;
  text-align: left;
  height: 36px;
  vertical-align: -2px;
}

.dropping-texts > div {
  background-color: var(--white);
  color: var(--gray-900);
  padding: 0.5rem;
  border-radius: 1rem;
  font-size:0px;
  opacity:0;
  position:absolute;
  font-weight:300;   
  box-shadow: 0px 60px 25px -20px rgba(0,0,0,0.5);
}

.dropping-texts > div:nth-child(${(props) => props.divList}) {
  animation: roll 5s  infinite 2s;
}

@keyframes roll {
  0% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
  }
  3% {
    opacity:1;
  }
  5% {
    font-size:inherit;
    opacity:1;
    margin-left:0px;
    margin-top:0px;
  }
  20% {
    font-size:inherit;
    opacity:1;
    margin-left:0px;
    margin-top:0px;
  }
  27% {
    font-size:0px;
    opacity:0;
    margin-right:20px;
    margin-top:100px;
  }
  100% {
    font-size:0px;
    opacity:0;
    margin-left:30px;
  }
}




`;
