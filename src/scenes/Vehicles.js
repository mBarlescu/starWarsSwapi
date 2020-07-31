import React, { useContext } from 'react'
import {StarWarsContext} from 'context'

export const Vehicles = () => {
	
	const {
		vehicles,
	} = useContext(StarWarsContext)

	const vehiclesList = vehicles ? vehicles.map(vehicle => {
		return (
			<>
			<div>
				Name: {vehicle.name}
			</div>
			<div>
				Passengers: {vehicle.passengers}
			</div>
			<div>
				Credits: {vehicle.cost_in_credits}
			</div>
			<div>
				Model: {vehicle.model}
			</div>
			<br />
			</>
		) 
	}) : null
	
	return (
		vehicles.length > 0 ? 
		<div>
			VEHICLES:
			{vehiclesList}
		</div>
		: null
	)
}