    const date = new Date();
    document.getElementById("updatedAt").textContent = date.toLocaleDateString(
      "en-US",
      { year: "numeric", month: "long", day: "numeric" }
    );
