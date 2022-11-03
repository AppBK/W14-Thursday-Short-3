import horoscopesObj from '../data/horoscopes';
import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { currentSign, setCurrentSign } = useContext(HoroscopeContext);

  console.log('DETAIL: rerendering');
  // function changeSign(e) {
  //   e.preventDefault();
  //   setCurrentSign(e.target.value);
  // }
  
  return (
    
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
        {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;
