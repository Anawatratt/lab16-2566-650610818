import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Anawat Rattanakitsorn",
    studentId: "650610818",
  });
};
