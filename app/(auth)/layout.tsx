import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png"; // Adjust the path as necessary
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-background p-6">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute left-6 top-6 flex items-center gap-2",
        })}
      >
        <ArrowLeft className="size-4" />
        <span>Back</span>
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          className="flex items-center self-center gap-2 font-medium"
          href="/"
        >
          <Image src={logo} alt="ManhTur" width={32} height={32} />
          ManhTur
        </Link>
        {children}
        <div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ManhTur. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
