import { useRef, useState, useEffect } from 'react';
import { skillsData } from '@/data/skills';
import Image from 'next/image';

const ScrollingLogos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current && !isDragging) {
        containerRef.current.scrollLeft += 1;
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft -= containerRef.current.scrollWidth / 2;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 py-16">
      <div
        ref={containerRef}
        className="flex overflow-x-scroll scrollbar-hide cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsDragging(false)}
      >
        {skillsData.concat(skillsData).map((skill, index) => (
          <div
            className="mx-6 text-gray-500 flex flex-col justify-center items-center text-center bg-[#191817] bg-opacity-70 rounded-md py-2 px-4 min-w-36 select-none"
            key={index}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={46}
              height={46}
              style={{
                objectFit: 'contain',
                userSelect: 'none',
              }}
              draggable="false"
              className="hover:filter-none transition-all duration-300 cursor-pointer text-gray-500 min-h-[50px]"
            />
            <p className="text-[0.85em] font-extralight pt-2 text-gray-200 select-none">{skill.name}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ScrollingLogos;
