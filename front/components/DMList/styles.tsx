import styled from '@emotion/styled';

// 한번 클릭하면 접었다 폈다 하는 버튼.
export const CollapseButton = styled.button<{ collapse: boolean }>`
  background: transparent;
  border: none;
  width: 26px;
  height: 26px;
  
  color: white;
  margin-left: 10px;
  cursor: pointer;

  ${({ collapse }) =>
    collapse &&
    `
    & i {
      transform: none;
    }
  `};
`;

export const DMName = styled.span`
  color: white;
  font-family: 'Pretendard-Regular';
  margin-left: 30px;
`