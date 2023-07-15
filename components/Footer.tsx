import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Text,
} from '@chakra-ui/react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Box
                className="footer-container"
                width="100%"
                p={8}
                bg={'gray.200'}
                minH={300}
            >
                <Flex
                    className={styles['footer-content']}
                    justify={'space-between'}
                >
                    <Box className="logo-container">
                        <Heading
                            _hover={{ color: 'teal.400' }}
                            as="h4"
                            className="logo"
                            size="md"
                            display={'inline-block'}
                        >
                            <Link href={'/'}>Cross</Link>
                        </Heading>
                        <Text mt={8} mb={8} maxW={250}>
                            Create, sell and collect truly rare digital
                            artworks. Powered by Axelar.
                        </Text>
                    </Box>
                    <Box className="subscribe-form">
                        <Text
                            wordBreak={'normal'}
                            className="subtitle"
                            mb={6}
                            fontWeight={500}
                        >
                            Join our newsletter and never miss out on Latest
                            Updates.
                        </Text>
                        <FormControl as={'form'}>
                            <Flex maxW={500} w={'100%'}>
                                <Input
                                    required
                                    borderColor={'gray.400'}
                                    type="email"
                                    className="email-input"
                                    placeholder="Enter your email"
                                    borderTopLeftRadius={'50px'}
                                    borderBottomLeftRadius={'50px'}
                                    flex={1}
                                    _focus={{ borderColor: 'teal.400' }}
                                />
                                <Button
                                    colorScheme="teal"
                                    borderTopRightRadius={'50px'}
                                    borderBottomRightRadius={'50px'}
                                    className="subscribe-button"
                                    minW={120}
                                    type="submit"
                                >
                                    Subscribe
                                </Button>
                            </Flex>
                        </FormControl>
                    </Box>
                </Flex>
            </Box>
        </footer>
    );
};

export default Footer;
