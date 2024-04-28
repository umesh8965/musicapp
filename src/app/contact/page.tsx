"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import React from "react";

function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="min-h-screen bg-black py-12 pt-36 max-w-xl mx-auto px-4 sm:px-6">
        <div className="mx-auto rounded-none md:rounded-2xl shadow-input bg-white dark:bg-black relative z-10">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Contact us
          </h2>
          <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
            Connect with us today! Our contact page is your gateway to reaching
            our dedicated team. Whether you have questions, feedback, or
            inquiries, we're here to assist you. Drop us a message, and let's
            start a conversation.
          </p>
        </div>
        <form className="my-8 relative z-10" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="First Name" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Last Name" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>

          <button
            className="max-w-56 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
           Submit &rarr;
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
        <BackgroundBeams className="fixed" />
      </div>
    </>
  );
}

export default page;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
