import { useState } from "react";

export const useForm = (inicialState = {}) => {
    const [state, setState] = useState(inicialState);

    const reset = () => {
        setState(inicialState);
    };

    const handleInputChange = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };

    return [state, handleInputChange, reset];
};
