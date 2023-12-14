import { useSelector } from "react-redux";
import { RootReducerType } from "../../stores";
import { styled } from "styled-components";
import logoImage from "../../assets/vpaLogoLight.png";

function Header() {
    const { isPc } = useSelector(
        (state: RootReducerType) => state.NowMediaQueryReducer,
    );

    return (
        <HeaderStyle id="header" ispc={isPc.toString()}>
            <div className="header-upper">
                <div className="logo-box">
                    <img src={logoImage} alt="logo" />
                </div>
                <div className="login-box">
                    <span>로그인</span>
                </div>
            </div>
            <div className="header-middle">
                <div className="search-box">
                    <span>검색어 입력</span>
                </div>
            </div>
        </HeaderStyle>
    );
}

type HeaderStyleProps = {
    ispc: string;
};

const HeaderStyle = styled.div<HeaderStyleProps>`
    width: 100%;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid lightgray;

    .header-upper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-box {
        min-width: 150px;
        width: 8.5rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .login-box {
        margin-right: 2rem;
        font-size: 1.2rem;
        text-decoration: underline;
    }

    .header-middle {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-box {
        width: ${(props) => (props.ispc === "true" ? "60%" : "90%")};
        height: 3rem;
        border: 1.5px solid lightgrey;
        border-radius: 3rem;
    }
`;

export default Header;
