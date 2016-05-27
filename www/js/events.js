function forward() {
    tl = tm.timeline;
    var current = tl.getBand(0).getMinVisibleDate()
    var n = new Date()
    n.setTime(current.getTime() + 1 * 86400000);
    tl.getBand(0).setMinVisibleDate(n);
}

function backward() {
    tl = tm.timeline;
    var current = tl.getBand(0).getMinVisibleDate()
    var n = new Date()
    n.setTime(current.getTime() + -1 * 86400000);
    tl.getBand(0).setMinVisibleDate(n);
}

function go(lat, lng, zoom) {
    var map = tm.getNativeMap()
    map.setZoom(zoom);
    map.panTo(new google.maps.LatLng(lat, lng));
}