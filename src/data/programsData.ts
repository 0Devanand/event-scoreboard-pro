export interface Program {
  id: string;
  name: string;
  category: "on-stage" | "off-stage";
  winner: {
    name: string;
    score: number;
  };
  runnerUp?: {
    name: string;
    score: number;
  };
}

export const programsData: Program[] = [
  // On Stage Programs
  { id: "os1", name: "Solo Dance", category: "on-stage", winner: { name: "Team Alpha", score: 95 }, runnerUp: { name: "Team Delta", score: 88 } },
  { id: "os2", name: "Group Dance", category: "on-stage", winner: { name: "Team Omega", score: 92 }, runnerUp: { name: "Team Alpha", score: 89 } },
  { id: "os3", name: "Drama", category: "on-stage", winner: { name: "Team Delta", score: 97 }, runnerUp: { name: "Team Sigma", score: 91 } },
  { id: "os4", name: "Solo Singing", category: "on-stage", winner: { name: "Team Phoenix", score: 94 }, runnerUp: { name: "Team Omega", score: 90 } },
  { id: "os5", name: "Group Singing", category: "on-stage", winner: { name: "Team Alpha", score: 96 }, runnerUp: { name: "Team Phoenix", score: 93 } },
  { id: "os6", name: "Instrumental", category: "on-stage", winner: { name: "Team Sigma", score: 91 }, runnerUp: { name: "Team Delta", score: 87 } },
  { id: "os7", name: "Mime", category: "on-stage", winner: { name: "Team Omega", score: 89 }, runnerUp: { name: "Team Alpha", score: 85 } },
  { id: "os8", name: "Stand-up Comedy", category: "on-stage", winner: { name: "Team Delta", score: 93 }, runnerUp: { name: "Team Phoenix", score: 88 } },
  
  // Off Stage Programs
  { id: "of1", name: "Quiz", category: "off-stage", winner: { name: "Team Alpha", score: 98 }, runnerUp: { name: "Team Omega", score: 94 } },
  { id: "of2", name: "Essay Writing", category: "off-stage", winner: { name: "Team Delta", score: 92 }, runnerUp: { name: "Team Sigma", score: 88 } },
  { id: "of3", name: "Debate", category: "off-stage", winner: { name: "Team Omega", score: 95 }, runnerUp: { name: "Team Alpha", score: 92 } },
  { id: "of4", name: "Painting", category: "off-stage", winner: { name: "Team Phoenix", score: 96 }, runnerUp: { name: "Team Delta", score: 91 } },
  { id: "of5", name: "Photography", category: "off-stage", winner: { name: "Team Sigma", score: 90 }, runnerUp: { name: "Team Omega", score: 86 } },
  { id: "of6", name: "Poster Design", category: "off-stage", winner: { name: "Team Alpha", score: 94 }, runnerUp: { name: "Team Phoenix", score: 89 } },
  { id: "of7", name: "Story Writing", category: "off-stage", winner: { name: "Team Delta", score: 91 }, runnerUp: { name: "Team Alpha", score: 87 } },
  { id: "of8", name: "Chess", category: "off-stage", winner: { name: "Team Omega", score: 97 }, runnerUp: { name: "Team Sigma", score: 93 } },
];

export const getOnStagePrograms = () => programsData.filter(p => p.category === "on-stage");
export const getOffStagePrograms = () => programsData.filter(p => p.category === "off-stage");
