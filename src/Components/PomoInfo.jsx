import React from "react";
import { CheckCircle } from "lucide-react"; // ✅ icon library

export default function PomoInfo() {
  const premiumFeatures = [
    "Add tasks to work on today",
    "Set estimate pomodoros (1 = 25min of work) for each tasks",
    "Select a task to work on",
    "Start timer and focus on the task for 25 minutes",
    "Take a break for 5 minutes when the alarm rings",
    "Iterate 3-5 until you finish the tasks",
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-varela text-gray-800 space-y-10">
      {/* Hero Title */}
      <h1 className="text-center text-4xl font-bold text-gray-900 leading-snug">
        An online <span className="text-red-500">Pomodoro Timer</span> to boost
        your productivity
      </h1>

      {/* Section: What is Pomotrack */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">
          What is Pomotrack?
        </h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Pomotrack is a customizable pomodoro timer that works on desktop &
          mobile browser. The aim of this app is to help you focus on any task
          you are working on, such as study, writing, or coding. This app is
          inspired by{" "}
          <a
            className="font-semibold text-red-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="_blank"
            rel="noreferrer"
          >
            Pomodoro Technique
          </a>{" "}
          which is a time management method developed by Francesco Cirillo.
        </p>
      </section>

      {/* Section: What is Pomodoro Technique */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">
          What is Pomodoro Technique?
        </h2>
        <p className="text-base text-gray-600 leading-relaxed">
          The Pomodoro Technique was created by Francesco Cirillo for a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a "pomodoro,"
          from the Italian word for "tomato," after the tomato-shaped kitchen
          timer that Cirillo used as a university student. –{" "}
          <a
            className="font-semibold text-red-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>
        </p>
      </section>

      {/* Section: Premium Features */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900">
          Premium Features
        </h2>
        <ul className="space-y-3">
          {premiumFeatures.map((feature, i) => (
            <li
              key={i}
              className="flex items-center space-x-3 text-base text-gray-700"
            >
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Pomofocus */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900">
          What is Pomofocus?
        </h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Pomofocus is another popular implementation of the Pomodoro Technique
          that inspired many productivity apps worldwide.
        </p>
      </section>
    </div>
  );
}
