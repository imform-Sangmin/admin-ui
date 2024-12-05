import { Breadcrumbs } from "./Breadcrumbs";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="w-full ml-auto py-28 px-40 flex justify-between">
      <Breadcrumbs />
      <UserNav />
    </header>
  );
};
