import Logo from "@/assets/images/logo.svg";

export const Lnb = () => {
  return (
    <section className="w-[272px] h-full py-[16px] pl-[16px] flex-none">
      <div className="flex-col gap-[24px] w-full h-full bg-gray-9 rounded-[12px]">
        <div className="pt-[60px] pb-[52px]">
          <Logo className="h-[19px] m-auto" />
        </div>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
