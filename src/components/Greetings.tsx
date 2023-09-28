import { useState } from 'preact/hooks';
import styles from "./Greetings.module.css"

export default function Greeting({messages}: {messages: string[]}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className={styles.btn} onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}