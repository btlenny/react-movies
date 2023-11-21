import './ActorCard.css';

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  export default function ActorCard({ actor }) {
    const randomImageId = getRandomNumber(1, 1000);
  
    return (
        <div className="item-card" style={{ backgroundImage: `url(https://picsum.photos/id/${randomImageId}/200/300)` }}>
        <div className="title">
          <h1>{actor}</h1>
        </div>
      </div>
    );
  }
  