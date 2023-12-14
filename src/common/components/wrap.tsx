import styled from "styled-components";

type WrapProps = {
    children: React.ReactNode;
};

function Wrap({ children }: WrapProps) {
    return <WrapStyle id="wrap">{children}</WrapStyle>;
}

const WrapStyle = styled.div`
    width: 100vw;
    background-color: #eff1f6;
    max-width: 1350px;
    margin: 0 auto;

    & > * {
        background-color: white;
    }
`;

export default Wrap;
