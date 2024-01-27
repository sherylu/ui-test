import { Ruling } from "../Rulings";

type Props = {
  ruling: Ruling;
};

export const RulingLayout: React.FC<Props> = (props): JSX.Element => {
  const { ruling } = props;
  
  const imageUrl = `url(/img/${ruling.picture})`;
  return (
    <div className="card-container" style={{
        backgroundImage: imageUrl,
      }}>
      <div className="card-filler">
        <div className="card-row">
          <div >icon</div>
          <div className="card-content">
            <div className="card-info">
              <p className="card-name">{ruling.name}</p>
              <p className="card-description">{ruling.description}</p>
            </div>
            <div className="card-actions">
              <p className="card-duration">{ruling.lastUpdated}</p>
              <div className="vote-container">
                Vote buttons
              </div>
            </div>
          </div>
        </div>
        Progress bar
      </div>
    </div>
  );
};
