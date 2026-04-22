import type { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    num: number
}

const Circle = ({num}: Props) => {
  return (
    <div className="circle">{num}</div>
  );
};

export default Circle;