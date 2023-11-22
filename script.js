function removeActive() {
    // Remove 'active' class from all buttons
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`btn${i}`).classList.remove('active');
    }
}
let score;

// Add click event listeners to all buttons
for (let i = 1; i <= 5; i++) {
    document.getElementById(`btn${i}`).addEventListener('click', () => {
        removeActive();
        document.getElementById(`btn${i}`).classList.add('active');
         document.getElementById('cvanish2').innerHTML=`You Selected ${i} out of 5`;
         
    });
}
function addVanish(){
    for(let i=1;i<=3;i++)
    {
        document.getElementById(`rvanish${i}`).classList.add('vanish');
    }
}
function removeVanish(){
    for(let i=1;i<=4;i++)
    {
        document.getElementById(`cvanish${i}`).classList.remove('vanish');
    }
}
document.getElementById('sub').addEventListener('click',()=>{
    document.getElementById('sub').classList.add('vanish');
    addVanish();
    removeVanish();
})


