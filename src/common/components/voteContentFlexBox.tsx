import React from "react";
import { styled } from "styled-components";

type VoteContentFlexBoxProps = {
    children: React.ReactNode;
};

function VoteContentFlexBox({ children }: VoteContentFlexBoxProps) {
    return <VoteContentFlexBoxStyle>{children}</VoteContentFlexBoxStyle>;
}

const VoteContentFlexBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
`;

export default VoteContentFlexBox;
