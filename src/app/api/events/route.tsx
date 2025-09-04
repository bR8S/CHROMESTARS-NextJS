import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

console.log(clientPromise); // just to see if it resolves

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("test"); // replace with your DB name

    // Fetch all users
    const events = await db.collection("events").find({}).toArray();

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Connected to MongoDB successfully!",
      events,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to MongoDB",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
