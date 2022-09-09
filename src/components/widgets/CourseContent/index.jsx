import { WideButton } from "../../atoms/Buttons";
import { CourseAccordions } from "../CourseContentWidgets";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";

const CourseContent = () => {
  const [visibleData, setVisibleData] = useState({ loaded: false });
  const data = useContext(DataContext);
  useEffect(() => {
    setVisibleData({
      loaded: true,
      ...data.content,
      sections: data.content.sections.slice(0, 10),
      hidden: data.content.sections.length - 10,
    });
  }, []);

  const showMore = () => {
    setVisibleData((old) => {
      return { ...old, sections: data.content.sections, hidden: 0 };
    });
  };

  return (
    <div style={{ marginBottom: "1.6rem" }}>
      {visibleData.loaded ? <CourseAccordions data={visibleData} /> : <></>}
      {visibleData.hidden > 0 ? (
        <WideButton onClick={showMore}>
          {" "}
          {visibleData.hidden} more sections
        </WideButton>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CourseContent;
