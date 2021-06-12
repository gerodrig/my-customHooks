import { useEffect, useState } from "react"

export const useFetch = ( url ) => {    

    //for the fetch we need to define a state
    const [state, setstate] = useState({data: null, loading: true, error: null })


    //one we recieve the url we can trigger an effect, only executed when the url changes
    useEffect(() => {

        //restore the use state data before running the effect
        setstate({data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

            //in case the componen is mounted then we are setting a state we do this to avoid any error for unmounted components modification             
                setstate({
                    loading: false,
                    error: null,
                    data
                })

            })
            .catch( () => {
                setstate({
                    data: null,
                    loading: false,
                    error: 'API couldn\'t be loaded'
                })
            })
    }, [url])

    return state

}
