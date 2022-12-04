import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'mindful', // Types 'One'
        1000, // Waits 1s
        'passionate', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'resourceful', // Types 'Three' without deleting 'Two'
        3000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="text-[28px] text-blue"
    />
  );
};

export default ExampleComponent;