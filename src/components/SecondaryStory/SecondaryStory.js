import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Container>
        <Wrapper>
          <Image alt={image.alt} src={image.src} />
          <Heading>{title}</Heading>
          <AbstractWrapper>
            <Abstract>{abstract}</Abstract>
          </AbstractWrapper>
        </Wrapper>
      </Container>
    </a>
  );
};

const Container = styled.div`
  container-type: inline-size;
`;

const Wrapper = styled.article`
  display: grid;
  gap: 4px 16px;
  color: var(--color-gray-900);
  grid-template-columns: auto;
  grid-template-areas:
    'image'
    'heading'
    'abstract';

  @container (min-width: 40ch) {
    grid-template-areas:
      'image heading'
      'image abstract';
    grid-template-columns: 120px 1fr;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const AbstractWrapper = styled.div`
  grid-area: abstract;
`;

const Abstract = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default SecondaryStory;
