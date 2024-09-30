const people = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
      contact: {
        email: "john.doe@example.com",
      },
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
      social: {
        twitter: "@johndoe",
      },
      hobbies: ["Coding", "Hiking", "Photography"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      occupation: "Graphic Designer",
      contact: {
        email: "jane.smith@example.com",
        phone: "987-654-3210",
      },
      hobbies: ["Drawing", "Traveling"],
    },
    {
      id: 3,
      name: "Mark Johnson",
      age: 40,
      occupation: "Marketing Manager",
      contact: {
        email: "mark.johnson@example.com",
        phone: "123-456-7890",
      },
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60607",
      },
      hobbies: ["Running", "Golf"],
    },
  ];
  
  // console.log("connected js")
  const peopleList = document.getElementById('people-list');
  const personInfo = document.getElementById('person-info');
  
  
  const renderPeopleList = (person) => {
    people.map((p) => {
        const li = document.createElement('li');
        li.classList.add('cursor-pointer', 'text-blue-500', 'font-medium');
        li.innerText = p.name;
        
        li.addEventListener('click', () => {
            handleClick(p.id);
        })
        peopleList.appendChild(li);
    })
  }

  const displayInfo = (person) => {
    personInfo.classList.remove('hidden');
    document.getElementById('no-selection').classList.add('hidden');
    personInfo.innerHTML = `
    <h3 class="text-xl font-bold mb-2"> ${person.name} </h3>
    <p> City: ${person?.address?.city || 'N/A'} </p>
    <p> Hobbies: ${person?.hobbies?.map((hobby) => hobby || 'N/A')} </p>
    <p> Email: ${person?.contact?.email || 'N/A'} </p>
    `;
  }

const handleClick = (id) => {
   
    const person = people.find((p) => p.id == id);
    displayInfo(person)
    
}


  renderPeopleList(people);
