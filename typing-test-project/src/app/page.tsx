import Image from 'next/image'
'use client' 
// I don't understand use client but it needs to be here for things to work?
import { useState } from 'react';
import { useEffect } from 'react';
import { generate } from 'random-words';

export default function Home() {
  const [pressedKey, setPressedKey] = useState('');
  const [activationState, setActivationState] = useState(false)
  const [input, setInput] = useState("")
  const [words, setWords] = useState<string[]>([]);
  const [regen, setRegen] = useState(false)

  console.log(words)

  // Function to handle key press event
  function handleKeyPress(event: any) {
    setPressedKey(event.key);
    console.log(event.key)
  }

  function toggleStartPause(event: any) {
    setActivationState(!activationState)
    setRegen(!regen)
  }

  function handleChange(event: any) {
    setInput(event.target.value)
  }


  
  useEffect(() => {
    function generateWords() {
      let generatedWords = generate(10)
      console.log(generatedWords)
      setWords(generatedWords)
    }
    generateWords()
  }, [regen])





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
      <div className="navigation-bar">
        <div className="left-elements">
        <ul>
          <li>HOME</li>
        </ul>
        </div>
        <div className="right-elements">
        <ul>
            <li>SIGN-IN </li>
            <li>LOG-IN</li>
        </ul>
        </div>
      </div>  

        <div className="main-container">

        <div className="mini-navigation-bar">
          <div className="left-elements">
            <ul>
              <li className='mini-nav-text'>TIME: 10s 30s 60s </li>
            </ul>
          </div>
          <div className="right-elements">
            <ul>
              <li className='mini-nav-text'>WORDS: 10 50 100</li>
            </ul>
          </div>
        </div>

          <div className="row row-1">
            
           <span className='activated'>a</span><span className="incorrect">n</span> 
           {words.map((word, index) => (
              <div key={index}>{word}&nbsp;</div>
            ))}
          </div>
          <div className="row row-2">
            <div className="timer">1:00</div>
            <input type="text" 
                   id="message"
                   name="message"
                   onChange={handleChange}
            />
            { activationState ? <div className="start-button" onClick={toggleStartPause}> &#8634;</div> : <div className="start-button" onClick={toggleStartPause}>&#9658;</div> }  
          </div>
        </div>
      <div className="keyboard-container">
        {pressedKey.toLowerCase() == "q"  ? <div className="key key-pressed">Q</div> : <div className="key">Q</div>}
        {pressedKey.toLowerCase() == "w"  ? <div className="key key-pressed">W</div> : <div className="key">W</div>}
        {pressedKey.toLowerCase() == "e"  ? <div className="key key-pressed">E</div> : <div className="key">E</div>}
        {pressedKey.toLowerCase() == "r"  ? <div className="key key-pressed">R</div> : <div className="key">R</div>}
        {pressedKey.toLowerCase() == "t"  ? <div className="key key-pressed">T</div> : <div className="key">T</div>}
        {pressedKey.toLowerCase() == "y"  ? <div className="key key-pressed">Y</div> : <div className="key">Y</div>}
        {pressedKey.toLowerCase() == "u"  ? <div className="key key-pressed">U</div> : <div className="key">U</div>}
        {pressedKey.toLowerCase() == "i"  ? <div className="key key-pressed">I</div> : <div className="key">I</div>}
        {pressedKey.toLowerCase() == "o"  ? <div className="key key-pressed">O</div> : <div className="key">O</div>}
        {pressedKey.toLowerCase() == "p"  ? <div className="key key-pressed">P</div> : <div className="key">P</div>}
        {pressedKey == "Backspace" ? <div className="key col-span-2-rhs key-pressed">&#8592;</div> : <div className="key col-span-2-rhs">&#8592;</div>}
        {pressedKey == "CapsLock" ? <div className="key key-pressed">&#8682;</div> : <div className="key">&#8682;</div>}
        {pressedKey.toLowerCase() == "a"  ? <div className="key key-pressed">A</div> : <div className="key">A</div>}
        {pressedKey.toLowerCase() == "s"  ? <div className="key key-pressed">S</div> : <div className="key">S</div>}
        {pressedKey.toLowerCase() == "d"  ? <div className="key key-pressed">D</div> : <div className="key">D</div>}
        {pressedKey.toLowerCase() == "f"  ? <div className="key key-pressed">F</div> : <div className="key">F</div>}
        {pressedKey.toLowerCase() == "g"  ? <div className="key key-pressed">G</div> : <div className="key">G</div>}
        {pressedKey.toLowerCase() == "h"  ? <div className="key key-pressed">H</div> : <div className="key">H</div>}
        {pressedKey.toLowerCase() == "j"  ? <div className="key key-pressed">J</div> : <div className="key">J</div>}
        {pressedKey.toLowerCase() == "k"  ? <div className="key key-pressed">K</div> : <div className="key">K</div>}
        {pressedKey.toLowerCase() == "l"  ? <div className="key key-pressed">L</div> : <div className="key">L</div>}
        {pressedKey == "Enter" ? <div className="key col-span-2-rhs key-pressed">ENTER</div> : <div className="key col-span-2-rhs">ENTER</div>}
        {pressedKey == "Shift" ? <div className="key col-span-2-lhs key-pressed">SHIFT</div> : <div className="key col-span-2-lhs">SHIFT</div>}
        {pressedKey.toLowerCase() == "z"  ? <div className="key key-pressed">Z</div> : <div className="key">Z</div>}
        {pressedKey.toLowerCase() == "x"  ? <div className="key key-pressed">X</div> : <div className="key">X</div>}
        {pressedKey.toLowerCase() == "c"  ? <div className="key key-pressed">C</div> : <div className="key">C</div>}
        {pressedKey.toLowerCase() == "v"  ? <div className="key key-pressed">V</div> : <div className="key">V</div>}
        {pressedKey.toLowerCase() == "b"  ? <div className="key key-pressed">B</div> : <div className="key">B</div>}
        {pressedKey.toLowerCase() == "n"  ? <div className="key key-pressed">N</div> : <div className="key">N</div>}
        {pressedKey.toLowerCase() == "m"  ? <div className="key key-pressed">M</div> : <div className="key">M</div>}
        <div className="key empty col-span-2-rhs"></div>
        {pressedKey == "Control" ? <div className="key col-span-2-lhs key-pressed">CTRL</div> : <div className="key col-span-2-lhs">CTRL</div>}
        {pressedKey == " " ? <div className="key space key-pressed"></div> : <div className="key space"></div>}
        {pressedKey == "Alt" ? <div className="key key-pressed">ALT</div> : <div className="key">ALT</div>}
        {pressedKey == "Meta" ? <div className="key key-pressed">WIN</div> : <div className="key">WIN</div>}
        <div className="key empty"></div>
      </div>
    </main>
  )
}

