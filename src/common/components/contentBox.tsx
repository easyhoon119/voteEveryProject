import { styled } from "styled-components";
import ContentTitle from "./contentTitle";

type WrapProps = {
    children: React.ReactNode;
    title: string;
};

function ContentBox({ children, title }: WrapProps) {
    return (
        <ContentBoxStyle>
            <ContentTitle title={title} />
            {children}
        </ContentBoxStyle>
    );
}

const ContentBoxStyle = styled.div`
    margin: 1.5rem 0 4rem 0;
`;

export default ContentBox;
