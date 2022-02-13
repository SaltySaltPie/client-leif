import { useParams } from "react-router-dom"

function Products() {
    const {cID} = useParams()
    console.log({cID})
  return (
      <section>
          {cID}
      </section>
  )
}

export default Products