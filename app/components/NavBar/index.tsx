'use client';
import { Logo, SignInButton } from '@/app/components';

export default function NavBar() {
  return (
    <nav className="container flex w-100 justify-between items-center py-6">
      <Logo width={70} height={70} />
      <SignInButton />
    </nav>
  );
}
