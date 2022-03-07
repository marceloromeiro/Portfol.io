import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    width: 100%;
    
    border-bottom: 1px solid grey;

  > div {
      display: flex;
      a {
          display: flex;
          align-items: center;
          
          padding: 1rem;
          margin-left: 0.5rem;

          border: 1px solid;
          border-radius: 1rem;
        
          transition: filter 0.3s;
          &:hover {
              filter: brightness(0.6);
              &:nth-child(2){
                color: #2d69eb;
              }
              &:after{
                filter: brightness(1); 
              }
          }
      }
  }

  > ul:first-child {
    display: flex;
    list-style:none;
    
    li {

        box-shadow: 0px var(--white);
        border-radius: 0.3rem;
        padding: 0.3rem;
        transition: box-shadow 0.2s linear;
        margin: 0.5em;

            &:hover{
                box-shadow: 0.2rem 0.2rem 0 0 var(--white);
            }
        }
    }
`;
