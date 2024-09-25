import { splitToSpan } from "@/hooks/splitToSpan";
import { useTextAnimation } from "@/hooks/useTextAnimation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', delay = 0.1 }) => {
  const textRef = useTextAnimation(true, 0.05, delay);

  return (
    <div ref={textRef} className="">
      <h2 className={`flow-char ${className}`}>
        {splitToSpan(text, 'flow-char translate-y-[115%]')}
      </h2>
    </div>
  );
};

export default AnimatedText;
