import React from "react";
import Layout from "./components/Layout";

export default function Register() {
  return (
    <Layout title="register">
      <div className="mx-auto max-w-screen-md px-2 py-2 border-4 border-solid ">
        <h1 className="mb-16 text-7xl text-center font-semibold">Membership</h1>
        <form className="border-2 border-solid p-2 max-w-screen-sm mx-auto">
          <div className="flex flex-col mb-4">
            <input
              type="id"
              className="border-2 mb-2 p-2"
              placeholder="아이디"
            />

            <input
              type="password"
              className="border-solid border-2 mb-2 p-2"
              placeholder="비밀번호"
            />

            <input
              type="text"
              className="border-solid border-2 mb-2 p-2"
              placeholder="이름"
            />

            <input
              type="email"
              className="border-solid border-2 mb-2 p-2"
              placeholder="이메일"
            />

            <input
              type="tel"
              className="border-solid border-2 mb-2 p-2"
              placeholder="전화"
            />
          </div>
          <div className="flex mb-4 justify-center">
            <button
              className="basic-button mx-0.5 w-1/2 font-semibold"
              onClick="#"
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
