/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image as CHUIImage,
    Text,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
const Hero = () => {
    return (
        <>
            <Box
                className={styles.hero}
                bgImage={`url(/bg.jpg)`}
                bgSize="cover"
                bgPosition="center"
                minHeight="100vh"
            >
                <Flex
                    // height="100%"
                    // alignItems="center"
                    justifyContent="space-around"
                    className={styles['hero-inner']}
                    px={8}
                    mt={8}
                    // py={8}
                >
                    <Box maxW="md" color="white" mr={8} zIndex={3}>
                        <Heading
                            as="h1"
                            size="4xl"
                            mb={6}
                            fontFamily="Arial"
                            style={{ minHeight: 145 }}
                        >
                            <Typewriter
                                options={{
                                    wrapperClassName:
                                        styles['type-writer-text'],
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
                        <Link href={'/create'}>
                            <Button
                                colorScheme="teal"
                                mr={6}
                                fontSize="xl"
                                bgGradient="linear(to-r, teal.500, teal.400)"
                                _hover={{
                                    bgGradient:
                                        'linear(to-r, teal.600, teal.500)',
                                }}
                                px={7}
                                py={6}
                                borderRadius={50}
                            >
                                Upload
                            </Button>
                        </Link>

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
                                // overflow="hidden"
                                width="100%"
                                height="100%"
                                maxH={650}
                                mb={4}
                            >
                                <CHUIImage
                                    src={'/nft-trans.png'}
                                    alt="Hero Image"
                                    width="100%"
                                    height="100%"
                                    objectFit="contain"
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
