import { RoleGate } from "@/components/auth/role-gate";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGate allowedRole="ADMIN">
      <>{children}</>
    </RoleGate>
  );
};

export default TeacherLayout;
