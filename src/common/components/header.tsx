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
                <div className="menu-box">
                    <div className="menu-item">Vote</div>
                    <div className="menu-item">Ranking</div>
                    <div className="menu-item">My</div>
                    <div className="menu-item">New</div>
                </div>
                <div className="login-box">
                    <span>로그인</span>
                </div>
            </div>
            <div className="header-middle">
                <div className="search-box">
                    <div className="icon-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" placeholder="검색어를 입력하세요." />
                </div>
            </div>
        </HeaderStyle>
    );
}

type HeaderStyleProps = {
    ispc: string;
};

const HeaderStyle = styled.div<HeaderStyleProps>`
    padding: 1.5rem 2rem 1rem 2rem;
    border-bottom: 1px solid lightgray;
    margin-bottom: 0.75rem;
    position: sticky;
    z-index: 999999999999999;
    top: 0;
    left: 0;

    .header-upper {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.5rem;
    }

    .logo-box {
        width: 8.5rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .login-box {
        font-size: 1.2rem;
        text-decoration: underline;
    }

    .menu-box {
        display: flex;
        position: absolute;
        width: fit-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .menu-item {
            padding: 0.2rem 1.5rem;
            font-size: 1.3rem;
            cursor: pointer;

            &:not(:last-child) {
                border-right: 1px solid gray;
            }
        }
    }

    .header-middle {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-box {
        width: ${(props) => (props.ispc === "true" ? "60%" : "90%")};
        position: relative;
        height: 3rem;
        border: 1.5px solid lightgrey;
        border-radius: 3rem;
        padding: 0.2rem 1.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon-box {
            /* position: absolute;
            top: 50%;
            transform: translateY(-50%); */
            margin-right: 1rem;
        }

        i {
            font-size: 1.5rem;
        }

        input {
            width: 100%;
            height: 100%;
            border: none;
            font-size: 1.3rem;
            padding: 0 1.2rem;
        }

        /* input 기본 스타일 초기화 */
        input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: 0;
        }
    }
`;

export default Header;
