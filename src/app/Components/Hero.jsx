import React from "react";

const Hero = () => {
    return (
        <div className=" lg:max-w-11/12 mx-auto">
            <div
                className="hero h-[80vh] rounded-xl"
                style={{
                    backgroundImage:
                        "url('/assets/images/banner/4.jpg')",
                }}
            >
                <div className="hero-overlay bg-black/60 "></div>
                <div className="hero-content  text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-7 text-2xl md:text-4xl lg:text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="mb-7 md:text-lg text-center">
                            There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form
                        </p>
                        <button className="btn rounded bg-[#FF3811] text-white border-0 shadow-none">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
