import React from "react";

function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 md:p-12 space-y-16 animate-fade-in pb-32">
      {/* 타이틀 및 소개 */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-heading-xl font-black tracking-tight text-primary-900">
          Design System & Theme Showcase
        </h1>
        <p className="text-body text-gray-500 max-w-2xl leading-relaxed">
          이 페이지는{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">index.css</code>에
          선언된 커스텀 Tailwind 테마(색상, 타이포그래피, 그림자, 애니메이션
          등)가 실제로 어떻게 적용되는지 보여주는 샘플 페이지입니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* 1. 색상 팔레트 */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-heading-lg font-bold text-gray-800">Colors</h2>
            <p className="text-sm text-gray-500">
              primary 시리즈와 기본 테마 색상들
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorBox
              name="Primary 50"
              colorClass="bg-primary-50 text-primary-900"
              hex="#eff6ff"
            />
            <ColorBox
              name="Primary 100"
              colorClass="bg-primary-100 text-primary-900"
              hex="#dbeafe"
            />
            <ColorBox
              name="Primary 500"
              colorClass="bg-primary-500 text-white"
              hex="#3b82f6"
              shadow="shadow-button"
            />
            <ColorBox
              name="Primary 700"
              colorClass="bg-primary-700 text-white"
              hex="#1d4ed8"
            />
            <ColorBox
              name="Primary 900"
              colorClass="bg-primary-900 text-white"
              hex="#1e3a8a"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <ColorBox
              name="Accent"
              colorClass="bg-accent text-white"
              hex="#f97316"
            />
            <ColorBox
              name="Success"
              colorClass="bg-success text-white"
              hex="#22c55e"
            />
            <ColorBox
              name="Warning"
              colorClass="bg-warning text-gray-900"
              hex="#eab308"
            />
            <ColorBox
              name="Danger"
              colorClass="bg-danger text-white"
              hex="#ef4444"
            />
          </div>
        </section>

        {/* 2. 타이포그래피 */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-heading-lg font-bold text-gray-800">
              Typography
            </h2>
            <p className="text-sm text-gray-500">정의된 폰트 크기들</p>
          </div>
          <div className="bg-white p-8 rounded-4xl shadow-soft space-y-6 border border-gray-100 divide-y divide-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                TEXT-HEADING-XL (2.5rem)
              </span>
              <h1 className="text-heading-xl font-bold flex-1 md:text-right text-gray-900">
                Heading Extra Large
              </h1>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                TEXT-HEADING-LG (2.0rem)
              </span>
              <h2 className="text-heading-lg font-semibold flex-1 md:text-right text-gray-800">
                Heading Large
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                TEXT-HEADING-MD (1.5rem)
              </span>
              <h3 className="text-heading-md font-medium flex-1 md:text-right text-gray-800">
                Heading Medium
              </h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                TEXT-BODY (1.0rem)
              </span>
              <p className="text-body flex-1 md:text-right text-gray-600">
                The quick brown fox jumps over the lazy dog. (기본 본문 크기)
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6">
              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                TEXT-CAPTION (0.75rem)
              </span>
              <span className="text-caption flex-1 md:text-right text-gray-500">
                Caption Text for small details
              </span>
            </div>
          </div>
        </section>

        {/* 3. 구성 요소 샘플 (그림자, 반경, 인풋) */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-heading-lg font-bold text-gray-800">
              Components & Effects
            </h2>
            <p className="text-sm text-gray-500">
              그림자, 모서리 둥글기, 애니메이션, 인풋 스타일
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 카드 1 : Soft Shadow + Radius 4xl */}
            <div className="bg-white p-6 rounded-4xl shadow-soft border border-gray-100 flex flex-col justify-between h-48">
              <div>
                <p className="text-sm font-bold text-primary-500 mb-1">
                  rounded-4xl
                </p>
                <h3 className="text-heading-md font-bold mb-2">Shadow Soft</h3>
                <p className="text-body text-gray-500">
                  가장 가볍고 부드러운 그림자. 은은한 입체감을 줍니다.
                </p>
              </div>
            </div>

            {/* 카드 2 : Card Shadow + Radius 5xl */}
            <div className="bg-white p-6 rounded-5xl shadow-card flex flex-col justify-between h-48">
              <div>
                <p className="text-sm font-bold text-accent mb-1">
                  rounded-5xl
                </p>
                <h3 className="text-heading-md font-bold mb-2">Shadow Card</h3>
                <p className="text-body text-gray-500">
                  강조하고 싶은 카드 UI에 적합한 깊이감 있는 그림자.
                </p>
              </div>
            </div>

            {/* 컨트롤 요소들 (버튼, 인풋) */}
            <div className="flex flex-col justify-between space-y-4">
              <button className="w-full bg-primary-500 text-white font-semibold py-3 px-6 rounded-xl shadow-button hover:bg-primary-600 transition-colors">
                Primary Button (shadow-button)
              </button>

              <div className="relative">
                <div className="animate-pulse-slow absolute -top-2 -right-2 w-4 h-4 bg-success rounded-full"></div>
                <button className="w-full bg-white text-gray-800 border-2 border-gray-200 font-semibold py-3 px-6 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors">
                  Pulse Animation Button
                </button>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Focus me! (글로벌 Input 속성 적용)"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// 헬퍼 컴포넌트: 색상 박스
function ColorBox({ name, colorClass, hex, shadow = "" }) {
  return (
    <div
      className={`p-4 rounded-3xl h-32 flex flex-col justify-between ${colorClass} ${shadow}`}
    >
      <span className="font-semibold">{name}</span>
      <span className="block text-sm opacity-80">{hex}</span>
    </div>
  );
}

export default DesignSystemPage;
