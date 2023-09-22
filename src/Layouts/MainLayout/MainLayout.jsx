import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

const MainLayout = () => {

  const navigation = useNavigation();

  return (
    <>
      <Header></Header>
      {
        navigation.state === "loading"
          ?
          <Loading></Loading>
          :
          <Outlet></Outlet>
      }
      <Footer></Footer>
    </>
  )
}

export default MainLayout;
