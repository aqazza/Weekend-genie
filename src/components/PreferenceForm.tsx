import React, { useState } from 'react';
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { RadioGroup, RadioGroupItem } from "../components/ui/RadioGroup";
import { Slider } from "../components/ui/Slider";
import { Checkbox } from "../components/ui/Checkbox";

export type UserPreferences = {
  mood: 'active' | 'chill';
  budget: number;
  travelDistance: number;
  activityTypes: string[];
};

interface PreferenceFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit }) => {
  const [mood, setMood] = useState<'active' | 'chill'>('active');
  const [budget, setBudget] = useState(50);
  const [travelDistance, setTravelDistance] = useState(15);
  const [activityTypes, setActivityTypes] = useState<string[]>([]);

  const handleActivityTypeChange = (type: string) => {
    setActivityTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ mood, budget, travelDistance, activityTypes });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="mood">How are you feeling?</Label>
        <RadioGroup value={mood} onValueChange={(value) => setMood(value as 'active' | 'chill')}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="active" />
            <Label htmlFor="active">Active</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="chill" />
            <Label htmlFor="chill">Chill</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="budget">What's your budget?</Label>
        <Slider
          min={0}
          max={200}
          step={10}
          value={budget}  // Use a single number for value
          onValueChange={(value) => setBudget(value)}
        />
        <span>${budget}</span>
      </div>

      <div>
        <Label htmlFor="travelDistance">How far are you willing to travel? (miles)</Label>
        <Input
          type="number"
          value={travelDistance}
          onChange={(e) => setTravelDistance(Number(e.target.value))}
          min={0}
          max={100}
        />
      </div>

      <div>
        <Label htmlFor="activityTypes">What types of activities are you interested in?</Label>
        <div className="grid grid-cols-2 gap-2">
          {['indoor', 'outdoor', 'artsy', 'adventurous', 'relaxing', 'educational'].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                checked={activityTypes.includes(type)}
                onCheckedChange={() => handleActivityTypeChange(type)}
              />
              <Label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Label>
            </div>
          ))}
        </div>
      </div>

      <Button>Get Activity Recommendations</Button>
    </form>
  );
};
