import Image from 'next/image'
'use client' 
// I don't understand use client but it needs to be here for things to work?
import { useState } from 'react';
import { useEffect } from 'react';
import { generate } from 'random-words';
import Timer from './timer';

export default function Home() {
  const [pressedKey, setPressedKey] = useState('');
  const [activationState, setActivationState] = useState(false)
  const [input, setInput] = useState("")
  const [words, setWords] = useState<string[]>([]);
  const [regen, setRegen] = useState(0)
  const [wordsIndex, setWordsIndex] = useState(0)
  const [savedWord, setSavedWord] = useState("")
  console.log(words)
  console.log("Words index: " + wordsIndex)
  console.log("Words.length: " + words.length)
  console.log("Current input text: " + input)
  // Function to handle key press event
  console.log("Saved word: " + savedWord)

  function toggleStartPause(event: any) {
    setActivationState(!activationState)
  }

  function triggerStart(event: any) {
    setActivationState(true)
  }

  function handleChange(event: any) {
    setInput(event.target.value)
  }

  useEffect(() => {
    function generateWords() {
      let generatedWords = generate(9)
      console.log(generatedWords)
      var x = (generatedWords.join(" "))
      var length = x.length
      if (length < 65) {
        generatedWords.push(generate(2)[0])
        generatedWords.push(generate(2)[1])
        generateWords() 
      } else if (length > 65 && length < 71) {
        generatedWords.push(generate(1)[0])
      }
      setWords(generatedWords)
    }
    generateWords()
  }, [regen])

  function getWordColor(word, index, savedWord, wordsIndex) {
    if (index != wordsIndex) {
      if (savedWord != word && index == wordsIndex - 1) {
        return "incorrect"
      } else {
        if (savedWord == word && index == wordsIndex - 1 ) {
          return "correct"
        }
      }
    } else {
      return "active"
    }
  }


  // Add event listener to the document when the component mounts
  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.key == " ") {
        if (wordsIndex + 1 >= words.length) {
          setWordsIndex((wordsIndex) => 0)
          setRegen(regen => regen + 1)
        } else { 
          setWordsIndex((wordsIndex) => (wordsIndex + 1))
          
  
        }
        var saved = input
        setSavedWord(saved)
        setSavedWord(saved.trim())
        setInput(" ")
        triggerStart(event)
      }
      
      setPressedKey(event.key);
    }

    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [wordsIndex, regen, input]);

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
            
           {/* <span className='activated'>a</span><span className="incorrect">n</span>  */}
           {words.map((word, index) => <span key={index} className={getWordColor(word, index, savedWord, wordsIndex)}>{word}&nbsp;</span>
            )}
          </div>
          <div className="row row-2">
            <Timer activationState={activationState}/>
            <input type="text" 
                   id="message"
                   name="message"
                   onChange={handleChange}
                   value = {input}
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

