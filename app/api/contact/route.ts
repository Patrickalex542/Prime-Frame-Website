import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Toate câmpurile sunt obligatorii." }, { status: 400 })
    }

    console.log("Contact form submission:", { name, email, message })

    // Aici s-ar integra serviciul de email (ex: Resend, SendGrid)
    // Momentan simulam succesul pentru a permite testarea flow-ului functional

    return NextResponse.json({ success: true, message: "Mesajul a fost recepționat!" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json({ error: "A apărut o eroare la procesarea mesajului." }, { status: 500 })
  }
}
