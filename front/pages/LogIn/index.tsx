import useInput from "@hooks/useInput";
import { Box,LinkContainer,  Left, Right, SignButton, SignForm, Title, Button, Form, Label, LoginForm, InputLogin, Error, Inputbox, Img} from "@pages/LogIn/styles";
import SignUp from "@pages/SignUp";


import fetcher from "@utils/fetcher"
import axios from "axios";
import React from "react";
import { useCallback, useState } from "react";
import { Redirect } from "react-router";
import useSWR from "swr"

const LogIn = () => {
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher, {
    dedupingInterval: 1000000,
  });
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setLogInError(false);
    axios 
      .post(
        '/api/users/login',
        {email, password}, 
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        console.log(email, password);
        revalidate();
      })
      .catch((error) => {
        setLogInError(error.response?.data?.statusCode === 401);
      });
    },  
    [email, password],
  );

  
  if (data === undefined) {
    return <div>로딩 중 입니다!!!</div>
  }


  if (data) {
    return <Redirect to="/workspace/MinsuCode/channel/일반"/>
  }


  return (
  
      <Box>
          <Right>
            <Title>
              <h3>민수 코드</h3>
              <h1>로그인</h1>
            </Title>

            <LoginForm>
              <Form onSubmit={onSubmit}>
                <Label id="email">
                  <Inputbox>
                    <InputLogin placeholder="Email"  type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
                  </Inputbox>
                </Label>
              
                <Label id="password">
                  <Inputbox>
                    <InputLogin placeholder="Password" type="password" id="password" name="password" value={password} onChange={onChangePassword} />
                  </Inputbox>
                </Label>
                
            <Button type="submit">&gt;</Button>
              </Form>
            </LoginForm>
            {logInError && <Error>이메일과 비밀번호가 맞지 않습니다, 다시 입력해주세요!</Error>}


            <LinkContainer>
            아직 회원이 아니신가요?&nbsp;
            <a href="/signup">회원가입 하러가기</a>
            </LinkContainer>
          </Right>



          <Left>
            <Img src="../images/minsucode.png" />
          </Left>
      </Box>

  )
} 

export default LogIn;