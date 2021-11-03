mapboxgl.accessToken = 'pk.eyJ1IjoidGhvci1pdW0iLCJhIjoiY2t2YjlzczVnMGM0YTJvcDYzNnh4Y2JpMiJ9.oTGrySoL8crymz2O8-usUQ';
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/thor-ium/ckvc5s3b90jxg14lqeihf1r6i',
		center: [-104.711, 39.042],
		zoom: 7.27
	});
// BRECKENRIDGE
document.getElementById('breck').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.059,
39.485
],
zoom: 15.02,
pitch: 80.30,
bearing: -118.96,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});

// RESET
document.getElementById('reset').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-104.586827,
39.082583
],
zoom: 7.18,
pitch: 0,
bearing: 0,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// VAIL
document.getElementById('vail').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.379,
39.630
],
zoom: 15.01,
pitch: 82,
bearing: 162.5,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});

// COPPER
document.getElementById('copper').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.161,
39.494
],
zoom: 16.19,
pitch: 85,
bearing: -167.4,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// KEYSTONE
document.getElementById('keystone').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-105.953,
39.602
],
zoom: 15.70,
pitch: 78,
bearing: -179.5,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// A-BASIN
document.getElementById('A-Basin').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-105.874,
39.637
],
zoom: 15.76,
pitch: 73,
bearing: -174.2,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// LOVELAND
document.getElementById('loveland').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-105.899,
39.679
],
zoom: 16.37,
pitch: 85,
bearing: -109.6,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// WINTER PARK
document.getElementById('winterpark').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-105.770,
39.888
],
zoom: 16.81,
pitch: 84,
bearing: -168.2,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// ELDORA
document.getElementById('eldora').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-105.584,
39.936
],
zoom: 17.50,
pitch: 83,
bearing: -101,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// STEAMBOAT SPRINGS
document.getElementById('steam').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.786,
40.462
],
zoom: 15.90,
pitch: 85,
bearing: 104,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// HOWELSEN
document.getElementById('howelsen').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.835,
40.480
],
zoom: 17.62,
pitch: 85,
bearing: -112.6,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// BEAVER CREEK
document.getElementById('beaver').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.519,
39.603
],
zoom: 15.83,
pitch: 85,
bearing: 174.3,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// COOPER
document.getElementById('cooper').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.300,
39.360
],
zoom: 17.64,
pitch: 82,
bearing: 114.5,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// SNOWMASS
document.getElementById('snowmass').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.946,
39.206
],
zoom: 15.93,
pitch: 85,
bearing: -161.6,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// AJAX
document.getElementById('ajax').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.825,
39.185
],
zoom: 15.94,
pitch: 85,
bearing: -168.6,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// HIGHLAND
document.getElementById('highland').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.858,
39.176
],
zoom: 15.54,
pitch: 85,
bearing: -163,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// BUTTERMILK
document.getElementById('buttermilk').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.861,
39.194
],
zoom: 16.34,
pitch: 85,
bearing: -123.8,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// CRESTED BUTTE
document.getElementById('butte').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.963,
38.897
],
zoom: 15.16,
pitch: 85,
bearing: 149,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// MONARCH
document.getElementById('monarch').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.334,
38.514
],
zoom: 16.17,
pitch: 78,
bearing: -92.9,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// WOLF CREEK
document.getElementById('wolf').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-106.790,
37.469
],
zoom: 16.18,
pitch: 85,
bearing: -124.8,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// PURGATORY
document.getElementById('purgatory').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-107.847,
37.630
],
zoom: 16.07,
pitch: 77,
bearing: 168.9,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// SILVERTON
document.getElementById('silverton').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-107.658,
37.875
],
zoom: 15.08,
pitch: 85,
bearing: 128.8,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// TELLURIDE
document.getElementById('telluride').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-107.841,
37.924
],
zoom: 15.28,
pitch: 85,
bearing: 137.1,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
// POWDERHORN
document.getElementById('powder').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-108.154,
39.065
],
zoom: 16.21,
pitch: 84,
bearing: 174.9,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
document.getElementById('sunlight').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
-107.338,
39.394
],
zoom: 16,
pitch: 81,
bearing: -163.5,
essential: false // this animation is considered essential with respect to prefers-reduced-motion
});
});
map.on('load', () => {
map.addSource('places', {
// This GeoJSON contains features that include an "icon"
// property. The value of the "icon" property corresponds
// to an image in the Mapbox Streets style's sprite.
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<strong>Breckenridge Ski Resort</strong><p><a href="https://www.breckenridge.com/" target="_blank" title="Opens in a new window">Breckenrdige ski Resort</a> is an alpine ski resort in the western United States, in Breckenridge, Colorado. Just west of the Continental Divide in Summit County, it is perennially one of the most visited ski resorts in the western hemisphere. <i>Source: Wikipedia</i> </p><a href="https://www.epicpass.com/"><img src="../resources/img/map/epic.png" alt="Epic Pass Logo" width="100" height="60"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.077, 39.478]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Copper Mountain</strong><p><a href="https://www.coppercolorado.com/" target="_blank" title="Opens in a new window">Copper Mountain</a> is a mountain and ski resort located in Summit County, Colorado, about 75 miles (120 km) west of Denver on Interstate 70. The resort has 2,465 acres (3.9 sq mi; 10.0 km2) of in-bounds terrain under lease from the U.S. Forest Service, White River National Forest, Dillon Ranger District. <i>Source: Wikipedia</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.164, 39.483]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Keystone Resort</strong><p><a href="https://www.keystoneresort.com/" target="_blank" title="Opens in a new window">Keystone Resort</a> is a ski resort located in Keystone, Colorado, United States. Since 1997 the resort has been owned and operated by Vail Resorts. It consists of three mountains – Dercum Mountain, North Peak, the Outback – and five Bowls offering skiing at all levels. <i>Source: Wikipedia</i> </p><a href="https://www.epicpass.com/"><img src="../resources/img/map/epic.png" alt="Epic Pass Logo" width="100" height="60"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-105.953, 39.603]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Arapahoe Basin</strong><p><a href="https://www.arapahoebasin.com/" target="_blank" title="Opens in a new window">Arapahoe Basin</a> often shortened to A-Basin, or simply The Basin is an alpine ski area in the Rocky Mountains of the United States, in the Arapaho National Forest of Colorado. <i>Source: Wikipedia</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-105.871, 39.634]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Loveland Ski Area</strong><p><a href="https://skiloveland.com/" target="_blank" title="Opens in a new window">Loveland Ski Area</a> is a ski area in the western United States, located near the town of Georgetown, Colorado. Located at the eastern portal of the Eisenhower Tunnel, Loveland is within the Arapahoe National Forest. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-105.898, 39.680]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Winter Park Resort</strong><p><a href="https://www.winterparkresort.com/" target="_blank" title="Opens in a new window">Winter Park Resort</a> is an alpine ski resort in the western United States, in the Rocky Mountains of Colorado at Winter Park. Located in Grand County just off U.S. Highway 40, the resort is about a ninety-minute drive from Denver. <i>Source: Wikipedia</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-105.777, 39.865]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Eldora Mountain Resort</strong><p><a href="https://www.eldora.com/" target="_blank" title="Opens in a new window">Eldora Mountain Resort</a> is a ski area in the southwest corner of Boulder County, Colorado, near the unincorporated community of Eldora and 3 miles west of the town of Nederland. <i>Source: Wikipedia</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-105.583, 39.936]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Steamboat Ski Resort</strong><p><a href="https://www.steamboat.com/" target="_blank" title="Opens in a new window">Steamboat Ski Resort</a> is a major ski area in the western United States, located in northwestern Colorado at Steamboat Springs. Operated by the Steamboat Ski & Resort Corporation, it is located on Mount Werner, a mountain in the Park Range in the Routt National Forest. <i>Source: Wikipedia</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.765, 40.453]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Howelsen Hill Ski Area</strong><p><a href="https://steamboatsprings.net/131/Howelsen-Hill-Ski-Area" target="_blank" title="Opens in a new window">Howelsen Hill Ski Area</a>  is a small ski area located on Howelsen Hill in Steamboat Springs, Colorado. It is not a typical alpine ski area, as it includes a series of ski jumps, the largest with HS127. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.838, 40.483]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Beaver Creek Resort</strong><p><a href="https://www.beavercreek.com/" target="_blank" title="Opens in a new window">Beaver Creek Resort</a>  is a major ski resort in the western United States, near Avon, Colorado. The resort comprises three villages, the main Beaver Creek Village, Bachelor Gulch, and Arrowhead to the west. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.532, 39.604]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Ski Cooper</strong><p><a href="https://www.skicooper.com/" target="_blank" title="Opens in a new window">Ski Cooper</a> is an alpine ski resort in Colorado, one of the oldest in the state. Opened as Cooper Hill Ski Area 79 years ago in 1942, the ski area served as the training site for the 10th Mountain Division, based at nearby Camp Hale during World War II. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.298, 39.356]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Aspen Snowmass</strong><p><a href="https://www.aspensnowmass.com/" target="_blank" title="Opens in a new window">Aspen Snowmass</a> is a ski resort located in the town of Snowmass Village near Aspen, Colorado. The ski area is owned and operated by the Aspen Skiing Company as part of the Aspen/Snowmass complex. It was opened on December 17, 1967 . Snowmass is the largest of the four Aspen/Snowmass mountains, comprising 3,362 acres. <i>Source: Wikipedia</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.953, 39.190]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Aspen Ajax</strong><p><a href="https://www.aspensnowmass.com/four-mountains/aspen-mountain" target="_blank" title="Opens in a new window">Aspen Ajax</a> offers quad-burning groomers and steep, gladed runs all leading to the heart of Aspen—where local and global culture merge in unexpected ways and the après scene is always on. <i>Source: aspensnowmass.com</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.822, 39.170]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Aspen Highlands Ski Resort</strong><p><a href="https://www.aspensnowmass.com/four-mountains/aspen-highlands" target="_blank" title="Opens in a new window">Aspen Highlands </a> is a place to push hard and play hard, whether you’re carving new lines on expert terrain, hiking the Bowl, or reaching new heights of revelry at Cloud Nine.<i>Source: aspensnowmass.com</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.862, 39.170]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Buttermilk Ski Resort</strong><p><a href="https://www.aspensnowmass.com/four-mountains/buttermilk" target="_blank" title="Opens in a new window">Buttermilk Ski Resort </a> is the perfect playground for kids and kids at heart to learn the basics, master the terrain park, skin uphill, or watch the world’s best freestylers in the X Games. All are welcome, all winter long.<i>Source: aspensnowmass.com</i> </p><a href="https://www.ikonpass.com/"><img src="../resources/img/map/Ikon.png" alt="Ikon Pass Logo" width="100" height="46.133"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.866, 39.196]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Crested Butte Ski Resort</strong><p><a href="https://www.skicb.com/" target="_blank" title="Opens in a new window">Crested Butte Mountain Resort </a> opened in 1960 when two men—Fred Rice and Dick Eflin—purchased a ranch on Mt. Crested Butte.[1] An operating permit enabling the resort to be built was approved by the United States Forest Service the following year.<i>Source: Wikipedia</i> </p><a href="https://www.epicpass.com/"><img src="../resources/img/map/epic.png" alt="Epic Pass Logo" width="100" height="60"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.946, 38.894]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Monarch Mountain</strong><p><a href="https://www.skimonarch.com/" target="_blank" title="Opens in a new window">Monarch Ski and Snowboard Area </a>  is a ski resort located in the state of Colorado. It is twenty miles west of Salida, Colorado, on U.S. Highway 50. The resort is situated on Monarch Pass at the continental divide. It has 54 trails, two terrain parks, and an extreme terrain area called Mirkwood. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.336, 38.511]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Wolf Creek Ski Area</strong><p><a href="https://wolfcreekski.com/" target="_blank" title="Opens in a new window">Wolf Creek Ski Area</a>  is a ski area in southwest Colorado, located on the Wolf Creek Pass between Pagosa Springs and South Fork. It is best known for receiving more average annual snowfall than any other resort in Colorado, at about 430 inches per year. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.792, 37.466]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Purgatory Resort</strong><p><a href="https://www.purgatory.ski/" target="_blank" title="Opens in a new window">Purgatory Resort</a>  is a ski resort located in the San Juan Mountains of Southwest Colorado, 25 miles (42 km) north of the town of Durango. Established in 1965, Purgatory offers 105 trails, including 5 terrain parks, over 1,500 skiable acres, and 12 lifts, including one six-person and two high speed quad lift. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-107.837, 37.626]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Silverton Mountain Ski Area</strong><p><a href="https://silvertonmountain.com/" target="_blank" title="Opens in a new window">Silverton Mountain Ski Area</a>  is a ski area near Silverton, Colorado USA that opened on January 19, 2002. Popular with skiers and snowboarders, Silverton Mountain has one chairlift that carries visitors into its terrain, which is for advanced and expert skiers or riders. <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-107.657, 37.876]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Telluride Ski Resort</strong><p><a href="https://tellurideskiresort.com/" target="_blank" title="Opens in a new window">Telluride Ski Resort</a>  is a ski resort located in Mountain Village, Colorado right next to the Town of Telluride. The Telluride Ski Resort is a year-round destination located in the southwest corner of Colorado. <i>Source: Wikipedia</i> </p><a href="https://www.epicpass.com/"><img src="../resources/img/map/epic.png" alt="Epic Pass Logo" width="100" height="60"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-107.841, 37.920]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Powderhorn Mountain Resort</strong><p><a href="https://www.powderhorn.com/" target="_blank" title="Opens in a new window">Powderhorn Mountain Resort</a> is one of the most family-friendly resorts you’ll find anywhere in the West. Tucked alongside the northern edge of Western Colorados beautiful Grand Mesa – the world’s largest flattop mountain – we offer breathtaking views and over 1,600 acres of mountain terrain. <i>Source: Podwerhorn.com</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-108.152, 39.064]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Sunlight Mountain Resort</strong><p><a href="https://sunlightmtn.com/" target="_blank" title="Opens in a new window">Sunlight Mountain Resort</a> caters to local skiers and large groups. The area has three chairlifts and a vertical drop exceeding 2,000 feet (610 m). Operations began in December 1966 with one chairlift and a second was added in 1973 <i>Source: Wikipedia</i> </p>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-107.341, 39.395]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Vail Ski Resort</strong><p><a href="https://www.vail.com/" target="_blank" title="Opens in a new window">Vail Resort</a> is a major ski area in the western United States, located in northwestern Colorado at Steamboat Springs. Operated by the Steamboat Ski & Resort Corporation, it is located on Mount Werner, a mountain in the Park Range in the Routt National Forest. <i>Source: Wikipedia</i> </p><a href="https://www.epicpass.com/"><img src="../resources/img/map/epic.png" alt="Epic Pass Logo" width="100" height="60"></a>',
'icon': 'skiing'
},
'geometry': {
'type': 'Point',
'coordinates': [-106.356, 39.605]
}
}
]
}
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': '{icon}',
'icon-allow-overlap': true
}
});
 
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', (e) => {
// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', () => {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
});
});