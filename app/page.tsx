import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <button className="bg-blue-500 hoiv">
            Sign Up
          </button>

        </SignUpButton>
      </SignedOut>


      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}
