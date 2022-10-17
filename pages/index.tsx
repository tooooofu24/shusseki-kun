import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CalendarCheck } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import { Schedule } from "../components/schedules/Index";
import Router from "next/router";
import { Pencil } from "phosphor-react";

const TopPage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="時間割"
        icon={<CalendarCheck size={25} />}
        iconUrl="/"
        rightItem={
          <Button
            leftIcon={<Pencil />}
            onClick={() => Router.push("/schedules/edit")}
          >
            編集
          </Button>
        }
      />
      <Schedule />
    </>
  );
};

export default TopPage;
