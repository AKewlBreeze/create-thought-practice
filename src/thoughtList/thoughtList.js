import React from "react";
import { ThoughtCard } from "../thoughtCard/thoughtCard.js";

export const ThoughtList = ({ thoughtList }) => {
  return (
    <div className = 'thoughtList'>
      {thoughtList.map(thought => {
        return (
          <div>
            <ThoughtCard title={thought.title} body={thought.body} />
          </div>
        );
      })}
    </div>
  );
};
