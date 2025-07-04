import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
      <Logo />
      <p>
        <b>0 / 0</b> todos completed
      </p>
    </header>
  );
}
