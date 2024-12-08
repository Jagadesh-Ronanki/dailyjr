import { letters } from "#velite";
import { z } from "velite";
import Picture from "@/components/picture";
import Link from "next/link";

export default function AcademyCard({
  academy,
}: {
  academy: z.infer<typeof letters.schema>;
}) {
  return (
    <Link href={`/academy/${academy.slugAsParams}`}>
      <div className="w-full h-full rounded-xl overflow-hidden border hover:border-primary duration-100 transition-all ease-in-out">
        <Picture
          image={academy.image}
          imageDark={academy.imageDark}
          alt={academy.title}
          className="w-full aspect-[8/5] object-cover"
        />
       <div className="p-3 grid grid-cols-12 border-t-2">
          <h1 className="col-span-8 text-xl font-semibold font-heading">
            {academy.title}
          </h1>
          <p className="col-span-4 text-xs text-muted-foreground px-2 py-1 rounded bg-secondary w-fit h-fit justify-self-end">
            {new Date(academy.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}
