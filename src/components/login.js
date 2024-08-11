import React from "react";
import styled from 'styled-components';
import KakaoLoginImage from '../images/kakaologin.png';  // 경로 수정

const Login = () => {
    const Rest_api_key = process.env.REACT_APP_KAKAO_APP_KEY; // .env 파일에 저장된 REST API KEY 사용
    const redirect_uri = 'http://localhost:3000/auth/kakao/callback'; // Redirect URI

    // OAuth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <LoginContainer>
            <KaKaoButtonWrapper>
                <KakaoButton onClick={handleLogin}>
                    <KakaoImage src={KakaoLoginImage} alt="kakao login" />
                </KakaoButton>
            </KaKaoButtonWrapper>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const KaKaoButtonWrapper = styled.div`
  cursor: pointer;
`;

const KakaoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const KakaoImage = styled.img`
  width: 180px;
  height: auto;
`;
