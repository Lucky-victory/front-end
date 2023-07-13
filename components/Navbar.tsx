import React from 'react';
import { ChakraProvider, Box, Flex, Button } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
function Navbar({ bg = '', color = '#fff' }) {
    const router = useRouter();
    const path = router.asPath;
    const navLinks = ['explore', 'create', 'history'];

    return (
        <Flex
            as="nav"
            py={2}
            px={4}
            className={styles.navbar}
            bg={bg}
            color={color}
        >
            <Box as="span" fontSize="2xl" fontWeight="bold">
                Cross
            </Box>

            <Box
                className={styles['navbar-links']}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexBasis={{ base: '100%', md: 'auto' }}
            >
                <Link href="/">
                    <Button
                        as="a"
                        href="/"
                        size="lg"
                        px={4}
                        py={3}
                        _hover={{ color: 'teal.600' }}
                        className={`${styles['nav-link']}  ${
                            path === '/' ? styles['nav-link-active'] : ''
                        }`}
                    >
                        Home
                    </Button>
                </Link>
                {navLinks.map((navLink) => (
                    <Link key={crypto.randomUUID()} href={'/' + navLink}>
                        <Button
                            as="a"
                            href={'/' + navLink}
                            size="lg"
                            px={6}
                            py={3}
                            _hover={{ color: 'teal.600' }}
                            className={`${styles['nav-link']} ${
                                path === '/' + navLink
                                    ? styles['nav-link-active']
                                    : ''
                            }`}
                        >
                            {navLink}
                        </Button>
                    </Link>
                ))}

                <Box ml={4} cursor="pointer">
                    <FaWallet size={24} />
                </Box>
            </Box>
        </Flex>
    );
}

export default Navbar;
