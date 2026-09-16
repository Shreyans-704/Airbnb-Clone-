import { bedroomImage, livingRoomImage } from '../../data/gallery';
import { property } from '../../data/property';
import './SleepingArrangements.css';

export default function SleepingArrangements() {
  return (
    <section className="sleeping" aria-labelledby="sleeping-heading">
      <h2 className="sleeping-heading" id="sleeping-heading">Where you&apos;ll sleep</h2>
      <div className="sleeping-cards">
        {property.sleepingArrangements.map((room, index) => (
          <div className="sleeping-card" key={index}>
            <div className="sleeping-image">
              <img
                src={index === 0 ? bedroomImage : livingRoomImage}
                alt={room.title}
                loading="lazy"
              />
            </div>
            <h3 className="sleeping-room-title">{room.title}</h3>
            <p className="sleeping-room-detail">{room.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
