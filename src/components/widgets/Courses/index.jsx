import React, { useEffect } from "react";
import CoursesContent from "../CoursesContent";
import CourseItem from "../CourseItem";
import { useState, useRef } from "react";
import { CourseCategoryButton } from "../../atoms/Buttons";
import { useSearchParams } from "react-router-dom";
import { Section, Div } from "./styled";

const Courses = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [category, setCategory] = useState("python");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      let _data = await fetch(
        `http://localhost:3004/courses?name=${category}`
      ).then((x) => x.json());
      setData(_data[0]);
    };
    getData();
  }, [category]);

  useEffect(() => {
    if (data)
      setFilteredData(
        data.courses.filter((course) =>
          course.title
            .toLowerCase()
            .includes(searchParams.get("search") ?? "".toLowerCase())
        )
      );
  }, [data, searchParams]);

  const buttonsData = useRef([
    { id: "btn-python", title: "Python", category: "python" },
    { id: "btn-excel", title: "Excel", category: "excel" },
    { id: "btn-web", title: "Web Development", category: "web" },
    { id: "btn-java", title: "Javascript", category: "js" },
    { id: "btn-data", title: "Data Science", category: "data" },
    { id: "btn-aws", title: "AWS Certification", category: "aws" },
    { id: "btn-drawing", title: "Drawing", category: "draw" },
  ]);

  return (
    <Section>
      <Div>
        {buttonsData.current.map((btn) => (
          <CourseCategoryButton
            key={btn.id}
            id={btn.id}
            title={btn.title}
            active={btn.category === category ? "active" : null}
            onClick={() => setCategory(btn.category)}
          />
        ))}
      </Div>
      {
        // TODO carousel
        filteredData ? (
          <CoursesContent
            header={data.header}
            description={data.description}
            category={data.category}
          >
            {filteredData.map((course) => (
              <CourseItem course={course} key={course.id} />
            ))}
          </CoursesContent>
        ) : (
          <></>
        )
      }
    </Section>
  );
};

export default Courses;
