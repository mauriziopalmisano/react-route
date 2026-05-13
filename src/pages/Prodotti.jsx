import useFetch from '../hooks/useFetch.js'
import { Link } from 'react-router-dom';

function Prodotti() {
  const { fetchedData: productsList, loadingStatus, error } = useFetch('https://fakestoreapi.com/products');

  return (
    <div className=' container mt-4'>
      <div className=' row'>
        {loadingStatus && (<h1>Caricamento</h1>)}
        {productsList && productsList.map(prodotto => {
          const { id, title, category, price, image } = prodotto;
          return (
            <div className='col-4' key={id}>
              <div className="card align-items-center py-3 mb-3 justify-content-center text-center">
                <img src={image} className="card-img-top img-card" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className='card-subtitle'>{category}</p>
                  <p className="card-text"><strong>Prezzo:</strong><br />{price}&euro;</p>
                  <Link to={`/prodotti/${id}`} className="btn btn-primary">
                    Vedi Dettaglio
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
        {error && (<h1>Errore: {error}</h1>)}
      </div>
    </div>
  )
}
export default Prodotti