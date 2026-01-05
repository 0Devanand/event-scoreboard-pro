import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 border-4 border-primary/20 rounded-full"></div>
        <div 
          className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-primary rounded-full animate-spin"
        ></div>
      </div>
      
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">
        Event<span className="text-primary">Scores</span>
      </h1>
      <p className="text-muted-foreground mb-8">Loading your dashboard...</p>
      
      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
