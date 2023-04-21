function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"));
     buttons
     .forEach(button => {
        button.addEventListener('click', toggleInfo)
     });


     function toggleInfo(e){
        const btn = e.currentTarget;
        const parent = btn.parentElement;
        const childrenElements = Array.from(parent.children);
        const divAdditionalInfo = childrenElements[9];
        const unlockedSelector = childrenElements[4];
        
        console.log(unlockedSelector)
        if (unlockedSelector.checked){
            if (btn.textContent === 'Show more') {
                divAdditionalInfo.style.display = 'block';
                btn.textContent = 'Hide it';

            }else{
                divAdditionalInfo.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}