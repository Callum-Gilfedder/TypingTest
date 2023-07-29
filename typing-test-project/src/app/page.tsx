import Image from 'next/image'

export default function Home() {
  return (
    <main className='body'>
      <div className="keyboard-container">

        <div className="key">Q</div>
        <div className="key">W</div>
        <div className="key">E</div>
        <div className="key">R</div>
        <div className="key">T</div>
        <div className="key">Y</div>
        <div className="key">U</div>
        <div className="key">I</div>
        <div className="key">O</div>
        <div className="key">P</div>
        <div className="key col-span-2-rhs">&#8592;</div>
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
