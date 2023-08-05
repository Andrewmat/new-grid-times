import React from 'react';
import styled, { css } from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList tabletDirection="row">
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr minmax(26ch, 1fr);
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';

    // vertical border between grid columns
    gap: 0 1px;
    background: var(--color-gray-300);
    margin-top: 80px;
    margin-bottom: 64px;
    margin-left: -16px;
    margin-right: -16px;

    & > * {
      padding: 0px 16px;
      background: var(--color-gray-100);
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 6.6fr 5.4fr 4fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > :not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
  }

  // row direction
  ${(p) =>
    p.tabletDirection === 'row' &&
    css`
      @media ${QUERIES.tabletOnly} {
        flex-direction: row;
        & > * {
          flex: 1;
          &:not(:last-of-type) {
            border-bottom: revert;
            padding-bottom: revert;
          }
        }
      }
    `}
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    // vertical alignment with border
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    // forcing top border in layout
    & > :first-child {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--color-gray-300);
    }
  }
`;

export default MainStoryGrid;
