
async function loadReceipt() {
  const id = document.getElementById("receiptId").value.trim();
  const res = await fetch("data.json");
  const data = await res.json();

  const receipt = data.find(item => item.id === id);
  const area = document.getElementById("receiptArea");

  if (receipt) {
    area.innerHTML = `
      <h2>রসিদ নম্বর: ${receipt.id}</h2>
      <p>মালিক: ${receipt.owner}</p>
      <p>দাগ নম্বর: ${receipt.dag}</p>
      <p>শ্রেণি: ${receipt.category}</p>
      <p>পরিমাণ: ${receipt.amount} শতাংশ</p>
      <p>কর: ${receipt.tax} টাকা</p>
    `;
    area.style.display = "block";
  } else {
    area.innerHTML = "<p>রসিদ খুঁজে পাওয়া যায়নি।</p>";
    area.style.display = "block";
  }
}
