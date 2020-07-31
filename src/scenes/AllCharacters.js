import React, { useContext, useEffect } from 'react'
import {StarWarsContext} from 'context'

export const AllCharacters = () => {
	const {
    selectedCharacter,
    setSelectedCharacter,
    styles,
    allCharacters,
    setAllCharacters,
	} = useContext(StarWarsContext)

	useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
		setAllCharacters(data.results)
			
    });

  }, [])
	
	const allCharactersList = allCharacters.map(character => (
		<div key={character.url} className={character.url === selectedCharacter ? styles.titleSelected : styles.titles}
			onClick={() => {
				setSelectedCharacter(character.url)
			}}
		>
			{character.name}
		</div>	
        ))
        
    const characterInfo = allCharacters.find(character => character.url === selectedCharacter)
    const characterInfoDisplay = characterInfo ? (
			<div>
			<div>
				Name: {characterInfo.name}
			</div>
			<div>
				Birth Date: {characterInfo.birth_year}
			</div>
			<div>
				Gender: {characterInfo.gender}
			</div>
			<div>
				Hair Color: {characterInfo.hair_color}
			</div>
			<br />
			</div>
    ) : null

	return (
		<div>
      <div>
        <span>
            ALL CHARACTERS:
        </span>
        {allCharactersList}
      </div>
      <br />
      {characterInfoDisplay}
		</div>
	)
}