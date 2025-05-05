"use client";

import { differenceInDays } from "date-fns";
import { EngineerDaysCard } from "@/app/_componets/EngineerDaysCard";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import CommitChart from "@/components/commitChart";

interface CommitDataPoint {
    date: string;
    count: number;
}

const START_DATE = new Date("2023-04-01");

interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface Week {
    contributionDays: ContributionDay[];
}

async function fetchAllContributions(): Promise<CommitDataPoint[]> {
    // Calculate dates for the past year
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);

    const to = new Date().toISOString();
    const from = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();

    const query = `
      query Contributions($from: DateTime!, $to: DateTime!) {
        viewer {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
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
    const variables = { from, to };

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    });
    console.log(process.env.GITHUB_TOKEN)

    if (!res.ok) {
        const text = await res.text();
        console.error("GitHub API error:", res.status, text);
        throw new Error(`GitHub API returned ${res.status}`);
    }

    const json = await res.json();
    if (json.errors) {
        console.error("GraphQL errors:", json.errors);
        throw new Error("GitHub GraphQL errors");
    }

    return json.data.viewer.contributionsCollection.contributionCalendar.weeks
        .flatMap((w: Week) => w.contributionDays)
        .map((d: ContributionDay) => ({
            date: d.date,
            count: d.contributionCount
        }));
}

export default async function Home() {
    const contributions: CommitDataPoint[] = await fetchAllContributions();

    const now = new Date();
    const days = differenceInDays(now, START_DATE) + 1;
    const todayStr = now.toLocaleDateString("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8 space-y-8">
            <EngineerDaysCard todayStr={todayStr} days={days} />

            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <h2 className="text-xl font-bold">Commit Activity (Last 365 days)</h2>
                </CardHeader>
                <CardContent>
                    <CommitChart data={contributions} />
                </CardContent>
            </Card>
        </div>
    );
}
