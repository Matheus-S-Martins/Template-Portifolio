
import {RiMouseLine, RiComputerLine, RiLayout3Line} from 'react-icons/ri'
import './styles.css';

function Home() {
  return (
    <div id='home' className="container_app">
      <div className='container_title'>
        <div className='title'>
          <h2>Nome da empresa</h2>
          <p>Seguimento da empresa.</p>
        </div>
      
        <div className='subtitle'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='container_services_home'>
          <div className='content_services_home'>
            <RiLayout3Line size={80} color='#0086e7'/>
            <h3>Title.</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='content_services_home'>
            <RiMouseLine size={80} color='#0086e7'/>
            <h3>Title.</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='content_services_home'>
            <RiComputerLine size={80} color='#0086e7'/>
            <h3>Title.</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>      
    </div>
  );
}

export default Home;
