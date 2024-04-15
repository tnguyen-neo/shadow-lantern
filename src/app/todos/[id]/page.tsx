import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    resolve(`Item ${params.id}`);
  });
  return {
    title: title as string,
  };
};

export default function TodoDetail({ params }: Props) {
  return (
    <>
      <h1>The details of {params.id}</h1>
    </>
  );
}
