import { NextPage } from 'next';
import { Heading, Link, Flex } from '@chakra-ui/core';
import NextLink from 'next/link';

const AboutPage: NextPage = () => (
  <Flex flexDirection="column" alignItems="center" margin={4}>
    <Heading as="h1" size="2xl" marginY="2rem">This is About page</Heading>
    <NextLink href="/" passHref>
      <Link>Home</Link>
    </NextLink>
  </Flex> 
)

export default AboutPage;