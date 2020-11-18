var map = document.getElementById("map-canvas");

/*toggle between map and list view*/
//reference: https://codepen.io/derekjp/pen/pPqwXJ
$("document").ready(function () {
	$(".tab-slider--body").hide();
	$(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
	$(".tab-slider--body").hide();
	var activeTab = $(this).attr("rel");
	$("#" + activeTab).fadeIn();
	if ($(this).attr("rel") == "tab2") {
		$('.tab-slider--tabs').addClass('slide');
	} else {
		$('.tab-slider--tabs').removeClass('slide');
	}
	$(".tab-slider--nav li").removeClass("active");
	$(this).addClass("active");
});

/*data*/
var windowInfo = [{
	//"tooltip" is for the shortened text and "des" is the longer text in the modal
	"name": "Lincoln Memorial",
	"lat": 38.8893,
	"lng": -77.0502,
	"tooltip": "A memorial honoring Abraham Lincoln, the 16th president of the United States.",
	"des": "The Lincoln Memorial is a Neoclassical monument honoring Abraham Lincoln, America&rsquo;s 16th president. The memorial is located within the National Mall, directly across from the Washington Monument. There are 36 columns on the outside, each representing one of the 36 states at the time of Lincoln&rsquo;s death. Inside the memorial, Lincoln&rsquo;s inaugural Address and his Gettysburg Address are carved onto the chamber walls. The centerpiece of the monument is a 19-foot tall marbled statue of a sitting Abraham Lincoln.",
	"img": "images/lincoln.png",
	"link": "https://www.nps.gov/linc/index.htm"
}, {
	"name": "Korean War Veterans Memorial",
	"lat": 38.888193,
	"lng": -77.047799,
	"tooltip": "A memorial honoring Americans who served during the Korean War in the 1950s.",
	"des": "The Korean War Veterans Memorial was dedicated in 1995 by President Ronald Reagan. The memorial commemorates the 5.8 million Americans who served during the Korean War from 1950-1953. There are 19 stainless steel statues depicting soldiers who fought in the war. The Mural Wall consists of 41 panels of photographic images carved to depict soldiers, equipment, and people involved in the war. The United Nations Wall lists all the United Nations members that provided support during the war and a Pool of Remembrance honoring those who served in the war for both the U.S. and the United Nations.",
	"img": "images/korean.png",
	"link": "https://www.nps.gov/kowa/index.htm"
}, {
	"name": "Washington Monument",
	"lat": 38.888193,
	"lng": -77.035257,
	"tooltip": "A monument honoring and commemorating the first president of America, George Washington.",
	"des": "The Washington Monument is an Egyptian obelisk monument within the National Mall directly across from the Lincoln Memorial. The memorial was completed during two phases of construction from 1848 to 1884. At the time of its finish, the monument was the tallest building in the world that stands at more than 555 feet. There are 50 American flags at the base of the monument, each representing a state, that forms a circle and flows 24 hours every day.",
	"img": "images/washington.png",
	"link": "https://www.nps.gov/wamo/index.htm"
}, {
	"name": "World War II Memorial",
	"lat": 38.889861,
	"lng": -77.040462,
	"tooltip": "A memorial dedicated to Americans who served during World War II.",
	"des": "The World War II memorial is located within the National Mall between the Lincoln Memorial and the Washington Memorial. The memorial consists of 56 granite pillar that forms a semicircle around the plaza. Each pillar represented a state or a territory of the United States back in 1945. The Freedom Wall is an arched wall located on the plaza&rsquo;s left side with 4,048 gold stars. Each star is dedicated to every 100 Americans who died in the war. The message in front of the wall reads, &ldquo;Here we mark the price of freedom.&rdquo;",
	"img": "images/ww2.png",
	"link": "https://www.nps.gov/wwii/index.htm"
}, {
	"name": "Thomas Jefferson Memorial",
	"lat": 38.8814,
	"lng": -77.0365,
	"tooltip": "A memorial to commemorate the third president of the United States, Thomas Jefferson.",
	"des": "The Jefferson Memorial is a Neoclassical architecture located on the shore of the Potomac River. Inside the building is a 19-foot tall bronze statue of Thomas Jefferson. Excerpts from Jefferson&rsquo;s writings, including the Declaration of Independence and the Virginia Statutes for Religious Freedom, are inscribed on the walls.",
	"img": "images/thomas.png",
	"link": "https://www.nps.gov/thje/index.htm"
}, {
	"name": "Martin Luther King, Jr. Memorial",
	"lat": 38.8862,
	"lng": -77.0442,
	"tooltip": "Memorial dedicated to Civil Rights Activist, Dr. Martin Luther King Jr, located in West Potomac Park.",
	"des": "The Martin Luther King, Jr. Memorial is located in West Potomac Park. The centerpiece of the memorial is a granite sculpture named &ldquo;Stone of Hope.&rdquo; The 30-feet-tall sculpture of King was inspired by a quote from his speech <i>I Have A Dream</i>: &ldquo;Out of the mountain of despair, a stone of hope.&rdquo; Two other pieces of granite also stand in the memorial to represent &ldquo;the mountain of despair.&rdquo; A 450 feet inscription wall includes excerpts from King&rsquo;s sermons and speeches.",
	"img": "images/mlk.png",
	"link": "https://www.nps.gov/mlkm/index.htm"
}, {
	"name": "Vietnam Veterans Memorial",
	"lat": 38.8913,
	"lng": -77.0477,
	"tooltip": "A memorial honoring those who served during the Vietnam War.",
	"des": "The Vietnam Veterans Memorial was built in 1982 to honor American men and women who died in the Vietnam War. The centerpiece of the memorial is incarved Memorial Wall with the names of 58,318 Americans who served in the war.  In 1993, the Vietnam Women&rsquo;s memorial was added to honor women who served in the Vietnam war. In 2004, a memorial plaque was added to honor those who died after the war from injuries suffered during the war.",
	"img": "images/vietnam.png",
	"link": "https://www.nps.gov/vive/index.htm"
}, {
	"name": "Franklin Delano Roosevelt Memorial",
	"lat": 38.8829,
	"lng": -77.0424,
	"tooltip": "A memorial commemorating the life and service of America&rsquo;s 32nd president, Franklin D. Roosevelt.",
	"des": "The Franklin D. Roosevelt Memorial was dedicated in 1997. The memorial is constructed into four outdoor rooms, each representing a presidential term during Roosevelt&rsquo;s time in office. The memorial pathways are led by waterfalls that symbolizes freedom, and Roosevelt&rsquo;s famous quotes are carved into the walls to remind visitors about his powerful influence o. The memorial also showcases several statues of Roosevelt, including ones with Roosevelt in a wheelchair that was not known to the public during his presidency.",
	"img": "images/fdr.png",
	"link": "https://www.nps.gov/frde/index.htm"
}, {
	"name": "The American Veterans Disabled for Life Memorial",
	"lat": 38.886197,
	"lng": -77.013084,
	"tooltip": "A memorial honoring Americans who were permanently injured during their services in the United States armed force. ",
	"des": "The American Veterans Disabled for Life Memorial was dedicated in 2014 to honor war heroes who are disabled due to their military service. The centerpiece of the memorial is a reflection pool and star-shaped fountain. A ceremonial flame at the core of the fountain symbolizes the sacrifices veterans made for our country. Forty-eight glass panels, comprised of three walls, capturing the voices and lives of disabled veterans. The memorial project team collected more than 700 veterans&rsquo; accounts, letters, quotations, and images and organized them into four journey experiences: Pride of Serving, Trauma of Injury, Challenge of Healing, and Discovery of New Purpose.",
	"img": "images/disabled.png",
	"link": "https://www.nps.gov/nama/planyourvisit/american-veterans-disabled-for-life.htm"
}, {
	"name": "Ulysses S. Grant Memorial",
	"lat": 38.889776,
	"lng": -77.012924,
	"tooltip": "A memorial commemorating the 18th president of the United States, General Ulysses S. Grant.",
	"des": "The bronze and marble memorial honors the commander of the Union army during the American Civil War and the 18th president of the United States, General Ulysses S. Grant. The memorial sits in front of the United States Capitol building and faces the Lincoln Memorial, which symbolizes the connection between the two Civil War leaders. There are four smaller pedestals surrounding the main pedestal where the statue stands. Each pedestal stands a bronze lion representing the American flag, and the flags are the American army.",
	"img": "images/grant.png",
	"link": "https://www.aoc.gov/explore-capitol-campus/art/ulysses-s-grant-memorial"
}, {
	"name": "Arlington National Cemetery",
	"lat": 38.8769,
	"lng": -77.0708,
	"tooltip": "The final resting place for more than 400,000 American active duty service members, veterans, and their families.",
	"des": "The beautiful landscape of the Arlington National Cemetery was constructed over centuries, constantly reminding us of the peace that came from our veterans&rsquo; unforgettable dedications and their loved ones. The Tomb of the Unknown Soldier is one of Arlington’s most well-known memorials. The bodies of unknown service members from World War I, World War II, and the Korean War. President John F. Kennedy and his family also rest at Arlington National Cemetery. At Kennedy&rsquo;s burial site, an eternal flame burns from the center of a five-foot circular granite stone at the head of the grave.",
	"img": "images/arlington.png",
	"link": "https://www.arlingtoncemetery.mil/"
}, {
	"name": "Marine Corps War Memorial",
	"lat": 38.8904,
	"lng": -77.0697,
	"tooltip": "A memorial honoring American Marines who died of wars.",
	"des": "Many would recognize the U.S. Marine Corps War Memorial of the infamous statue represents soldiers who raise the second American flag on Iwo Jima island during World War II. The memorial is 32-foot tall, raising a 60-foot tall bronze flag pole. The memorial was dedicated on November 10, 1954, the 179th anniversary of the U.S. Marine Corps.",
	"img": "images/marine.png",
	"link": "https://www.nps.gov/gwmp/planyourvisit/usmc_memorial.htm"
}, ];


/*Map and list*/
//reference: https://www.youtube.com/watch?v=Zxf1mnP5zcw
function initMap() {

	//style and centered map
	var center = {
		zoom: 14,
		center: {
			lat: 38.8892,
			lng: -77.0489
		},
		mapTypeControl: true,

		//allow users to choose roadmap or satellite view on the map
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ["roadmap", "satellite"],
		},

		//styling the map and make it look like night view
		styles: [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#212121"
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#D3D3D3"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#000000"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#181818"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#1b1b1b"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#2c2c2c"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8a8a8a"
			}]
		}, {
			"featureType": "road.arterial",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#343434"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#424141"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#4e4e4e"
			}]
		}, {
			"featureType": "road.local",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#3d3d3d"
			}]
		}],
	};

	// new map 
	map = new google.maps.Map(document.getElementById('map-canvas'), center);

	// marker array
	var markers = [];

	//build the list view
	var listBuilder = "";

	//start building the list by putting it in <ul></ul>
	listBuilder = "<ul>";

	//loop to fill the marker and list with data
	for (var i = 0; i < windowInfo.length; i++) {
		var markerinfo = [];
		var name = windowInfo[i].name;
		var lat = windowInfo[i].lat;
		var lng = windowInfo[i].lng;
		var tooltip = windowInfo[i].tooltip;
		var des = windowInfo[i].des;
		var img = windowInfo[i].img;
		var link = windowInfo[i].link;

		//position the markers using lat and lng
		markerinfo.coords = {
			lat: lat,
			lng: lng
		};

		//map marker content
		markerinfo.content = `<h2>${name}</h2><p id="window-text">${tooltip}</p><button onClick="infoButton('${name}', '${img}', '${des}', '${link}')">Learn More</button><div><img src=${img}></div>`;
		markers.push(markerinfo);

		//list content
		listBuilder += `<div class="listview"><li><div class="list-item"><h2>${name}</h2><p class="list-tooltip">${tooltip}</p><div><button onClick="infoButton('${name}', '${img}', '${des}', '${link}')">Learn More</button></div></div></li></div>`;
	}

	//close the list
	listBuilder += "</ul>";

	//loop through markers
	for (var i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}

	//add marker function
	function addMarker(props) {
		var markerinfo = new google.maps.Marker({
			position: props.coords,
			map: map,
			icon: {
				url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
			}
		});

		// check content
		var infoWindow = new google.maps.InfoWindow({
			content: props.content
		});

		//add infoWindow
		markerinfo.addListener('click', function () {
			infoWindow.open(map, markerinfo);
		});
	}

	//fill #list in HTML with listBuilder 
	document.getElementById("list").innerHTML = listBuilder;

}

/*Modal*/
// reference: https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

//open modal
function infoButton(name, img, des, link) {
	//fill modal
	modal.style.display = "block";
	document.getElementById("modalname").innerHTML = name;
	document.getElementById("modaldescription").innerHTML = des;
	document.getElementById("modalimage").src = img;
	document.getElementById("modallink").href = link;
}
