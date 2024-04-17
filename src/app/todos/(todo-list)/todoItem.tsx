"use client";

import { Todo } from "@/app/_redux/data";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Edit, Trash2 } from "react-feather";
import Priority from "./priority";

type Props = {
  params: Todo;
};

export default function TodoItem({ params }: Props) {
  const pathName = usePathname();

  return (
    <>
      <Card className="max-w-80">
        <CardHeader className="justify-between">
          <Link
            href={`${pathName}/${params.id}`}
            className="flex items-center text-small font-semibold leading-none text-default-600"
          >
            {params.label}
          </Link>
          <span className="flex gap-2">
            <Button
              isIconOnly
              color="default"
              radius="sm"
              size="sm"
              variant="bordered"
              onPress={() => {}}
            >
              <Edit size={16} />
            </Button>
            <Button
              isIconOnly
              className="bg-red-500 border-red-500 text-white"
              radius="sm"
              size="sm"
              onPress={() => {}}
            >
              <Trash2 size={16} />
            </Button>
          </span>
        </CardHeader>

        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure!
          </p>
          <span className="pt-2">
            #FrontendWithZoey
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>

        <CardFooter className="flex justify-between">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <Priority priority={params.priority}/>
        </CardFooter>
      </Card>
    </>
  );
}