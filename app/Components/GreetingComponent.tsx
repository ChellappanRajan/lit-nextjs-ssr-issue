"use client";
import * as React from "react";
import { createComponent } from "@lit/react";
import { SimpleGreeting } from "./greeting";

const Greeting = createComponent({
  tagName: "simple-greeting",
  elementClass: SimpleGreeting,
  react: React,
});

export default Greeting;
