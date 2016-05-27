
var tm;
$(function() {
    
    // make a custom map style
    var styledMapType = new google.maps.StyledMapType([
        { featureType: "road", stylers: [ { visibility: "off" } ] },
        {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d78a3a"
            },
            {
                "gamma": "1.61"
            },
            {
                "lightness": "10"
            },
            {
                "weight": "1.20"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b78653"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffbb00"
            },
            {
                "saturation": 54
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": -84
            },
            {
                "lightness": 6
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -55
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -60
            },
            {
                "gamma": 1.91
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -27
            },
            {
                "gamma": 1.8
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff8800"
            },
            {
                "saturation": -79
            },
            {
                "lightness": -16
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": -67
            },
            {
                "hue": "#ff9900"
            },
            {
                "lightness": 6
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff6600"
            },
            {
                "saturation": -75
            },
            {
                "lightness": -21
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": -79
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff5e00"
            },
            {
                "saturation": -24
            },
            {
                "visibility": "simplified"
            },
            {
                "lightness": 28
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -27
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -85
            }
        ]
    }
    ], {
        name: "white"
    });
    tm = TimeMap.init({
        mapId: "map",               // Id of map div element (required)
        timelineId: "timeline",     // Id of timeline div element (required)
        options: {
            eventIconPath: "../images/"
        },
        datasets: [
            {
                title: "Events",
                id: "events1",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["battle", "allie", "map"],
                	eventIconImage: "icons/allie_battle.png",
                	icon: "images/allie_battle.png",
                    key: "1KljZUEg1-J-3L-z1oHQ4cWfQc6bLN8u0835lvjVmhCk",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events2",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["miscellaneous", "allie", "map"],
                	eventIconImage: "icons/allie_misc.png",
                	icon: "images/allie_misc.png",
                    key: "1pxhYlkPLa3rs0Ovln1oo_NSBFF7GVkZnzj08GgR2KBU",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events3",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["sortie", "allie", "map"],
                	eventIconImage: "icons/allie_sortie.png",
                	icon: "images/allie_sortie.png",
                    key: "1hLIgrWyQ2okE2FHc6dNTnh_Re3i_1npN7wQmbXbY5_I",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events4",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["surrender", "allie", "map"],
                	eventIconImage: "icons/allie_surrender.png",
                	icon: "images/allie_surrender.png",
                    key: "1SxY_LUMo6nnMZaF7BH1BX4F9bK4Ji2dUCGuTod0eJR8",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events5",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["weather", "allie", "map"],
                	eventIconImage: "icons/allie_weather.png",
                	icon: "images/allie_weather.png",
                    key: "1O6wrz9oflrtDqtqE75G17VePElcQ6MWhnc4DpvwY8IU",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events6",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["battle", "axis", "map"],
                	eventIconImage: "icons/axis_battle.png",
                	icon: "images/axis_battle.png",
                    key: "1Bmkg7jRWCUE3FJyYFRYg3rjgz6b8H51gvFCY2PDrXR0",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events7",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["massacre", "axis", "map"],
                	eventIconImage: "icons/axis_massacre.png",
                	icon: "images/axis_massacre.png",
                    key: "1v-V0vqNKSBN656vU44vBaQagOc-C-8F59S6aOCBpzKU",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events8",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["miscellaneous", "axis", "map"],
                	eventIconImage: "icons/axis_misc.png",
                	icon: "images/axis_misc.png",
                    key: "1AT0LKP9AODYIyo4O4gKkqD95kzIsCRXnu_2TdLQQits",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events9",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["sortie", "axis", "map"],
                	eventIconImage: "icons/axis_sortie.png",
                	icon: "images/axis_sortie.png",
                    key: "1Dj8_5Sx4oPfQCHB_wa0USXVh-WXl1qMb88kjRkkkUCk",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events10",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["surrender", "axis", "map"],
                	eventIconImage: "icons/axis_surrender.png",
                	icon: "images/axis_surrender.png",
                    key: "1HMgotgDk_yiKwNWKJ83QZPvc2Leownfvz17VpdL1ykw",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events11",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["massacre", "axis", "map"],
                	eventIconImage: "icons/allie_massacre.png",
                	icon: "images/allie_massacre.png",
                    key: "1fbqBNR7FfkhGpH0mVk46kkUxjpSyRvH00MVlSAwhZBQ",
                    paramMap: {
                        start: "date"
                    }
                }
            },
            {
                title: "Events",
                id: "events12",
                theme: "purple",
                type: "gss",
                options: {
                    tags: ["weather", "axis", "map"],
                	eventIconImage: "icons/axis_weather.png",
                	icon: "images/axis_weather.png",
                    key: "1u2_kMboqMJrm0qGkyBd7daE39EUOh4b6mPidKf-FwXw",
                    paramMap: {
                        start: "date"
                    }
                }
            }
        ],
        bandIntervals: [
            Timeline.DateTime.DAY,
            Timeline.DateTime.YEAR
        ]
    });
    var gmap = tm.getNativeMap();
    gmap.mapTypes.set("white", styledMapType);
    gmap.setMapTypeId("white");

    
    
    function check(item) {
        return (item.opts.tags.indexOf(window.selectedTag) >= 0
                &&
                (item.opts.tags.indexOf(window.data[0]) >= 0
                 ||
                 item.opts.tags.indexOf(window.data[1]) >= 0
                 ||
                 item.opts.tags.indexOf(window.data[2]) >= 0
                 ||
                 item.opts.tags.indexOf(window.data[3]) >= 0
                 ||
                 item.opts.tags.indexOf(window.data[4]) >= 0
                 ||
                 item.opts.tags.indexOf(window.data[5]) >= 0
                )
               )
    }
    
    
    // filter function for tags
    var hasSelectedTag = function(item) {
        // if no tag was selected, everything passes
        return !window.selectedTag || (
                // item has tags?
                item.opts.tags && 
                // tag found? (note - will work in IE; Timemap extends the Array prototype if necessary)
                check(item)
            );
    };
    
    // add our new function to the map and timeline filters
    tm.addFilter("map", hasSelectedTag); // hide map markers on fail
    tm.addFilter("timeline", hasSelectedTag); // hide timeline events on fail

    // onChange handler for pulldown menu
    $('#search').click(function() {
        window.selectedTag = $("#sides").val();
        
        var brands = $('#events option:selected');
        var selected = [];
        $(brands).each(function(index, brand){
            selected.push([$(this).val()]);
        });
        
        window.data = [];
        var length = 6; // user defined length

        for(var i = 0; i < length; i++) {
            window.data.push("false");
        }
        var final = []
        for (var i = 0; i < selected.length; i++) {
            final.push(selected[i][0])
        }
        for (var i = 0; i< final.length; i++) {
            window.data[i] = final[i]
        }
        // run filters
        tm.filter('map');
        tm.filter('timeline');
    });
    
    
    
    
    $(document).ready(function() { //decalres multi select
        $('#events').multiselect({
            includeSelectAllOption: true, //select all option
            allSelectedText: "All", //text when selected
        });
    });

});