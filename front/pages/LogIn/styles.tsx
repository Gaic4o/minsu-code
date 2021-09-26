import styled from '@emotion/styled';



export const Box = styled.section`
  display:flex;
  margin: 100px auto;
  width: 1300px;
  height: 700px;
  background: #000000;
`

export const Right = styled.div`
    flex: 1;
    background: #f7f7f7;
    padding-left: 100px;
`

export const Left = styled.div`
    flex: 1.5;
    background: blue;
`

export const Title = styled.div`
    margin-top: 70px;

    &>h3 {
        font-family: 'Vitro_core';
        font-size: 30px;
    }
    &>h1 {
    color: #000000;
    font-size: 40px;
    font-family: 'Pretendard-Regular';
    }
`

export const Label = styled.div`
 


   
`

export const Inputbox = styled.div`
    padding-bottom: 50px;
`

export const SignForm = styled.div`

`

export const SignButton = styled.div`

`

export const InputLogin = styled.input`
background:transparent; 
border:none; 
border-bottom: 2px solid black;
padding:20px 0px 5px 0px; 
font-size:15pt; 
width:300px;

:focus {
    outline: none;
}
`

export const Button = styled.button`
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
    width: 35px;
    height: 30px;
    margin-left: 264px;
    margin-bottom: 60px;
`

export const Form = styled.form`

`


export const LoginForm = styled.div`

`

export const Error = styled.div`
    color: black;
    width: 300px;
`


export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;

  width: 400px;
  max-width: 400px;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Img = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`