import Header from "@/components/Header";
import { getTotalScores, getScoresByEvent } from "@/data/eventsData";
import { BarChart3, Trophy, TrendingUp, Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const TotalScores = () => {
  const totalScores = getTotalScores();
  const scoresByEvent = getScoresByEvent();
  const teamNames = totalScores.map((t) => t.name);

  const chartColors = [
    "hsl(142, 76%, 45%)",
    "hsl(38, 92%, 50%)",
    "hsl(199, 89%, 48%)",
    "hsl(280, 65%, 60%)",
    "hsl(0, 84%, 60%)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <BarChart3 className="h-4 w-4" />
            Analytics Dashboard
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">Total</span>{" "}
            <span className="text-gradient-accent">Scores</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive performance analysis across all events. See who's leading
            the overall standings.
          </p>
        </div>

        {/* Leaderboard Cards */}
        <div className="mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {totalScores.map((team, index) => (
            <div
              key={team.id}
              className={`score-card relative overflow-hidden animate-fade-in ${
                index === 0 ? "glow-primary" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index === 0 && (
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
              )}
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      index === 0
                        ? "bg-gradient-primary text-primary-foreground"
                        : index === 1
                        ? "bg-accent/20 text-accent"
                        : index === 2
                        ? "bg-muted text-muted-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {index === 0 && <Trophy className="h-5 w-5 text-primary" />}
                  {index === 1 && <Award className="h-5 w-5 text-accent" />}
                </div>
                <h3 className="mb-1 font-medium text-foreground">{team.name}</h3>
                <p className="score-text mb-2">{team.totalScore.toLocaleString()}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{team.events} events</span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-primary" />
                    Avg: {team.averageScore.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl font-bold">Total Score Comparison</h2>
          </div>
          <div className="score-card h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={totalScores}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 20%)" />
                <XAxis
                  dataKey="name"
                  stroke="hsl(215, 20%, 55%)"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="hsl(215, 20%, 55%)"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(217, 33%, 20%)",
                    borderRadius: "8px",
                    color: "hsl(210, 40%, 98%)",
                  }}
                  cursor={{ fill: "hsl(217, 33%, 17%, 0.5)" }}
                />
                <Bar
                  dataKey="totalScore"
                  fill="url(#colorGradient)"
                  radius={[4, 4, 0, 0]}
                  name="Total Score"
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(142, 76%, 45%)" />
                    <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart - Score Progress */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold">Score Progression by Event</h2>
          </div>
          <div className="score-card h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={scoresByEvent}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 20%)" />
                <XAxis
                  dataKey="name"
                  stroke="hsl(215, 20%, 55%)"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="hsl(215, 20%, 55%)"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(217, 33%, 20%)",
                    borderRadius: "8px",
                    color: "hsl(210, 40%, 98%)",
                  }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => (
                    <span style={{ color: "hsl(210, 40%, 98%)" }}>{value}</span>
                  )}
                />
                {teamNames.map((team, index) => (
                  <Line
                    key={team}
                    type="monotone"
                    dataKey={team}
                    stroke={chartColors[index % chartColors.length]}
                    strokeWidth={2}
                    dot={{ fill: chartColors[index % chartColors.length], r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
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

export default TotalScores;
