/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';
const Hero = () => {
    return (
        <>
            <Box
                className={styles.hero}
                bgImage={`url(/dark.jpg)`}
                // bgImage={
                //     'linear-gradient(to left, #FC1E4D, #7C22DA, #491EDF, #261710, #4D0E93)'
                // }
                bgSize="cover"
                bgPosition="center"
                height="100vh"
                position="relative"
            >
                <Flex
                    height="100%"
                    alignItems="center"
                    justifyContent="space-around"
                    px={8}
                    py={16}
                >
                    <Box maxW="md" color="white" mr={8}>
                        <Heading
                            as="h1"
                            size="4xl"
                            mb={6}
                            fontFamily="Arial"
                            style={{ minHeight: 145 }}
                        >
                            <Typewriter
                                options={{
                                    strings: ['Buy, sell and collect NFTs'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Heading>
                        <Text fontSize="2xl" mb={8} fontFamily="Arial">
                            The world's largest digital marketplace for
                            cross-chain transactions of crypto collectibles and
                            NFTs.
                        </Text>
                        {/* <Link href={'/create'}> */}
                        {/* </Link> */}
                        <Button
                            colorScheme="teal"
                            mr={6}
                            fontSize="xl"
                            bgGradient="linear(to-r, teal.500, teal.400)"
                            _hover={{
                                bgGradient: 'linear(to-r, teal.600, teal.500)',
                            }}
                            px={7}
                            py={6}
                            borderRadius={50}
                        >
                            Upload
                        </Button>

                        <Link href="/explore">
                            <Button
                                colorScheme="white"
                                variant="outline"
                                fontSize="xl"
                                border="2px"
                                px={8}
                                py={6}
                                borderRadius={50}
                                borderColor="teal.400"
                                _hover={{ bg: 'teal.100', color: 'teal.600' }}
                            >
                                Explore
                            </Button>
                        </Link>
                    </Box>
                    <Box position="relative" maxW="xl">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Box
                                position="relative"
                                display="inline-block"
                                overflow="hidden"
                                boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
                                filter="blur(1px)"
                                width="100%"
                                height="100%"
                            >
                                <Image
                                    src={'/element.jpeg'}
                                    alt="Hero Image"
                                    borderRadius="125px"
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                />
                            </Box>
                        </motion.div>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Hero;
