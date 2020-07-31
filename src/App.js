import React, { useState } from 'react';
import { StarWarsContext } from 'context'
import { MetaData } from 'scenes/MetaData'
import { Films } from 'scenes/Films'
import { useStyles } from 'scenes/styles'
import { AllCharacters } from 'scenes/AllCharacters'

const App = () => {

 
  const [search, setSearch] = useState('')
  const [allCharacters, setAllCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [filmsList, setFilmsList] = useState([])
  const [metaData, setMetaData] = useState(null)
  const [characters, setCharacters] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [planets, setPlanets] = useState([])
  
  const styles = useStyles({selectedFilm})

  const starWarsValues = {
    search,
    setSearch,
    allCharacters,
    setAllCharacters,
    selectedCharacter,
    setSelectedCharacter,
    selectedFilm,
    setSelectedFilm,
    filmsList,
    setFilmsList,
    metaData,
    setMetaData,
    characters,
    setCharacters,
    vehicles,
    setVehicles,
    planets,
    setPlanets,
    styles,
  }

  return (
    <StarWarsContext.Provider value={starWarsValues}>
      <div className={styles.header}>
      <Films /> 
      <AllCharacters />
      </div>
      <br />
      <MetaData />
    </StarWarsContext.Provider>
  );
}

export default App;
