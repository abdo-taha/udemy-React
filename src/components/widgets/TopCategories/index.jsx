import { CatItem, Container, Outer, Title } from "./styled";
import { useContext, useEffect, useState } from "react";
import FullDataContext from "../../../Hooks/FullDataContext";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  const fullData = useContext(FullDataContext);
  // console.log(fullData);
  useEffect(() => {
    setCategories(fullData.categories);
  }, []);
  return (
    <Outer>
      <h2>Top categories</h2>
      <Container>
        {categories.map((category, i) => (
          <CatItem key={i}>
            <div>
              <img src={category.image} alt="" />
            </div>
            <Title>{category.title}</Title>
          </CatItem>
        ))}
      </Container>
    </Outer>
  );
};

export default TopCategories;
