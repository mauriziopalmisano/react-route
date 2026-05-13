import { useRef } from "react";
import { useState, useEffect } from "react";

function useFetch(urlAPI) {
    const [fetchedData, setFetechedData] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [error, setError] = useState(null);

    const mountedStatus = useRef(true);

    useEffect(() => {
        if (!urlAPI) { //per assicurarsi che la fetch venga fatta solo quando l'URL é pronto
            setLoadingStatus(false); // per evitare che rimanga bloccato sulla loading
            return;
        }
        mountedStatus.current = true;
        const controller = new AbortController(); //permette di annullare richieste in corso.
        setFetechedData(null);
        setLoadingStatus(true);
        setError(null);

        fetch(urlAPI, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Errore HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                if (mountedStatus.current) {
                    setFetechedData(json);
                    setLoadingStatus(false);
                }
            })
            .catch((err) => {
                if (err.name !== "AbortError" && mountedStatus.current) {
                    setError(err.message);
                    setLoadingStatus(false);
                }
            });

        return () => {
            mountedStatus.current = false;
            controller.abort();
        };
    }, [urlAPI]);

    return { fetchedData, loadingStatus, error };
}
export default useFetch;
