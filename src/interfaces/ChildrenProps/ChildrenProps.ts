import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ChildrenDurationProps extends ChildrenProps {
  duration:number;
  width?:string;
  animate?:boolean;
  hover?:boolean;
}