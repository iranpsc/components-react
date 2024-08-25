import { useGlobalState } from "./GlobalStateProvider";

const About = () => {
    const { state, dispatch } = useGlobalState();

    const handleChange = (e) => {
        dispatch({ type: 'SET_ABOUT', payload: e.target.value });
    };

    return (
        <textarea
            value={state.about}
            onChange={handleChange}
            placeholder="درباره خود بنویسید"
        />
    );
};

export default About;
