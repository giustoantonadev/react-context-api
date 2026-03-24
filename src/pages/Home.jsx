import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <main className="py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold mb-3">
                                Benvenuto nel nostro negozio online!
                            </h1>
                            <p className="lead text-muted mb-4">
                                Scopri prodotti di qualità in modo
                                semplice, veloce e intuitivo.
                            </p>
                            <Link
                                to='/products'
                                className="btn btn-dark btn-lg">
                                Scopri i prodotti
                            </Link>
                        </div>

                        <div className="col-md-6 text-center">
                            <img src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop'
                                alt='shopping img'
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>
                    </div>

                    <div className="row text-center mt-5 g-4">
                        <div className="col-md-4">
                            <h4>Qualità</h4>
                            <p className="text-muted">
                                Prodotti selezionati con attenzione.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h4>Semplicità</h4>
                            <p className="text-muted">
                                Navigazione chiara e intuitiva.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h4>Velocità</h4>
                            <p className="text-muted">
                                Accesso rapido ai nostri prodotti.
                            </p>
                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}