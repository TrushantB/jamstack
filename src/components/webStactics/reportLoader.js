import React, { useEffect } from 'react';
import gsap from 'gsap';

const ReportLoader = () => {
  useEffect(() => {
    const fills = gsap.utils.toArray('.report .fill');

    const animation = gsap.timeline({ repeat: -1 });

    animation
      .fromTo(
        fills,
        { scaleY: 0 },
        { scaleY: 1, transformOrigin: 'bottom', duration: 2, stagger: 2 }
      ) .to(fills, { scaleY: 0, transformOrigin: 'bottom', duration: 2 });
    return () => animation.kill();
  }, []);

  return (
    <div className='report'>
      <h2 className="text-center py-10">Generating your report</h2>
      <div className="flex justify-center items-center gap-5 py-10">
        <div className="diamond bg-accent-200 w-10 h-10">
          <div className="fill bg-orange-500 w-full h-full"></div>
        </div>
        <div className="circle bg-accent-200 w-10 h-10">
          <div className="fill bg-orange-500 w-full h-full"></div>
        </div>
        <div className="pentagon bg-accent-200 w-10 h-10">
          <div className="fill bg-orange-500 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ReportLoader;