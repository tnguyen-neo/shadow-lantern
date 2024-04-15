"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  params: { id: number; name: string };
};

export default function Item({ params }: Props) {
  const pathName = usePathname();

  return (
    <Link
      href={`${pathName}/${params.id}`}
      className="p-4 flex items-center border rounded"
    >
      {params.name}
    </Link>
  );
}
