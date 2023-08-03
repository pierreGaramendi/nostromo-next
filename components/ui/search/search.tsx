"use client";
import { useEffect } from "react";
import * as React from "react";
import clsx from "clsx";
import { Command as CommandPrimitive } from "cmdk";
import { Command, CommandGroup, CommandItem } from "components/ui/command";

type DataItem = Record<"value" | "label", string>;

export function MultiSelect({ label = "Select an item", placeholder = "Select an item", parentClassName, data, onKeyPressed, onSelected }: {
    label?: string;
    placeholder?: string;
    parentClassName?: string;
    data: any[];
    onKeyPressed: any,
    onSelected: any
}) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<DataItem[]>([]);
    const [inputValue, setInputValue] = React.useState("");

    useEffect(() => {
        if (inputValue !== '') {
            onKeyPressed(inputValue)
        }
    }, [inputValue]);

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            console.log('ufcccccccccccccccccc', e.key)
            const input = inputRef.current;
            if (input) {
                if (e.key === "Delete" || e.key === "Backspace") {
                    if (input.value === "") {
                        setSelected((prev) => {
                            const newSelected = [...prev];
                            newSelected.pop();
                            return newSelected;
                        });
                    }
                }
                // This is not a default behaviour of the <input /> field
                if (e.key === "Escape") {
                    input.blur();
                }
                if (e.key === "Enter") {
                    console.log('========================', inputValue)
                    onSelected(inputValue)
                }
            }
        },
        []
    );

    return (
        <div className={clsx(label && "gap-1.5", parentClassName, "w-full items-center flex justify-center")}>
            <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
                <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md">
                    <div className="flex gap-1 flex-wrap">
                        {selected.length > 2 && <p>{`+${selected.length - 2} more`}</p>}
                        {/* Avoid having the "Search" Icon */}
                        <CommandPrimitive.Input
                            ref={inputRef}
                            value={inputValue}
                            onValueChange={setInputValue}
                            onBlur={() => setOpen(false)}
                            onFocus={() => setOpen(true)}
                            onClick={() => setOpen(true)}
                            placeholder={placeholder}
                            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                        />
                    </div>
                </div>
                <div className='relative'>
                    {open && data.length > 0 ? (
                        <div className="absolute w-full top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                            <CommandGroup className="h-full overflow-auto">
                                {data.map((framework) => {
                                    return (
                                        <CommandItem
                                            key={framework._id}
                                            onMouseDown={(e) => {
                                                //console.log('whats this',e)
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                            onSelect={(value: any) => {
                                                //console.log('enter?',value)
                                                onSelected(value)
                                                setInputValue(value);
                                                setOpen(false);
                                                //setSelected((prev) => [...prev, framework]);
                                            }}
                                        >
                                            {framework.suggestion}
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </div>
                    ) : null}
                </div>
            </Command>
        </div>
    );
}