import React, { useState } from "react";
import { Trash2 } from "lucide-react";

function CafeMenu() {
  // 주문 내역 상태 관리 (배열)
  const [orderList, setOrderList] = useState([]);
  console.log(orderList);
  // 메뉴판 데이터
  const menus = [
    { id: "americano", name: "아메리카노", price: 2000 },
    { id: "latte", name: "카페라떼", price: 2500 },
    { id: "macchiato", name: "카라멜마키아또", price: 3000 },
    { id: "icetea", name: "아이스티", price: 3500 },
  ];

  // 메뉴 추가 함수
  const handleAddOrder = (menu) => {
    // 기존 배열에 새로운 주문 객체 추가 (고유 ID로 시간 사용)
    const newOrder = {
      id: Date.now(), // 고유한 키값 생성
      name: menu.name,
      price: menu.price,
    };
    console.log(newOrder);
    setOrderList([...orderList, newOrder]);
  };

  // 메뉴 삭제 함수
  const handleDeleteOrder = (orderId) => {
    // 해당 ID를 제외한 나머지 항목들로 새 배열을 만들어 상태 업데이트
    const updatedList = orderList.filter((order) => order.id !== orderId);
    setOrderList(updatedList);
  };

  // 총 결제 금액 계산
  const totalPrice = orderList.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col h-fit">
        {/* 헤더 */}
        <h1 className="text-3xl font-bold text-center mb-6">☕ 카페 주문</h1>

        {/* 메뉴 버튼 목록 */}
        <div className="flex flex-col gap-3 mb-8">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => handleAddOrder(menu)}
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold py-4 rounded-xl transition-colors flex justify-between px-6"
            >
              <span>{menu.name}</span>
              <span>{menu.price.toLocaleString()}원</span>
            </button>
          ))}
        </div>

        {/* 주문 내역 영역 */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold mb-4">
            주문 내역 ({orderList.length}잔)
          </h2>

          {orderList.length === 0 ? (
            <p className="text-gray-400 text-center py-4">
              주문 내역이 없습니다.
            </p>
          ) : (
            <ul className="max-h-64 overflow-y-auto pr-2 mb-4 space-y-2">
              {orderList.map((order) => (
                <li
                  key={order.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-lg text-gray-700">{order.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">
                      {order.price.toLocaleString()}원
                    </span>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="text-red-500 hover:text-red-600 p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* 총액 표시 */}
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mt-auto font-bold text-lg">
            <span>총 결제 금액</span>
            <span className="text-purple-600">
              {totalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeMenu;
