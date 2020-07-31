import React, { useContext, useEffect } from 'react'
import {StarWarsContext} from 'context'
import {idConverter} from 'scenes/functions'
import { Characters } from 'scenes/Characters'
import { Vehicles } from 'scenes/Vehicles'
import { Planets } from 'scenes/Planets'

export const MetaData = () => {
	const {
		selectedFilm,
		metaData,
		setMetaData,
		styles,
		setPlanets,
		setVehicles,
		setCharacters,
	} = useContext(StarWarsContext)

	const filmId = idConverter(selectedFilm)

	useEffect(() => {
	const fetchMetaData = async () => {
      let response = await fetch(`https://swapi.dev/api/films/${filmId}`)
      response = await response.json()
      setMetaData(response)
    }
		fetchMetaData()
  }, [selectedFilm])

	useEffect(() => {
		if(metaData && metaData.characters){
			const fetchMetaData = async () => {

				let charactersData = await Promise.all(metaData.characters.map(async (character) => {
					let response = await fetch(character)
					response = await response.json()
					return response
				}))

				let vehiclesData = await Promise.all(metaData.vehicles.map(async (vehicle) => {
					let response = await fetch(vehicle)
					response = await response.json()
					return response
				}))

				let planetsData = await Promise.all(metaData.planets.map(async (planet) => {
					let response = await fetch(planet)
					response = await response.json()
					return response
				}))
				setCharacters(charactersData)
				setVehicles(vehiclesData)
				setPlanets(planetsData)
			}
		
		fetchMetaData()
		}
	}, [metaData])

	return (
		<div className={styles.metaData}> 
			<Characters />
			<Vehicles />
			<Planets />		
		</div> 
	)
}