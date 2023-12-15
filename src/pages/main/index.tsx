import { useSelector } from "react-redux";
import { RootReducerType } from "../../stores";
import LogoImage from "../../assets/vpaLogoLight.png";
import Wrap from "../../common/components/wrap";
import Header from "../../common/components/header";
import BodyWrap from "common/components/bodyWrap";
import ContentBox from "common/components/contentBox";
import VoteContentBox from "common/components/voteContentBox";
import Slick from "common/components/slick";
import VoteContentFlexBox from "common/components/voteContentFlexBox";

function MainPage() {
    const { isPc } = useSelector(
        (state: RootReducerType) => state.NowMediaQueryReducer,
    );

    return (
        <Wrap>
            <Header />
            <BodyWrap>
                <ContentBox title="현재 Hot Vote">
                    <Slick>
                        <VoteContentBox index={1} />
                        <VoteContentBox index={1} />
                        <VoteContentBox index={1} />
                        <VoteContentBox index={1} />
                    </Slick>
                </ContentBox>
                <ContentBox title="진행중인 vote">
                    <VoteContentFlexBox>
                        <VoteContentBox />
                        <VoteContentBox />
                        <VoteContentBox />
                        <VoteContentBox />
                        <VoteContentBox />
                    </VoteContentFlexBox>
                </ContentBox>
                <ContentBox title="종료된 vote">
                    <VoteContentFlexBox>
                        <VoteContentBox />
                    </VoteContentFlexBox>
                </ContentBox>
            </BodyWrap>
        </Wrap>
    );
}

export default MainPage;
