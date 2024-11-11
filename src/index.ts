interface driversType {
	userId: string;
	carNumber: string;
	userImg: string;
	driver: string;
	status: string;
	price: string;
}

async function getFetch() {
	try {
		const response = await fetch(`http://localhost:3000/drivers`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error + "ma'lumot olinmadi :(");
	}
}

let driversUi = document.getElementById("driversUi") as HTMLElement;
let driversNumber = document.getElementById("driversNumber") as HTMLDivElement;
let allPrice = document.getElementById("allPrice") as HTMLParagraphElement;

getFetch().then((data) => {
	let count: number = 0;
	let countAllPrice: string = "5660.00";
	let AllPriceInfo: number = 0;
	driversNumber.textContent = data.length + ` Person`;
	data.forEach((item: driversType) => {
		count++;
		countAllPrice = item.price.replace(/[$]/g, "");
		AllPriceInfo += parseFloat(countAllPrice);
		countAllPrice = countAllPrice.toString();
		if (count < 6) {
			driversUi.innerHTML += `
            <tr class="border-t">
            	<td id="userId" class="py-2">${item.userId}</td>
            	<td>
            		<span id="carNumber" class="px-2 py-1 bg-gray-100 rounded-lg">
                    ${item.carNumber}
            		</span>
            	</td>
            	<td class="flex items-center mt-2 space-x-2">
            		<img
            			id="userImg"
            			src="${item.userImg}"
            			alt="Driver"
            			class="w-6 h-6 rounded-full" />
            		<span class="driver">${item.driver}</span>
            	</td>
            	<td id="status" class="font-semibold text-green-500">
                ${item.status}
            	</td>
            	<td class="price">${item.price}</td>
            	<td>
            		<button
            			class="px-4 py-1 text-sm text-white bg-blue-500 rounded-lg">
            			Details
            		</button>
            	</td>
            </tr>
        `;
		}
		allPrice.textContent = String(AllPriceInfo) + "$";
	});
});
