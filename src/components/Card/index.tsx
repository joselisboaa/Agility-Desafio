import Image from "next/image";

interface ICard {
  icon: string;
  title: string;
  status: string;
  countStatus: string;
  statusNumber: string;
  statusIcon: string;
}

export const Card: React.FC<ICard> = ({ icon, title, status, countStatus, statusNumber, statusIcon }) => {
  return (
    <div className="h-fit w-full max-w-[18.75rem] bg-white p-4 lg:p-5 xl:p-6 2xl:p-8">
      <div className="flex items-center justify-between gap-2 lg:gap-2 xl:gap-8 2xl:gap-[45px]">
        <div className="flex flex-col">
          <Image src={icon} alt="ícone da funcionalidade" />
          <h4 className="text-lg">{title}</h4>
          <p className="text-sm text-tertiary-dark">
            {status}
            <span className="text-brand-green">
              {statusNumber}
              <Image className="inline" src={statusIcon} alt="ícone do status" />
            </span>
          </p>
        </div>
        <div>
          <span className="text-[2rem] font-bold text-secondary-dark">{countStatus}</span>
        </div>
      </div>
    </div>
  );
};
