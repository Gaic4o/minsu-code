import React, { useState, useCallback } from 'react';
import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from '@pages/SignUp/styles';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Redirect } from 'react-router';

const SignUp = () => {
  const { data, error, revalidate} = useSWR('/api/users', fetcher); 
  
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!nickname || !nickname.trim()) {
        return;
      }

        if (!mismatchError && nickname) {
            console.log('서버로 회원가입하기');
            setSignUpError(false);
            setSignUpSuccess(false); // 요청 직전에 초기화 해주기.  요청 연달아 날릴 떄 2번쨰 요청에도 똑같이 표시될 .,.
            axios.post('/api/users', {
                email, nickname, password,
            })
            .then((response) => {
                console.log(response);
                setSignUpSuccess(true);
            })
            .catch((error) => {
                console.log(error.response)
                setSignUpError(error.response.data)
            })
            .finally(() => {

            })
        }
    }, [email, nickname, password, passwordCheck, mismatchError],)

    if (data === undefined) {
      return <div>로딩 중...</div>;
    }

    if (data) {
      return <Redirect to="/workspace/sleact/channel/일반" />;
    }

    
    return (
        <div id="container">
        <Header>민수 코드</Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <span>이메일 주소</span>
            <div>
              <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
            </div>
          </Label>
          <Label id="nickname-label">
            <span>닉네임</span>
            <div>
              <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
            </div>
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
            </div>
          </Label>
          <Label id="password-check-label">
            <span>비밀번호 확인</span>
            <div>
              <Input
                type="password"
                id="password-check"
                name="password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
            </div>
          </Label>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>이미 가입된 이메일입니다.</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
          <Button type="submit">회원가입</Button>
        </Form>
        
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <a href="/login">로그인 하러가기</a>
        </LinkContainer>
      </div>
    )
}

export default SignUp;