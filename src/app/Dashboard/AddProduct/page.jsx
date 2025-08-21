"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    return (
        <div className=" min-h-[calc(100vh-310px)] border-1 border-gray-200 max-w-xl p-8 mx-auto my-10">
            <h1 className="text-4xl text-center font-bold mb-8">Add Product</h1>
            <form className="max-w-3xl mx-auto p-6  rounded  space-y-4">


                <input name="partName" placeholder="Part Name" className="w-full border p-2 rounded" required />
                <input name="brand" placeholder="Brand / Manufacturer" className="w-full border p-2 rounded" required />

                <select name="category" className="w-full border p-2 rounded" required>
                    <option value="">Select Category</option>
                    <option value="Engine">Engine</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Body">Body</option>
                    <option value="Suspension">Suspension</option>
                </select>

                <input name="price" type="number" placeholder="Price" className="w-full border p-2 rounded" required />
                <select name="stock" className="w-full border p-2 rounded" required>
                    <option value="Available">Available</option>
                    <option value="Out of Stock">Out of Stock</option>
                </select>

                <textarea name="description" placeholder="Description" className="w-full border p-2 rounded" required />

                <input name="images" type="file" multiple className="w-full" required />



                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Add Product</button>
            </form>
        </div>
    );
}
