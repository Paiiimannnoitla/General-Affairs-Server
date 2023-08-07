const Postman = (id,func='page') =>{
	const mode = func + '/'
	const hostname = 'http://10.6.11.17:3000/' + mode + id
	const content = {
		//body:data,
		headers:{
			'content-type':'application/json'
		},
		method:'GET'
	}
	const response = ()=>{
		const output = new Promise((resolve)=>{
			fetch(hostname,content).then((res)=>{
				if(func=='page'){
					resolve(res.text())
				}else{
					resolve(res.json())
				}
				//resolve(res.text())
			})
		})
		return output
	}
	const reply = response()
	return reply
}
const Delivery = (address) =>{
	const main = document.getElementById('main-display')
	const html = {'html':main.innerHTML}
	const data = JSON.stringify(html)
	const hostname = 'http://10.6.11.17:3000/post/' + address
	const content = {
		headers:{
			'content-type':'application/json'
		},
		body : data,
		method:'POST'
	}
	const response = ()=>{
		const output = new Promise((resolve)=>{
			fetch(hostname,content).then((res)=>{
				resolve(res)
			})
		})
		return output
	}
	const reply = response()
	//window.open(hostname)
	return reply
}
/*
const request = async(letter)=>{
		const json = JSON.stringify(letter)
		const mail = await Postman('GET',json)		
		return mail
}*/
const tbfunc = ()=>{
	
	const mode = []
	const main = (code)=>{
		mode['tb-member']=()=>{
			memInit()
		}
		try{
			mode[code]()
		}catch(err){
			console.log('You should build page:' + code)
		}		
	}
	document.getElementById('toolbar').addEventListener('click',(event)=>{
		const isToolbar = clsCheck(event,'tb-option')
		if(isToolbar){
			const id = event.target.id
			Delivery('member')
			main(id)
			//request()
			//Delivery(1000)
		}
	})
}
const init = ()=>{
	tbfunc()
}
init()