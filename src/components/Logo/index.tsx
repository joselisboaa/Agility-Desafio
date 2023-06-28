import classNames from "classnames";

interface ILogoProps {
  styles?: string;
}

export const Logo: React.FC<ILogoProps> = ({ styles }) => {
  return (
    <h1 className={classNames("text-primary-dark font-bold text-[2rem]", styles)}>
      Client
      <span className="text-primary">System</span>
    </h1>
  )
}