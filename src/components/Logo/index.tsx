import classNames from "classnames";

interface ILogoProps {
  styles?: string;
}

export const Logo: React.FC<ILogoProps> = ({ styles }) => {
  return (
    <h1 className={classNames("text-[1rem] font-bold text-primary-dark md:text-[2rem]", styles)}>
      Client
      <span className="text-primary">System</span>
    </h1>
  );
};
