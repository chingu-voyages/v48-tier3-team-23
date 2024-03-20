'use client';

import { Button } from '@/components/ui/button';
import { UserButton, useClerk } from '@clerk/nextjs';

const SignInButton = () => {
  const clerk = useClerk();

  if (clerk.user) {
    return <UserButton afterSignOutUrl="/" />;
  }

  return <Button onClick={() => clerk.openSignIn()}>Sign in</Button>;
};

export { SignInButton };
