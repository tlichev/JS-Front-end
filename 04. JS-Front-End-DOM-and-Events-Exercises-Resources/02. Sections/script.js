function create(words) {
   const content = document.getElementById("content");
   for (const word of words) {
      const newDiv= document.createElement('div');
      // console.log(newDiv)
      const newParacraph = document.createElement('p');
      // console.log(newParacraph)
      newParacraph.textContent = word;
      newParacraph.style.display ='none';
      newDiv.addEventListener('click', addStyle);
   

   newDiv.appendChild(newParacraph);
   content.appendChild(newDiv);
   }

   function addStyle(e){
      const div = e.currentTarget;
      const p = div.children[0];
      p.style.display ='block';
   }
}