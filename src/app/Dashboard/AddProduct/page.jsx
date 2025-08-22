"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;


        const imageFile = form.images.files[0];


        const formData = new FormData();
        formData.append("image", imageFile);

        const imgbbRes = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            {
                method: "POST",
                body: formData,
            }
        );

        const imgbbData = await imgbbRes.json();
        const imageUrl = imgbbData.data.url;


        const product = {
            title: form.partName.value,
            brand: form.brand.value,
            category: form.category.value,
            price: parseFloat(form.price.value),
            stock: form.stock.value,
            description: form.description.value,
            img: imageUrl,
            userEmail: session.user.email,
        };


        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            toast.success("Product Added Successfully!");
            form.reset();
        } else {
            toast.error("Failed: " + data.error);
        }
    };

    return (
        <div className="min-h-[calc(100vh-310px)] border border-gray-200 max-w-xl p-8 mx-auto my-10">
            <h1 className="text-4xl text-center font-bold mb-8">Add Product</h1>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 rounded space-y-4">

                <div>
                    <label htmlFor="partName" className="block mb-1 font-medium">Name</label>
                    <input id="partName" name="partName" placeholder="Part Name" className="w-full border p-2 rounded" required />
                </div>

                <div>
                    <label htmlFor="brand" className="block mb-1 font-medium">Brand / Manufacturer</label>
                    <input id="brand" name="brand" placeholder="Brand / Manufacturer" className="w-full border p-2 rounded" required />
                </div>

                <div>
                    <label htmlFor="category" className="block mb-1 font-medium">Category</label>
                    <select id="category" name="category" className="w-full border p-2 rounded" required>
                        <option value="">Select Category</option>
                        <option value="Engine">Engine</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Body">Body</option>
                        <option value="Suspension">Suspension</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="price" className="block mb-1 font-medium">Price</label>
                    <input id="price" name="price" type="number" placeholder="Price" className="w-full border p-2 rounded" required />
                </div>

                <div>
                    <label htmlFor="stock" className="block mb-1 font-medium">Stock Status</label>
                    <select id="stock" name="stock" className="w-full border p-2 rounded" required>
                        <option value="Available">Available</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="description" className="block mb-1 font-medium">Description</label>
                    <textarea id="description" name="description" placeholder="Description" className="w-full border p-2 rounded" required />
                </div>

                <div>
                    <label htmlFor="images" className="block mb-1 font-medium">Upload Image</label>
                    <input id="images" name="images" type="file" accept="image/*" className="w-full" required />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                >
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
            <ToastContainer position="top-right" newestOnTop />
        </div>
    );
}
