"use client"

import { CommandMenu } from "@/components/ui/search/search3"

export default function IndexPage() {
  {
    /* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10"> */
  }
  return (
    <section className="w-full container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div>
        <img
          className="w-full"
          src="https://http2.mlstatic.com/D_NQ_836423-MLA70637937753_072023-OO.webp"
          alt=""
        />
      </div>
      <div>
        <CommandMenu></CommandMenu>
      </div>
    </section>
  )
}
