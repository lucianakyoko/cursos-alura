import { NextResponse } from "next/server";
import { getTodosProdutos } from "@/lib/api";

export async function GET() {
  const produtos = getTodosProdutos();

  return NextResponse.json({produtos});
}