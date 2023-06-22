import { Spinner } from "@/components/Spinner";
import DefaultLayout from "@/layout/default-layout/page";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const workspaceSlug: string = "deepak";
  return (
    <DefaultLayout>
      <Link href={`/${workspaceSlug}`}>
        <button className="flex items-center gap-1">
          <div> Go to workspace </div>
        </button>
      </Link>
    </DefaultLayout>
  );
};

export default page;
