/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Image } from '@chakra-ui/react';
import React, { useEffect, useState, useCallback } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

function ImageDropArea({}) {
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState<
        Array<{ id: number; src: string | ArrayBuffer | null }>
    >([]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.map((file, index) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    { id: index, src: e.target && e.target.result },
                ]);
            };
            reader.readAsDataURL(file);
            return file;
        });
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
        onDrop,
        maxFiles: 1,
    });

    return (
        <section className="container">
            {/* @ts-ignore */}
            <Box
                {...getRootProps({
                    className: 'dropzone',
                    minH: '10rem',
                    textAlign: 'center',
                    maxW: '600px',
                    border: '2px dashed lightgrey',
                    borderRadius: '0.5rem ',
                    p: '1rem',
                })}
            >
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </Box>
            <Box mb={8}>
                <Flex gap={'0.75rem'} pt={'1rem'}>
                    {images.map((image) => (
                        <Box h={'10rem'} w={'10rem'} key={crypto.randomUUID()}>
                            <Image
                                w={'100%'}
                                h={'100%'}
                                alt="preview"
                                src={image.src as string}
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </section>
    );
}

export default ImageDropArea;
