import { Box, Button, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
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
            <ContactPage />
          </Box>
        </Flex>
      </Suspense>
    </ErrorBoundary>
  );
};

export default TopPage;
