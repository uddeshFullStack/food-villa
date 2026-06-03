import React from "react";
import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import { ProfileClass } from "./ProfileClass";

export function About() {
  return (
    <section className="mx-auto max-w-3xl space-y-4 rounded-lg bg-white p-6 shadow-sm">
      <h1 className="page-title">About Us</h1>
      <Profile name="easy" />
      <p className="text-gray-700">About us page loaded.</p>
      <ProfileClass name="class" />
      <Outlet />
    </section>
  );
}
