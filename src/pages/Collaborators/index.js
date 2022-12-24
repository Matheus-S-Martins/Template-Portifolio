import './styles.css';
import ColaboratorPerfil from '../../assets/user-icon.png'

function Collaborators() {
    return (
        <div id='collaborators' className="container_collaborators">
            <div className='container_content_collaborators'>
                <h2>Colaboradores</h2>
                <p>Descrição breve dos colaboradores.</p>

                <div className='collaborator'>
                    <img className='img_collaborator' src={ColaboratorPerfil} alt="" />
                    <div className='skills'>
                    Fulano De Tal
                        <ul>
                            <li>
                                <span>💻</span>
                                <p>Área de atuação</p>
                            </li>
                            <li>
                                <span>📚</span>
                                <p>informação extra</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className='collaborator'>
                    <img className='img_collaborator' src={ColaboratorPerfil} alt="" />
                    <div className='skills'>
                    Beltrano De Tal
                        <ul>
                            <li>
                                <span>💻</span>
                                <p>Área de atuação</p>
                            </li>
                            <li>
                                <span>🏀</span>
                                <p>Informação extra</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collaborators;