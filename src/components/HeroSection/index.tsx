import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from "./styles";
import Video from "../../videos/video.mp4";
import { } from 'react-icons'
import ButtonLinked from "../Button";
import { useCallback, useState } from "react";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = useCallback(() => {
    setHover(!hover)
  }, [setHover, hover])

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for new account today and receive $250 in credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonLinked to="/signup" primary dark>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLinked>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
export default HeroSection;