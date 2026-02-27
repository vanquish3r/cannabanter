// ZEPHII, you no longer need to edit bullshcript.js for anything, please edit youtubevideoID in line 13 in embed.html instead.
// ------> https://github.com/vanquish3r/cannabanter/blob/main/embed.html <------

/* YouTube Playlists
Light Shows and Music PLZWiw-xxQ4SNl-dmJhSk6xSnGuALdCZGf
Night at Cannabanter PLZWiw-xxQ4SOvb8f0nA4_QbGl2hAQuoGR
Tech House Mix PLzgofGqYK8u47wzvoIz1MWBdOe6ow4R12
CannaTest PLzgofGqYK8u6AlSuAxhkaYzgkWBvDupWR
*/

/* Screencast - https://screen.sdq.st:8443/?room=cannabanter */ /* This one for gamestream. remove publish. put in line 14 */
/* YouTube Live - https://www.youtube.com/embed/***********?autoplay=1&controls=0 */ /* Use this for line 14. replace *********** after embed the url for Drac live session */
/* Fire Embed - https://cannabanter.firer.at/embed.html?21 */

let youtubePlaylist = `PLZWiw-xxQ4SPDmADhvme7-pU2bx3s7nKX`;
// let otherwebsiteurl = "https://www.youtube.com/playlist?list=PLgaFNC_I_ZklXd_bvyiLyQAKlwaUMoMdR";  // Small Screen Up Stairs
let otherwebsiteurl = "https://firer.at/pages/games.html";  // Small Screen Up Stairs
var websiteurl = "https://firer.at/pages/games.html"; // Fire Screen Placeholder

/* TOGGLE FOR YOUTUBE LIVE OR SCREENCAST */
/* DO NOT CHANGE THESE LINKS, only comment out line 16 or 17 */
// let websiteurl = "https://vanquish3r.github.io/cannabanter/embed.html?420" /* FOR YOUTUBE LIVE - Uncomment this & change youtubevideoID in line 13 in embed.html AND comment out the line below */
// let websiteurl = "https://screen.sdq.st:8443/?room=cannabanter" /* FOR SCREENCAST - Uncomment this AND comment out the line above */

// window.addEventListener("bs-loaded", ()=> {
 	// console.log("Scene loaded");
	/* UNCOMMENTED THIS TO ENABLE THE YOUTUBE PLAYER */
		// enableYouTube();
	/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
		// enableTheFireScreen();
  /* UNCOMMENTED THIS TO ENABLE THE KARAOKE PLAYER */
		// enableKaraokePlayer();
	/* UNCOMMENTED THIS TO ENABLE FIRE TABLET */
		// enableThePortableFireScreen();

// Player Toggle's by FireRat
let ytplayerdisabled = true;
let karaokeplayerdisabled = true;
let screenstuffDisabled = true;

/////////////// RENDER SCRIPT LOADER STUFF ///////////////
async function injectRenderScript(theScriptsURL, TheScriptsName = "UnNamed", attributes = {}, appendTo = document.body) {
  const scriptUrl = theScriptsURL;
  try { // 1. "Warm-up" request: Ping the server to wake it up.
    console.log("Waking up the server...");
    await fetch(scriptUrl, { method: 'HEAD', mode: 'no-cors' }); // We use { method: 'HEAD' } to be more efficient.
    console.log("Server is awake! Injecting script..."); // We only need to know the server is awake, not download the whole script yet.
    const script = document.createElement("script"); // 2. Inject the script now that the server is ready.
    script.id = `${TheScriptsName}`;
    script.setAttribute("src", scriptUrl); // Set the src attribute
    Object.entries(attributes).forEach(([key, value]) => { script.setAttribute(key, value); }); // Set all custom attributes
    appendTo.appendChild(script);
    script.onload = () => { console.log(`${TheScriptsName} script loaded successfully!`); }; // Set up event handlers
    script.onerror = () => { console.error(`Failed to load the ${TheScriptsName} script.`); };
  } catch (error) { // The fetch itself might fail, though 'no-cors' mode often prevents this.
    console.error("The warm-up request failed. The script might not load.", error); // The real check is the script's onerror handler.
  }
}

