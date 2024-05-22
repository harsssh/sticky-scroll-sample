'use client'

import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [topOffset, setTopOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setTopOffset(entry.target.clientHeight);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={ref} className="bg-sky-500 sticky top-0">
        <textarea />
      </div>
      <div className="bg-lime-500 h-screen" />
      <div className="bg-amber-500 h-20 sticky" style={{ top: `${topOffset}px` }} />
      <div className="bg-stone-500 h-screen" />
    </>
  );
}
