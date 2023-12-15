import { styled } from "styled-components";

type WrapProps = {
    children: React.ReactNode;
};

function BodyWrap({ children }: WrapProps) {
    return <BodyWrapStyle>{children}</BodyWrapStyle>;
}

const BodyWrapStyle = styled.div`
    padding: 2rem 2rem 2rem 2rem;
`;

export default BodyWrap;
