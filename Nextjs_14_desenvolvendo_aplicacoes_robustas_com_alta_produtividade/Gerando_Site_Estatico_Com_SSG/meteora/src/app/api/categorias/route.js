import { NextResponse } from "next/server";
import { getCategorias } from "@/lib/api";

export async function GET() {
  const categorias = getCategorias();

  return NextResponse.json({ categorias });
}