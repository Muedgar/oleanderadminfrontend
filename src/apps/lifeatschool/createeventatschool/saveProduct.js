async function saveProduct(data, textInfo) {
    let saveStatus = "not saved";
    saveStatus = "saved"
    let d = {productInfo: textInfo, images: data}
    /// make a post request.
   await fetch("https://www.backend.oleanderschool.com/backend/api/event/add", {
  method: "POST",
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(d),
})
  .then((response) => response.json())
  .then((result) => {
    saveStatus = "saved"
  })
  .catch((error) => {
    console.log(error.message)
  });

  return saveStatus;
}


export default saveProduct;