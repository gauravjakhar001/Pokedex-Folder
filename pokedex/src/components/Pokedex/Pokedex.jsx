import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";


//CSS Import

import './Pokedex.css'

function Pokedex(){
     console.log("c")
    return (
        <div className="pokedex-wrapper">
        
        <Search />
        <PokemonList />
        </div>
    )

}

export default Pokedex;