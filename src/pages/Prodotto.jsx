import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"




function Prodotto() {
    const { idProdotto } = useParams();//recupero l'id del prodotto che voglio mostrare in pagina
    const navigate = useNavigate();

    const URL_API = 'https://fakestoreapi.com/products';
    const { fetchedData: prodotti } = useFetch(URL_API);


    const URL_API_prodotto = idProdotto ? `https://fakestoreapi.com/products/${idProdotto}` : null;
    const { fetchedData: prodotto, loadingStatus: LoadingProdotto, error: errorProdotto } = useFetch(URL_API_prodotto);

    const currentIndex = prodotti ? prodotti.findIndex(product => product.id === Number(idProdotto)) : -1;

    const goNextProduct = () => {
        if (prodotti && currentIndex < prodotti.length - 1) {
            const nextProduct = prodotti[currentIndex + 1];
            navigate(`/prodotti/${nextProduct.id}`);
        }
    };

    const goPreviousProduct = () => {
        if (prodotti && currentIndex > 0) {
            const previousProduct = prodotti[currentIndex - 1];
            navigate(`/prodotti/${previousProduct.id}`);
        }
    };



    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="d-flex justify-content-between mt-4">
                    <div>
                        <button onClick={goPreviousProduct} className="btn btn-primary" disabled={currentIndex <= 0}>Precedente</button>
                    </div>
                    <div>
                        <button onClick={goNextProduct} className="btn btn-primary" disabled={currentIndex === -1 || currentIndex >= prodotti.length - 1} >Successivo</button>
                    </div>
                </div>
                {LoadingProdotto && (
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
                {errorProdotto && (
                    <div className="col-12 mt-4">
                        <h1 className="text-center">Errore {errorProdotto}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Prodotto