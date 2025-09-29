export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body)
    console.log("Received body:", body);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwJi9lGdLUIRmn9eGP8QtcPUgOU-XUToc7aB3gmWU2qU64XBjjtXceub95HmWCT3G4/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();
    console.log("Google Script Response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Invalid JSON from Google Script",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to submit" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
