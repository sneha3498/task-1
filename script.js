
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const department = document.getElementById("department").value;
    const address = document.getElementById("address").value.trim();
  
    if (!name || !password || !gender || !department || !address) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
                           .map(cb => cb.value)
                           .join(", ");
  
    alert(`
      Registration Successful!
      Name: ${name}
      Gender: ${gender.value}
      Department: ${department}
      Interests: ${interests || "None"}
      Address: ${address}
    `);
  });
  