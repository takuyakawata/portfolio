import * as React from "react";

interface RatingProps {
  value: number; // 0~5, 0.5刻み
  max?: number;
  className?: string;
}

export function Rating({ value, max = 5, className = "" }: RatingProps) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: max }).map((_, i) => {
        const full = i + 1 <= value;
        const half = !full && i + 0.5 < value;
        return (
          <span key={i} aria-label={full ? "full" : half ? "half" : "empty"}>
            {full ? "★" : half ? <span style={{ position: 'relative', display: 'inline-block', width: '1em' }}><span style={{ position: 'absolute', width: '50%', overflow: 'hidden' }}>★</span><span style={{ color: '#e5e7eb' }}>★</span></span> : <span style={{ color: '#e5e7eb' }}>★</span>}
          </span>
        );
      })}
      <span className="ml-1 text-xs text-muted-foreground">{value}/5</span>
    </span>
  );
} 