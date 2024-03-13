import { routing, ROUTING_EXTERNAL } from '@chpokify/routing';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';
import React from 'react';
import styled from 'styled-components';

import { DEFAULT_LOCALE } from '@components/domains/core/types';

import { Box, TBoxProps } from '@components/uiKit/Box';
import { Grid } from '@components/uiKit/Grid';
import {
  IconFacebook, IconLogo, IconSocialDiscord, IconYoutube,
} from '@components/uiKit/Icons';
import { LinkComponent } from '@components/uiKit/Link';
import { PAGE_MAX_WIDTH } from '@components/uiKit/PageLayout';
import { Text } from '@components/uiKit/Text';

import { TRANS } from '@components/utils/types';

import { detect } from '@lib/detect';
import { support } from '@lib/support';

const SocialItem = styled(Box)<TBoxProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii[2]};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: ${({ theme }) => theme.space[2]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.base.a_30};
  }
`;

const blogUrl = routing.getBlogUrl();
const communityUrl = routing.getCommunityUrl();

const Footer = () => {
  const { t } = useTranslation(TRANS.MAIN);

  const handleSupportClick = () => {
    support.openEmailModal();
  };

  if (detect.isChpokifyIOSApp) {
    return null;
  }

  return (
    <Box
      bg="base.normal"
      px={[3, null, 6]}
    >
      <Grid
        gridTemplateColumns={[
          'repeat(2, minmax(auto, 200px))',
          'repeat(3, minmax(auto, 200px))',
          'repeat(5, minmax(auto, 200px))',
        ]}
        gridGap={[4, 8, 18]}
        justifyContent="center"
        py={8}
        maxWidth={PAGE_MAX_WIDTH}
        mx="auto"
      >
        <Box>
          <IconLogo
            width="91px"
            height="18px"
            mb={4}
          />

          <Grid
            gridTemplateColumns="auto auto auto"
            justifyContent="flex-start"
            gridGap={2}
            mb={4}
          >
          </Grid>

          <Text
            fontSize={2}
          >
            {t('footer.allRights', {
              year: format(new Date(), 'yyyy'),
            })}
          </Text>
        </Box>

        <Box>
          <Text
            fontSize={3}
            fontWeight={1}
            mb={4}
          >
            {t('footer.productTitle')}
          </Text>

          <Grid
            as="ul"
            justifyContent="flex-start"
            gridGap={2}
          >
            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getAgileEcosystemUrl()}
                isExternal={false}
                target="_blank"
              >
                {t('footer.agileEcosystemLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getSaveTimeOfEstimationsUrl()}
                isExternal={false}
                target="_blank"
              >
                {t('footer.saveTimeOfEstimationsLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getLandingRetroUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.retroLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getPrivacyPolicyUrl()}
                isExternal={false}
                target="_blank"
              >
                {t('footer.privacyPolicyLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getTermsOfUseUrl()}
                isExternal={false}
                target="_blank"
              >
                {t('footer.termsOfUseLink')}
              </LinkComponent>
            </Box>
            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getSitemapUrl()}
                isExternal={false}
                target="_blank"
              >
                {t('footer.sitemapLink')}
              </LinkComponent>
            </Box>
          </Grid>
        </Box>

        <Box>
          <Text
            fontSize={3}
            fontWeight={1}
            mb={4}
          >
            {t('footer.resourcesTitle')}
          </Text>

          <Grid
            as="ul"
            justifyContent="flex-start"
            gridGap={2}
          >
            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getEventsUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.eventsLink')}
              </LinkComponent>
            </Box>
            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getPlanningPokerGuideUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.howToPlayPokerLik')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getJiraConnectUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.howToConnectJiraLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getIcebreakerQuestions()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.icebreakerQuestionsLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={communityUrl}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.communityLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={blogUrl}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.blogLink')}
              </LinkComponent>
            </Box>
          </Grid>
        </Box>

        <Box>
          <Text
            fontSize={3}
            fontWeight={1}
            mb={4}
          >
            {t('footer.companyTitle')}
          </Text>

          <Grid
            as="ul"
            justifyContent="flex-start"
            gridGap={2}
          >
            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getPurposeLink()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.purposeLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getPressUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.pressLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getTeamUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.teamLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                href={routing.getJoinUrl()}
                isExternal={false}
                target="_blank"
                locale={DEFAULT_LOCALE}
              >
                {t('footer.joinLink')}
              </LinkComponent>
            </Box>
          </Grid>
        </Box>

        <Box>
          <Text
            fontSize={3}
            fontWeight={1}
            mb={4}
          >
            {t('footer.helpTitle')}
          </Text>

          <Grid
            as="ul"
            justifyContent="flex-start"
            gridGap={2}
          >
            <Box
              as="li"
            >
              <LinkComponent
                onClick={handleSupportClick}
              >
                {t('footer.supportLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                onClick={handleSupportClick}
              >
                {t('footer.reportBugLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                onClick={handleSupportClick}
              >
                {t('footer.leaveFeedbackLink')}
              </LinkComponent>
            </Box>

            <Box
              as="li"
            >
              <LinkComponent
                target="_blank"
                isExternal={false}
                href={routing.getContactUrl()}
              >
                {t('footer.contactUsLink')}
              </LinkComponent>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export {
  Footer,
};
