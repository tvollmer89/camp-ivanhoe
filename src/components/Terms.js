export function Terms({ results }) {
  return (
    <div className="terms-container mb-5">
      <ul>
        {results.map(term => {
          return (
            <Term
              key={term.name}
              name={term.name}
              definition={term.definition}
            />
          );
        })}
      </ul>
    </div>
  );
}

const Term = ({ name, definition }) => {
  if (!name) return <div />;
  return (
    <li>
      <p className="bold">
        {name}
      </p>
      <p>
        {definition}
      </p>
    </li>
  );
};
