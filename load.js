function load() {
	//Display the file currently being loaded
	console.log(`loading: ${g.loadingFile}`);

	//Display the percentage of files currently loaded
	console.log(`progress: ${g.loadingProgress}`);

	//Add an optional loading bar.
	g.loadingBar();

	//This built-in loading bar is fine for prototyping, but I
	//encourage to to create your own custom loading bar using Hexi's
	//`loadingFile` and `loadingProgress` values. See the `loadingBar`
	//and `makeProgressBar` methods in Hexi's `core.js` file for ideas
}