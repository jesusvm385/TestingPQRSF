import { FiHome, FiCompass } from 'react-icons/fi';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { BsGear } from 'react-icons/bs'
import Sidebar from '../components/sidebar';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Inicio () {
    const pages_to_go = [
        {
            "title": "Inicio",
            "link": "/inicio",
            "icon": FiHome
        },
        {
            "title": "Registro",
            "link": "/registro",
            "icon": HiOutlineDocumentPlus
        },
        {
            "title": "Seguimiento",
            "link": "/tramite",
            "icon": FiCompass
        },
        {
            "title": "Configuración",
            "link": "/configuracion",
            "icon": BsGear
        }
    ]
    return (
        <Flex>
            <Sidebar options={pages_to_go} />
            <Box>
                <Text>
                    Hola mundo
                </Text>
            </Box>
        </Flex>
    )
}