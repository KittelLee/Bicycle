import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Modal from "./Modal";

export default function Layout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title ? title + " - CycleSC" : "CycleSC"}</title>
        <meta name="description" content="BicycleRecommendation" />
        <meta name="author" content="FactorTeam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header>
          <nav className="flex px-8 py-3 justify-between">
            <Link href="/">
              <a className="text-5xl">CycleSC</a>
            </Link>
            <div className="pt-3">
              <Link href="/login">
                <a className="text-2xl">로그인</a>
              </Link>
              &nbsp;<a className="text-2xl text-gray-300">|</a>&nbsp;
              <Link href="/register">
                <a className="text-2xl">회원가입</a>
              </Link>
            </div>
          </nav>
          <hr />
          <div className="flex px-8 py-3 justify-between">
            <div>
              <Modal />
            </div>

            <div className="flex">
              <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                전체보기
              </button>
              <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                자전거 추천 받으러 가기
              </button>
              <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                수입사 사이트 바로가기
              </button>
              <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                도싸 바로가기
              </button>
            </div>

            <div className="flex border-solid border-2 border-grey-100 rounded p-2">
              <input type="text" placeholder="Search" />
              <button type="button" className="text-xl">
                🔍
              </button>
            </div>
          </div>
          <hr />
        </header>
        <main className="my-auto">{children}</main>
        <footer className="flex h-20 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 CycleSC_BicycleRecommendation</p>
        </footer>
      </div>
    </Fragment>
  );
}
