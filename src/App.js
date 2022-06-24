import React from 'react';
import './App.css';

function MonComposant() {
  // on utilise le hook useState de React
  const [count, setCount] = React.useState(0);

  return (
    // on affiche un bouton
    <button
      // au clique, on change le state avec setCount
      onClick={() => setCount(count + 1)}
    >
      {/* on utilise le state dans l'affichage */}
      {count}
    </button>
  );
}

export default MonComposant;

