export default function WhoAreWe() {
    return (
        <main>
            <div className="container">
                <h1 className="text-center mb-4">Chi siamo</h1>
                <p className="text-center mb-5">
                    Siamo un mini e-commerce creato per offrire
                    prodotti di qualità in modo semplice e veloce
                </p>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h4>Qualità</h4>
                        <p>
                            Selezioniamo i prodotti
                            affidabili e moderni.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h4>Semplicità</h4>
                        <p>
                            Esperienza utente chiara e intuitiva.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h4>Velocità</h4>
                        <p>
                            Navigazione fluida e accesso
                            rapido ai prodotti.
                        </p>
                    </div>

                    <p className="text-center mt-5">Questo progetto è stato realizzato con React e Fake Store API per simulare un e-commerce reale.</p>
                </div>
            </div>
        </main>
    )
}