import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Divider } from "@/src/components/UI/Divider/Divider";
import { Box } from "@/src/components/UI/Box/Box";
import { Intro } from "./_components/Intro";
import { Certificates } from "./_components/Certificates";

const Home = () => {

  return (
    <MainLayout>
      <Intro />
      <Divider sx={{mt: 5, mb: 5}}/>
      <Box mb={16}>
        <Certificates />
      </Box>
    </MainLayout>
  )
}

export default Home;