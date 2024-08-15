"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// type HeadBreadcrumbProps = {};

const HeadBreadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  console.log(paths);
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <Home />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 &&
          pathNames.map((name, index) => {
            const isLast = index === pathNames.length - 1;
            const href = `/${pathNames.slice(0, index + 1).join("/")}`;

            return (
              <React.Fragment key={name}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default HeadBreadcrumb;
