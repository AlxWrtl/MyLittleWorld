import { type ActionFunctionArgs } from "react-router";
import { db } from "~/db.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await db.user.create({ data: { email, password } });
}
