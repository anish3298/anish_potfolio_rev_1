import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    document.querySelectorAll('button,a,input,textarea').forEach((element) => {
      element.addEventListener('mouseover', () => setHovered(true));
      element.addEventListener('mouseout', () => setHovered(false));
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-cyan-300/10 transition-transform duration-200 md:block"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${hovered ? 1.8 : 1})` }}
    />
  );
}

export default CustomCursor;
