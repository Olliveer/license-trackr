import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Home() {
  return (
    <div className="">
      <SignedOut>
        <p>This content is public. Only signed out users can see this.</p>
        <SignInButton afterSignInUrl="/app" />
      </SignedOut>
      <SignedIn>
        <p>This content is private. Only signed in users can see this.</p>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}

export default Home;
