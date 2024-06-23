import Image from "next/image";
interface LProps {
  label: string;
}
export const Loader = ({ label }: LProps) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" src="/loader.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">{label} is thinking...</p>
    </div>
  );
};
