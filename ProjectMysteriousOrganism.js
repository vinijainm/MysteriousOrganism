// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(id,arrOfDNA){
let obj={
specimenNum:id,
dna:arrOfDNA,


mutate() {
 
  let index = Math.floor(Math.random() * 15);
  let randomSelBase =returnRandBase();
 let temp = this.dna[index];
while(temp == randomSelBase)
randomSelBase =returnRandBase();

this.dna[index] = randomSelBase;
let Mobj ={
spicimenNum:1001,  
dna:this.dna
};
return Mobj;
},//end of mutate
 compareDNA(obj) {
   let count=0;
for(let i=0;i<15;i++){
  if (this.dna[i]==obj.dna[i])
  count++;
}// end of for
let percentage = (count/15) * 100;
console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common.`)
 }, //end of compareDNA
 willLikelySurvive(){
   let count=0;
   for(let i=0;i<15;i++){
     if(this.dna[i]=='C' || this.dna[i]=='G')
     count++;
    }//end of for
    let percentage = (count/15)*100;
	
    if(percentage>=60)
    return true;
    else return false;

 } //end of willLikelySurvive
}; //end of obj




return obj;
} //end of fn

/*
console.log(pAequorFactory(302,mockUpStrand()));

console.log(pAequorFactory(302,mockUpStrand()).mutate());
let survive = ['C','G','A','T','C','G','T','C','G','T','C','G','C','G','A'];
pAequorFactory(302,mockUpStrand()).compareDNA(pAequorFactory(302,survive));

console.log(pAequorFactory(602,survive).willLikelySurvive());
*/
let arr=[];
for(let j=0;arr.length<30;j++){
let temp = pAequorFactory(302,mockUpStrand());
if(temp.willLikelySurvive() == true)
arr.push(temp.dna);

}
console.log(arr);