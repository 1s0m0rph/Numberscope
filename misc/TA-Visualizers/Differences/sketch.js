/*function onSequence(n)
{
    var list=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223];
	for(q=1; q<list.length; q++) {
	
		if(list[q]==n)
		{
			return true;
		}
    }
    if (n%6==0)
    	{return true;}
	return false;
}

*/
var list=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61];
function drawDifferences(n,levels,sequence)
{
n=Math.min(n,sequence.length);
levels=Math.min(levels,n-1);
let font,fontSize=20;
textFont("Arial");
textSize(fontSize);
let xDelta=50;
let yDelta=50;
let firstX=30;
let firstY=30;
colorMode(HSB,255);
let myColor=color(100,255,150);
let hue;

let workingSequence=[];
for(let i=0; i<n; i++)
{
	workingSequence.push(sequence[i]);                                 //workingSequence cannibalizes first n elements of sequence.
}

for(let i=0; i<levels; i++)
{
	hue=(i*255/6)%255;
	myColor=color(hue,150,200);
	fill(myColor);
	for(let j=0; j<workingSequence.length; j++) 
	{
       text(workingSequence[j],firstX+j*xDelta,firstY+i*yDelta);         //Draws and updates workingSequence simultaneously.
       if(j<workingSequence.length-1) {
       	workingSequence[j]=workingSequence[j+1]-workingSequence[j];
       }
	}

	workingSequence.length=workingSequence.length-1;                      //Removes last element.
	firstX=firstX+(1/2)*xDelta;                                           //Moves line forward half for pyramid shape.

}
}

function setup() {
	createCanvas(640,640);
	drawDifferences(10,8,list);
	//frameRate(30);
	//var index=49;	
  // put setup code here
}
function draw() {
	

}