async function enableYouTube() {
	// If Browser already exists, DESTROY IT!
	var browser = await BS.BanterScene.GetInstance().Find('MainParentObject2');
	if (browser) { console.log("Browser2 Found, Removing it!"); cleanupFireScreenV2(2); screenstuffDisabled = true; }
	// If Karaoke Player exists, Destroy it!
	let delayYT = false;
	if (window.karaokePlayerInstance) { delayYT = true; karaokeplayerdisabled = true; console.log("Karaoke Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
	if (ytplayerdisabled){ ytplayerdisabled = false;
		setTimeout(() => {  
			console.log("YouTube Player Loading");

			const youtubeAttributes = {
				"scale": "1 1 1",
				"mip-maps": "0",
				"rotation": "0 0 0",
				"position": "0 -3 8",
				"hand-controls": "false",
				"button-position": "-0.15 1.159 30.156",
				"volume": "5",
				"button-rotation": "0 0 0",
				"button-scale": "0.3 0.3 0.3",
				"spatial": "false",
				// "spatial-min-distance": "1",
				// "spatial-max-distance": "1000",
				"playlist": "PLZWiw-xxQ4SPDmADhvme7-pU2bx3s7nKX",
				"announce": "false",
				"instance": "cannabantervidyainstance",
				"announce-events": "false",
				"announce-four-twenty": "false",
				"data-playlist-icon-url": "https://vanquish3r.github.io/cannabanter/images/Playlist.png",
				"data-vol-up-icon-url": "https://vanquish3r.github.io/cannabanter/images/Vol_Up.png",
				"data-vol-down-icon-url": "https://vanquish3r.github.io/cannabanter/images/Vol_Dn.png",
				"data-mute-icon-url": "https://vanquish3r.github.io/cannabanter/images/Vol_Mute_Off.png",
				"data-skip-forward-icon-url": "https://vanquish3r.github.io/cannabanter/images/Sync_FW.png",
				"data-skip-backward-icon-url": "https://vanquish3r.github.io/cannabanter/images/Sync_Bk.png"
			};

			injectRenderScript(
				"https://vidya.firer.at/playlist.js", // firer.at / sdq.st / best-v-player.glitch.me
				"cannabanter-videoplayer", youtubeAttributes, document.querySelector("a-scene")
			);

		}, delayYT ? 2000 : 0);
  } else {console.log("YouTube Player Loading...");}
};

// Fire Screen Toggle
function enableTheFireScreen() {
	// If Karaoke Player exists, Destroy it!
	if (window.karaokePlayerInstance) { karaokeplayerdisabled = true; console.log("Karaoke Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
	// If YouTube Player exists, Destroy it!
	if (window.playlistPlayerInstance) { ytplayerdisabled = true; console.log("YouTube Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
	setTimeout(() => { 
		if (screenstuffDisabled){
			screenstuffDisabled = false;
			console.log("Adding Screen Cast");
			const firescreenAttributes = {
				"scale": "1 1 1",
				"mipmaps": "0",
				"rotation": "0 180 0",
				"screen-rotation": "0 180 0",
				"screen-scale": "0.68 0.68 1",
				"position": "0 0.1 -29",
				"lock-position": "true",
				"hand-controls": "false",
				"pixelsperunit": "1600",
				"castmode": "true",
				"backdrop": "false",
				"disable-rotation": "true",
				"announce": "false",
				"announce-events": "false",
				"announce-420": "false",
				"volume": "0.2",
				"width": "1920",
				"height": "1080",
				"screen-position": "0 -3.1 -21",
				"website": websiteurl
			};
			const firescreen = document.createElement("script");
			firescreen.id = "cannabanter-firescreen";
			firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
			Object.entries(firescreenAttributes).forEach(([key, value]) => { firescreen.setAttribute(key, value); });
			document.querySelector("a-scene").appendChild(firescreen);
			if (websiteurl.includes("hyperbeam.com/i/")) {
				setTimeout(async () => { 
					let theBrowserthingy = await BS.BanterScene.GetInstance().Find(`MyBrowser2`);
					let thebrowserpart = theBrowserthingy.GetComponent(BS.ComponentType.BanterBrowser);
					thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "const checkbox = document.querySelector(`.p-checkbox-box[role='checkbox']`); const joinButton = document.querySelector('.footer_3Yiou .joinBtn_1TAU6'); if (checkbox) checkbox.click(); if (joinButton) { const observer = new MutationObserver(() => { if (!joinButton.classList.contains('p-disabled')) { joinButton.click(); observer.disconnect(); setTimeout(() => { const skipButton = document.querySelector('.dialog-secondary-btn'); if (skipButton) skipButton.click(); }, 3000); } }); observer.observe(joinButton, { attributes: true, attributeFilter: ['class'] }); }" }]}));
					setTimeout(async () => {
						thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "var fullscreenButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.btn_2YRyp svg path[d^='M3 3h6.429']`); if (fullscreenButton) { fullscreenButton.closest('button').click(); } setTimeout(async () => { var chatButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.fsChatBtn_2cCyy svg path[d^='M22 22h-2V2h2v20zM2 11h12.17']`); if (chatButton) { chatButton.closest('button').click(); } }, 3500);" }]}));
					}, 5000);
				}, 500);
			}
		}
	}, 3000); 
	console.log("Screen Stuff enabled: " + screenstuffDisabled);
};

