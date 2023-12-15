import React from "react";
import { styled } from "styled-components";
import voteImg from "../../assets/card1.webp";

type VoteContentBoxProps = {
    index?: number;
};

function VoteContentBox({ index }: VoteContentBoxProps) {
    return (
        <VoteContentBoxStyle index={index}>
            <div className="vContBox-inner">
                <div className="vContBox-flex">
                    <div className="vote-front">
                        <div className="vote-front-upper">
                            <p id="voteId"># 1624</p>
                            <p id="voteCnt">233</p>
                        </div>
                        <img src={voteImg} alt="voteImage" />
                    </div>
                    <div className="vote-rare">
                        <p id="voteTitle">투표 타이틀</p>
                        <p className="voteExplain">
                            sdasdsdsdsd
                            <br />
                            dsdsdsdsds
                            <br />
                            asdasdsd
                            <br />
                            dsddsd
                        </p>
                        <p className="voteDate">20.13.04 ~ 20.13.12</p>
                    </div>
                </div>
            </div>
        </VoteContentBoxStyle>
    );
}

type VoteContentBoxStyleProps = {
    index?: number;
};

const VoteContentBoxStyle = styled.div<VoteContentBoxStyleProps>`
    width: ${(props) => (props.index ? "90%" : "100%")};
    background-color: #69a751ff;
    border-radius: 0.8rem;
    height: fit-content;
    color: whitesmoke;

    .vContBox-inner {
        padding: 1.2rem 1.2rem;
        position: relative;

        .vContBox-flex {
            position: relative;
            width: 100%;
            height: 11.6rem;
            display: flex;
            justify-content: space-between;
            gap: 1.2rem;
        }
    }

    .vote-front {
        width: 100%;
        height: 100%;
        /* display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between; */

        #voteId,
        #voteCnt {
            margin-bottom: 1rem;
        }

        img {
            width: 100%;
            height: 9.5rem;
            border-radius: 0.8rem;
            object-fit: cover;
        }

        .vote-front-upper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .vote-rare {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;

        #voteTitle {
            font-size: 1.3rem;
            font-weight: 800;
        }

        .voteExplain {
            height: 7rem;
            overflow: hidden;
        }

        .voteDate {
        }
    }
`;

export default VoteContentBox;
