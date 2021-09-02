import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, err: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({
            loading: true,
            err: null,
            data: null,
        });

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        err: null,
                        data,
                    });
                } else {
                    console.log("Set state no se llama");
                }
            });
    }, [url]);

    return state;
};
