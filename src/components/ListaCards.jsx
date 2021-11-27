/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './ListaCards.css'
import Card from './Card'
import Modal from './Modal'
import {BiSearch} from  'react-icons/bi'

export default () => {
    const [metahumans, setMetahumans] = useState([]) //váriaveis de estado, sempre que for redezenhar dps de receber informação.
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState({});

    const openModal = (obj) => {
        setModalIsOpen(true);
        setSelected(obj);
    }

    useEffect (() => {
        axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans').then((response) =>{
        setMetahumans(response.data)
         })
    }, [])

    useEffect(() =>{
        setFilter(metahumans)
    }, [metahumans])
    
    useEffect(() =>{
        const b = metahumans.filter(elem => (elem.name.toLowerCase()).includes(search.toLowerCase()))
        setFilter(b)
    }, [search,metahumans])

    return(
        <>
            <aside>
                <div className = "titulo">
                    <h2>Catálogo Geral</h2>
                   <form className="search">
                        <input type="search"                       
                        id="seach_hero" 
                        placeholder="Pesquisar"
                        value={search}
                        onChange={(evt) => setSearch(evt.target.value)} 
                        />
                        <BiSearch/>
                     </form>
                </div>
                <div className="cards"> 
                    
                    {
                    filter.map((h,index)=> <Card key={index} img={h.images.sm} name={h.name} onClick={(evt) => 
                        openModal(h)}/>)
                    }
                   
                </div>
                <Modal open={modalIsOpen} obj={selected} close={setModalIsOpen}/> 
            </aside>
        </>
    )
}