import styled from '@emotion/styled';

export const Header = styled.header`
  font-family: 'Vitro_core';
  text-align: center;
  font-size: 35px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;

export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    font-family: 'Pretendard-Regular';
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
    padding:40px 0px 5px 0px; 
  }
`;

export const Input = styled.input`
background:transparent; 
border:none; 
border-bottom: 2px solid black;

font-size:15pt; 
width:400px;

:focus {
    outline: none;
}
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  color: white;
  font-family: 'Pretendard-Regular';
  background: #2f3136;
  border: none;
  cursor: pointer;
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 15px 0 15px 0;
  font-weight: bold;
  font-family: 'Pretendard-Regular';
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: black;
  margin: 15px auto 8px;
  max-width: 400px;

  &a {
    color: #1264a3;
    text-decoration: none;
  }
`;
