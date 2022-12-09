import React from "react";
import Layout from "../components/Layout2";

export default function subPage() {
  const refresh = () => {
    window.location.reload();
  };

  function checkAll() {
    let isChecked = document.getElementById("chkall").checked;
    let chks = document.getElementsByName("ca[]");
    for (let i = 0; i < chks.length; i++) {
      chks[i].checked = isChecked;
    }
  }

  return (
    <Layout>
      <div className="flex">
        <div className="w-2/12 bg-gray-200 pl-4">
          <div className="py-1">
            <h1 className="font-black">제품명</h1>
            <label>
              <input type="text" className="w-6/12 rounded-sm" />
              &nbsp;
              <button className="border-solid border-1 bg-white">검색</button>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col h-96 leading-8 overflow-scroll overflow-x-hidden">
            <h1 className="font-black">브랜드</h1>
            <label>
              <input type="checkbox" id="chkall" onClick={checkAll} />
              <span className="font-semibold"> 전부포함</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="1" />
              <span className="font-semibold"> 팔리(PARLEE)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="2" />
              <span className="font-semibold"> 오베아(ORBEA)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="3" />
              <span className="font-semibold"> 스톡(STORCK)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="4" />
              <span className="font-semibold"> 리들리(RIDLEY)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="5" />
              <span className="font-semibold"> 파소니(PASSONI)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="6" />
              <span className="font-semibold"> 피나렐로(PINARELLO)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="7" />
              <span className="font-semibold"> 큐브(CUBE)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="8" />
              <span className="font-semibold"> 룩(LOOK)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="9" />
              <span className="font-semibold"> 비앙키(BIANCHI)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="10" />
              <span className="font-semibold"> 구스토(GUSTO)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="11" />
              <span className="font-semibold"> 타임(TIME)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="12" />
              <span className="font-semibold"> 캐논데일(CANNONDALE)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="13" />
              <span className="font-semibold"> 챕터2(CHAPTER2)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="14" />
              <span className="font-semibold"> 타임(TIME)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="15" />
              <span className="font-semibold"> 비엠씨(BMC)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="16" />
              <span className="font-semibold"> 써벨로(CERVELO)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="17" />
              <span className="font-semibold"> 포커스(FOCUS)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="18" />
              <span className="font-semibold"> 세파스(CEPHAS)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="19" />
              <span className="font-semibold"> 라피에르(LAPIERRE)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="20" />
              <span className="font-semibold"> 메리다(MERIDA)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="21" />
              <span className="font-semibold"> 콜나고(COLNAGO)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="22" />
              <span className="font-semibold"> 예거(JAEGER)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="23" />
              <span className="font-semibold"> 팩터(FACTOR)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="24" />
              <span className="font-semibold"> 윌리어(WILIER)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="25" />
              <span className="font-semibold"> 엘파마(ELFAMA)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="26" />
              <span className="font-semibold"> 치폴리니(CIPOLLINI)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="27" />
              <span className="font-semibold"> 자이언트(GIANT)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="28" />
              <span className="font-semibold"> 아르곤18(ARGON18)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="29" />
              <span className="font-semibold"> 첼로(CELLO)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="30" />
              <span className="font-semibold"> 어럼(AURUM)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="31" />
              <span className="font-semibold"> 트리곤(TRIGON)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="32" />
              <span className="font-semibold"> 코메트(COMETE)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="33" />
              <span className="font-semibold"> 치넬리(CINELLI)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="34" />
              <span className="font-semibold"> 스캇(SCOTT)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="35" />
              <span className="font-semibold"> 캐니언(CANYON)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="36" />
              <span className="font-semibold">
                {" "}
                스페셜라이즈드(SPECAILIZED)
              </span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="37" />
              <span className="font-semibold"> 트렉(TREK)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="38" />
              <span className="font-semibold"> 펠트(FELT)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="39" />
              <span className="font-semibold"> 스위프트(SWIFT)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="40" />
              <span className="font-semibold"> 데어(DARE)</span>
            </label>
            <label>
              <input type="checkbox" name="ca[]" value="41" />
              <span className="font-semibold"> 인세인(INSAINNE)</span>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col leading-8">
            <h1 className="font-black">분류</h1>
            <label>
              <input type="checkbox" name="cb[]" value="1" />
              <span className="font-semibold"> 로드(ROAD)</span>
            </label>
            <label>
              <input type="checkbox" name="cb[]" value="2" />
              <span className="font-semibold"> 사이클로크로스(CX)</span>
            </label>
            <label>
              <input type="checkbox" name="cb[]" value="3" />
              <span className="font-semibold"> 그래블(GRAVEL)</span>
            </label>
            <label>
              <input type="checkbox" name="cb[]" value="4" />
              <span className="font-semibold"> 타임트라이얼(TT)</span>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col leading-8">
            <h1 className="font-black">기어수</h1>
            <label>
              <input type="checkbox" name="cc[]" value="1" />
              <span className="font-semibold"> 16단(클라리스)</span>
            </label>
            <label>
              <input type="checkbox" name="cc[]" value="2" />
              <span className="font-semibold"> 18단(소라)</span>
            </label>
            <label>
              <input type="checkbox" name="cc[]" value="3" />
              <span className="font-semibold"> 20단(티아그라)</span>
            </label>
            <label>
              <input type="checkbox" name="cc[]" value="4" />
              <span className="font-semibold"> 22단(105)</span>
            </label>
            <label>
              <input type="checkbox" name="cc[]" value="5" />
              <span className="font-semibold">
                {" "}
                24단(105 Di2, 울테그라, 듀라에이스)
              </span>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col leading-8">
            <h1 className="font-black">브레이크 타입</h1>
            <label>
              <input type="checkbox" name="cd[]" value="1" />
              <span className="font-semibold"> 림 브레이크</span>
            </label>
            <label>
              <input type="checkbox" name="cd[]" value="2" />
              <span className="font-semibold"> 디스크 브레이크</span>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col leading-8">
            <h1 className="font-black">소재</h1>
            <label>
              <input type="checkbox" name="ce[]" value="1" />
              <span className="font-semibold"> 알루미늄</span>
            </label>
            <label>
              <input type="checkbox" name="ce[]" value="2" />
              <span className="font-semibold"> 카본</span>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col leading-7">
            <h1 className="font-black">무게</h1>
            <label>
              <input type="text" className="w-4/12 rounded-sm" />
              ~
              <input type="text" className="w-4/12 rounded-sm" />
              kg
            </label>
            <label>
              <input type="checkbox" name="cf[]" value="1" />
              <span className="font-semibold"> 6kg이하</span>
            </label>
            <label>
              <input type="checkbox" name="cf[]" value="2" />
              <span className="font-semibold"> 6kg ~ 7kg</span>
            </label>
            <label>
              <input type="checkbox" name="cf[]" value="3" />
              <span className="font-semibold"> 7.1kg ~ 8kg</span>
            </label>
            <label>
              <input type="checkbox" name="cf[]" value="4" />
              <span className="font-semibold"> 8.1kg ~ 9kg</span>
            </label>
            <label>
              <input type="checkbox" name="cf[]" value="5" />
              <span className="font-semibold"> 10kg이상</span>
            </label>
          </div>
          <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
          <div className="flex flex-col leading-7">
            <h1 className="font-black">가격</h1>
            <label>
              <input type="text" className="w-4/12 rounded-sm" />
              ~
              <input type="text" className="w-4/12 rounded-sm" />원
            </label>
            <label>
              <input type="checkbox" name="cg[]" value="1" />
              <span className="font-semibold"> 100만원 이하</span>
            </label>
            <label>
              <input type="checkbox" name="cg[]" value="2" />
              <span className="font-semibold"> 300만원 이하</span>
            </label>
            <label>
              <input type="checkbox" name="cg[]" value="3" />
              <span className="font-semibold"> 500만원 이하</span>
            </label>
            <label>
              <input type="checkbox" name="cg[]" value="4" />
              <span className="font-semibold"> 700만원 이하</span>
            </label>
            <label>
              <input type="checkbox" name="cg[]" value="5" />
              <span className="font-semibold"> 1000만원 이하</span>
            </label>
            <label>
              <input type="checkbox" name="cg[]" value="6" />
              <span className="font-semibold"> 2000만원 이하</span>
            </label>
          </div>
          <button
            onClick={refresh}
            className="border-solid border-2 bg-white my-3 mr-4 px-2 py-1 hover:bg-gray-300"
          >
            초기화
          </button>
          <button
            type="submit"
            className="border-solid border-2 bg-white my-3 px-2 py-1 hover:bg-gray-300"
          >
            검색하기
          </button>
        </div>
        <div className="w-10/12 bg-white">
          <div className="flex">
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/bmc.jpg"></img>
              </div>
              <h1 className="text-center font-bold">BMC SLR 01</h1>
              <h2 className="text-center font-bold">18,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/cervelo.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">Cervelo P5</h1>
              <h2 className="text-center font-bold">10,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/cipol.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">치폴리니 M10</h1>
              <h2 className="text-center font-bold">13,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/neowise.jpg"></img>
              </div>
              <h1 className="text-center font-bold">Neowise 5</h1>
              <h2 className="text-center font-bold">4,000,000 만원</h2>
            </div>
          </div>

          <div className="flex">
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/ostro.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">FACTOR OSTRO VAM</h1>
              <h2 className="text-center font-bold">12,500,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/sl7.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">SPECAILIZED TARMAC SL7</h1>
              <h2 className="text-center font-bold">15,790,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/cola.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">WILIER SLR1</h1>
              <h2 className="text-center font-bold">8,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/come.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">COMETE one</h1>
              <h2 className="text-center font-bold">2,500,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/fact.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">FACTOR TT</h1>
              <h2 className="text-center font-bold">14,000,000 만원</h2>
            </div>
          </div>

          <div className="flex">
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
          </div>

          <div className="flex">
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
          </div>

          <div className="flex">
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
            <div>
              <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
                <img src="/images/f10.jpeg"></img>
              </div>
              <h1 className="text-center font-bold">피나렐로 도그마 F10</h1>
              <h2 className="text-center font-bold">11,000,000 만원</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
