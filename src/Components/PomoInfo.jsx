import React from "react";

export default function PomoInfo() {

  const premiumFeatures = ["Add tasks to work on today","Set estimate pomodoros (1 = 25min of work) for each tasks","Select a task to work on",
                           "Start timer and focus on the task for 25 minutes","Take a break for 5 minutes when the alarm ring","Iterate 3-5 until you finish the tasks"]
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-4 text-gray-700 font-varela mt-8">
      <p className="text-center text-3xl font-semibold">
        An online Pomodoro Timer to boost your productivity
      </p>

      <p className="text-center text-xl font-semibold">
        What is Pomotrack?
      </p>
      <p className="text-center text-sm text-gray-600">
        Pomotrack is a customizable pomodoro timer that works on desktop & mobile browser. 
        The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. 
        This app is inspired by <a className="font-semibold" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.
      </p>
      <p className="text-center text-xl font-semibold">
       What is Pomodoro Technique?
      </p>
      <p className="text-center text-sm text-gray-600">
        The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. 
        The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. 
        Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. -
        <a className="font-semibold" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
      </p>
      <p className="text-center text-xl font-semibold">
        Premium Features
      </p>
      <p className="text-center text-sm text-gray-600">
        <ol type="1">
        <li>Add tasks to work on today</li>
        <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
        <li>Select a task to work on</li>
        <li>Start timer and focus on the task for 25 minutes</li>
        <li>Take a break for 5 minutes when the alarm ring</li>
        <li>Iterate 3-5 until you finish the tasks</li>
        </ol>
      </p>
      <p className="text-center text-xl font-semibold">
        What is Pomofocus?
      </p>
    </div>
  );
}
