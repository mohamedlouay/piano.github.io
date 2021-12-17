document.addEventListener("keydown", function(event) {
  makeSound(event.key)
});


function makeSound(keyPressed) {

  document.querySelector("#" + keyPressed).classList.add("focus")
  setTimeout(function() {

    document.querySelector("#" + keyPressed).classList.remove("focus");
  }, 500);



  switch (keyPressed) {
    case 'a':
      s = new Audio("sounds/key01.mp3.");
      s.play();
      break;
    case 'z':
      s = new Audio("sounds/key02.mp3.");
      s.play();
      break;
    case 'e':
      s = new Audio("sounds/key03.mp3.");
      s.play();
      break;
    case 'r':
      s = new Audio("sounds/key04.mp3.");
      s.play();
      break;
    case 't':
      s = new Audio("sounds/key05.mp3.");
      s.play();
      break;
    case 'y':
      s = new Audio("sounds/key06.mp3.");
      s.play();
      break;
    case 'u':
      s = new Audio("sounds/key07.mp3.");
      s.play();
      break;
    case 'i':
      s = new Audio("sounds/key08.mp3.");
      s.play();
      break;
    case 'o':
      s = new Audio("sounds/key09.mp3.");
      s.play();
      break;
    case 'p':
      s = new Audio("sounds/key10.mp3.");
      s.play();
      break;
    case 'q':
      s = new Audio("sounds/key11.mp3.");
      s.play();
      break;
    case 's':
      s = new Audio("sounds/key12.mp3.");
      s.play();
      break;
    case 'd':
      s = new Audio("sounds/key13.mp3.");
      s.play();
      break;
    case 'f':
      s = new Audio("sounds/key14.mp3.");
      s.play();
      break;
    case 'g':
      s = new Audio("sounds/key15.mp3.");
      s.play();
      break;
    case 'h':
      s = new Audio("sounds/key17.mp3.");
      s.play();
      break;
    case 'j':
      s = new Audio("sounds/key18.mp3.");
      s.play();
      break;
    case 'k':
      s = new Audio("sounds/key19.mp3.");
      s.play();
      break;
    case 'l':
      s = new Audio("sounds/key20.mp3.");
      s.play();
      break;
    case 'm':
      s = new Audio("sounds/key21.mp3.");
      s.play();
      break;
    case 'w':
      s = new Audio("sounds/key22.mp3.");
      s.play();
      break;
    case 'x':
      s = new Audio("sounds/key01.mp3.");
      s.play();
      break;
    case 'c':
      s = new Audio("sounds/key02.mp3.");
      s.play();
      break;
    case 'v':
      s = new Audio("sounds/key03.mp3.");
      s.play();
      break;
    case 'b':
      s = new Audio("sounds/key04.mp3.");
      s.play();
      break;
    case 'n':
      s = new Audio("sounds/key05.mp3.");
      s.play();
      break;

    default:



  }
}
