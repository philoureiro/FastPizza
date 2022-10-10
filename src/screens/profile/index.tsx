import CreateAccount from "../../components/LoginComponnets/createAccount";
import FooterComponent from "../../components/LoginComponnets/footer";
import FormsComponent from "../../components/LoginComponnets/forms";
import Logo from "../../components/LoginComponnets/logo";
import Seperator from "../../components/LoginComponnets/seperator";
import TopBar from "../../components/LoginComponnets/topBar";

const Profile = () => {
  return (
    <>
      <TopBar />
      <Logo />
      <FormsComponent />
      <Seperator />
      <CreateAccount />
      <FooterComponent />
    </>
  );
};

export default Profile;
