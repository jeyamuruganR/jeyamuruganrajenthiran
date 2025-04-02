import {Typewriter} from 'typewriter-effect'

const TypingAnimation = () => {
  return (
    <div className="p-4 text-lg font-medium">
      <Typewriter
        options={{
          strings: [
            "I am Jeyamurugan, a developer.",
            "I know languages like Java, Python, React, HTML, CSS, and JavaScript.",
            "I am eager to work for a good job.",
            "Please consider my profile.",
            "For more information, click the 'About' button."
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default TypingAnimation;