async function enableKaraokePlayer() {
	// If Browser already exists, DESTROY IT!
	var browser = await BS.BanterScene.GetInstance().Find('MainParentObject2');
	if (browser) { console.log("Browser2 Found, Removing it!"); cleanupFireScreenV2(2); screenstuffDisabled = true; }
	// If YouTube Player exists, Destroy it!
	let delayYT = false;
	if (window.playlistPlayerInstance) { delayYT = true; ytplayerdisabled = true; console.log("YouTube Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
  if (karaokeplayerdisabled){ karaokeplayerdisabled = false;
		setTimeout(() => {  
			console.log("karaoke player enabling");
			const karaokeAttributes = {
				"scale": "1 1 1",
				"mip-maps": "0",
				"rotation": "0 0 0",
				"position": "0 -3 8",
				"hand-controls": "true",
				"button-position": "-2.8 6.5775 15.3", // -2.815
				"volume": "15",
				"button-rotation": "0 90 0",
				"button-scale": "1.5 1.5 1.5",
				"singer-button-position": "0 -50 0",
				"singer-button-rotation": "0 0 0",
				// "singer-button-scale": "1.5 1.5 1.5",
				"spatial": "false",
				// "spatial-min-distance": "1",
				// "spatial-max-distance": "1000",
				"playlist": "",
				"announce": "false",
				"announce-events": "false",
				"announce-four-twenty": "false",
				"data-playlist-icon-url": "https://vanquish3r.github.io/cannabanter/images/Playlist.png",
				"data-vol-up-icon-url": "https://vanquish3r.github.io/cannabanter/images/Vol_Up.png",
				"data-vol-down-icon-url": "https://vanquish3r.github.io/cannabanter/images/Vol_Dn.png",
				"data-mute-icon-url": "https://vanquish3r.github.io/cannabanter/images/Vol_Mute_Off.png",
				"data-skip-forward-icon-url": "https://vanquish3r.github.io/cannabanter/images/Sync_FW.png",
				"data-skip-backward-icon-url": "https://vanquish3r.github.io/cannabanter/images/Sync_Bk.png"
			};
			injectRenderScript(
				"https://vidya.firer.at/karaoke.js", // firer.at / sdq.st / best-v-player.glitch.me
				"cannabanter-karaokeplayer", karaokeAttributes, document.querySelector("a-scene")
			);
		}, delayYT ? 2000 : 0);
  } else {console.log("enable karaoke player called");}
};

// Fire Tablet
let screenPortableDisabled = true;
function enableThePortableFireScreen(announce = true) {
  if (screenPortableDisabled){ screenPortableDisabled = false;
		console.log("Adding Fire Tablet");
		const firescreenAttributes = {
			"scale": "0.8 0.8 1",
			"mipmaps": "0",
			"rotation": "0 0 0",
			"position": "-3.131 7.5 -15.3",
			"pixelsperunit": "1300",
			"width": "1280",
			"height": "720",
			"announce": announce,
			"announce-events": announce,
			"announce-420": announce,
			"volume": "0.25",
			"backdrop": "true",
			"hand-controls": "true",
			"custom-button01-url": "https://jackbox.tv",
			"custom-button01-text": "Jackbox.tv",
			"custom-button02-url": "https://papas.tv",
			"custom-button02-text": "Papas.tv",
			"custom-button03-url": "https://songpop-party.com/join",
			"custom-button03-text": "SongPop Party",	   
			"custom-button04-url": "https://firer.at/pages/scuffeduno.html",
			"custom-button04-text": "ScuffedUNO",
			"website": otherwebsiteurl
		};
		const firescreen = document.createElement("script");
		firescreen.id = "cannabanter-firetablet";
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		Object.entries(firescreenAttributes).forEach(([key, value]) => { firescreen.setAttribute(key, value); });
		document.querySelector("a-scene").appendChild(firescreen);
  }; console.log("Fire Tablet enabled");
};

// BobCast Home Button Auto Play
document.addEventListener('CustomButtonClick', async function(event) {
 // console.log('--- 1 Detected a Button Click event in another script! ---'); console.log('Button Name:', event.detail.buttonName);
 // console.log('Detail:', event.detail); console.log('Message:', event.detail.message); console.log('Timestamp:', event.detail.timestamp);
  switch (event.detail.buttonName) {
    case 'Home':
     // console.log('Handling action for: Primary Action Button HOME HOME');
      if (String(event.detail.message).includes("embed/video")) {
      // console.log('HOME IS watch.owncast.online');
        setTimeout(async () => { 
          (await BS.BanterScene.GetInstance().Find(`MyBrowser1`)).GetComponent(BS.ComponentType.BanterBrowser).RunActions(JSON.stringify({ actions: [
            { actionType: "runscript", strparam1: `document.querySelector('[title="Play Video"]').click();` },
            { actionType: "keypress", strparam1: "f" } ]
        	}));
        }, 2000);
      } else { // console.log(`HOME IS NOT watch.owncast.online`, event.detail.message);
      };
      break;
    case 'Info':
     // console.log('Handling action for: More Info Button'); // Do something specific for button 2
      break;
    case 'Google':
     // console.log('Handling action for: Google Button'); // Do something specific for button 3
      break;
    default:
     // console.log('An unknown button triggered the custom event.');
  }
});
/// Hologram Button Click Me Stuff ////
async function somerandomStartActions() {
	window.addEventListener("unity-loaded", ()=> {
	// const thisscene = BS.BanterScene.GetInstance();
	// const waitingForUnity = async () => { while (!thisscene.unityLoaded) { await new Promise(resolve => setTimeout(resolve, 500)); } };
	// await waitingForUnity(); console.log("BS: Unity-Loaded");
	setTimeout(() => { 
		//// Button Creator ///
		async function createButton(name, butPosition, buttonImage = null, posterLink, localRotation = new BS.Vector3(0,0,0), localScale = new BS.Vector3(1, 1, 1), width = 1, height = 1) {
			const buttonObject = await new BS.GameObject(`Button_${name}`).Async(); // Create the Object and give it a name
			await buttonObject.AddComponent(new BS.BanterGeometry(BS.GeometryType.PlaneGeometry, 0, width, height)); // add geometry to the object
			await buttonObject.AddComponent(new BS.BanterMaterial('Unlit/Diffuse', buttonImage, new BS.Vector4(1, 1, 1, 1))); // Set the Shader (Unlit/Diffuse) and the Color (0.1, 0.1, 0.1, 0.7) 0.7 being the alpha / transparency 
			const buttonTransform = await buttonObject.AddComponent(new BS.Transform()); // Add a transform component so you can move and transform the object
			await buttonObject.AddComponent(new BS.MeshCollider(true)); // Add a mesh Collider for the clicking to work
			buttonObject.SetLayer(5); // Set the object to UI Layer 5 so it can be clicked
			buttonTransform.position = butPosition; // Set the Position of the object
			buttonTransform.localScale = localScale; // Set the Scale of the object
			buttonTransform.localEulerAngles = localRotation; // Set the Scale of the object
			buttonObject.On('click', () => {
				console.log(`Button clicked!`);
				injectRenderScript("https://hah.firer.at/script.js?position=0 6.09 15.3&rotation=0 0 0&debug=true&instance=example1&deck=main", "Holograms");
				buttonObject.Destroy();
				// openPage(posterLink);
			});
		}
			// NAME // Button Position // posterImage // localRotation // Scale // Width // Height
  		createButton('Test01', new BS.Vector3(-2.8,6.2,-17.19), 'https://openclipart.org/image/800px/17880', 'https://firer.at/', new BS.Vector3(0,-90,0), new BS.Vector3(0.3, 0.3, 1), 2, 1 );
	}, 3000);
	});
};

somerandomStartActions();
	
// });
