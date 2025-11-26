// components/Schedule/ScheduleCard.jsx
import FlipCard from "./FlipCard";

export default function ScheduleCard({ day, subjects }) {
  return (
    <FlipCard
      front={day}
      back={
        <ul className="text-sm space-y-1">
          {subjects.map((mapel, i) => (
            <li key={i} className="border-b pb-1">{mapel}</li>
          ))}
        </ul>
      }
    />
  );
}
