import React, { useContext } from 'react'
import {StarWarsContext} from 'context'

export const Planets = () => {
	
	const {
		planets,
	} = useContext(StarWarsContext)

	const planetsList = planets ? planets.map(planet => {
		return (
			<>
			<div>
				Name: {planet.name}
			</div>
			<div>
				Climate: {planet.climate}
			</div>
			<div>
				Terrain: {planet.terrain}
			</div>
			<div>
				Population: {planet.population}
			</div>
			<br />
			</>
		) 
	}) : null
	
	return (
		planets.length > 0 ?
		<div>
			PLANETS:
			{planetsList}
		</div>
		: null
	)
}