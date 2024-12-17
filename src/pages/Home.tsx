import React, { useState } from 'react';
import '../PagesCss/Home.css';
import { activities } from '../activitiesData'; // Make sure this is imported

const Home: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [activityType, setActivityType] = useState<string>('');
  const [timeOfDay, setTimeOfDay] = useState<string>('');
  const [recommendation, setRecommendation] = useState<string>('');

  // Get a random activity from the provided list
  const getRandomActivity = (list: string[]): string => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const handleRecommendation = () => {
    // Fetch selected location activities
    const locationActivities = activities.location[location as keyof typeof activities.location];
    // Fetch selected type activities
    const typeActivities = activities.type[activityType as keyof typeof activities.type];

    // If any selection is missing
    if (!locationActivities || !typeActivities || !timeOfDay) {
      setRecommendation('Please select location, activity type, and time of day.');
      return;
    }

    // Combine the selected activities from both location and type
    const combinedActivities = [...locationActivities, ...typeActivities];

    // Pick a random activity from the combined list
    const randomActivity = getRandomActivity(combinedActivities);
    
    // Set the recommendation
    setRecommendation(`Suggested activity: ${randomActivity} in the ${timeOfDay}`);
  };

  return (
    <div className="container">
      {/* Location Preference */}
      <div className="section-title">Location Preference</div>
      <div className="radio-tile-group">
        <div className="input-container">
          <input
            id="indoor"
            className="radio-button"
            type="radio"
            name="location"
            onChange={() => setLocation('indoor')}
          />
          <div className="radio-tile">
            <div className="icon">🏠</div>
            <label className="radio-tile-label" htmlFor="indoor">
              Indoor
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            id="outdoor"
            className="radio-button"
            type="radio"
            name="location"
            onChange={() => setLocation('outdoor')}
          />
          <div className="radio-tile">
            <div className="icon">🌳</div>
            <label className="radio-tile-label" htmlFor="outdoor">
              Outdoor
            </label>
          </div>
        </div>
      </div>

      {/* Activity Type */}
      <div className="section-title">Activity Type</div>
      <div className="radio-tile-group">
        <div className="input-container">
          <input
            id="solo"
            className="radio-button"
            type="radio"
            name="activityType"
            onChange={() => setActivityType('solo')}
          />
          <div className="radio-tile">
            <div className="icon">🧘</div>
            <label className="radio-tile-label" htmlFor="solo">
              Solo
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            id="group"
            className="radio-button"
            type="radio"
            name="activityType"
            onChange={() => setActivityType('group')}
          />
          <div className="radio-tile">
            <div className="icon">👨‍👩‍👧‍👦</div>
            <label className="radio-tile-label" htmlFor="group">
              Group
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            id="fitness"
            className="radio-button"
            type="radio"
            name="activityType"
            onChange={() => setActivityType('fitness')}
          />
          <div className="radio-tile">
            <div className="icon">💪</div>
            <label className="radio-tile-label" htmlFor="fitness">
              Fitness
            </label>
          </div>
        </div>
      </div>

      {/* Time of Day */}
      <div className="section-title">Time of Day</div>
      <div className="radio-tile-group">
        <div className="input-container">
          <input
            id="morning"
            className="radio-button"
            type="radio"
            name="timeOfDay"
            onChange={() => setTimeOfDay('morning')}
          />
          <div className="radio-tile">
            <div className="icon">🌅</div>
            <label className="radio-tile-label" htmlFor="morning">
              Morning
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            id="afternoon"
            className="radio-button"
            type="radio"
            name="timeOfDay"
            onChange={() => setTimeOfDay('afternoon')}
          />
          <div className="radio-tile">
            <div className="icon">🌞</div>
            <label className="radio-tile-label" htmlFor="afternoon">
              Afternoon
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            id="evening"
            className="radio-button"
            type="radio"
            name="timeOfDay"
            onChange={() => setTimeOfDay('evening')}
          />
          <div className="radio-tile">
            <div className="icon">🌙</div>
            <label className="radio-tile-label" htmlFor="evening">
              Evening
            </label>
          </div>
        </div>
      </div>

      {/* Recommendation Button */}
      <button className="recommendation-button" onClick={handleRecommendation}>
        Get Recommendation
      </button>

      {/* Display Recommendation */}
      {recommendation && <div className="recommendation">{recommendation}</div>}
    </div>
  );
};

export default Home;
