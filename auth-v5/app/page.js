import SignIn from "@/components/auth/sign-in";
import SignOut from "@/components/auth/sign-out";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="container">
      <div className="box flex justify-center items-center">
        {session && session.user ?
          <div>
            <h1>Logged in as {session.user.name}</h1>
            <div className=""><SignOut /></div>
          </div> : <SignIn />}
      </div>
    </div>
  );
}
