import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";


function PokemonList(){

     const {pokemonListState ,setPokemonListState} = usePokemonList('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
    return (
    <div className="pokemon-list-wrapper"> 

         <div className="pokemon-wrapper">

            {(pokemonListState.isLoading) ?'Loading....':
                pokemonListState.pokemonList.map((p)=> <Pokemon  name={p.name} image = {p.image} key ={p.id} id = {p.id} />)
            }
         </div>

         <div className="controls">
            <button disabled ={pokemonListState.prevUrl == null} onClick={() => {

                const urlToSet = pokemonListState.prevUrl;
                setPokemonListState({...pokemonListState , pokedexUrl :urlToSet});

            }} > Prev </button>

            <button disabled ={pokemonListState.nextUrl == null} onClick={() =>{

                const urlToSet = pokemonListState.nextUrl;
                 setPokemonListState((state)=> ({...pokemonListState , pokedexUrl : urlToSet }));
                 
            }} > Next </button>
         </div>
        

    </div>
    )
}

export default PokemonList;