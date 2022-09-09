import { Progress, Outer } from "./styled";
const Bar = ({ percent }) => {
  return (
    <Outer>
      <Progress percent={percent} />
    </Outer>
  );
};

export default Bar;
