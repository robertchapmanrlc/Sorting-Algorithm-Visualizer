

interface ExplanationProps {
  algorithm: string;
  description: string;
}

export default function Explanation({ algorithm, description }: ExplanationProps) {
  return (
    <article className="w-full px-10 md:px-20">
      <h1 className="text-white text-4xl text-center">{algorithm}</h1>
      <p className="text-white text-xl">{description}</p>
    </article>
  );
}
