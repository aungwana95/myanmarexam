/*
Theme by: WebThemez.com
Note: Please use our back link in your site
*/
$( function() {
	$.vegas( 'slideshow', {
		delay: 8000,
		backgrounds: [
			{ src: 'images/background4.jpg', fade: 4000 },
			{ src: 'images/background3.jpg', fade: 4000 },
			{ src: 'images/background2.jpg', fade: 4000 },
			{ src: 'images/background1.jpg', fade: 4000 }
		]
	} )( 'overlay' );
	
        var endDate = "August 11, 2020 15:03:25";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>ရက်</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>နာရီ</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>မီနစ်</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>စက္ကန့်</span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });

      });
   
