import styled from '@emotion/styled';

export const ChatZone = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #DCDDDE;
`;

export const StickyHeader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  position: sticky;
  top: 14px;

  & button {
    font-weight: bold;
    font-size: 14px;
    line-height: 27px;
    border-radius: 24px;
    position: relative;
    top: -13px;
    border: none;
    outline: none;
  }
`;
