'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

type StatCardProps = {
  end: number;
  label: string;
  delay?: number;
  suffix?: string;
};

const StatCard: React.FC<StatCardProps> = ({ end, label, delay = 500, suffix = '+' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasViewed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.9 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h4 className="mb-2 text-3xl font-bold text-light-green">
        {hasViewed ? <CountUp end={end} duration={2} suffix={suffix} /> : `0${suffix}`}
      </h4>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

export default StatCard;
