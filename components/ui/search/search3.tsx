import { Command } from 'cmdk'
import { CommandGroup, CommandInput } from '../command'
import {  CommandItem, CommandList } from "@/components/ui/command"

export const CommandMenu = () => {
    return (
        <Command label="Command Menu">
            <CommandInput />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <div className=" w-full top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                    <CommandGroup className="h-full overflow-auto">
                        <CommandItem>a</CommandItem>
                        <CommandItem>b</CommandItem>
                        <CommandItem>c</CommandItem>
                        <CommandItem>Apple</CommandItem>
                    </CommandGroup>
                </div>
            </Command.List>
        </Command>
    )
}
