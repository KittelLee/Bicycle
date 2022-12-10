import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

export default function detail() {
  return (
    <Layout>
      {/* <div className="flex">
        <div className="w-1/2 mx-auto h-full text-center bg-red-200">
          <h1>Bicycle name ko</h1>
          <h3>Bicycle name en</h3>
          <Image src={} />
          <p>Bicycle image</p>
        </div>
      </div> */}
      <div className="text-center text-6xl">Test</div>
      &nbsp;
      <div className="text-center text-3xl">Test</div>
      <div className="grid place-items-center">
        <img src="Test"></img>
      </div>
      <div className="grid place-items-center">
        <table className="border-8 w-8/12">
          <tbody>
            <tr className="border h-10">
              <td className="border w-96  text-right font-bold bg-slate-50">
                브랜드&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                모델명&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                분류&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                프레임소재&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                기어&구동계&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                브레이크타입&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                무게&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
            <tr className="border h-10">
              <td className="border text-right font-bold bg-slate-50">
                공식가격&nbsp;&nbsp;&nbsp;
              </td>
              <td>&nbsp;&nbsp;&nbsp;Test</td>
            </tr>
          </tbody>
        </table>
      </div>
      &nbsp;
      <div className="flex">
        <div className="w-6/12 h-64 border mx-auto grid place-items-center">
          Test
        </div>
      </div>
      &nbsp;
    </Layout>
  );
}
