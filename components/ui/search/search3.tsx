import { useEffect, useState } from "react"
import { Command } from "cmdk"

import { cn } from "@/lib/utils"
import { CommandItem } from "@/components/ui/command"

import { CommandGroup } from "../command"

export const CommandMenu = () => {
  const [value, setValue] = useState("")

  const test = (value: string) => {
    setValue(value)
    console.log("selcted no typed", value)
  }

  useEffect(() => {
    console.log("typing...", value)
  }, [value])

  let arreglo = ["1", "2", "3"]

  return (
    <Command label="Command Menu" shouldFilter={false} loop>
      <Command.Input
        value={value}
        onValueChange={setValue}
        placeholder="Buscar productos..."
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <div className=" w-full top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
          <CommandGroup className="h-full overflow-auto">
            {arreglo.map((item) => (
              <CommandItem key={item} value={item} onSelect={test}>
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </div>
      </Command.List>
    </Command>
  )
}
