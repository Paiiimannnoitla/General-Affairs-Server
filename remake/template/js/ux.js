let isLogin = false
const uxCheck = ()=>{
	if(isLogin){
		const isEdit = document.getElementById('unedit-btn').classList.contains('hide')
		if(isEdit){
			return 'Login'
		}else{
			return 'Edit'
		}
	}else{
		return false
	}	
	//return !isEdit
}
const uxEdit = ()=>{
	document.getElementById('main-display').addEventListener('click',()=>{
		const isEdit = event.target.id == 'edit-btn'
		if(isEdit){
			const editbtn = document.getElementById('edit-btn')
			const btnArr = document.querySelectorAll('.edit-mode')
			hide(editbtn)
			unhide(btnArr)			
		}
		const isUnEdit = event.target.id == 'unedit-btn'
		if(isUnEdit){
			const editbtn = document.getElementById('edit-btn')
			const btnArr = document.querySelectorAll('.edit-mode')
			unhide(editbtn)			
			hide(btnArr)
		}
	})
}
const uxLoginCheck = ()=>{
	if(isLogin){
		const btnArr = document.querySelectorAll('.login-mode')
		unhide(btnArr)
	}else{
		const loginbtnArr = document.querySelectorAll('.login-mode')
		const editbtnArr = document.querySelectorAll('.edit-mode')
		hide(loginbtnArr)
		hide(editbtnArr)
	}
}
const uxLogin = ()=>{
	const loginbtn = document.getElementById('login-btn')
	const logoutbtn = document.getElementById('logout-btn')
	loginbtn.addEventListener('click',(event)=>{
		isLogin = true
		hide(loginbtn)
		unhide(logoutbtn)
		uxLoginCheck()
	})
	logoutbtn.addEventListener('click',(event)=>{
		isLogin = false
		unhide(loginbtn)
		hide(logoutbtn)
		uxLoginCheck()
	})
}
const uxSelectInit = ()=>{	
	const mode = []
	mode['member'] = (event)=>{
		const isBelow = event.target.id == 'member'
		if(!isBelow){
			let cell = event.target
			const isHeader = cell.tagName == 'TH'
			if(!isHeader){
				cell = event.target.closest('td')
			}
			const isCell = cell.tagName == 'TD' || 'TH'
			if(isCell){
				const tr = cell.closest('tr')
				const x = cell.cellIndex
				const y = tr.rowIndex
				const selected = document.querySelector('.mem-selected')
				//Select
				if(isHeader){
					cell.style.background = `rgb(235,235,214)`
				}else{
					cell.style.background = `rgb(209,255,255)`
				}
				cell.classList.add('mem-selected')
				//Un-select
				if(selected){
					const isSame = selected == cell
					if(!isSame){
						const isSelHeader = selected.tagName == 'TH'
						if(isSelHeader){
							selected.style.background = `beige`
						}else{
							selected.style.background = `azure`
						}
						selected.classList.remove('mem-selected')
						
					}			
				}				
			}
		//})
		}
	}
	// Selection Init
	document.getElementById('main-display').addEventListener('mouseup',(event)=>{
		const functionArea = event.target.closest('.function-area')
		if(functionArea){
			mode[functionArea.id](event)
		}
	})
}
const uxSelect = ()=>{
	const id = document.querySelector('.function-area').id
	const mode = []
	mode['member'] = 'mem'
	const cls = '.' + mode[id] + '-selected'
	const selected = document.querySelectorAll(cls)
	if(selected){
		if(selected.length==1){
			return selected[0]
		}else{
			return selected
		}
	}
}
const uxInit = ()=>{
	uxLogin()
	uxEdit()
	uxSelectInit()
	//uxEdit()
}
uxInit()