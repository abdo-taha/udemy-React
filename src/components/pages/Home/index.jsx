import Courses from "../../widgets/Courses";
import CoursesHeader from "../../widgets/CoursesHeader/CoursesHeader";
import PageHeader from "../../widgets/PageHeader";
import { Main } from "./styled";

const Home = () => {
  return (
    <Main>
      <PageHeader />
      <CoursesHeader />
      <Courses />
      {/* TODO categories */}
    </Main>
  );
};

export default Home;
