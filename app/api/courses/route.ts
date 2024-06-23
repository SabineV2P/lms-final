import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
// import { isTeacher } from "@/lib/teacher";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    const { title } = await req.json();

    if (!userId || user.role === "USER") {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
