import AbautUs from "../../assets/pexels-syed-qaarif-andrabi-12495614.jpg"
import './styles.css';

function Sobre() {
  return (
    <div id='about' className="container_sobre">
      <div className='content_img'>
        <div className='content_thumbnail'>
            <div className='thumbnail'>
              <img src={AbautUs} alt="About Images" />
            </div>
        </div>
        <div className='Content_description'>
            <div className='Description'>
              <h2>Sobre nós</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
