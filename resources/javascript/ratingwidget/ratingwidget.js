if (false) {
	(function(d, t, e, m) {
		// if (RW && RW.initRating)
		// return;

		// Async Rating-Widget initialization.
		window.RW_Async_Init = function() {

			RW.init({
				huid : "221725",
				uid : "b69f3b884fa57d23174a928101113b56",
				source : "website",
				options : {
					"advanced" : {
						"layout" : {
							"align" : {
								"hor" : "center",
								"ver" : "top"
							}
						}
					},
					"size" : "medium",
					"type" : "nero",
					"style" : "thumbs"
				}
			});
			RW.render();
		};
		// Append Rating-Widget JavaScript library
		var rw, s = d.getElementsByTagName(e)[0], id = "rw-js", l = d.location, ck = "Y"
				+ t.getFullYear() + "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol, f = ((l.search
				.indexOf("DBG=") > -1) ? "" : ".min"), a = ("https:" == p ? "secure."
				+ m + "js/"
				: "js." + m);
		if (d.getElementById(id))
			return;
		rw = d.createElement(e);
		rw.id = id;
		rw.async = true;
		rw.type = "text/javascript";
		rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
		s.parentNode.insertBefore(rw, s);
	}(document, new Date(), "script", "rating-widget.com/"));
} else {
	(function(d, t, e, m) {
		// if (RW && RW.initRating)
		// return;

		// Async Rating-Widget initialization.
		window.RW_Async_Init = function() {

			RW.init({
				huid : "221725",
				uid : "b69f3b884fa57d23174a928101113b56",
				source : "website",
				options : {
					"size" : "medium",
					"style" : "oxygen",
					"forceSync" : false
				}
			});
			RW.render();
		};
		// Append Rating-Widget JavaScript library.
		var rw, s = d.getElementsByTagName(e)[0], id = "rw-js", l = d.location, ck = "Y"
				+ t.getFullYear() + "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol, f = ((l.search
				.indexOf("DBG=") > -1) ? "" : ".min"), a = ("https:" == p ? "secure."
				+ m + "js/"
				: "js." + m);
		if (d.getElementById(id))
			return;
		rw = d.createElement(e);
		rw.id = id;
		rw.async = true;
		rw.type = "text/javascript";
		rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
		s.parentNode.insertBefore(rw, s);
	}(document, new Date(), "script", "rating-widget.com/"));
}