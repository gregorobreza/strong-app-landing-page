import { TestCard } from "@/components/styledComponents/testCard";
import { Container, Stack } from "@mantine/core";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container size={450} px="xs" sx={{ display: "flex", height: "100vh", alignItems: "center", justifyContent:"center"}}>
      
          <TestCard />
   
      </Container>
    </>
  );
}
