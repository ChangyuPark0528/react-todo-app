import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// 모든 http 요청을 하나의 함수를 사용하여 처리할 수 있게 하는 로직.
const HttpService = async (url, options) => {
  const redirection = useNavigate();
  const { onLogout } = useContext();

  const res = await fetch(url, options);

  if (res.status === 401) {
    // 토큰 만료 처리
    const data = await res.json();
    console.log('401 토큰 만료!', data);
    onLogout();
    alert('토큰이 만료 되었습니다. 다시 로그인 해 주세요.');
    redirection('/login');
    return;
  }

  return res;
};

export default HttpService;