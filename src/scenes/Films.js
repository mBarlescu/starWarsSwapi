import React, { useContext, useEffect } from 'react'
import {StarWarsContext} from 'context'

export const Films = () => {
	const {
		setFilmsList,
		filmsList,
		styles,
		setSelectedFilm,
		selectedFilm,
		search,
		setSearch,
	} = useContext(StarWarsContext)
	useEffect(() => {
    fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(data => {
		setFilmsList(data.results)
    });
  }, [])
  
	const titles = filmsList.map(film =>
		film.title.toLowerCase().includes(search.toLowerCase()) || film.opening_crawl.toLowerCase().includes(search.toLowerCase()) ? 
		(
		<div key={film.episode_id} className={film.episode_id === selectedFilm ? styles.titleSelected : styles.titles}
			onClick={() => {
				setSelectedFilm(film.episode_id)
			}}
		>
			{film.title}
		</div>	
		) : null)

	return (
		<div>
			<div>
			<input type="text" id="search" name="search" placeholder='Search' onChange={(e) => setSearch(e.target.value)} >
		   </input>
			</div>
			<span>
				FILMS:
			</span>
			{titles}
		</div>
	)
}