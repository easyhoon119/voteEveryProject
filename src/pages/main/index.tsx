import { useSelector } from "react-redux";
import { RootReducerType } from "../../stores";
import LogoImage from "../../assets/vpaLogoLight.png";
import Wrap from "../../common/components/wrap";
import Header from "../../common/components/header";

function MainPage() {
    const { isPc } = useSelector(
        (state: RootReducerType) => state.NowMediaQueryReducer,
    );

    return (
        <Wrap>
            <Header />
            <p>hihi</p>
            <p>{isPc.toString()}</p>
        </Wrap>
    );
}

export default MainPage;
