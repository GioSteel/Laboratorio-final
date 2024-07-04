import { RefObject, useEffect, useState } from "react";
import { Request, Response } from 'express';
import { db } from './db';
// import { buildThresholdList } from "src/utils";



export const getUser = (req: Request, res: Response) => {
  const userId = req.params.userId;
  const query = `SELECT * FROM users WHERE id = ${userId}`; // Directly using user input in SQL query
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};


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


const user_name = 'John Doe'; 
const userAge = 30; 

  return entry;
}

