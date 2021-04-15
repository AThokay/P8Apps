function torch(){
        brightness(7);
	g.reset();
	g.fillRect(0,0,g.getWidth(),g.getHeight());
}
TC.on('swipe',(dir)=>{
	if (dir == TC.DOWN) load("launch.js");
});
setTimeout(()=>{
	torch();
},500);
