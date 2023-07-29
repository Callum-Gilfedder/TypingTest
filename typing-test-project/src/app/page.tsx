import Image from 'next/image'
'use client' 
// I don't understand use client but it needs to be here for things to work?
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const [pressedKey, setPressedKey] = useState('');

  // Function to handle key press event
  function handleKeyPress(event: any) {
    setPressedKey(event.key);
    console.log(event.key)
  }

  // Add event listener to the document when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <main className='body'>
      <div className="keyboard-container">
        {pressedKey == "q"  ? <div className="key key-pressed">Q</div> : <div className="key">Q</div>}
        {pressedKey == "w"  ? <div className="key key-pressed">W</div> : <div className="key">W</div>}
        {pressedKey == "e"  ? <div className="key key-pressed">E</div> : <div className="key">E</div>}
        {pressedKey == "r"  ? <div className="key key-pressed">R</div> : <div className="key">R</div>}
        {pressedKey == "t"  ? <div className="key key-pressed">T</div> : <div className="key">T</div>}
        {pressedKey == "y"  ? <div className="key key-pressed">Y</div> : <div className="key">Y</div>}
        {pressedKey == "u"  ? <div className="key key-pressed">U</div> : <div className="key">U</div>}
        {pressedKey == "i"  ? <div className="key key-pressed">I</div> : <div className="key">I</div>}
        {pressedKey == "o"  ? <div className="key key-pressed">O</div> : <div className="key">O</div>}
        {pressedKey == "p"  ? <div className="key key-pressed">P</div> : <div className="key">P</div>}
        {pressedKey == "Backspace"  ? <div className="key col-span-2-rhs key-pressed">&#8592;</div> : <div className="key col-span-2-rhs">&#8592;</div>}

        <div className="key">&#8682;</div>
        <div className="key">A</div>
        <div className="key">S</div>
        <div className="key">D</div>
        <div className="key">F</div>
        <div className="key">G</div>
        <div className="key">H</div>
        <div className="key">J</div>
        <div className="key">K</div>
        <div className="key">L</div>
        <div className="key col-span-2-rhs">Enter</div>
        <div className="key col-span-2-lhs">SHIFT</div>
        <div className="key">Z</div>
        <div className="key">X</div>
        <div className="key">C</div>
        <div className="key">V</div>
        <div className="key">B</div>
        <div className="key">N</div>
        <div className="key">M</div>
        <div className="key empty col-span-2-rhs"></div>
        <div className="key col-span-2-lhs">CTRL</div>
        <div className="key">WIN</div>
        <div className="key space"></div>
        <div className="key">ALT</div>
        <div className="key">FN</div>
        <div className="key empty"></div>
      </div>
    </main>
  )
}
