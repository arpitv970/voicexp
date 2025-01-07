import { Card, CardContent } from "@/components/ui/card";

interface WidgetCardProps {
  label: string;
  diff: number;
  diffUnit: string;
  secondaryText: string;
  children?: React.ReactNode;
}

export const DiffChange: React.FC<Partial<WidgetCardProps>> = ({
  diff,
  diffUnit,
}) => {
  if (!diff) {
    return null;
  }
  const isDiffNeg = diff <= 0;
  return (
    <div className={`${isDiffNeg ? "text-red-600" : "text-green-600"}`}>
      {isDiffNeg ? "" : "+"}
      {diff}
      {diffUnit}
    </div>
  );
};

export const WidgetCards: React.FC<WidgetCardProps> = ({
  label,
  diff,
  diffUnit,
  secondaryText,
  children,
}) => {
  return (
    <Card>
      <CardContent className="p-4 font-sans space-y-2">
        <div className="flex justify-between items-center text-muted-foreground text-sm">
          <div>{label}</div>
          <DiffChange diff={diff} diffUnit={diffUnit} />
        </div>
        <div className="text-2xl font-semibold">{children}</div>
        <div className="text-muted-foreground text-sm">{secondaryText}</div>
      </CardContent>
    </Card>
  );
};
