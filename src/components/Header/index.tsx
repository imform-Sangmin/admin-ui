import { Breadcrumbs } from "./Breadcrumbs";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="w-[calc(100%_-_var(--sidebar-width)_-_16px)] ml-auto py-28 px-40 flex justify-between">
      <Breadcrumbs />
      <UserNav />
    </header>
  );
};
