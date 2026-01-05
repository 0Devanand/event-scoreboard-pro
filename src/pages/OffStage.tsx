import Header from "@/components/Header";
import ProgramCard from "@/components/ProgramCard";
import { getOffStagePrograms } from "@/data/programsData";
import { Palette, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OffStage = () => {
  const programs = getOffStagePrograms();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 pb-20">
        {/* Back Link */}
        <Link
          to="/totals"
          className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Categories</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Palette className="h-4 w-4" />
            Creative Events
          </div>
          <h1 className="mb-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-foreground">Off</span>{" "}
            <span className="text-gradient-accent">Stage</span>
          </h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            Tap on any program to see the winners
          </p>
        </div>

        {/* Programs List */}
        <div className="mx-auto max-w-lg space-y-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default OffStage;
