import { useEffect, useState } from 'react'
import { Tours } from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [toursList, setToursList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  async function fetchTours() {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsLoading(false)
        setIsError(true)
        return
      }
      const data = await response.json()
      setToursList(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  function deleteTour(id) {
    const updatedTourList = toursList.filter((tour) => tour.id !== id)
    setToursList(updatedTourList)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <header>
          <h1>Loading data</h1>
        </header>
      </main>
    )
  }
  if (isError) {
    return (
      <main>
        <header>
          <h1>An error occurred</h1>
        </header>
      </main>
    )
  }
  return (
    <>
      <main>
        {toursList.length >= 1 ? (
          <header>
            <h1>Our Tours</h1>
          </header>
        ) : (
          <header>
            <h1>No Tours Left</h1>
            <button
              className="btn btn-refresh"
              type="button"
              onClick={fetchTours}
            >
              Refresh
            </button>
          </header>
        )}
        <Tours toursList={toursList} deleteTour={deleteTour} />
      </main>
    </>
  )
}

export default App
