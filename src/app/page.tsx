"use client";

import { differenceInDays } from "date-fns";
import { EngineerDaysCard } from "@/app/_componets/EngineerDaysCard";

const START_DATE = new Date("2023-04-01"); // あなたがエンジニアになった日付に合わせて

export default function Home() {
    const now = new Date();
    const days = differenceInDays(now, START_DATE) + 1;
    const todayStr = now.toLocaleDateString("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-8">
            <EngineerDaysCard todayStr={todayStr} days={days} />
        </div>
    );
}
