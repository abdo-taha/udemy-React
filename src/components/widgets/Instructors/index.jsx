import { useContext } from "react";
import DataContext from "../../../Hooks/SinglePageContext";
import Instructor from "./instructor";
import { H2 } from "./styled";

const Instructors = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <H2>Instructors</H2>
      {data.authorDetails.map((element, i) => (
        <Instructor key={i} data={element} />
      ))}
    </div>
  );
};

export default Instructors;
