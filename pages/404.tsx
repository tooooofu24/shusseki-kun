import { Button, Flex, Img, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { House } from "phosphor-react";

const NotFound: NextPage = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      h="full"
      justifyContent="center"
      pt="10vh"
    >
      <Img
        src="/img/not-found.png"
        alt="寂しい女の子のイラスト"
        width="350px"
      />
      <Text>お探しのページが見つかりませんでした。</Text>
      <Link href="/">
        <a>
          <Button marginTop={10} leftIcon={<House />}>
            トップページに戻る
          </Button>
        </a>
      </Link>
    </Flex>
  );
};

export default NotFound;
