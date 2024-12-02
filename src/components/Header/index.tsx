import { Breadcrumbs } from "./Breadcrumbs";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="py-28 px-40 flex justify-between">
      <Breadcrumbs />
      <UserNav />
    </header>
  );
};
