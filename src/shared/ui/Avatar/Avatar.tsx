import Image from "next/image";
import { CSSProperties } from "react";

interface AvatarProps {
    src: string
    size: number
    borderR?: string 
    className?: string
}

export const Avatar = (props: AvatarProps) => {
    const { 
        src, 
        size, 
        borderR 
    } = props;
  
    const style: CSSProperties = {
        borderRadius: borderR,
    }

    return <Image 
                src={"/icons/profile.png"}
                alt={src}
                width={size}
                height={size}
                style={style}
            />
};