export interface Event {
  id: string;
  name: string;
  date: string;
  category: string;
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  score: number;
  rank: number;
}

export const eventsData: Event[] = [
  {
    id: "1",
    name: "Regional Championship 2025",
    date: "2025-01-03",
    category: "Tournament",
    participants: [
      { id: "p1", name: "Team Alpha", score: 2850, rank: 1 },
      { id: "p2", name: "Team Omega", score: 2720, rank: 2 },
      { id: "p3", name: "Team Delta", score: 2540, rank: 3 },
      { id: "p4", name: "Team Sigma", score: 2310, rank: 4 },
    ],
  },
  {
    id: "2",
    name: "Winter Classic",
    date: "2024-12-28",
    category: "League",
    participants: [
      { id: "p1", name: "Team Alpha", score: 1920, rank: 2 },
      { id: "p2", name: "Team Omega", score: 2100, rank: 1 },
      { id: "p3", name: "Team Delta", score: 1850, rank: 3 },
      { id: "p5", name: "Team Phoenix", score: 1780, rank: 4 },
    ],
  },
  {
    id: "3",
    name: "Holiday Showdown",
    date: "2024-12-21",
    category: "Tournament",
    participants: [
      { id: "p1", name: "Team Alpha", score: 3200, rank: 1 },
      { id: "p3", name: "Team Delta", score: 2890, rank: 2 },
      { id: "p4", name: "Team Sigma", score: 2750, rank: 3 },
      { id: "p5", name: "Team Phoenix", score: 2680, rank: 4 },
    ],
  },
  {
    id: "4",
    name: "December Finals",
    date: "2024-12-14",
    category: "Championship",
    participants: [
      { id: "p2", name: "Team Omega", score: 4100, rank: 1 },
      { id: "p1", name: "Team Alpha", score: 3950, rank: 2 },
      { id: "p3", name: "Team Delta", score: 3720, rank: 3 },
      { id: "p4", name: "Team Sigma", score: 3400, rank: 4 },
    ],
  },
  {
    id: "5",
    name: "Autumn Cup",
    date: "2024-11-30",
    category: "League",
    participants: [
      { id: "p3", name: "Team Delta", score: 2200, rank: 1 },
      { id: "p1", name: "Team Alpha", score: 2150, rank: 2 },
      { id: "p5", name: "Team Phoenix", score: 2080, rank: 3 },
      { id: "p2", name: "Team Omega", score: 1950, rank: 4 },
    ],
  },
];

export const getTotalScores = () => {
  const totals: Record<string, { name: string; totalScore: number; events: number }> = {};

  eventsData.forEach((event) => {
    event.participants.forEach((participant) => {
      if (!totals[participant.id]) {
        totals[participant.id] = {
          name: participant.name,
          totalScore: 0,
          events: 0,
        };
      }
      totals[participant.id].totalScore += participant.score;
      totals[participant.id].events += 1;
    });
  });

  return Object.entries(totals)
    .map(([id, data]) => ({
      id,
      ...data,
      averageScore: Math.round(data.totalScore / data.events),
    }))
    .sort((a, b) => b.totalScore - a.totalScore);
};

export const getScoresByEvent = () => {
  return eventsData.map((event) => {
    const eventScores: Record<string, number | string> = { name: event.name };
    event.participants.forEach((p) => {
      eventScores[p.name] = p.score;
    });
    return eventScores;
  }).reverse();
};
