var loc = location.href;
var baseurl = loc.substring(0,loc.lastIndexOf('/'));

function getManifest() {
  return {
    // currently required
    "name": "MozFest timeline feed",
    // icons from http://findicons.com/icon/158311/firefox?id=356182 by ipapun
    "iconURL": baseurl+"/mozfest16.png",
    "icon32URL": baseurl+"/mozfest32.png",
    "icon64URL": baseurl+"/mozfest64.png",
  
    // at least one of these must be defined
    "sidebarURL": baseurl+"/sidebar.htm",

    // should be available for display purposes
    "description": "A Twitter timeline for MozFest",
    "author": "Shane Caraveo, Mozilla",
    "homepageURL": "https://github.com/mixedpuppy/mozfest-timeline/",
  
    // optional
    "version": 1
  }
}
