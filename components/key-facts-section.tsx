"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Users,
  Building,
  Calendar,
  Tv,
  Trophy,
  Award,
  Star,
  Heart,
} from "lucide-react";

interface CounterAnimationProps {
  end: number;
  duration?: number;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({
  end,
  duration = 2000,
}) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, inView]);

  return <span ref={countRef}>{count}</span>;
};

const KeyFactsSection = () => {
  const factsData = [
    { icon: MapPin, value: 36, label: "Cities for On-ground Trials" },
    {
      icon: Users,
      value: 150,
      label: "Players Selected",
      suffix: "+",
    },
    { icon: Building, value: 12, label: "(8 Male + 4 Female) Teams" },
    { icon: Calendar, value: 45, label: "Day Gurukul-Style Training Camp" },
    { icon: Tv, value: 36, label: "Talent Reality Shows" },
    { icon: Trophy, value: 12, label: "Team Ownership" },
    { icon: Award, value: 32, label: "League Matches" },
    { icon: Star, value: 8, label: "Ex-International Players per Team" },
    {
      icon: Heart,
      value: 5000,
      label: "Showcasing Talents in Next 10 Years",
      suffix: "+",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Key Facts
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            RunBhumi has grown to become India's most prestigious cricket talent
            hunt
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {factsData.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card
                key={index}
                className="text-center overflow-hidden group hover:border-orange-300 transition-all hover:shadow-md"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-800/30 group-hover:bg-orange-200 transition-colors">
                      <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-3xl font-bold flex items-center">
                      <CounterAnimation end={fact.value} />
                      {fact.suffix && <span>{fact.suffix}</span>}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {fact.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFactsSection;
