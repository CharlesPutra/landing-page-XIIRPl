// components/Piket/PiketCard.jsx
import FlipCardPiket from "./FlipCardPiket";

export default function PiketCard({ day, students }) {
  return (
    <FlipCardPiket
      front={day}
      back={
        <ul className="text-sm space-y-1">
          {students.map((nama, i) => (
            <li key={i} className="border-b pb-1">{nama}</li>
          ))}
        </ul>
      }
    />
  );
}
