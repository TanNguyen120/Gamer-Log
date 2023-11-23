'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function GameCount({ gamesNumber }: { gamesNumber: number }) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    function Interval() {
      setTimeout(() => {
        setDisplayNumber(displayNumber + 1);
      }, 20);
    }
    if (displayNumber < gamesNumber && inView) {
      Interval();
    }
    // reset if go out of view
    if (!inView) {
      setDisplayNumber(0);
      console.log('out of view');
    }
  }, [displayNumber, gamesNumber, inView]);

  return <div ref={ref}>{displayNumber}</div>;
}
