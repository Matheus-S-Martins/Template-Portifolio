import './styles.css';
import {RiMouseLine, RiComputerLine, RiLayout3Line} from 'react-icons/ri'

function Services() {
    return (
        <div id='services' className="container_services">
            <div className='container_content_services'>
                <div className='service_title'>
                    <h2>Nossos serviços</h2>
                    <p>Serviços da empresa.</p>
                </div>

                <div className='container_card_services_home'>
                    <div className='content_services'>
                        <RiLayout3Line size={80} color='#0086e7'/>
                        <h3>Title.</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='content_services'>
                        <RiMouseLine size={80} color='#0086e7'/>
                        <h3>Title.</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='content_services'>
                        <RiComputerLine size={80} color='#0086e7'/>
                        <h3>Title.</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;