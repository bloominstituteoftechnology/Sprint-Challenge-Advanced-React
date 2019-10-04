import React from 'react';
import {useDarkMode} from './Darkmode'
import {useRank} from './useRank'


//run in test
export const voteClickUSA = voteUSA => {
    //setVoteUSA(voteUSA + 1)
    return voteUSA + 1
}


//darkMode and setDarkMode come from useDarkMode
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const [voteUSA, setVoteUSA] = useRank('voteUsa', 0);

  // using custom hooks from useRank
  const [voteBrazil, setVoteBr, voteClickBr] = useRank('br', 0);
  const [voteGermany, setVoteGmy, voteClickGmy] = useRank('ger', 0);
  

  return (
    <nav className="navbar">
      <h1>World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <div>Vote for your favorite Team.</div>
      <div> 
            <button onClick={() => setVoteUSA(voteClickUSA(voteUSA))}>USA</button>
            <h3>{voteUSA}</h3>
        </div>
        <div> 
            <button onClick={() => setVoteBr(voteClickBr(voteBrazil))}>Brazil</button>
            <h3>{voteBrazil}</h3>
        </div>
        <div> 
            <button onClick={() => setVoteGmy(voteClickGmy(voteGermany))}>Germany</button>
            <h3>{voteGermany}</h3>
        </div>
    </nav>
  );
};

export default Navbar;