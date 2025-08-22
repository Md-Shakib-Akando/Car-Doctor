import dbConnect from "@/lib/Mongodb";


export async function POST(req) {
    try {
        const body = await req.json();
        const productsCollection = dbConnect("products");

        const result = await productsCollection.insertOne(body);

        if (result.insertedId) {
            return Response.json({ success: true, id: result.insertedId });
        } else {
            return Response.json({ success: false, error: "Insert failed" }, { status: 500 });
        }
    } catch (error) {
        console.error("❌ Product Insert Error:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
