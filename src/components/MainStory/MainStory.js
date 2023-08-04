import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const MainStory = ({ id, title, image, location, abstract, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <a href={`/story/${id}`}>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
      </a>
      <Abstract>
        <Location>{location}</Location> — {abstract}
      </Abstract>
      <ReadMore href="/story">Continue Reading…</ReadMore>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  aspect-ratio: 9.5/8;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;

  @media ${QUERIES.tabletAndUp} {
    aspect-ratio: 13/8;
  }
  @media ${QUERIES.laptopAndUp} {
    aspect-ratio: 12/8;
  }
`;

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

const Abstract = styled.p`
  font-size: 1rem;
  margin-bottom: 1em;
  white-space: pre-wrap;

  // line clamp
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;

  @media ${QUERIES.tabletOnly} {
    -webkit-line-clamp: 16;
  }
  // end line clamp
`;

const Location = styled.span`
  text-transform: uppercase;
`;

const ReadMore = styled.a`
  font-weight: var(--font-weight-medium);
  font-style: italic;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`;

export default MainStory;
