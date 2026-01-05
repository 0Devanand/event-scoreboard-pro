import Header from "@/components/Header";
import { Mic2, Palette, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const TotalScores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Trophy className="h-4 w-4" />
            Results Dashboard
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">Choose</span>{" "}
            <span className="text-gradient-accent">Category</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Select a category to view program results and winners
          </p>
        </div>

        {/* Category Cards */}
        <div className="mx-auto max-w-2xl grid gap-6 md:grid-cols-2">
          {/* On Stage Card */}
          <Link to="/on-stage" className="group">
            <div className="score-card h-full relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-primary">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
              <div className="relative flex flex-col items-center py-8 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-lg shadow-primary/30">
                  <Mic2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                  On Stage
                </h2>
                <p className="text-muted-foreground">
                  Dance, Drama, Singing & more
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  View Results →
                </div>
              </div>
            </div>
          </Link>

          {/* Off Stage Card */}
          <Link to="/off-stage" className="group">
            <div className="score-card h-full relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-accent">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-all group-hover:bg-accent/20" />
              <div className="relative flex flex-col items-center py-8 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-accent shadow-lg shadow-accent/30">
                  <Palette className="h-10 w-10 text-accent-foreground" />
                </div>
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                  Off Stage
                </h2>
                <p className="text-muted-foreground">
                  Quiz, Art, Writing & more
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                  View Results →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>ScoreTracker © 2025 — Track. Analyze. Win.</p>
        </div>
      </footer>
    </div>
  );
};

export default TotalScores;
