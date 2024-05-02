const fetchRickAndMorty = async () =>{
  const url = "https://rickandmortyapi.com/api/character";
  const response=await fetch(url)

  const data = await response.json()

  console.log(data)
  return data.results
}

const CharactersPage = async () => {
  const characters=await fetchRickAndMorty()
  return (
    <>
      {/* <div>Character page</div> */}
      <h1 className="text-3xl text-center">Rick And Morty</h1>
      <ol>
        {characters.map(character=>{
          return <li key={character.id}>{character.name}</li>
        })}
      </ol>
    </>

  )
}

export default CharactersPage;