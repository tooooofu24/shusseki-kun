import { Box, Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { GuestTitle } from "../../components/common/guest/GuestTitle";
import { A } from "../../components/common/Link";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { ContactPage } from "../../components/contact/Index";

const TopPage: NextPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
      <Suspense fallback={<LoadingTile />}>
        <Flex
          w="100%"
          h="100%"
          position="fixed"
          display="grid"
          alignItems="center"
          justifyContent="center"
        >
          <Box maxW="90vw" width="700px">
            <Box>
              <GuestTitle>お問合せ</GuestTitle>
              <ContactPage />
              <A href="/login" mt={3} textAlign="center" fontSize="sm">
                ログインはこちら
              </A>
            </Box>
          </Box>
        </Flex>
      </Suspense>
    </ErrorBoundary>
  );
};

export default TopPage;
