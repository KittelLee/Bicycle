import React from "react";
import Layout from "./components/Layout";

export default function login() {
  return (
    <Layout title="Login">
      <div className="mx-auto max-w-screen-md px-2 py-2 border-2 border-solid">
        <h1 className="mb-16 text-7xl text-center font-semibold">Login</h1>
        <form className="border border-solid p-2 max-w-screen-sm mx-auto">
          <div className="flex flex-col mb-4">
            <input
              type="id"
              className="mb-2 p-2 border border-solid"
              placeholder="아이디"
            ></input>
            <input
              type="password"
              className="p-2 border border-solid"
              placeholder="비밀번호"
            ></input>
          </div>
          <div className="flex mb-4 justify-center">
            <div>
              <button className="basic-button mx-0.5 w-40 font-semibold">
                로그인하기
              </button>
            </div>
            <div>
              <button className="basic-button mx-0.5 w-40 font-semibold">
                회원가입하기
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-green-500 py-2 shadow outline-none hover:bg-green-600 active:bg-green-700 w-72 font-medium"
                type="button"
                onClick="#"
              >
                Naver Login
              </button>
            </div>
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-slate-200 py-2 shadow outline-none hover:bg-slate-300 active:bg-slate-400 w-72 font-medium"
                type="button"
                onClick="#"
              >
                Google Login
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-amber-400 py-2 shadow outline-none hover:bg-amber-500 active:bg-amber-600 w-72 font-medium"
                type="button"
                onClick="#"
              >
                Kakao Login
              </button>
            </div>
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-blue-600 py-2 shadow outline-none hover:bg-blue-700 active:bg-blue-800 w-72 font-medium"
                type="button"
                onClick="#"
              >
                Facebook Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}