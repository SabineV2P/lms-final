import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={130}
      width={130}
      priority={true}
      alt="logo"
      src={"/logo.svg"}
      className="rounded dark:bg-slate-500"
    />
  );
};
