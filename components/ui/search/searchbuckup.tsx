"use client"

import { CommandGroup, CommandItem, CommandList, CommandInput } from "@/components/ui/command"
import { Command as CommandPrimitive } from "cmdk"
import { useState, useRef, useCallback, type KeyboardEvent } from "react"

export type Option = Record<"_id" | "suggestion", string> & Record<string, string>

type AutoCompleteProps = {
    options: Option[]
    emptyMessage: string
    value?: Option
    onValueChange?: (value: Option) => void
    isLoading?: boolean
    disabled?: boolean
    placeholder?: string
}

export const AutoComplete = ({
    options,
    placeholder,
    emptyMessage,
    value,
    onValueChange,
    disabled,
    isLoading = false,
}: AutoCompleteProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState<Option>(value as Option)
    const [inputValue, setInputValue] = useState<string>(value?.suggestion || "")

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const input = inputRef.current
            if (!input) {
                return
            }

            // Keep the options displayed when the user is typing
            if (!isOpen) {
                setOpen(true)
            }

            // This is not a default behaviour of the <input /> field
            if (event.key === "Enter" && input.value !== "") {
                const optionToSelect = options.find((option) => option.suggestion === input.value)
                if (optionToSelect) {
                    setSelected(optionToSelect)
                    onValueChange?.(optionToSelect)
                }
            }

            if (event.key === "Escape") {
                input.blur()
            }
        },
        [isOpen, options, onValueChange]
    )

    const handleBlur = useCallback(() => {
        setOpen(false)
        setInputValue(selected?.suggestion)
    }, [selected])

    const handleSelectOption = useCallback(
        (selectedOption: Option) => {
            setInputValue(selectedOption.suggestion)

            setSelected(selectedOption)
            onValueChange?.(selectedOption)

            // This is a hack to prevent the input from being focused after the user selects an option
            // We can call this hack: "The next tick"
            setTimeout(() => {
                inputRef?.current?.blur()
            }, 0)
        },
        [onValueChange]
    )

    return (
        <CommandPrimitive onKeyDown={handleKeyDown} shouldFilter={false}>
            <div>
                <CommandInput
                    ref={inputRef}
                    value={inputValue}
                    onValueChange={isLoading ? undefined : setInputValue}
                    onBlur={handleBlur}
                    onFocus={() => setOpen(true)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                />
            </div>
            <div className="mt-1 relative">
                {isOpen ? (
                    <div className="absolute top-0 z-10 w-full rounded-xl bg-stone-50 outline-none animate-in fade-in-0 zoom-in-95">
                        <CommandList className="rounded-lg">                            
                            {options.length > 0 && !isLoading ? (
                                <div className="absolute w-full top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                                    <CommandGroup>
                                        {options.map((option) => {
                                            return (
                                                <CommandItem
                                                    key={option._id}
                                                    value={option.suggestion}
                                                    onMouseDown={(event) => {
                                                        event.preventDefault()
                                                        event.stopPropagation()
                                                    }}
                                                    onSelect={() => handleSelectOption(option)}
                                                    className="flex items-center gap-2 w-full"
                                                >
                                                    {option.suggestion}
                                                </CommandItem>
                                            )
                                        })}
                                    </CommandGroup>
                                </div>
                            ) : null}
                        </CommandList>
                    </div>
                ) : null}
            </div>
        </CommandPrimitive>
    )
}