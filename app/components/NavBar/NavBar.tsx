import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import image from '../../Logo.svg';

export default function NavBar() {
  return (
    <nav className="flex bg-blue-100 w-100 justify-between items-center px-3 py-1">
      <Image src={image} alt="RiverBank" width={80} height={80} />
      <UserButton />
    </nav>
  );
}
