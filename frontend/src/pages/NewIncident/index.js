import React, {useState} from 'react';

import './styles.css';
import { Link, useHistory}from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {headers: {Authorization: localStorage.getItem('ongId')}});
        } catch (error) {
            alert(`Não, foi possível cadastrar novo caso, vai fica pobrinhokk`);
        }
        

        history.push('/profile')
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>descreva o caso detalhadamente para encontrar um herói para o resolver.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form>
                        <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                        <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                        <input placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                        <button onClick={handleRegister} className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}