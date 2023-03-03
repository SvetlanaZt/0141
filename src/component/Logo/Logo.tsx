import { useGetDataUserQuery } from "../../api/api";
import s from "./Logo.module.scss";
import Services from "../Services/Services";

const Logo = () => {
  const { data } = useGetDataUserQuery("");

  return (
    <div className={s.blockAvatar}>
      <img src={data?.avatar} alt={data?.name} className={s.avatar} />
      <div>
        <h2 className={s.name}>{data?.name}</h2>
        <p className={s.vacancy}>{data?.vacancy}</p>
        <p className={s.text}>
          I will find the best offers for you.My services are absolutely free.
        </p>
        <Services />
      </div>
    </div>
  );
};
export default Logo;
