import { getUserProfile } from "../api/auth";
const token = localStorage.getItem("token");
const Profile = () => {
  const a = async () => {
    const userProfile = await getUserProfile(token);
    console.log(userProfile);
  };
  a();
  return <div>내정보</div>;
};

export default Profile;
