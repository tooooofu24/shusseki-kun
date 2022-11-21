import { NextPage } from "next";
import { EnvelopeSimple, Users } from "phosphor-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContent } from "../../components/common/AuthContent";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { Layout } from "../../components/common/Layout";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { PageTitle } from "../../components/common/PageTitle";
import { ContactPage } from "../../components/contact/Index";
import { UserList } from "../../components/users/Index";
import { InviteButton } from "../../components/users/InviteButton";

const UsersPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
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
