import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";

type EngineerDaysCardProps = {
    todayStr: string;
    days: number;
};

export function EngineerDaysCard({ todayStr, days }: EngineerDaysCardProps) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Today is </p>
                <h2 className="text-lg font-semibold">{todayStr}</h2>
            </CardHeader>
            <CardContent className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Days since I became an engineer</p>
                <p className="text-5xl font-extrabold text-primary">{days}</p>
                <p className="text-sm text-muted-foreground">days!</p>
            </CardContent>
        </Card>
    );
}
