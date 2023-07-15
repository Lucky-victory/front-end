/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Text,
    useRadio,
    useRadioGroup,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaDirections, FaExchangeAlt, FaShoppingBag } from 'react-icons/fa';
import RadioCard from '../components/RadioCard';
const HistoryPage = () => {
    const options = ['crosschain', 'interchain'];

    const { getRootProps, getRadioProps: getGroupRadioProps } = useRadioGroup({
        name: 'txs-type',
        defaultValue: 'crosschain',
        onChange: console.log,
    });

    const group = getRootProps();
    return (
        <div className={'page'}>
            <Navbar />
            <Box
                px={6}
                minH={450}
                mt={'calc(2rem + var(--navbar-height))'}
                maxW={800}
                ml={'auto'}
                mr={'auto'}
                pt={8}
                mb={6}
            >
                <FormControl>
                    <Flex h={'48px'}>
                        <Input
                            _focus={{ borderColor: 'teal.400' }}
                            borderTopLeftRadius={50}
                            borderBottomLeftRadius={50}
                            type="search"
                            h={'100%'}
                            placeholder="Search History"
                        />
                        <Button
                            h={'100%'}
                            minW={'100px'}
                            colorScheme="teal"
                            borderTopRightRadius={50}
                            borderBottomRightRadius={50}
                        >
                            Search
                        </Button>
                    </Flex>
                </FormControl>

                <Box mt={6} pl={3}>
                    <Heading as="h3" size={'md'}>
                        Choose Transaction Type
                    </Heading>
                    <Box mt={6}>
                        <HStack {...group}>
                            {options.map((value) => {
                                const radio = getGroupRadioProps({ value });
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value === 'crosschain' ? (
                                            <FaShoppingBag type="outline" />
                                        ) : (
                                            <FaExchangeAlt />
                                        )}

                                        {value}
                                    </RadioCard>
                                );
                            })}
                        </HStack>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </div>
    );
};

export default HistoryPage;
