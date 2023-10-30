import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌2464",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스크링부트를 좋아하는 개발자",
  },
  database: {
    name: "천재DBA",
    description: "Database를 좋아하는 개발자",
  },
};

const Profile = () => {
  // 리액트 라우터에서 URL 파라미터 값을 가져오기 위한 Hook
  const params = useParams();
  // 호풀하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달
  console.log(params.username);
  const profile = data[params.username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </>
  );
};

export default Profile;
