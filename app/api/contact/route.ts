import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("📧 Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (e.g., SendGrid, Nodemailer)
    // For now, just log and return success
    
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle GET requests (health check)
export async function GET() {
  return NextResponse.json(
    { status: "Contact API is running" },
    { status: 200 }
  );
}
