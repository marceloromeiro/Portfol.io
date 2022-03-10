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
  margin-left:-30px;
  position:absolute;
  font-weight:300;   
  box-shadow: 0px 60px 25px -20px rgba(0,0,0,0.5);
}

.dropping-texts > div:nth-child(1) {
  animation: roll 5s  infinite 2s;
}
.dropping-texts > div:nth-child(2) {
  animation: roll 5s  infinite 6s;
}
.dropping-texts > div:nth-child(3) {
  animation: roll 5s  infinite 10s;
}
.dropping-texts > div:nth-child(4) {
  animation: roll 5s  infinite 14s;
}
.dropping-texts > div:nth-child(5) {
  animation: roll 5s  infinite 18s;
}

@keyframes roll {
  0% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
    transform: rotate(-25deg);
  }
  3% {
    opacity:1;
    transform: rotate(0deg);
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
    transform: rotate(0deg);
  }
  27% {
    font-size:0px;
    opacity:0.5;
    margin-left:20px;
    margin-top:100px;
  }
  100% {
    font-size:0px;
    opacity:0;
    margin-left:-30px;
    margin-top:0px;
    transform: rotate(15deg);
  }
}




`;
