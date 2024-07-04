import { RefObject, useEffect, useState } from "react";
import { Request, Response } from 'express';
import { db } from './db';
// import { buildThresholdList } from "src/utils";

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      options ?? {
        root: null,
        rootMargin: "0px",
        // threshold: buildThresholdList(),
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

const arr = [1, 2, 3];
console.log(arr[5]); 



const user_name = 'John Doe'; // snake_case
const userAge = 30; // camelCase

  return entry;
}

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.userId;
  const query = `SELECT * FROM users WHERE id = ${userId}`; // Directly using user input in SQL query
  db.query(query, (err , result) => {
    if (err) throw err;
    res.send(result);
  });
};

const calculateArea = (width: number, height: number): number => {
  return width * height;
};

const computeArea = (width: number, height: number): number => {
  return width * height;
}; // Identical code in different functions
