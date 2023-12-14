import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { NowMediaQueryAction } from "./stores/nowMediaQueryReducer";
import RooteRoute from "./routes";

function App() {
    const dispatch = useDispatch();

    //react-responsive
    const isPc = useMediaQuery({
        query: `(min-width: 768px)`,
    });

    useEffect(() => {
        dispatch(
            NowMediaQueryAction({
                isPc,
            }),
        );
    }, [isPc, dispatch]);

    return <RooteRoute />;
}

export default App;
