export default function ShippingPage() {
    return (
        <main className="py-5">
            <div className="container">
                <h1 className="text-center">Spedizioni</h1>
                <p className="text-center mb-5 text-muted">
                    Offriamo spedizioni rapide e affidabili per
                    garantirti la migliore esperienza possibile.
                </p>

                <div className="mb-4">
                    <h5>Tempi di Consegna</h5>
                    <p className="text-muted">
                        Gli ordini vengono consegnati generalmente
                        entro 3-5 giorni lavorativi.
                    </p>
                </div>

                <div className="mb-4">
                    <h5>Costi di Spedizione</h5>
                    <p className="text-muted">
                        I costi di spedizione variano in
                        base alla destinazione e vengono
                        calcolati al checkout
                    </p>
                </div>

                <div className="mb-4">
                    <h5>Tracciamento ordine</h5>
                    <p className="text-muted">
                        Dopo la spedizione riceverai un
                        codice per monitorare il tuo ordine
                        in tempo reale.
                    </p>
                </div>

                <div className="mb-4">
                    <h5>Spedizione internazionale</h5>
                    <p className="text-muted">
                        Effettuiamo spedizioni anche all'estero
                        con tempi e costi variabili.
                    </p>
                </div>
            </div>
        </main>
    )
}