import './App.css';
import title from './assets/Nome.png'
import OP1 from './assets/OP1.jpg'
import OP2 from './assets/OP2.jpg'
import { TfiMenuAlt } from "react-icons/tfi";
import { MdPlayCircle, MdComputer, MdOutlineLocalMovies } from "react-icons/md";
import { FaBell, FaRandom, FaGamepad } from "react-icons/fa";
import { AiOutlinePlayCircle, AiOutlineYoutube, AiOutlineInfoCircle, AiFillHome } from "react-icons/ai";
import { HiPlus, HiOutlineNewspaper } from "react-icons/hi2";
import { FiPlay } from "react-icons/fi";
import { GiSharpShuriken } from "react-icons/gi";



function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <TfiMenuAlt/>
      <div>
        <MdPlayCircle/>
        <span className='logo-name'>
        ROYAL
        </span>
      </div>
      <FaBell/>
      </header>
      <div className='kvActions'>
        <h1>One Piece</h1>
        <h5>Animação, Acão</h5>
        <button>Assistir <AiOutlinePlayCircle/></button>
      </div>
    </div>
    <img src={title} alt="title" className='title'></img>
    <div className='actions'>
      <div className='actionsIcons'>
        <div className='iconBox'>
          <HiPlus/>
          <span>
            Minha lista
          </span>
        </div>
        <div className='iconBox'>
          <AiOutlineYoutube/>
          <span>
            Trailer
          </span>
        </div>
        <div className='iconBox'>
          <AiOutlineInfoCircle/>
          <span>
            Saiba mais
          </span>
        </div>
      </div>

      <div className='actionsCards'>
        <div className='cards'>
          <HiOutlineNewspaper/>
          <span> Notícias do Royal</span>
        </div>
        <div className='cards'>
          <FaRandom/>
          <span>Filme aleatório</span>
        </div>
        <div className='cards'>
          <MdComputer/>
          <span> Assistir no computador</span>
        </div>
        <div className='cards'>
          <FaGamepad/>
          <span>Lorem ipsum</span>
        </div>
      </div>

    </div>
    <div className='images'>
    <img src={OP1} alt="op" ></img>
    <img src={OP2} alt="op" ></img>
    </div>
    <div className='footer'>
      <div className='footerBtn selected'>
          <AiFillHome/>
          <span>Home</span>
        </div>
      <div className='footerBtn'>
          <FiPlay/>
          <span>Filmes</span>
        </div>
      <div className='footerBtn'>
          <MdOutlineLocalMovies/>
          <span>Séries</span>
        </div>
      <div className='footerBtn'>
          <GiSharpShuriken/>
          <span>Animes</span>
        </div>
    </div>
    </>
  );
}

export default App;
