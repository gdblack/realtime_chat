import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const ANIMALS = [
  "Lion",
  "Tiger",
  "Bear",
  "Wolf",
  "Eagle",
  "Shark",
  "Panther",
  "Leopard",
  "Cheetah",
  "Falcon",
];

const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous_${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUsername(stored);
      } else {
        const newUsername = generateUsername();
        localStorage.setItem(STORAGE_KEY, newUsername);
        setUsername(newUsername);
      }
    };
    main();
  }, []);
  return { username };
};
