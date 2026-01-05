import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { eventsData } from "@/data/eventsData";
import { Trophy, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <TrendingUp className="h-4 w-4" />
            Live Score Tracking
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">Event</span>{" "}
            <span className="text-gradient-primary">Scores</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Track scores from all your favorite events. View detailed results and
            analyze total performance across competitions.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          <div className="score-card text-center">
            <p className="text-sm font-medium text-muted-foreground">Total Events</p>
            <p className="font-display text-3xl font-bold text-foreground">{eventsData.length}</p>
          </div>
          <div className="score-card text-center">
            <p className="text-sm font-medium text-muted-foreground">Active Teams</p>
            <p className="font-display text-3xl font-bold text-primary">5</p>
          </div>
          <div className="score-card text-center">
            <p className="text-sm font-medium text-muted-foreground">Total Points</p>
            <p className="font-display text-3xl font-bold text-accent">
              {eventsData
                .reduce(
                  (acc, event) =>
                    acc + event.participants.reduce((sum, p) => sum + p.score, 0),
                  0
                )
                .toLocaleString()}
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl font-bold">Recent Events</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event, index) => (
            <div key={event.id} style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>ScoreTracker © 2025 — Track. Analyze. Win.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
