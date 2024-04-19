import { Box, Container, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { FaUserSecret, FaTools, FaNetworkWired } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Приложение для тестирования на проникновение
          </Heading>
          <Text fontSize="xl">Инструменты и ресурсы для безопасности вашей сети</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTcxMzU2ODE1N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cyber Security" />

        <VStack spacing={5}>
          <Button leftIcon={<FaUserSecret />} colorScheme="teal" size="lg">
            Анализ уязвимостей
          </Button>
          <Button leftIcon={<FaTools />} colorScheme="orange" size="lg">
            Инструменты тестирования
          </Button>
          <Button leftIcon={<FaNetworkWired />} colorScheme="purple" size="lg">
            Сетевое мониторинг
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
