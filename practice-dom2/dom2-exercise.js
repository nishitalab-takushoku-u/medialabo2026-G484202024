//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let i = false;
function view() {
	if(i == false) {
		let a = document.querySelector('h2#addr');
		let b = document.createElement('p');
		b.textContent = campus.address; 
		a.insertAdjacentElement('afterend', b);

		let c = document.querySelector('h2#dept');
		let d = document.createElement('ul');
		c.insertAdjacentElement('afterend', d);
		for(let n of gakka) {
			let e = document.createElement('li');
			e.textContent = n.name;
			d.insertAdjacentElement('beforeend', e);
		}

		i = true;
	}

}
let button = document.querySelector('button#show');
button.addEventListener('click', view);
