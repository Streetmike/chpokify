import React from 'react';
import styled from 'styled-components';

import { Box } from '@components/uiKit/Box';
import { LinkComponent } from '@components/uiKit/Link';
import { Paper } from '@components/uiKit/Paper';
import { Text } from '@components/uiKit/Text';

const Section = styled(Box)`
margin-bottom: ${({ theme }) => theme.space[6]};

&:last-child {
margin-bottom: 0;
}
`;

const SubTitle = styled(Text)`
font-size: ${({ theme }) => theme.fontSizes[6]};
font-weight: ${({ theme }) => theme.fontWeights[1]};
margin-bottom: ${({ theme }) => theme.space[4]};
`;

const Description = styled(Text)`
font-size: ${({ theme }) => theme.fontSizes[2]};;
margin-bottom: ${({ theme }) => theme.space[4]};

&:last-child {
margin-bottom: 0;
}
`;

const TextListItem = styled(Text)`
font-size: ${({ theme }) => theme.fontSizes[2]};
list-style: disc;
margin-bottom: ${({ theme }) => theme.space[2]};

&:last-child {
margin-bottom: 0;
}
`;

const PrivacyPolicy = () => (
  <Paper
    variant="card"
  >
    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        What information do we collect?
      </SubTitle>

      <Description>
        We collect information from you when you register on our site, place an order, subscribe to our newsletter,
        respond to a survey or fill out a form.
      </Description>

      <Description>
        When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail
        address, mailing address, phone number, credit card information or social security number. You may, however,
        visit our site anonymously. Google, as a third party vendor, uses cookies to serve ads on your site.
        Google's use of the DART cookie enables it to serve ads to your users based on their visit to your
        sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting
        the Google ad and content network privacy policy.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        What do we use your information for?
      </SubTitle>

      <Description>
        Any of the information we collect from you may be used in one of the following ways:
      </Description>

      <Box
        as="ul"
        pl="1em"
        mb={4}
      >
        <TextListItem
          forwardedAs="li"
        >
          To personalize your experience. Your information helps us to better respond to your individual needs.
        </TextListItem>

        <TextListItem
          forwardedAs="li"
        >
          To improve our website. We continually strive to improve our website offerings based on the information
          and
          feedback we receive from you.
        </TextListItem>

        <TextListItem
          forwardedAs="li"
        >
          To improve customer service. Your information helps us to more effectively respond to your customer
          service
          requests and support needs.
        </TextListItem>

        <TextListItem
          forwardedAs="li"
        >
          To process transactions
        </TextListItem>
      </Box>

      <Description>
        Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other
        company for any reason whatsoever, without your consent, other than for the express purpose of delivering
        the
        purchased product or service requested, to administer a contest, promotion, survey or other site feature or
        to
        send periodic emails.
      </Description>

      <Description>
        The email address you provide for order processing, may be used to send you information and updates
        pertaining
        to your order, in addition to receiving occasional company news, updates, related product or service
        information, etc.
      </Description>

      <Description>
        <strong>Note:</strong>
        {' '}
        If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe
        instructions at the bottom of each email.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        How do we protect your information?
      </SubTitle>

      <Description>
        We implement a variety of security measures to maintain the safety of your personal information when you
        place
        an order or enter, submit, or access your personal information.
      </Description>

      <Description>
        We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure
        Socket
        Layer (SSL) technology and then encrypted into our Database to be only accessed by those authorized with
        special
        access rights to our systems, and are required to keep the information confidential.
      </Description>

      <Description>
        After a transaction, your private information (credit cards, social security numbers, financials, etc.) will
        not be kept on file for more than 60 days.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Do we use cookies?
      </SubTitle>

      <Description>
        Yes. Cookies are small files that a site or its service provider transfers to your computers hard drive
        through
        your Web browser (if you allow them) that enable the sites or service providers systems to recognize your
        browser and capture and remember certain information
      </Description>

      <Description>
        We use cookies to help us remember and process the items in your shopping cart, understand and save your
        preferences for future visits, keep track of advertisements and compile aggregate data about site traffic
        and
        site interaction so that we can offer better site experiences and tools in the future. We may contract with
        third-party service providers to assist us in better understanding our site visitors. These service
        providers
        are not permitted to use the information collected on our behalf except to help us conduct and improve our
        business.
      </Description>

      <Description>
        If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can
        choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off,
        some
        of our services may not function properly. However, you can still place orders over the telephone or by
        contacting customer service.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Do we disclose any information to outside parties?
      </SubTitle>

      <Description>
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
        This
        does not include trusted third parties who assist us in operating our website, conducting our business, or
        servicing you, so long as those parties agree to keep this information confidential. We may also release
        your
        information when we believe release is appropriate to comply with the law, enforce our site policies, or
        protect
        ours or others rights, property, or safety. However, non-personally identifiable visitor information may be
        provided to other parties for marketing, advertising, or other uses.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Third party links
      </SubTitle>

      <Description>
        Occasionally, at our discretion, we may include or offer third party products or services on our website.
        These
        third party sites have separate and independent privacy policies. We therefore have no responsibility or
        liability for the content and activities of these linked sites. Nonetheless, we seek to protect the
        integrity
        of
        our site and welcome any feedback about these sites.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        California Online Privacy Protection Act Compliance
      </SubTitle>

      <Description>
        Because we value your privacy we have taken the necessary precautions to be in compliance with the
        California
        Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties
        without your consent.
      </Description>

      <Description>
        As part of the California Online Privacy Protection Act, all users of our site may make any changes to their
        information at anytime by logging into their control panel and going to the 'Edit Profile' page.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Children's Online Privacy Protection Act Compliance
      </SubTitle>

      <Description>
        We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not
        collect any information from anyone under 13 years of age. Our website, products and services are all
        directed
        to people who are at least 13 years old or older.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Online Privacy Policy Only
      </SubTitle>

      <Description>
        This online privacy policy applies only to information collected through our website and not to information
        collected offline.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Your Consent
      </SubTitle>

      <Description>
        By using our site, you consent to our web site privacy policy.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Changes to our Privacy Policy
      </SubTitle>

      <Description>
        If we decide to change our privacy policy, we will post those changes on this page, send an email notifying
        you
        of any changes, and/or update the Privacy Policy modification date below.
      </Description>
    </Section>

    <Section>
      <SubTitle
        forwardedAs="h3"
      >
        Contacting Us
      </SubTitle>

      <Description>
        If there are any questions regarding this privacy policy you may contact us using the information
        below.
      </Description>

      <address>
        <LinkComponent
          href="mailto:info@chpokify.ru"
          target="_blank"
          rel="noopener noreferrer"
          mb={2}
        >
          info@chpokify.ru
        </LinkComponent>
      </address>
    </Section>
  </Paper>
);

export {
  PrivacyPolicy,
};
