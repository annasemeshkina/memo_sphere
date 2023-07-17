function writeTextByJS(id, text, speed){

    var ele = document.getElementById(id),
      txt = text.join("").split("");

  var interval = setInterval(function(){

      if(!txt[0]){

            return clearInterval(interval);
     };

      ele.innerHTML += txt.shift();
   }, speed != undefined ? speed : 200);

   return false;
};
writeTextByJS(
  "demo",
   [
       "Воспоминания –\n",
       "часть твоей истории.\n",
       "Сохрани ее навсегда.\n"
    ]
);
