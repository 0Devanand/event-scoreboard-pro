import { Link, useLocation } from "react-router-dom";
import { Trophy, BarChart3 } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Trophy className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">ScoreTracker</span>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link flex items-center gap-2 ${isActive("/") ? "nav-link-active" : ""}`}
            >
              <Trophy className="h-4 w-4" />
              Events
            </Link>
            <Link
              to="/totals"
              className={`nav-link flex items-center gap-2 ${isActive("/totals") ? "nav-link-active" : ""}`}
            >
              <BarChart3 className="h-4 w-4" />
              Total Scores
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
