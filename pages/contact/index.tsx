import { NextPage } from "next";
import { ChatsCircle, EnvelopeSimple, Users } from "phosphor-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContent } from "../../components/common/AuthContent";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { Layout } from "../../components/common/Layout";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { PageTitle } from "../../components/common/PageTitle";
import { ContactPage } from "../../components/contact/Index";

const UsersPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle title="お問合せ" icon={<ChatsCircle />} iconUrl="" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <ContactPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default UsersPage;
