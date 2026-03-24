import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function SingleProduct() {

    const { id } = useParams()
    const navigate = useNavigate()
    const api_url = `https://fakestoreapi.com/products/${id}`

    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch(err => {
                navigate(-1)
            })
    }, [id, navigate])



    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <h1 className="text-center">{product?.title}</h1>
                    <p className="text-muted text-center">{product?.category}</p>
                    <div className="col-12 col-md-5 shadow rounded-5">
                        <img className="img-fluid" src={product?.image} width="300" />
                    </div>

                    <div className="col-12 col-md-7 text-start">
                        <h5 className="text-start">{product?.description}</h5>
                        <h3>{product?.price} €</h3>
                        <button className="btn btn-secondary m-2" onClick={() => navigate(-1)}>
                            Torna indietro
                        </button>
                        <button className="btn btn-secondary m-2" onClick={() => navigate(`/products/${Number(id) + 1}`)}>
                            Prossimo Articolo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}