import "./style.css"
import { useEffect } from 'react';
import { useState } from 'react';
const axios = require('axios').default;

function Pokemon() {

  const [pokemon,setPokemon] = useState([]);

  useEffect(()=>{
     fetchPikachu();
  },[])

    const fetchPikachu = async () =>{
      let finalResult = []
       const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
       for(let i =0; i < data.data.results.length; i++)
       {
        const res = await axios.get(data.data.results[i].url)
        finalResult.push(res.data)
       }
        setPokemon(finalResult)
    }
        console.log(":::::::::::>fetchPokemon",pokemon);

  return (
    
    <div class="app-container">
		
    <h1>Cartoon Kingdom</h1>
    <div class="pokemon-container">
    
      <div class="all-container">
    { pokemon.map((item,key) =>
        <div class="thumb-container" key={key}>


    <div class="number">
      <small>#05</small>
          </div>
          <img src={item.sprites.front_default} alt="charmeleon"></img>
              <div class="detail-wrapper">
							<h3>{item.name}</h3>
              <small>Type : fire</small>
							<button class="pokeinfo">Know less...</button>
              <div class="desc">
								<p><b>Height</b> is <b>{item.height}</b></p>
								<p><b>Weight</b> is <b>{item.weight}</b></p>
								<h3>Stat</h3> 
                {item.stats.map((task, index) => {
              return (
                <p key={index}><b> {task.stat.name} : {task.base_stat
                }</b></p>
              );
            })}
                
							</div>
             </div>
             </div>
             )}
          </div>
             
             <button class="load-more">More Pokemons</button>
             
             
             </div>
             
             </div>

  );
}

export default Pokemon;