
const modalDel = document.getElementById('modal_del');
const forma = document.getElementById('delete_modal');
const deleteModelButton = document.getElementById('del_form_button');
const closesModalButton = document.getElementById('close_modal');

function openModal(applicationsId) {
    document.getElementById('id').value = parseInt(applicationsId);
    modalDel.style.display = 'block';
}


modalDel.addEventListener('click', (event) => {
  if (event.target === modalDel || event.target === closesModalButton || event.target === deleteModelButton) {
    modalDel.style.display = 'none';
  }
});

forma.addEventListener('submit', (e) => {
    e.preventDefault();

    const applicationsId = parseInt(document.getElementById('id').value);
    console.log(`appl ID (as int) вудуеу: ${applicationsId}`);
    console.log(`Type of appl ID: ${typeof applicationsId}`);
	const data = {
		id: applicationsId,
	};
    
    fetch('http://127.0.0.1:7000/delete_applications', {
        mode: 'cors',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {window.location.reload();})
    .catch((error) => console.error(error));
});
