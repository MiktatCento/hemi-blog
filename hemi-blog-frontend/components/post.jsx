import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export default function PostComponent({ postInfo }) {
    return (
        <Box pos="relative" h="100%" w="100%">
            <Box pos="absolute" top="0" right="0" left="0" bottom="0" bgSize="cover" bgPos="center" filter="blur(.1px)" bgImage="url(https://upload.wikimedia.org/wikipedia/tr/d/d3/Windows_11_Yeni_Ekran_Görüntüsü.jpg)" borderRadius="lg" />
            <Box pos="absolute" top="0" right="0" left="0" bottom="0" bgGradient='linear-gradient(to bottom, transparent 0%, black 100%)' opacity=".9" borderRadius="lg" />
            <Box pos="absolute" left="0" bottom="0" padding="16px">
                <Flex flexDir="column">
                    <Text alignSelf="start" color="white" bgColor="red" fontWeight="bold" fontSize=".85rem" px={2} py={.5}>Teknoloji</Text>
                    <Text alignSelf="start" color="white" fontWeight="bold">{postInfo.title}</Text>
                    <Text alignSelf="start" color="white" >Miktat Cento</Text>
                </Flex>
            </Box>
        </Box>
    )
}