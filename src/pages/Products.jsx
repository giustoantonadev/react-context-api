import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Products() {

    const api_url = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row g-4 mt-2">
                {products.map(product => (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
                        <div className="card border-0" style={{ width: "18rem", minHeight: "50rem" }}>
                            <img src={product.image} className="card-img-top" style={{ objectFit: "contain" }} alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                {<p className="text-muted small">{product.description.slice(0, 80)}...</p>}
                            </div>
                            <Link to={`/products/${product.id}`}>
                            <button className="btn btn-secondary m-2">Dettagli</button>
                            </Link>
                            <div className="card-footer">{product.category}</div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}