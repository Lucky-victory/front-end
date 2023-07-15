import React, { useState } from 'react';
import { Box, Flex, Button, Heading } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';
function Navbar({ bg = '' }) {
    const router = useRouter();
    const path = router.asPath;
    const navLinks = ['explore', 'create', 'history'];
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Flex
            as="nav"
            py={2}
            px={4}
            className={`${styles.navbar} ${styles[bg]}`}
        >
            <Link href={'/'}>
                <Heading
                    cursor={'pointer'}
                    _hover={{ color: 'teal.500' }}
                    as="span"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Cross
                </Heading>
            </Link>
            <Flex alignItems={'center'}>
                <Box
                    className={`${styles['navbar-links']} ${
                        isOpen ? styles['open'] : ''
                    }`}
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

                    {/* <Box mr={4} ml={4} cursor="pointer">
                        <FaWallet size={24} />
                    </Box> */}
                    <div className={styles['connect-btn-wrap']}>
                        <ConnectButton />
                    </div>
                </Box>
                <Box className={styles['menu-toggle']}>
                    <Button
                        p={'0.25rem'}
                        mr={2}
                        color={'inherit'}
                        bg={'transparent'}
                        borderRadius={50}
                        h={'48px'}
                        w={'48px'}
                        _hover={{ bg: 'teal.300' }}
                        onClick={() => toggleMenu()}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Navbar;
