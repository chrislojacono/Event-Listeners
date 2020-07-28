# Event-Listeners
This was an in-class exercise we did to practice event listeners and was our into to Bootstrap.

### Build Status
Complete. Might come back to this to make it look better.

### Code Style
HTML, JavaScript, Bootstrap

### Screenshots
<img width="1270" alt="Screen Shot 2020-07-28 at 12 15 43 PM" src="https://user-images.githubusercontent.com/66916708/88699195-a77b4180-d0cc-11ea-824f-9c106b9043c2.png">


### Features 
We use Javascript functions to print the pie cards to the DOM, use event listeners that sort the cards by the intsructor whose favorite pie it is, and Add another event listener at the bottom of each card to "delete" them from the screen.

### Code Example
```const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  const selectedPies = [];

  for (let i = 0; i < pies.length; i++) {
    if (pies[i].instructor === buttonId) {
      selectedPies.push(pies[i]);
    }
  }

  const bodySelector = document.querySelector("body");
// CHANGE BG COLOR
  if (buttonId === "Abbey") {
    bodySelector.style.backgroundColor = "#e76f51";
  } else if (buttonId === "Doc") {
    bodySelector.style.backgroundColor = "#f4a261";
  } else if (buttonId === "Jacob") {
    bodySelector.style.backgroundColor = "#264653";
  } else {
    bodySelector.style.backgroundColor = "aquamarine";
  }

  if (buttonId === "All" || buttonId === e.currentTarget.id) {
    
      pieBuilder(pies);
    } else {
      pieBuilder(selectedPies);
    }
  }
;

const deleteItems = (e) => {
  const ctype = e.target.type;
  const target = e.target.id;

  if (ctype === "button") {
    pies.splice(target, 1);

    pieBuilder(pies);
  }
};
```
### Website Link
https://nsspieshop.netlify.app/
