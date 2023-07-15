import { Box, useRadio } from '@chakra-ui/react';
import { FaShoppingBag } from 'react-icons/fa';

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                textTransform={'capitalize'}
                borderWidth="1px"
                borderRadius="3xl"
                boxShadow="md"
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                display={'flex'}
                gap={2}
                alignItems={'center'}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
}

export default RadioCard;
