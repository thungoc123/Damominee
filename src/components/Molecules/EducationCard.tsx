import Image from "next/image";

type EducationCardProps = {
  imageUrl: string;
  organizationName: string;
  dateRange: string;
};

export default function EducationCard({
  imageUrl,
  organizationName,
  dateRange,
}: EducationCardProps) {
  return (
    <div className="relative bg-gray-900 w-fit m-10 p-[1px] rounded-2xl">
      <div className="flex flex-col items-start gap-4 p-6 rounded-[inherit]">
        <div className="relative w-[310px] h-[120px] overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt={organizationName}
            fill
            className="object-cover"
          />
        </div>
        <h2 className="pt-2 font-bold text-white text-xl">
          {organizationName}
        </h2>
        <p className="text-[12px] text-zinc-400">{dateRange}</p>
      </div>
    </div>
  );
}
