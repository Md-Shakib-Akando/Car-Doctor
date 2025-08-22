import dbConnect from "@/lib/Mongodb";

export async function GET() {
    try {
        const productsCollection = await dbConnect("products");
        const products = await productsCollection.find({}).toArray();
        return Response.json(products);
    } catch (err) {
        console.error(err);
        return Response.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
export async function POST(req) {
    try {
        const body = await req.json();
        const productsCollection = await dbConnect("products");

        const result = await productsCollection.insertOne(body);

        if (result.insertedId) {
            return Response.json({ success: true, id: result.insertedId });
        } else {
            return Response.json({ success: false, error: "Insert failed" }, { status: 500 });
        }
    } catch (error) {
        console.error("Product Insert Error:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
