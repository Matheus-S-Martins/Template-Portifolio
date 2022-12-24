import './styles.css';

function Menu() {
  return (
    <div className='Container_menu'>
      <div className="Logo"  >
        <a href="#home"  className='Link_logo'><h2>Logo</h2></a>
      </div>
      <div className="Menu"  >
        <a href="#home" >Home</a>
        <a href="#about" >Sobre</a>
        <a href="#services" >Serviços</a>
        <a href="#collaborators" >Colaboradores</a>
        <a href="#contact" >Contato</a>
      </div>
    </div>
  );
}

export default Menu;