import { useContext } from "react";
import FullDataContext from "../../../Hooks/FullDataContext";
import Courses from "../../widgets/Courses";
import CoursesHeader from "../../widgets/CoursesHeader/CoursesHeader";
import PageHeader from "../../widgets/PageHeader";
import TopCategories from "../../widgets/TopCategories";
import { Main } from "./styled";
import Spinner from "../../atoms/Spinner";

const Home = () => {
  const fullData = useContext(FullDataContext);
  return (
    <Main>
      <PageHeader />
      <CoursesHeader />
      {fullData.loading ? <Spinner /> : <Courses />}
      {fullData.loading ? <Spinner /> : <TopCategories />}
    </Main>
  );
};

export default Home;
