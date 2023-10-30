import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <h1>여기는 Setting 페이지 입니다.</h1>
      <p>설정을 변경할 수 있습니다.</p>
      <Link to="/">Home으로 이동</Link>
    </>
  );
};

export default Setting;
