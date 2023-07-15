/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Text,
    Textarea,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ImageDropArea from '../components/ImageDropArea';
import Footer from '../components/Footer';
import { Web3Storage } from 'web3.storage';
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import Head from 'next/head'
// Construct with token and endpoint
const apiToken = process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN as string;
const client = new Web3Storage({ token: apiToken });

const CreatePage = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [fields, setFields] = useState({
        name: '',
        description: '',
        blockchain: '',
    });
    function onUploadChange(hasImage: boolean, files: File[]) {
        console.log({ hasImage });
        setFiles(files);
    }
    async function handleFormSubmit(evt: FormEvent<HTMLDivElement>) {
        evt.preventDefault();

        try {
            const cid = await client.put(files, { name: fields.name });
            console.log({ cid });
        } catch (error) {
            console.log('error', error);
        }
    }
    function handleInputChange(
        evt: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const target = evt.target;
        const { name, value } = target;
        setFields((prev) => ({ ...prev, [name]: value }));
        console.log(fields);
    }
    return (
        <div className="page">
            <Head>
                <title>Create</title>
                <meta
                    content="Cross | Buy, Sell and Collect NFTs"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <Navbar />
            <Box
                mt={'calc(2rem + var(--navbar-height))'}
                maxW={800}
                ml={'auto'}
                mr={'auto'}
                pt={8}
                pb={8}
            >
                <Heading textAlign={'center'} mt={8} mb={8}>
                    Create
                </Heading>
                <FormControl
                    onSubmit={(evt) => handleFormSubmit(evt)}
                    as={'form'}
                >
                    <FormLabel htmlFor="image-select">
                        Image
                        <Text as={'span'} color={'red.500'}>
                            *
                        </Text>
                    </FormLabel>
                    <Text fontSize={14} mb={2}>
                        Drag or choose your file to upload
                    </Text>
                    <Box minH={'180px'}>
                        <ImageDropArea onUploadChange={onUploadChange} />
                    </Box>
                    <FormLabel mt={4} htmlFor="name-inp">
                        Name
                        <Text as={'span'} color={'red.500'}>
                            *
                        </Text>
                    </FormLabel>
                    <Input
                        required
                        value={fields.name}
                        minH={12}
                        name="name"
                        onChange={handleInputChange}
                        id="name-inp"
                        placeholder="Item name"
                        mb={4}
                        _focus={{ borderColor: 'teal.600' }}
                    />
                    <FormLabel mt={4} htmlFor="desc">
                        Description
                    </FormLabel>
                    <Text fontSize={14} mb={2}>
                        The description will be included on the item's detail
                        page underneath its image.
                    </Text>
                    <Textarea
                        onChange={handleInputChange}
                        placeholder="Provide a detailed description of your item"
                        minH={32}
                        name="description"
                        id="desc"
                        resize={'none'}
                        // _focusVisible={{ borderColor: 'teal.600' }}
                        _focus={{ borderColor: 'teal.600' }}
                    />
                    <FormLabel mt={4} htmlFor="blockchain-inp">
                        BlockChain
                        {/* <Text as={'span'} color={'red.500'}>
                            *
                        </Text> */}
                    </FormLabel>

                    <Select
                        onChange={handleInputChange}
                        name="blockchain"
                        minH={12}
                        _focus={{ borderColor: 'teal.600' }}
                        id="blockchain-inp"
                    >
                        <option disabled selected>
                            Select Chain
                        </option>
                        <option>opt 1</option>
                        <option>opt 2</option>
                    </Select>
                    <Button
                        type="submit"
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
            <Footer />
        </div>
    );
};

export default CreatePage;
