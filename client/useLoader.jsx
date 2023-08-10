import * as React from "react";
import {useEffect, useState} from "react";

export function useLoader(loadingFunction){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    async function load(){
        try {
            setLoading(true)
            setData(await loadingFunction())
        }
        catch (error){
            setError(error)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect( () => load(), []);
    return { loading, error, data }
}