let gsVotes = 0;
let bbVotes = 0;

function vote(dog) {
	if (dog === 'gs') {
		if (gsVotes === 0) {
			gsVotes++;
			document.getElementById('gs-votes').innerHTML = gsVotes;
		} else {
			alert("You've already voted for German Shepherd!");
		}
	} else if (dog === 'bb') {
		if (bbVotes === 0) {
			bbVotes++;
			document.getElementById('bb-votes').innerHTML = bbVotes;
		} else {
			alert("You've already voted for Boerbeal!");
		}
	}
    
    fetch( "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg")
    .then (response =>response.json)
    .then (data => console.log (data))

    
    fetch ("image.png")
    .then (response =>response.json)
    .then (data => console.log (data))
}
const voteButton = document.getElementById("vote");
const countDisplay = document.getElementById("count");
let count = 0;

voteButton.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

function updateVotes(number) {
    let number = {
      number: number,
      id: 0,
    };
  
    data = JSON.stringify(data);
  
    let url = ("https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg");
    fetch(url, {
      method: "PUT",
      body: number,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((number) => {
        console.log(number);
        setVotes();
       
      });
  }
  function updateVotes(number) {
    let number = {
      number: number,
      id: 0,
    };
  
    data = JSON.stringify(data);
  
    let url = "image.png";
    fetch(url, {
      method: "PUT",
      body: number,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((number) => {
        console.log(number);
        setVotes();
       
      });
  } 