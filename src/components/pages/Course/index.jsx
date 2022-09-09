import CourseContent from "../../widgets/CourseContent";
import CourseInfSection from "../../widgets/CourseInfSection";
import Description from "../../widgets/Description";
import Instructors from "../../widgets/Instructors";
import Requirements from "../../widgets/Requirements";
import Reviews from "../../widgets/Reviews";
import SideBar from "../../widgets/sideBar";
import SliderMenu from "../../widgets/sliderMenu";
import WhatYouWillLearn from "../../widgets/WhatYouWillLearn";
import { DivIn, DivOut, SpinnerDiv } from "./styled";
import DataContext from "../../../Hooks/SinglePageContext";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FullDataContext from "../../../Hooks/FullDataContext";
import Spinner from "../../atoms/Spinner";

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();
  const Params = useParams();
  const id = Params.id;

  const fullData = useContext(FullDataContext);
  useEffect(() => {
    if (!fullData.loading) {
      const data = fullData.coursesDetails[id];
      if (!data) navigate("/404", { replace: true });
      setCourseData(data);
    }
  }, [fullData]);

  return courseData ? (
    <main style={{ position: "relative" }}>
      <DataContext.Provider value={courseData}>
        <SliderMenu />
        <CourseInfSection />
        <DivOut>
          <DivIn>
            <SideBar />
            <WhatYouWillLearn />
            <CourseContent />
            <Requirements />
            <Description />
            <Instructors />
            <Reviews />
          </DivIn>
        </DivOut>
      </DataContext.Provider>
    </main>
  ) : (
    <SpinnerDiv>
      <Spinner width={"50rem"} />
    </SpinnerDiv>
  );
};

export default Course;
