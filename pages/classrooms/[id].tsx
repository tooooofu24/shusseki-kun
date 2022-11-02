import { Button, Skeleton } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft, Pencil } from "phosphor-react";
import { useEffect, useState } from "react";
import { ClassroomDetail } from "../../components/classroom/detail/Index";
import { AuthContent } from "../../components/common/AuthContent";
import { CommonError } from "../../components/common/error/CommonError";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { Tile } from "../../components/common/Tile";
import { useClassroom } from "../../hooks/Classroom";

const CreatePage: NextPage = () => {
  const { classroom, getClassroom, isLoading } = useClassroom();
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    getClassroom(String(id)).catch((e: any) => {
      setError(e.message);
    });
  }, [router]);

  const Title = () => {
    return isLoading ? (
      <Skeleton height={7} w="100px" />
    ) : classroom ? (
      <>{classroom?.grade + "年" + classroom?.name + "組"}</>
    ) : null;
  };

  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title={<Title />}
          icon={<CaretLeft />}
          iconUrl="/classrooms"
        />
        {error ? (
          <Tile>
            <CommonError message="データを取得できませんでした" error={error} />
          </Tile>
        ) : (
          <ClassroomDetail classroom={classroom} />
        )}
      </Layout>
    </AuthContent>
  );
};

export default CreatePage;
