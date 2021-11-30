
import lunr from 'lunr';

export function Terms({results}) {
  return (
    <>
      <div className="terms-container">
        {results.map((term, key) => {
          return (
            <div key={key}>
              <Term 
                key={key}
                name={term.name}
                definition={term.definition}
              />
            </div>
          )
        })}
      </div>
    </>
  );
};

const Term = ({name, definition}) => {
  if(!name) return <div />
  return (
    <ul>
      <li>
        <p className="bold">{name}</p>
        <p>{definition}</p>
      </li>
    </ul>
  )
}

// let idx = lunr(function () {
//   this.ref('name')
//   this.field('definition')

//   termsData.forEach(function (doc) {
//     this.add(doc)
//   }, this)
// })

// console.log('Results: ' + JSON.stringify(idx.search("salt")));