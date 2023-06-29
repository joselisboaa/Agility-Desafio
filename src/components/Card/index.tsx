interface ICard {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  status: string;
  countStatus: string;
  statusNumber: string;
  statusIcon: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ icon, title, status, countStatus, statusNumber, statusIcon }) => {
  return (
    <div className="h-fit w-[9.5rem] bg-white p-8">
      <div>
        <div>
          <div>{icon}</div>
          <h4>{title}</h4>
          <p>
            {status}
            <span>{statusNumber}</span>
            <span>{statusIcon}</span>
          </p>
        </div>
        <div>
          <span className="text-[2rem] font-bold">{countStatus}</span>
        </div>
      </div>
    </div>
  );
};
