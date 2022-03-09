
	const icons = [
		{
		  name: "cat",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "crow",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "dog",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "dove",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "dragon",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "horse",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "hippo",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "fish",
		  prefix: "fa-",
		  type: "animal",
		  family: "fas",
		  color: "orange",
		},
		{
		  name: "carrot",
		  prefix: "fa-",
		  type: "vegetable",
		  family: "fas",
		  color: "green",
		},
		{
		  name: "apple-alt",
		  prefix: "fa-",
		  type: "vegetable",
		  family: "fas",
		  color: "green",
		},
		{
		  name: "lemon",
		  prefix: "fa-",
		  type: "vegetable",
		  family: "fas",
		  color: "green",
		},
		{
		  name: "pepper-hot",
		  prefix: "fa-",
		  type: "vegetable",
		  family: "fas",
		  color: "green",
		},
		{
		  name: "user-astronaut",
		  prefix: "fa-",
		  type: "user",
		  family: "fas",
		  color: "blue",
		},
		{
		  name: "user-graduate",
		  prefix: "fa-",
		  type: "user",
		  family: "fas",
		  color: "blue",
		},
		{
		  name: "user-ninja",
		  prefix: "fa-",
		  type: "user",
		  family: "fas",
		  color: "blue",
		},
		{
		  name: "user-secret",
		  prefix: "fa-",
		  type: "user",
		  family: "fas",
		  color: "blue",
		},
	  ];
	  
	  const iconsContainer = document.getElementById("icons-container");
	  const iconsTypeSelector = document.getElementById("iconsTypeSelctor");
	  
	  // stampo tutte le icone
	  insertIcons(icons, iconsContainer);
	  
	  const onSelectChange = function () {
		const iconsTypeSelected = this.value;
	  
		switch (iconsTypeSelected) {
		  case "all":
			insertIcons(icons, iconsContainer);
			break;
	  
		  case "animal":
			filterIconsByType(icons, "animal");
			break;
	  
		  case "vegetable":
			filterIconsByType(icons, "vegetable");
			break;
	  
		  case "user":
			filterIconsByType(icons, "user");
			break;
		}
	  };
	  iconsTypeSelector.addEventListener("change", onSelectChange);
	  
	  function insertIcons(iconsArray, iconsCreationContainer) {
		iconsCreationContainer.innerHTML = "";
	  
		// ciclo che passa tutte le icone
		iconsArray.forEach(function insertEachIcon(iconObject) {
		  insertIcon(iconObject, iconsCreationContainer);
		});
	  
		// stessa logica del forEach ma con il ciclo for
		// for (let i = 0; i < iconsArray.length; i++) {
		// 	insertIcon(iconsArray[i], iconsCreationContainer);
		// }
	  }
	  
	  function insertIcon(iconObject, iconsCreationContainer) {
		const div = document.createElement("div");
		div.classList.add("box");
	  
		div.innerHTML = `
			<i class="${iconObject.family} ${iconObject.prefix}${iconObject.name}" style="color: ${iconObject.color}"></i>
			<span>${iconObject.name}</span>
		  `;
	  
		iconsCreationContainer.append(div);
	  }
	  
	  function filterIconsByType(icons, type) {
		const filteredIcons = icons.filter(function (iconArgument) {
		  if (iconArgument.type == type) {
			return true;
		  }
		});
	  
		insertIcons(filteredIcons, iconsContainer);
	  }

