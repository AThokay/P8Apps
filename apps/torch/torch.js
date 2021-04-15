function torch(){
        s.ontime = 600;
	g.reset();
	g.fillRect(0,0,g.getWidth(),g.getHeight());
        brightness(7);
}
TC.on('swipe',(dir)=>{
	if (dir == TC.DOWN) load("launch.js");
});
setTimeout(()=>{
	torch();
},500);
