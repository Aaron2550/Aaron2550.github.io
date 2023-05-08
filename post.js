const root = document.querySelector(":root");

if (Cookies.get("font") === undefined) {
  Cookies.set("font", "'Noto Sans', sans-serif", { path: "uraniumhexafluori.de" });
}

root.style.setProperty("--font", Cookies.get("font"));

document.addEventListener('keyup', (event) => {
  if (event.key != 'f') {
    return;
  }
  
  var font = Cookies.get("font");
  switch (font) {
    case "'Noto Serif', serif":
      font = "'Noto Sans', sans-serif";
      break;

    case "'Noto Sans', sans-serif":
      font = "'Noto Serif', serif";
      break;
  }

  root.style.setProperty("--font", font);
  Cookies.set("font", font, { path: "uraniumhexafluori.de" });
  
  isUsingSerifFont = !isUsingSerifFont;
}, false);