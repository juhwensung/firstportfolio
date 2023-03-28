import React from "react";
import StackCard from "../components/StackCard";
import { stackon } from "../util/StackData";
import { stackunder } from "../util/StackData";
import "./stack.css";

export default function Stack() {
  return (
    <div className="stack">
      <h1 className="head">Stack</h1>
      <ul className="skills">
        <l1 className="skill">
          {stackon.map((on) => {
            return (
              <StackCard
                key={on.id}
                icon={on.icon}
                title={on.title}
                instruction={on.instruction}
              />
            );
          })}
        </l1>
      </ul>
      <ul className="skills">
        <l1 className="skill">
          {stackunder.map((under) => {
            return (
              <StackCard
                key={under.id}
                icon={under.icon}
                title={under.title}
                instruction={under.instruction}
              />
            );
          })}
        </l1>
      </ul>
    </div>
  );
}
