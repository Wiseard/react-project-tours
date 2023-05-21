import { Tour } from './Tour'

export const Tours = ({ toursList, deleteTour }) => {
  return (
    <section className="list-container">
      {toursList.map((tour) => {
        return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
      })}
    </section>
  )
}
