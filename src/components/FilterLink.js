export const FilterLink = ({ letter, onClick }) => {
  if (!letter) return <li />;
  return (
    <li key={letter} className="nav-item">
      <a onClick={onClick} className="nav-link">
        {letter}
      </a>
    </li>
  );
};
{
  /* <li key={key} className="nav-item">
<a className="nav-link">
  {letter} {typeof this.filterAction}
</a>
</li> */
}
