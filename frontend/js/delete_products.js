
const modalDel = document.getElementById('modal_del');
const forma = document.getElementById('delete_modal');
const deleteModelButton = document.getElementById('del_form_button');
const closesModalButton = document.getElementById('close_modal_del');

function openModal(productId) {
    document.getElementById('id').value = parseInt(productId);
    modalDel.style.display = 'block';
}


modalDel.addEventListener('click', (event) => {
  if (event.target === modalDel || event.target === closesModalButton || event.target === deleteModelButton) {
    modalDel.style.display = 'none';
  }
});

forma.addEventListener('submit', (e) => {
    e.preventDefault();

    const productId = parseInt(document.getElementById('id').value);
    console.log(`Product ID (as int) вудуеу: ${productId}`);
    console.log(`Type of Product ID: ${typeof productId}`);
	const data = {
		id: productId,
	};
    
    fetch('http://127.0.0.1:7000/delete_product', {
        mode: 'cors',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) =>  {window.location.reload();})
    .catch((error) => console.error(error));
});

