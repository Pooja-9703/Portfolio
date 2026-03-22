import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch {
    return new Response("Resume not found", { status: 404 });
  }
}
