export default function TermsPage() {
    return (
        <main className="py-5">
            <div className="container">
                <h1 className="text-center mb-5">
                    Termini e condizioni
                </h1>
                <p className='text-muted mb-4'>
                    Utilizzando questo sito accetti i seguenti
                    termini e condizioni.
                </p>

                <div className="mb-4">
                    <h5>Utilizzo del sito</h5>
                    <p className="text-muted">
                        Il sito è destinato a un uso personale
                        e non commerciale.
                    </p>
                </div>

                <div className="mb-4">
                    <h5>Prodotti e prezzi</h5>
                    <p className='text-muted'>
                        I prezzi possono esere soggetti a modifiche senza
                        preavviso.
                    </p>
                </div>

                <div className="mb-4">
                    <h5>Responsabilità</h5>
                    <p className="text-muted">
                        Non siamo responsabili per eventuali danni
                        derivanti dall'uso del sito.
                    </p>
                </div>
                <div className="mb-4">
                    <h5>Modifiche ai termini</h5>
                    <p className="text-muted">
                        Ci riserviamo il diritto di aggiornare questi
                        termini in qualsiasi momento.
                    </p>
                </div>
            </div>
        </main>
    )
}