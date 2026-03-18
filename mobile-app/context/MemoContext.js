import React, { createContext, useState, useContext } from "react";
import { memoData } from "../data/memoData";

// 1. 컨텍스트 생성
export const MemoContext = createContext();

// 2. 데이터를 관리하고 공급해주는 'Provider 컴포넌트'를 직접 만듭니다.
export const MemoProvider = ({ children }) => {
  const [memos, setMemos] = useState(memoData);

  // 전달할 데이터를 객체로 묶습니다. (useMemo 없이 기본 방식으로)
  const value = {
    memos: memos,
    setMemos: setMemos,
  };

  return <MemoContext.Provider value={value}>{children}</MemoContext.Provider>;
};
