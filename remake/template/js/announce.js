
// Rendering
const ancBuild = async()=>{
	const isRendered = await Render('announce')
		if(isRendered){
			const output = new Promise((resolve)=>{
				resolve(true)
			})
			return output
		}
}
// Style 
const ancStyle = ()=>{
	
}
//Main: Edit function
const ancFunc = ()=>{
	uxLoginCheck()
	//Side: Unselect function
	document.getElementById('unedit-btn').addEventListener('click',()=>{
		console.log('cancel')
	})
	//Side: Publish new announcement
	document.getElementById('new-btn').addEventListener('click',()=>{
		const content = `		<tr>
			<td contenteditable='true'>Date</td>
			<td contenteditable='true'>Announcement</td>
			<td>Attactchment</td>
		</tr>`
		const main = document.getElementById('anc-main')
		const data = main.innerHTML
		main.innerHTML = data + content
	})
}
const ancInit = async()=>{
	const hasBuild = await ancBuild()
	if(hasBuild){
		ancFunc()
		ancStyle()
	}
}