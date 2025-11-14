"use client";

import ElectricBorder from "@/components/reactbits/ElectricBorder";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface ElectricBorderAvatarProps {
  src: string;
  alt: string;
  borderColor?: string;
}

export function ElectricBorderAvatar({
  src,
  alt,
  borderColor,
}: ElectricBorderAvatarProps) {
  return (
    <ElectricBorder
      className="h-36 w-36"
      color={borderColor ?? "#7df9ff"}
      speed={1}
      chaos={0.8}
      thickness={5}
      style={{ borderRadius: "50%" }}
    >
      <Avatar>
        <AvatarImage src={src} alt={alt} className="rounded-full" />
        <AvatarFallback>
          {alt
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
    </ElectricBorder>
  );
}
