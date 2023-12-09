function makeTimer() {

    var textToShow = ['kyl turn 19 in...', 'kyl birthday in... ', 'kyl is madly in love with nala. we all know that', 'i hope nala always a lot of happpiness', 'love u, nala','actually itt is not supposed to change text each second']
    $(document).ready(function() {
        $("p").html(textToShow[Math.floor(Math.random()*textToShow.length)]);
    });
			var endTime = new Date("December 31, 2023 17:00:00 UTC");			
			var endTime = (Date.parse(endTime)) / 1000;

			var now = new Date();
			var now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
