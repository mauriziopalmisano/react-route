import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"




function Prodotto() {
    const { idProdotto } = useParams();//recupero l'id del prodotto che voglio mostrare in pagina
    const URL_API = idProdotto ? `https://fakestoreapi.com/products/${idProdotto}` : null;
    const { fetchedData: prodotto, loadingStatus, error } = useFetch(URL_API);





    return (
        <div className="container">
            <div className="row justify-content-center">
                {loadingStatus && (
                    <div className="col-12 mt-4">
                        <h1 className="text-center">Caricamento Prodotto {idProdotto}</h1>
                    </div>
                )}
                {prodotto && (
                    <div className='col-4 mt-4'>
                        <div className="card align-items-center py-3 mb-3 justify-content-center">
                            <img src={prodotto.image} className="card-img-top img-card" alt={prodotto.title} />
                            <div className="card-body">
                                <h5 className="card-title">{prodotto.title}</h5>
                                <p className='card-subtitle text-muted fw-medium'>{prodotto.category}</p>
                                <p className="card-text"><strong>Descrizione:</strong><br />{prodotto.description}</p>
                                <div className="d-flex column-gap-2">
                                <p className=" card-text"><strong>Valutazione:</strong><br />{prodotto.rating.rate}</p>
                                <p className=" card-text"><strong>Recensioni:</strong><br />{prodotto.rating.count}</p>
                                <p className="card-text"><strong>Prezzo:</strong><br />{prodotto.price}&euro;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {error && (
                    <div className="col-12 mt-4">
                        <h1 className="text-center">Errore {error}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Prodotto