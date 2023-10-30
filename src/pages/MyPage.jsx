import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <h1>여기는 마이페이지입니다.</h1>
      <p>나의 정보를 수정할 수 있습니다.</p>
      <Link to="/">Home으로 이동</Link>
    </>
  );
};

export default MyPage;
