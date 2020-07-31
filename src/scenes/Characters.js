import React, { useContext } from 'react'
import {StarWarsContext} from 'context'

export const Characters = () => {
	
	const {
		characters,
	} = useContext(StarWarsContext)

	const charactersList = characters ? characters.map(character => {
		return (
			<>
			<div>
				Name: {character.name}
			</div>
			<div>
				Birth Date: {character.birth_year}
			</div>
			<div>
				Gender: {character.gender}
			</div>
			<div>
				Hair Color: {character.hair_color}
			</div>
			<br />
			</>
		) 
	}) : null
	
	return (
		characters.length > 0 ? 
		<div>
			CHARACTERS:
			{charactersList}
		</div>
		: null
	)
}