import React from "react";
import { Head } from "@inertiajs/react";

const Home = ({ title, description }) => {
    return (
        <>
           <Head>
               <title>{title}</title>
               <meta name="description" content={description} />
           </Head>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-blue-500">
                    Halo dari Inertia dan React!
                </h1>
            </div>
        </>
    );
};

export default Home;
