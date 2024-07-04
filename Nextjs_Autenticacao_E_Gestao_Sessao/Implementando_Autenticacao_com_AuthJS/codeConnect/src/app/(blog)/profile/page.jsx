import { options } from "@/app/api/auth/[...nextauth]/options";
import { ProfileImageUploader } from "@/components/ProfileImageUploader";
import { getServerSession } from "next-auth";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession(options);
  
  if (!session || !session.user) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return (
    <section>
      <h1 style={{ color: "white" }}>Profile</h1>

      <ProfileImageUploader user={user} />
    </section>
  );
}
