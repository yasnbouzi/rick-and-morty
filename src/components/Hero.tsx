import { StyledContent, StyledHero, StyledHeroContainer, StyledPoster } from '@/styles';
import Image from 'next/image';

export default function Hero() {
  return (
    <StyledHero>
      <Image src="/hero.png" alt="hero image" layout="fill" quality="45" priority />
      <StyledHeroContainer>
        <StyledPoster>
          <Image src="/poster.png" alt="rick and morty poster" width="310" height="500" layout="fixed" quality="45" priority />
        </StyledPoster>
        <StyledContent>
          <h1 className="title">
            Rick and Morty <span>(2013)</span>
          </h1>
          <p className="subTitle">
            <span>tv-ma</span> Animation, Comedy, Sci-Fi & Fantasy, Action & Adventure • 22m
          </p>
          <p className="overview">Overview</p>
          <p className="description">
            Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson
            Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty &apos;s already unstable family life, these events cause Morty
            much distress at home and school.
          </p>
          <div className="info">
            <div className="creator">
              <h2>Dan Harmon</h2>
              <span>Creator</span>
            </div>
            <div className="creator">
              <h2>Justin Roiland</h2>
              <span>Creator</span>
            </div>
            <div className="rating">
              <Image src="/star.svg" aria-hidden="true" alt="star" layout="fixed" width="24" height="24" />
              <p>9.2</p>
            </div>
          </div>
          <a href="https://www.youtube.com/watch?v=hl1U0bxTHbY" className="btn" target="_blank" rel="noreferrer noopener">
            watch trailer
          </a>
        </StyledContent>
      </StyledHeroContainer>
    </StyledHero>
  );
}
