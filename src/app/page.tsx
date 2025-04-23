"use client";

import { differenceInDays } from "date-fns";
import { EngineerDaysCard } from "@/app/_componets/EngineerDaysCard";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import CommitChart from "@/components/commitChart";
import { useEffect, useState } from "react";

const START_DATE = new Date("2023-04-01");

async function fetchAllContributions() {
    // Calculate dates for the past year
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);

    const query = `
    query {
      viewer {
        contributionsCollection(from: "${startDate.toISOString()}", to: "${endDate.toISOString()}") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });
    const json = await res.json();
    if (!json.data) {
        console.error("Failed to fetch data from GitHub API", json);
        return null;
    }
    if (json.errors) {
        console.error("GraphQL errors:", json.errors);
        return null;
    }
    return json.data.viewer.contributionsCollection.contributionCalendar.weeks
        .flatMap((week: any) => week.contributionDays)
        .map((day: any) => ({
            date: day.date,
            count: day.contributionCount,
        }));
}

export default function Home() {
    const [commitData, setCommitData] = useState<{ date: string; count: number }[] | null>(null);
    const [loading, setLoading] = useState(true);

    const now = new Date();
    const days = differenceInDays(now, START_DATE) + 1;
    const todayStr = now.toLocaleDateString("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
    });

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchAllContributions();
                setCommitData(data);
            } catch (error) {
                console.error("Error fetching commit data:", error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    if (loading) {
        return <p>Loading commit data...</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-8">
            <EngineerDaysCard todayStr={todayStr} days={days} />

            <Card>
                <CardHeader>
                    <h2 className="text-xl font-bold">Commit Activity (Last 365 days)</h2>
                </CardHeader>
                <CardContent>
                    {commitData ? (
                        <CommitChart data={commitData} />
                    ) : (
                        <p>Failed to load commit data</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
