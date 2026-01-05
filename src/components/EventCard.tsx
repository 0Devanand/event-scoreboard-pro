import { Calendar, Users, Trophy } from "lucide-react";
import { Event } from "@/data/eventsData";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const winner = event.participants.find((p) => p.rank === 1);

  return (
    <div className="score-card group animate-fade-in">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
            {event.category}
          </span>
          <h3 className="font-display text-xl font-bold text-foreground">
            {event.name}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Trophy className="h-6 w-6" />
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {format(new Date(event.date), "MMM d, yyyy")}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          {event.participants.length} teams
        </span>
      </div>

      <div className="space-y-3">
        {event.participants.map((participant, index) => (
          <div
            key={participant.id}
            className={`flex items-center justify-between rounded-lg p-3 transition-colors ${
              index === 0
                ? "bg-primary/10 border border-primary/30"
                : "bg-secondary/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  index === 0
                    ? "bg-gradient-primary text-primary-foreground"
                    : index === 1
                    ? "bg-accent/20 text-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {participant.rank}
              </span>
              <span className={`font-medium ${index === 0 ? "text-foreground" : "text-muted-foreground"}`}>
                {participant.name}
              </span>
            </div>
            <span
              className={`font-display text-lg font-bold ${
                index === 0 ? "text-gradient-primary" : "text-muted-foreground"
              }`}
            >
              {participant.score.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {winner && (
        <div className="mt-4 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">
            Winner:{" "}
            <span className="font-semibold text-primary">{winner.name}</span>{" "}
            with{" "}
            <span className="font-display font-bold text-accent">
              {winner.score.toLocaleString()}
            </span>{" "}
            points
          </p>
        </div>
      )}
    </div>
  );
};

export default EventCard;
