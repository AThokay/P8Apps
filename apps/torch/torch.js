function torch()
{
	g.reset();
	g.fillRect(0,0,g.getWidth(),g.getHeight());
}

TC.on('swipe',(dir)=>{
	if (dir == TC.DOWN) load("launch.js");
});

P8.ON_TIME=600;

setTimeout(()=>{P8.sleep();},100);
setTimeout(()=>{P8.wake();brightness(7);},100);
setTimeout(()=>{torch();},100);
