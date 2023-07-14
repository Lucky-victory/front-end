/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Textarea,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ImageDropArea from '../components/ImageDropArea';

const CreatePage = () => {
    return (
        <>
            <Navbar bg={'rgba(255,255,255,0.75)'} color={'#6d7575 '} />
            <Box
                mt={'calc(2rem + var(--navbar-height))'}
                maxW={800}
                ml={'auto'}
                mr={'auto'}
                pt={8}
            >
                <FormControl>
                    <FormLabel htmlFor="image-select">Image</FormLabel>

                    <Box minH={'180px'}>
                        <ImageDropArea />
                    </Box>
                    <FormLabel htmlFor="name-inp">Name</FormLabel>
                    <Input
                        minH={12}
                        id="name-inp"
                        placeholder="Item name"
                        mb={4}
                        _focus={{ borderColor: 'teal.600' }}
                    />
                    <FormLabel htmlFor="desc">Description</FormLabel>
                    <Text fontSize={14} mb={2}>
                        The description will be included on the item's detail
                        page underneath its image.
                    </Text>
                    <Textarea
                        placeholder="Provide a detailed description of your item"
                        minH={32}
                        id="desc"
                        resize={'none'}
                        // _focusVisible={{ borderColor: 'teal.600' }}
                        _focus={{ borderColor: 'teal.600' }}
                    />
                    <Button
                        color={'white'}
                        size={'lg'}
                        minW={160}
                        mt={6}
                        borderRadius={50}
                        _hover={{ bg: 'teal.300', color: 'teal.700' }}
                        bg={'teal.600'}
                    >
                        Create
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default CreatePage;
