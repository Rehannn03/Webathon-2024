import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { Cross1Icon } from "@radix-ui/react-icons"; 
import { Dispatch, SetStateAction, forwardRef, useState } from "react";

type InputTagsProps = InputProps & {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
};

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ value, onChange, ...props }, ref) => {
    const [pendingDataPoint, setPendingDataPoint] = useState("");

    const addPendingDataPoint = () => {
      if (pendingDataPoint) {
        const newDataPoints = new Set([...value, pendingDataPoint]);
        onChange(Array.from(newDataPoints));
        setPendingDataPoint("");
      }
    };

    return (
      <>
        <div className="flex">
          <Input
            value={pendingDataPoint}
            onChange={(e) => setPendingDataPoint(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addPendingDataPoint();
              } else if (e.key === ",") {
                e.preventDefault();
                addPendingDataPoint();
              }
            }}
            className="rounded-r-none"
            {...props}
            ref={ref}
            placeholder="Add Your Symptoms"
          />
          <Button
            className="rounded-l-none border border-l-0"
            onClick={addPendingDataPoint}
            type="button"
            variant="secondary"
          >
            Add
          </Button>
        </div>
        {
          value.length === 0 ? (
            <div className="text-muted-foreground text-sm">No tags added</div>
          ) : (
            <div className="verflow-y-auto p-2 flex gap-2 flex-wrap items-center">
              {value.map((item, idx) => (
                //                 <Badge key={idx} variant="secondary" className={idx === 0 ? "rounded-tl-none" : idx === value.length - 1 ? "rounded-bl-none" : ""}>
                <div key={idx} className={`inline-flex border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold ${idx === 0 ? "rounded-tl-none" : idx === value.length - 1 ? "rounded-bl-none" : ""}`}>
                  {item}
                  <button
                    type="button"
                    className="w-3 ml-2"
                    onClick={() => {
                      onChange(value.filter((i) => i !== item));
                    }}
                  >
                    <Cross1Icon className="w-2" />
                  </button>
                </div>
              ))}
            </div>
          )
        }
      </>
    );
  }
)