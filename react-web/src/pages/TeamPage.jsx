import React from "react";
import TeamInfo from "../components/TeamInfo";
import TeamMember from "../components/TeamMember";
import { members } from "../data/teamMember";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ===================== 헤더 ===================== */}

      {/* ===================== 팀 소개 섹션 ===================== */}
      <TeamInfo />
      {/* ===================== 팀원 카드 그리드 ===================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* ===================== 푸터 ===================== */}
    </div>
  );
}
