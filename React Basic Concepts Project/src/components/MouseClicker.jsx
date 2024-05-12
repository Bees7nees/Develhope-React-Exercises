/*
Create a MouseClicker component that contains a 
button with a name attribute set to the "one" string.

Attach an event handler to the button that prints the 
name prop to the console when clicked by reading the event.target.name property.

*/

export function MouseClicker() {
  function printName() {
    console.log(event.target.name);
  }

  function printImgSrc(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }

  return (
    <button name="one" onClick={printName}>
      Click Me
      <br />
      <img
        src="https://m.media-amazon.com/images/I/51BfVBjoNpL.jpg"
        alt=""
        style={{ width: 300 }}
        onClick={printImgSrc}
      />
    </button>
  );
}
