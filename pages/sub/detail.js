import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

export default function detail() {
  return (
    <Layout>
      <div className="flex">
        <div className="w-1/2 mx-auto h-full text-center bg-red-200">
          <h1>Bicycle name ko</h1>
          <h3>Bicycle name en</h3>
          {/* <Image src={} /> */}
          <p>Bicycle image</p>
          <table>
            
          </table>
        </div>
      </div>
    </Layout>
  );
}
