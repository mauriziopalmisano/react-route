import useFetch from '../hooks/useFetch.js'

function Prodotti() {
  const { fetchedData, loadingStatus, error } = useFetch('https://fakestoreapi.com/products');

  return (
    <div className=' container'>
      <div className=' row'>
        {loadingStatus && (<h1>Caricamento</h1>)}
        {fetchedData && fetchedData.map(prodotto => {
          const { id, title, category, price, image } = prodotto;
          return (
            <div className='col-4' key={id}>
              <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className='card-subtitle'>{category}</p>
                  <p className="card-text"><strong>Prezzo:</strong><br />{price}&euro;</p>
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