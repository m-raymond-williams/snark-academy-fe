export async function GET() {
    console.log("Within the API route");
    const url = `${process.env.PAYLOAD_URL}api/globals/home`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `users API-Key ${process.env.PAYLOAD_API_KEY}`
    },
    })
    const data = await res.json();
    console.log(data);
    

    return Response.json({ data })
  }