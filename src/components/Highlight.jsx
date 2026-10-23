import { keywords } from "../data/portfolio";

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const regex = new RegExp(
  `(${[...keywords]
    .sort((a, b) => b.length - a.length)
    .map(escapeRe)
    .join("|")})`,
  "g"
);

/** Wraps known tech keywords / metrics in a highlight colour. */
export default function Highlight({ text }) {
  const parts = text.split(regex);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-medium text-term-300">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}
