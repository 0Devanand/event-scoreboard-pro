import { useState } from "react";
import { Trophy, Medal, ChevronDown, ChevronUp } from "lucide-react";
import { Program } from "@/data/programsData";

interface ProgramCardProps {
  program: Program;
  index: number;
}

const ProgramCard = ({ program, index }: ProgramCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className={`score-card transition-all duration-300 ${isExpanded ? "glow-primary" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                {index + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {program.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">Tap to view</span>
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 space-y-2 px-2">
          {/* Winner */}
          <div className="flex items-center gap-3 rounded-xl bg-primary/10 border border-primary/20 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-primary">Winner</p>
              <p className="font-display text-lg font-bold text-foreground">
                {program.winner.name}
              </p>
            </div>
            <div className="text-right">
              <p className="score-text text-2xl">{program.winner.score}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>

          {/* Runner Up */}
          {program.runnerUp && (
            <div className="flex items-center gap-3 rounded-xl bg-accent/10 border border-accent/20 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Medal className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-accent">Runner Up</p>
                <p className="font-display text-lg font-bold text-foreground">
                  {program.runnerUp.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-accent">{program.runnerUp.score}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
