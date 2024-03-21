'use client';

import { Button, type ButtonProps } from '@/components/ui/button';
import { UserButton, useClerk } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';

type ButtonSizes = ButtonProps['size'];

const SignInButton = ({
  withIcon,
  size,
}: {
  withIcon?: boolean;
  size?: ButtonSizes;
}) => {
  const clerk = useClerk();

  if (clerk.user) {
    return <UserButton afterSignOutUrl="/" />;
  }

  return (
    <Button onClick={() => clerk.openSignIn()} size={size}>
      {withIcon && <LogIn className="mr-2 h-4 w-4" />}Sign in
    </Button>
  );
};

export { SignInButton };
