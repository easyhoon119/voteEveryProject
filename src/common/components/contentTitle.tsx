import { styled } from "styled-components";

type ContentTitleProps = {
    title: string;
};

function ContentTitle({ title }: ContentTitleProps) {
    return <ContentTitleStyle>{title}</ContentTitleStyle>;
}

const ContentTitleStyle = styled.div`
    font-size: 2rem;
    margin-bottom: 1.35rem;
    font-weight: 800;
`;

export default ContentTitle;
