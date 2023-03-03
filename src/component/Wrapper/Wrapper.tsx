import { FC } from "react";
import s from "./Wrapper.module.scss";

interface Props {
  children: any;
}

const Wrapper: FC<Props> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
export default Wrapper;
