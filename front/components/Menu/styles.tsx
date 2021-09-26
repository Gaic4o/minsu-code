import styled from '@emotion/styled';

export const CreateMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
 
  & > div {
    position: absolute;
    background: white;
    border-radius: 6px;
    min-width: 200px;
    max-height: calc(100vh - 20px);
    color: rgb(29, 28, 29);
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  background: transparent;
  border: none;

  cursor: pointer;
`;
