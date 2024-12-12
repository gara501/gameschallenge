import './App.css'
import divider from './assets/1up.png'
import dividerl from './assets/level-up.png'
import dividerg from './assets/gamification.png'
import dividergm from './assets/gamepad.png'
import itchlogo from './assets/app-icon.svg'
import xlogo from './assets/xlogo.png'
import { GameCard } from './components/GameCard'
import gamesJson from './data/games.json'

function App() {

  return (
    <>
      <h1>50 Games Personal Challenge</h1>
      <h6>My Path to learn to create Videogames (and Unity 6)</h6>
      <img src={divider} className='icon' alt='icon' />
      <div className='block'>
        <h6>MOTIVATION</h6>
        <p>I want to learn Unity 6, deeply, and C#,  I want to create solo-games that inspire me to continue this hobby, but the only way to learn is doing. 
          I will start with basic games, practicing the roots in terms of logic, assets, story, music, documentation, etc. I worked before with Lua, Godot and Phaser
          but now I want to masterize Unity.</p>
      </div>
      <img src={dividerl} className='icon' alt='icon' />
      <div className='block'>
        <h6>INSPIRATION</h6>
        <p>Emanuele Feronato has a challenge to create 101 games using PhaseJS, I want to do something similar, but my objective is more oriented to learn.
          In this case I will be using Unity 6, but I'm pretty sure, the bases will works no matter the engine used.
        </p>
      </div>
      <img src={dividerg} className='icon' alt='icon' />
      <div className='block'>
        <h6>Topics</h6>
        <p>All my games will be living in my Itch.io profile. I will start with 2D games (My prefered) and after that, I will jump into 3D.</p>
        <p>I want to be orgainzed with my path and I will include a description inside each game about the topics learned or practiced in each one of them.</p>
      </div>
      <img src={dividergm} className='icon' alt='icon' />
      <div className='block'>
        <h6>Games</h6>
        <div className='games-container'>
          {gamesJson.map(item => (
            <GameCard title={item.title} url={item.url} description={item.description}>
            <ul>
              {item.objectives.map(objective => (
                <li>{objective}</li>
              ))}
            </ul>
          </GameCard>
          ))}
        </div>
      </div>
      <div className='footer'>
        <p><strong>Aramhack.</strong> Software Developer </p>
        <p>If you want to follow me in itch.io or X, go ahead.</p>
        <div className='logo-container'>
          <a href='https://goramirez.itch.io/' target='_blank'>
          <img src={itchlogo} alt='itch' className='logo' />
          </a>
          <a href='https://x.com/aramh4ck' target='_blank'>
          <img src={xlogo} alt='x' className='logo' />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
