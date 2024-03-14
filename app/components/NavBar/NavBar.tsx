import { UserButton } from '@clerk/nextjs';
import { Logo } from '../Logo/Logo';

export default function NavBar() {
  return (
    <nav className="flex bg-blue-100 w-100 justify-between items-center px-3 py-1">
      <Logo width={80} height={80} />
      <UserButton />
    </nav>
  );
}
