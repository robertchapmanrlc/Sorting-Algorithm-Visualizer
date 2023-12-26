interface ExplanationProps {
  algorithm: string;
}

export default function Explanation({ algorithm }: ExplanationProps) {
  return (
    <article className="w-full px-10 md:px-20">
      <h1 className="text-white text-4xl text-center">{algorithm}</h1>
      <p className="text-white text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        corporis suscipit, quos labore officia inventore praesentium distinctio
        necessitatibus nesciunt ullam ab provident quis vel ea amet? Laborum,
        numquam. Sequi tenetur at natus quibusdam sunt, odit corporis animi
        architecto harum vel?
      </p>
    </article>
  );
}
