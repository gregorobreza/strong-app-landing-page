import { Layout } from "@/components/layout/layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div>home</div>
      </Layout>
    </>
  );
}
