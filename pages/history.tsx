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
const HistoryPage=()=>{
   return <>
   
   <Navbar bg={'rgba(255,255,255,0.75)'} color={'#6d7575 '} />
            <Box
                mt={'calc(2rem + var(--navbar-height))'}
                maxW={800}
                ml={'auto'}
                mr={'auto'}
                pt={8}
            >
History Page
</Box>
   </>
}

export default HistoryPage