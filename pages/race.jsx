import React, { useState, useEffect, useRef } from 'react';
import carImage from '../components/images/car.png';
import carImage2 from '../components/images/car2.png';
import './RaceTrack.css';

const Race = () => {
  const [playerScore, setPlayerScore] = useState(2.5);
  const [playerTime, setPlayerTime] = useState(0);
  const [finishedCars, setFinishedCars] = useState(0);
  const [raceOutcome, setRaceOutcome] = useState(null);

  useEffect(() => {
    const calculatePlayerTime = () => {
      const time = playerScore;
      setPlayerTime(time);
    };

    calculatePlayerTime();
  }, [playerScore]);

  const handleFinish = (outcome) => {
    setFinishedCars((prevFinishedCars) => prevFinishedCars + 1);
    setRaceOutcome(outcome);
  };

  const resetRaceOutcome = () => {
    setRaceOutcome(null);
  };

  return (
    <div class="race-container">
      <RaceTrack playerTime={playerTime} onCarFinish={handleFinish} />
      {raceOutcome && (
        <RaceOutcomePopup outcome={raceOutcome} onReset={resetRaceOutcome} />
      )}
    </div>
  );
};

const RaceTrack = ({ playerTime, onCarFinish }) => {
  const [isRacing, setRacing] = useState(false);
  const [opponent1Time, setOpponent1Time] = useState(playerTime);
  const [opponent2Time, setOpponent2Time] = useState(playerTime);
  const videoRef = useRef(null);

  const startRace = (level) => {
    if (!isRacing) {
      setRacing(true);

      // Adjust opponent car animation durations based on the level
      const opponent1Duration = 5 / (level / 2);
      const opponent2Duration = 5 / (level / 2);

      setOpponent1Time(opponent1Duration);
      setOpponent2Time(opponent2Duration);

      const videoDuration = videoRef.current.duration;
      videoRef.current.play();
      videoRef.current.playbackRate = videoDuration / playerTime;

      setTimeout(() => {
        setRacing(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.playbackRate = 1;

        // Determine the race outcome (you can customize this logic)
        const outcome = playerTime < Math.min(opponent1Duration, opponent2Duration) ? 'won' : 'lost';

        // Notify that the car has finished with the outcome
        onCarFinish(outcome);
      }, playerTime * 1000);
    }
  };

  return (
    <div className="video-background">
      <video ref={videoRef} loop muted>
        <source src="../components/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={carImage}
        alt="Player's Car"
        className={`player-car ${isRacing ? 'racing' : ''}`}
        style={{ animationDuration: `${playerTime}s` }}
      />
      <img
        src={carImage2}
        alt="Opponent Car 1"
        className={`opponent-car1 ${isRacing ? 'racing' : ''}`}
        style={{ animationDuration: `${opponent1Time}s` }}
      />
      <img
        src={carImage2}
        alt="Opponent Car 2"
        className={`opponent-car2 ${isRacing ? 'racing' : ''}`}
        style={{ animationDuration: `${opponent2Time}s` }}
      />
      <div className="level-buttons">
        {[1, 2, 3, 4, 5, 6, 7].map((level) => (
          <button key={level} onClick={() => startRace(level)} disabled={isRacing}>
            Level {level}
          </button>
        ))}
      </div>
      <a className="menu-item" href="/home">
        Main Page
      </a>
    </div>
  );
};

const RaceOutcomePopup = ({ outcome, onReset }) => {
  return (
    <div className="popup">
      <p>{outcome === 'won' ? 'Congratulations! You won!' : 'Sorry, you lost.'}</p>
      <button onClick={onReset}>Dismiss</button>
    </div>
  );
};

export default Race;
