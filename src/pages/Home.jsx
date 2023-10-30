import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기가 홈입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <br />
      <Link to="/mypage">마이 페이지로 이동</Link>
      <br />
      <Link to="/setting">설정 페이지로 이동</Link>
    </>
  );
};

export default Home;
