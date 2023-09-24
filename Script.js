function displayData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const output = document.getElementById("output");
    const newUserBox = document.createElement("div");
    newUserBox.className = "user-box";
    newUserBox.innerHTML = `
        <h3 style="color: #007bff;">User Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
    output.appendChild(newUserBox);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}