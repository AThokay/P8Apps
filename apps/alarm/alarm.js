var STOR = require("Storage");
eval(STOR.read("prompt.js"));
eval(STOR.read("menu.js"));

function formatTime(t) {
  var hrs = 0|t;
  var mins = Math.round((t-hrs)*60);
  return hrs+":"+("0"+mins).substr(-2);
}

function getCurrentHr() {
  var time = new Date();
  return time.getHours()+(time.getMinutes()/60)+(time.getSeconds()/3600);
}

function exit()
{
	load("cliock.app.js");
}

function later(alarm)
{
	if(alarm.ohr===undefined) alarm.ohr = alarm.hr;
	alarm.hr += 10/60;
}

function buzz(alarm)
{
	buzzCount = 10; //Times of vibration if auto-snooze is enabled
	if (alarm.as)
	{
		i = 0;
		if(i<buzzCount)
		{
			setInterval(function() 
			{
				if(i != buzzCount)
				{
					digitalPulse(D16, 1, 700);
					i++;
				}
			
				else
				{
					clearInterval();
					later(alarm);
					require("Storage").write("alarm.json",JSON.stringify(alarms));
					exit();
				}
			}, 1500);
		}
	}		

	else setInterval('digitalPulse(D16, 1, 700);', 1500); //Vibrate repeatedly if auto-snooze is disabled. 
}

function triggerAlarm(alarm)
{
	buzz(alarm);
	g.reset();
	E.showPrompt(formatTime(alarm.hr),{
		title:"Alarm",
		buttons : {"SNOOZE":true,"OFF":false}
	}).then(
	function(snooze) 
	{
		if (snooze) 
		{
			later(alarm); //Adds 10 more minutes to the triggered alarm.
		} 
		
		else 
		{
		  alarm.last = (new Date()).getDate();
		  if (alarm.ohr!==undefined) 
			{
		      alarm.hr = alarm.ohr;
		      delete alarm.ohr;
		  }
		  if (!alarm.rp) alarm.on = false;
		}		
		require("Storage").write("alarm.json",JSON.stringify(alarms));
		exit();
		});
}

// Check for alarms
var day = (new Date()).getDate();
var hr = getCurrentHr()+10000; // get current time - 10s in future to ensure we alarm if we've started the app a tad early
var alarms = require("Storage").readJSON("alarm.json",1)||[];
var active = alarms.filter(a=>a.on&&(a.hr<hr)&&(a.last!=day));
if (active.length) 
{
	active = active.sort((a,b)=>a.hr-b.hr);
	setTimeout(()=>{triggerAlarm(active[0]);},100);
} 

else 
{
	setTimeout(exit(), 100);
}
